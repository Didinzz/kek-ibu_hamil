"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Footer() {
    // Varian untuk pembungkus (mengatur kemunculan teks dari bawah)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Jeda kemunculan antara teks kiri dan kanan
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <footer className="relative bg-[#1A2E22] pt-16 pb-8 px-6 lg:px-16 border-t-[6px] border-[#F4A830] overflow-hidden w-full">

            {/* KONTEN UTAMA FOOTER */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                // once: false memastikan animasi jalan tiap kali footer dilihat/dipanggil
                // amount: 0.2 memastikan animasi baru jalan saat minimal 20% footer masuk layar
                viewport={{ once: false, amount: 0.2 }}
                className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-10 text-center md:text-left relative z-10"
            >
                {/* Brand & Slogan */}
                <motion.div variants={itemVariants}>
                    <div className="font-serif text-3xl font-black text-[#F4A830] tracking-tight mb-2 flex items-center justify-center md:justify-start gap-2">
                        CERMAT
                        {/* Ikon Sparkles Berdenyut */}
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            <Sparkles size={20} className="text-[#B7E4C7] opacity-60" />
                        </motion.div>
                    </div>
                    <p className="text-xs font-medium text-[#B7E4C7]/70 tracking-wider max-w-xs">
                        Cegah KEK dengan Menu beRgizi untuk ibu haMil sehaT
                    </p>
                </motion.div>

                {/* Copyright & Info */}
                <motion.div variants={itemVariants} className="text-[11px] text-white/40 leading-relaxed font-medium md:text-right">
                    <p className="hover:text-white/60 transition-colors cursor-default">AKG 2019 — Permenkes No. 28 Tahun 2019 | Kemenkes RI</p>
                    <p className="hover:text-white/60 transition-colors mt-1 cursor-default">Harga mengacu Pasar Tradisional Tuban, Jawa Timur 2025</p>
                    <p className="mt-3 text-white/20 font-bold tracking-widest uppercase">
                        Program Mini Project Gizi Kesehatan Masyarakat
                    </p>
                </motion.div>
            </motion.div>

            {/* WATERMARK RAKSASA (Beranimasi melayang lambat) */}
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 0.03, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-serif text-[120px] font-black text-white pointer-events-none whitespace-nowrap select-none"
            >
                CERMAT
            </motion.div>

        </footer>
    );
}