import { motion } from "framer-motion";
import { Certification } from "./cert-data";

export default function CertCard({
    cert,
    onOpen
}: {
    cert: Certification;
    onOpen: (c: Certification) => void;
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-soft hover:shadow-glow cursor-pointer transition"
            onClick={() => onOpen(cert)}
        >
            <div className="w-full h-40 bg-white/10 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                {cert.image ? (
                    <img src={cert.image} className="w-full h-full object-cover" alt={cert.title} />
                ) : (
                    <span className="text-xs text-slate-400">No Preview</span>
                )}
            </div>

            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-sm text-slate-400">{cert.issuer}</p>
            <p className="text-xs text-slate-500">{cert.date}</p>
        </motion.div>
    );
}
