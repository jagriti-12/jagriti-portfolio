"use client";

import { useEffect, useState, useRef } from "react";
import ChatBubbleIcon from "./ChatBubble";
import { v4 as uuidv4 } from "uuid";
// install uuid: npm i uuid



export default function ChatWidget() {
    const sessionIdRef = useRef<string>(uuidv4());

    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
        { from: "bot", text: "Hi — I am Jagriti's AI. How can I help you today?" },
    ]);
    const [value, setValue] = useState("");

    useEffect(() => {
        const handler = () => setOpen(true);
        window.addEventListener("openChat", handler);
        return () => window.removeEventListener("openChat", handler);
    }, []);

    async function send() {
        if (!value.trim()) return;
        const userMessage = value;
        setMessages((m) => [...m, { from: "user", text: userMessage }]);
        setValue("");

        // build messages payload for server
        const payload = {
            sessionId: sessionIdRef.current, // create a UUID ref below
            messages: [{ role: "user", content: userMessage }],
            context: window.__JAGRITI_CONTEXT
        };

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const data = await res.json();

            if (data?.assistant) {
                setMessages((m) => [...m, { from: "bot", text: data.assistant }]);
            } else {
                setMessages((m) => [...m, { from: "bot", text: "Sorry — no reply." }]);
            }
        } catch (err) {
            console.error("Chat send error", err);
            setMessages((m) => [...m, { from: "bot", text: "Network error — try again." }]);
        }
    }


    return (
        <>
            {/* Floating Chat Bubble */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                <div onClick={() => setOpen((s) => !s)} className="cursor-pointer">
                    <ChatBubbleIcon />
                </div>

                {open && (
                    <div className="w-80 bg-[rgba(8,10,15,0.95)] rounded-2xl shadow-lg border border-white/6 overflow-hidden">
                        <div className="px-4 py-3 border-b border-white/6">
                            <div className="font-semibold">Jagriti&apos;s AI</div>
                            <div className="text-xs text-slate-400">Friendly assistant for recruiters & visitors</div>
                        </div>

                        <div className="p-3 max-h-64 overflow-auto space-y-2">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.from === "bot" ? "justify-start" : "justify-end"}`}>
                                    <div className={`max-w-[80%] px-3 py-2 rounded-lg ${m.from === "bot" ? "bg-white/6" : "bg-gradient-to-r from-primary to-accent text-white"}`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex mr-2 gap-2 text-xs pt-2">
                            <button onClick={() => setValue("show me projects")} className="px-2 py-1 bg-white/10 rounded">Projects</button>
                            <button onClick={() => setValue("show skills")} className="px-2 py-1 bg-white/10 rounded">Skills</button>
                            <button onClick={() => setValue("show experience")} className="px-2 py-1 bg-white/10 rounded">Experience</button>
                            <button onClick={() => setValue("show resume options")} className="px-2 py-1 bg-white/10 rounded">Resumes</button>
                        </div>


                        <div className="px-3 py-2 border-t border-white/6 flex gap-2">
                            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Ask about roles, projects..." className="flex-1 bg-transparent outline-none text-sm" />
                            <button onClick={send} className="px-3 py-1 rounded bg-white/6">Send</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
