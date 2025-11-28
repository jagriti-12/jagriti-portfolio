import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { messages, context, sessionId } = body;

        function detectRolePreference(message) {
            message = message.toLowerCase();
            if (message.includes("frontend")) return "frontend";
            if (message.includes("ai") || message.includes("ml")) return "ai";
            if (message.includes("writer") || message.includes("technical writer"))
                return "writer";
            return null;
        }

        const rolePreference = detectRolePreference(messages[0].content);


        const fullMessages = [
            {
                role: "system",
                content: `
                You are “Jagriti AI” — a professional AI assistant built to help recruiters evaluate Jagriti Sachdeva.

STRICT RULES:
1. No hallucinations. Only use context provided.
2. If something isn’t in context → say: “This information isn’t available.”
3. Answers must be short, clear, recruiter-friendly (2–4 lines).
4. Use bullet points for:
   - Skills
   - Projects
   - Experience
   - Freelance work
   - Resumes
5. NEVER invent Django, cybersecurity, cloud engineering, or random roles.
6. DEFAULT TO HER FRONTEND ROLE unless user asks otherwise.
7. If user intent is detected (example: “frontend”, “AI role”, “writer role”)
   → use role-based filtering.
8. Maintain a professional tone with occasional friendliness.

FEATURES YOU SUPPORT:
• Role-based response mode  
• Project summaries  
• Skill breakdown  
• Resume suggestions  
• Experience summaries  
• Freelance project listing  
• Education details  
• Session memory  
Detected user role intent: ${rolePreference || "none"}
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
