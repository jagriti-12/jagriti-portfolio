"use client";

import { useEffect } from "react";
import { JAGRITI_CONTEXT } from "@/lib/jagriti-context";

export default function ContextProvider() {
    useEffect(() => {
        window.__JAGRITI_CONTEXT = JAGRITI_CONTEXT;
    }, []);

    return null; // nothing to render
}
