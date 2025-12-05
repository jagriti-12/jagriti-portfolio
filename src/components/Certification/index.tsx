"use client";

import { useState } from "react";
import CertCard from "./CertCard";
import CertModal from "./CertModal";
import { CERTIFICATIONS } from "./cert-data";

export default function CertificationsSection() {

    // NEW UPDATED TABS
    const tabs = [
        "Cloud",
        "Programming",
        "UI/UX",
        "AI/ML",
        "Data Analytics",
        "Specializations"
    ];

    const [active, setActive] = useState("Cloud");
    const [openCert, setOpenCert] = useState(null);

    const filtered = CERTIFICATIONS.filter((c) => c.category === active);

    return (
        <section
            id="certifications"
            className="py-24 px-6 bg-[var(--bg-secondary)]"
        >
            <div className="mx-auto max-w-6xl">

                <h2 className="text-4xl font-bold mb-6 text-white">
                    Certifications
                </h2>

                {/* Tabs */}
                <div className="flex gap-6 mb-8 border-b border-white/10 overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`pb-2 text-sm transition relative
                                ${active === tab
                                    ? "text-yellow-200 font-semibold"
                                    : "text-slate-400 hover:text-white"
                                }
                            `}
                        >
                            {tab}

                            {active === tab && (
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-200 rounded-full"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {filtered.map((c) => (
                        <CertCard key={c.id} cert={c} onOpen={setOpenCert} />
                    ))}
                </div>

                {/* Modal */}
                <CertModal cert={openCert} onClose={() => setOpenCert(null)} />
            </div>
        </section>
    );
}
