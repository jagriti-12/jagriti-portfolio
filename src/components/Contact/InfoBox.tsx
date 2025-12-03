"use client";

import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function InfoBox() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-(--bg-secondary)]  border border-neutral-800 shadow-xl"
        >
            <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neutral-800/60 flex items-center justify-center text-xl">
                        <HiOutlineLocationMarker />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-sm">Address</h4>
                        <p className="text-neutral-400 text-sm">Chandigarh, India</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-neutral-800/60 flex items-center justify-center text-pink-400 text-xl">
                        <HiOutlinePhone />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-sm">Phone</h4>
                        <a href="tel:+919463954709" className="text-neutral-400 text-sm hover:text-white">
                            +91 9463954709
                        </a>
                    </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-(--bg-secondary)] flex items-center justify-center text-pink-400 text-xl">
                        <HiOutlineMail />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-sm">Email</h4>
                        <a
                            href="mailto:jags.jagriti12@gmail.com"
                            className="text-neutral-400 text-sm wrap-break-words hover:text-white"
                        >
                            jags.jagriti12@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
