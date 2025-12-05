"use client";

import { useState } from "react";
import CertCard from "./CertCard";
import CertModal from "./CertModal";
import { CERTIFICATIONS } from "./cert-data";
import Script from "next/script";

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

                <h2 className="text-4xl font-bold mb-6">
                    Verified Certifications & Professional Credentials
                </h2>

                <p className="text-slate-400 text-sm max-w-2xl mb-10">
                    A curated list of my industry-recognized certifications across Cloud,
                    Programming, UI/UX, AI/ML and Data Analytics.
                </p>

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
            <Script
                id="certification-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Jagriti Sachdeva",
                        url: "https://your-portfolio-url.com",
                        image: "https://your-portfolio-url.com/profile.jpg",
                        hasCredential: CERTIFICATIONS.map((cert) => ({
                            "@type": "EducationalOccupationalCredential",
                            name: cert.title,
                            description: `${cert.title} issued by ${cert.issuer} in ${cert.date}`,
                            credentialCategory: cert.category,
                            issuedBy: {
                                "@type": "Organization",
                                name: cert.issuer,
                            },
                            validFor: "Permanently"
                        }))
                    })
                }}
            />
        </section>
    );
}
