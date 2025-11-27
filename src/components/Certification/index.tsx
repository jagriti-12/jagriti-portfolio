"use client";

import { useState } from "react";
import CertCard from "./CertCard";
import CertModal from "./CertModal";
import { CERTIFICATIONS } from "./cert-data";

export default function CertificationsSection() {
    const tabs = ["Professional", "Other"];
    const [active, setActive] = useState("Professional");
    const [openCert, setOpenCert] = useState(null);

    const filtered = CERTIFICATIONS.filter((c) => c.category === active);

    return (
        <section id="certifications" className="py-24 px-6">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold mb-6">Certifications</h2>

                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`px-4 py-2 rounded-full text-sm ${active === tab
                                    ? "bg-gradient-to-r from-primary to-accent"
                                    : "bg-white/10"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
