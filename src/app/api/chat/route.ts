import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { messages, context, sessionId } = body;

        // ROLE DETECTION
        function detectRole(message: string) {
            const m = message.toLowerCase();
            if (m.includes("frontend") || m.includes("react") || m.includes("ui"))
                return "frontend";
            if (m.includes("ai") || m.includes("ml") || m.includes("deep learning"))
                return "ai";
            if (m.includes("writer") || m.includes("technical writing"))
                return "writer";
            if (m.includes("research") || m.includes("paper"))
                return "researcher";
            return "general";
        }

        const detectedRole = detectRole(messages[0].content);

        // SYSTEM MESSAGE (CLEANED)
        const fullMessages = [
            {
                role: "system",
                content: `
You are “Jagriti AI”, a professional recruiter assistant for Jagriti Sachdeva.

STYLE RULES:
• Keep answers short (1–3 sentences max)
• Use bullet points for skills, projects, experience, resumes
• Always stay factual to the context
• No long paragraphs
• No invented skills, projects, or certifications
• If the answer is unavailable → reply: “This information isn’t available.”

BEHAVIOR RULES:
• Detect the recruiter's intent (frontend, ai/ml, writer, researcher)
• Adapt the answer accordingly
• Recommend the best resume based on detected role

For insights requests:
• Summarize strengths in 3 bullets
• Highlight impact of projects
• Connect skills to real hiring needs

Detected recruiter intent: ${detectedRole}

CONTEXT:
${JSON.stringify(context)}
        `
            },
            ...messages
        ];

        // CALL GROQ API
        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: fullMessages,
            max_tokens: 600,
            temperature: 0.2,
        });

        let assistant =
            completion.choices?.[0]?.message?.content ||
            "Sorry, I couldn't generate a response.";

        // RESUME RECOMMENDATION
        let recommendation = "";
        if (detectedRole === "frontend") {
            recommendation = "Recommended resume: Frontend Developer.";
        } else if (detectedRole === "ai") {
            recommendation = "Recommended resume: AI/ML Engineer.";
        } else if (detectedRole === "writer") {
            recommendation = "Recommended resume: Technical Writer.";
        } else if (detectedRole === "researcher") {
            recommendation = "Recommended resume: Researcher.";
        } else {
            recommendation = "You can view all resumes in the Resume section.";
        }

        const enhanced = `${assistant}\n\n${recommendation}`;

        // CLEAN OUTPUT
        const cleaned = enhanced
            .replace(/\n{3,}/g, "\n\n")
            .trim()
            .slice(0, 700);

        return NextResponse.json({ assistant: cleaned });

    } catch (err: any) {
        console.error("Groq API Error:", err);
        return NextResponse.json(
            { error: err.message || "Server error" },
            { status: 500 }
        );
    }
}
