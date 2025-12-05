import { Certification } from "./cert-data";
import { motion } from "framer-motion";

export default function CertModal({
    cert,
    onClose
}: {
    cert: Certification | null;
    onClose: () => void;
}) {
    if (!cert) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[200]">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-darkBg border border-white/10 rounded-2xl p-6 max-w-lg w-full shadow-xl"
            >
                <h2 className="text-2xl font-bold">{cert.title}</h2>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
                <p className="text-xs text-slate-500 mt-1">{cert.date}</p>

                <div className="mt-4 w-full h-64 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                    {cert.image ? (
                        <img src={cert.image} className="w-full h-full object-contain" alt={`${cert.title} certification by ${cert.issuer}`} />
                    ) : (
                        <span className="text-xs text-slate-400">No Preview</span>
                    )}
                </div>

                <div className="flex gap-4 mt-6">
                    {cert.file && (
                        <a
                            href={cert.file}
                            download
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-sm"
                        >
                            Download PDF
                        </a>
                    )}

                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
