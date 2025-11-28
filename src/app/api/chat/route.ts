// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Optional: Supabase client for logging (service role if storing server-side)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY; // use service key for secure writes if you have one
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// Basic rate-limit map (very small, per-runtime)
const RATE_LIMIT_WINDOW_MS = 5_000;
const RATE_LIMIT_MAX = 10;
const ipMap = new Map<string, { count: number; ts: number }>();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { messages, roleContext, projectContext, sessionId } = body;

        // Very small IP-based throttle (best-effort; not production safe)
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";
        const now = Date.now();
        const entry = ipMap.get(ip) ?? { count: 0, ts: now };
        if (now - entry.ts < RATE_LIMIT_WINDOW_MS && entry.count > RATE_LIMIT_MAX) {
            return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
        }
        if (now - entry.ts > RATE_LIMIT_WINDOW_MS) {
            ipMap.set(ip, { count: 1, ts: now });
        } else {
            ipMap.set(ip, { count: entry.count + 1, ts: entry.ts });
        }

        // Build system prompt with injected role/resume/project context
        const systemPrompt = [
            {
                role: "system",
                content: `You are Jagriti AI, a professional assistant that provides factual information about Jagriti Sachdeva's skills, projects, education, experience, and resumes. Use only the provided context. If user asks for contact or next steps, provide actions: download resume, open project, or request email. Stay concise and professional.`
            },
        ];

        // roleContext example: { role: "Frontend Developer", summary: "...", resumeHighlights: ["..."] }
        const roleBlock = roleContext ? [
            { role: "system", content: `Role context: ${JSON.stringify(roleContext)}` }
        ] : [];

        const projectBlock = projectContext ? [
            { role: "system", content: `Project context: ${JSON.stringify(projectContext)}` }
        ] : [];

        const combinedMessages = [
            ...systemPrompt,
            ...roleBlock,
            ...projectBlock,
            // user messages expected as [{role: 'user', content: '...'}]
            ...messages
        ];

        // Call OpenAI Chat Completions
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini", // or "gpt-4o" / "gpt-4o-realtime-preview" depending on your access
            messages: combinedMessages,
            max_tokens: 600,
            temperature: 0.05
        });

        const assistant = response.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate an answer.";

        // Optional: log conversation to Supabase (if configured)
        if (supabase && sessionId) {
            try {
                await supabase.from("chat_sessions").insert([
                    {
                        session_id: sessionId,
                        user_message: JSON.stringify(messages),
                        bot_response: assistant,
                        role_context: roleContext ? JSON.stringify(roleContext) : null,
                        project_context: projectContext ? JSON.stringify(projectContext) : null,
                        created_at: new Date().toISOString()
                    }
                ]);
            } catch (err) {
                console.warn("Supabase log failed", err);
            }
        }

        return NextResponse.json({ assistant }, { status: 200 });
    } catch (err: any) {
        console.error("Chat API error:", err);
        return NextResponse.json({ error: err.message ?? "Server error" }, { status: 500 });
    }
}
