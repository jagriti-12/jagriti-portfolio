import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { JAGRITI_CONTEXT } from "@/lib/jagriti-context";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { messages, sessionId } = body;

        const userMsg = messages?.[messages.length - 1]?.content || "";

        // ---------------------------
        //  ROLE DETECTION
        // ---------------------------
        function detectRole(message: string) {
            const m = message.toLowerCase();

            if (m.includes("frontend") || m.includes("react") || m.includes("ui") || m.includes("tailwind"))
                return "Frontend Developer";

            if (m.includes("ai") || m.includes("ml") || m.includes("nlp") || m.includes("bert"))
                return "AI/ML Engineer";

            if (m.includes("research") || m.includes("paper") || m.includes("experiment"))
                return "Researcher";

            if (m.includes("writer") || m.includes("technical writing") || m.includes("documentation"))
                return "Technical Writer";

            if (m.includes("architecture") || m.includes("system design"))
                return "System Architect";

            return "General";
        }

        const detectedRole = detectRole(userMsg);

        // ---------------------------
        // SYSTEM PROMPT (AI BRAIN)
        // ---------------------------
        const systemContent = `
You are “Jagriti AI”, a fast one-liner professional assistant representing Jagriti Sachdeva.

RESPONSE RULES:
• Give SHORT answers (1–2 sentences).  
• If user asks "explain", "details", or "why" → max 4–6 lines.  
• Use bullet points ONLY when listing skills, projects, experience, resumes.  
• NEVER invent skills, experience, certifications, or projects.  
• If information is missing → reply: “This information isn’t available yet.”  
• No emojis unless user uses them first.  
• Never apologize unless needed.

BEHAVIOR:
• Detect recruiter intent automatically.  
• Your detected intent now is: **${detectedRole}**  
• Recommend the correct resume with high confidence.  
• If user asks about strengths → give EXACT strengths for that role.  
• If user asks unknown tech → answer: "Jagriti has not worked with this yet but learns fast."

CONTEXT (Jagriti's real verified data):
${JSON.stringify(JAGRITI_CONTEXT, null, 2)}
`;

        // ---------------------------
        // COMPILE MESSAGE STACK
        // ---------------------------
        const fullMessages = [
            { role: "system", content: systemContent },
            ...messages
        ];

        // ---------------------------
        // CALL GROQ LLM
        // ---------------------------
        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: fullMessages,
            temperature: 0.2,
            max_tokens: 500,
        });

        let assistant =
            completion.choices?.[0]?.message?.content ||
            "Sorry, I couldn't generate a response.";

        // ---------------------------
        // RESUME RECOMMENDATION ENGINE
        // ---------------------------
        function resumeSuggest(role: string) {
            switch (role) {
                case "Frontend Developer":
                    return "Recommended resume: Frontend Developer.";
                case "AI/ML Engineer":
                    return "Recommended resume: AI/ML Engineer.";
                case "Researcher":
                    return "Recommended resume: Researcher.";
                case "Technical Writer":
                    return "Recommended resume: Technical Writer.";
                case "System Architect":
                    return "Recommended resume: System Architect.";
                default:
                    return "You can explore all resume versions in the Resume section.";
            }
        }

        const recommendation = resumeSuggest(detectedRole);

        // Append + cleanup
        const enhanced = `${assistant}\n\n${recommendation}`;
        const cleaned = enhanced.replace(/\n{3,}/g, "\n\n").trim().slice(0, 700);

        return NextResponse.json({ assistant: cleaned });

    } catch (err: any) {
        console.error("Groq API Error:", err);
        return NextResponse.json(
            { error: err.message || "Server error" },
            { status: 500 }
        );
    }
}
