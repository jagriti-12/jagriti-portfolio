import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { messages, context, sessionId } = body;

        const fullMessages = [
            {
                role: "system",
                content: `
                You are “Jagriti AI”, the official recruiter assistant for Jagriti Sachdeva.
                🔥 STRICT RULES (FOLLOW EXACTLY):
                1. NEVER create or invent skills, projects, or certifications.
                2. ONLY use the data provided in the context object.
                3. If something is NOT in the context → say: “This information isn’t available.”
                4. ANSWER SHORT and PRECISE (2–4 lines max).
                5. When user asks for lists → show them in clean bullet points
                6. ALWAYS sound professional + concise (no long paragraphs).
                7. When asked “show me projects” → ONLY show the projects inside context.projects.
                8. NEVER invent Django, cloud, cybersecurity, or random ML projects.
                9. NEVER list 20 skills; use ONLY context.skills.
                10. When responding about resumes → point to resume files inside context.resumes
                Your job is to guide recruiters quickly with
                    - Skills
                    - Projects
                    - Tech stack
                    - Education
                    - Experience
                    - Resumes
                Below is the entire verified context. DO NOT go outside it.
                Context:
                ${JSON.stringify(context)}
        `
            },
            ...messages
        ];

        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: fullMessages,
            max_tokens: 600,
            temperature: 0.2,
        });

        const assistant =
            completion.choices?.[0]?.message?.content ||
            "Sorry, I couldn't generate a response.";
        
        // const cleaned = assistant
        //     .replace(/\n{3,}/g, "\n\n")
        //     .slice(0, 800); // hard limit to prevent essays

        return NextResponse.json({ assistant });
    } catch (err: any) {
        console.error("Groq API Error:", err);
        return NextResponse.json(
            { error: err.message || "Server error" },
            { status: 500 }
        );
    }
}
