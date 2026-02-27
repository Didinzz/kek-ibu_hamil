"use client";

import { motion } from "framer-motion";
import { BookOpen, Ruler, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function HeroMateri() {
    // --- KONFIGURASI ANIMASI ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const rightCardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 40 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="bg-[#1A2E22] pt-24 md:pt-32 pb-24 px-6 lg:px-16 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Dekorasi Background Atas */}
            <div className="absolute -top-32 -right-32 w-125 h-125 rounded-full bg-[#2D6A4F]/20 blur-3xl pointer-events-none"></div>

            {/* ================= KIRI - TEKS (DIANIMASIKAN PER ITEM) ================= */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 pb-0 lg:pb-12"
            >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#2D6A4F]/30 border border-[#40916C]/40 text-[#B7E4C7] text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                    <BookOpen size={14} /> Berdasarkan Pedoman Kemenkes RI
                </motion.div>

                <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-black text-[#E8F5F5] leading-tight mb-4 tracking-tight">
                    Kekurangan<br /><em className="italic text-[#74C69D]">Energi Kronis</em>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-sm md:text-base text-[#E8F5F5]/70 max-w-md mb-8 leading-relaxed">
                    Panduan lengkap dan valid tentang KEK pada ibu hamil — definisi, cara diagnosis yang <strong className="text-white">benar</strong>, penyebab, dampak, serta penatalaksanaan berdasarkan <strong className="text-white">pedoman resmi Kemenkes RI</strong>.
                </motion.p>

                <motion.div variants={containerVariants} className="flex flex-wrap gap-3">
                    <motion.div variants={itemVariants} className="flex items-center gap-2 bg-[#2D6A4F]/30 border border-[#2D6A4F]/50 text-[#95D5B2] px-4 py-2.5 rounded-xl text-xs font-bold">
                        <Ruler size={16} /> LILA &lt; 23,5 cm → Risiko KEK
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2 bg-[#2D6A4F]/30 border border-[#2D6A4F]/50 text-[#95D5B2] px-4 py-2.5 rounded-xl text-xs font-bold">
                        <Scale size={16} /> IMT pra-hamil &lt; 18,5 → KEK
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2 bg-[#C84C31]/20 border border-[#C84C31]/40 text-[#F4A830] px-4 py-2.5 rounded-xl text-xs font-bold">
                        <AlertTriangle size={16} /> Bukan pemeriksaan biokimia
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2 bg-[#2D6A4F]/20 border border-[#2D6A4F]/40 text-[#74C69D] px-4 py-2.5 rounded-xl text-xs font-bold">
                        <CheckCircle2 size={16} /> Permenkes 21/2021 · Juknis PMT 2025
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* ================= KANAN - VISUAL LILA (ANIMASI MUNCUL BELAKANGAN) ================= */}
            <div className="relative z-10 flex justify-center lg:justify-end items-end h-full">
                <motion.div
                    variants={rightCardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white/5 border border-white/10 rounded-t-[28px] p-8 pb-10 w-full max-w-sm text-center"
                >
                    <div className="text-[11px] font-bold text-white/40 tracking-widest uppercase mb-4">Cut-off LILA Ibu Hamil</div>

                    {/* SVG LILA Arm dengan Teks Indikator */}
                    <div className="relative w-full max-w-45 mx-auto mb-5">
                        <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <defs>
                                <marker id="arrowHead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#F4A830" />
                                </marker>
                            </defs>

                            <ellipse cx="80" cy="40" rx="72" ry="34" fill="#2D6A4F" opacity=".3" />
                            <ellipse cx="80" cy="40" rx="60" ry="26" fill="#2D6A4F" opacity=".5" />
                            <ellipse cx="80" cy="40" rx="46" ry="18" fill="#40916C" opacity=".8" />

                            <ellipse cx="80" cy="40" rx="72" ry="34" stroke="#F4A830" strokeWidth="2.5" strokeDasharray="4 3" fill="none" />

                            <line x1="8" y1="40" x2="8" y2="10" stroke="#F4A830" strokeWidth="1.5" markerEnd="url(#arrowHead)" />
                            <text x="14" y="26" fill="#F4A830" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Lingkar</text>
                            <text x="14" y="37" fill="#F4A830" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Lengan</text>
                            <text x="14" y="48" fill="#F4A830" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Atas</text>
                        </svg>
                    </div>

                    <div className="font-serif text-[52px] font-black text-[#B7E4C7] leading-none">
                        23,5<span className="text-lg text-[#B7E4C7]/50 ml-1 font-sans">cm</span>
                    </div>
                    <div className="text-[13px] text-[#E8F5F5]/60 mt-1 mb-4">Batas ambang normal ibu hamil</div>

                    <div className="flex items-center justify-center gap-2 text-xs font-bold">
                        <span className="text-[#C84C31] bg-[#C84C31]/15 px-3 py-1.5 rounded-lg">Di bawah → Risiko KEK</span>
                        <span className="text-[#74C69D] bg-[#2D6A4F]/30 px-3 py-1.5 rounded-lg">Di atas → Normal</span>
                    </div>
                </motion.div>
            </div>

            {/* ================= SVG LENGKUNGAN BAWAH (CURVE BOTTOM) ================= */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 transform translate-y-px">
                <svg
                    className="relative block w-full h-15 md:h-20"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,120 C400,0 800,0 1200,120 Z"
                        fill="#FAFAFA"
                    ></path>
                </svg>
            </div>
        </section>
    );
}