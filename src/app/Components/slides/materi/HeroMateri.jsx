"use client";

import { motion } from "framer-motion";
import { BookOpen, Ruler, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function HeroMateri() {
    // --- KONFIGURASI ANIMASI INDUK (KIRI) ---
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

    // --- KONFIGURASI ANIMASI KARTU KANAN & PERINTILANNYA ---
    const rightCardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.2, // Ini yang membuat perintilannya muncul satu-satu
                delayChildren: 0.8    // Menunggu kartu utamanya muncul dulu
            }
        }
    };

    const childItemVariants = {
        hidden: { opacity: 0, y: 15, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-[#FFF5F9] pt-24 md:pt-32 pb-24 px-6 lg:px-16 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

            {/* Dekorasi Background */}
            <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-[#e71d89]/5 blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/4 right-0 w-100 h-100 rounded-full bg-[#e71d89]/5 blur-3xl pointer-events-none"></div>

            {/* ================= KIRI - TEKS ================= */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 pb-0 lg:pb-12"
            >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white border border-[#e71d89]/20 text-[#e71d89] text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 shadow-sm">
                    <BookOpen size={14} /> Berdasarkan Pedoman Kemenkes RI
                </motion.div>

                <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-black text-[#1E293B] leading-tight mb-4 tracking-tight">
                    Kekurangan<br /><em className="italic text-[#e71d89] font-serif">Energi Kronis</em>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-sm md:text-base text-slate-600 max-w-md mb-8 leading-relaxed">
                    Panduan lengkap dan valid tentang KEK pada ibu hamil — definisi, cara diagnosis yang <strong className="text-[#1E293B]">benar</strong>, penyebab, dampak, serta penatalaksanaan berdasarkan <strong className="text-[#1E293B]">pedoman resmi Kemenkes RI</strong>.
                </motion.p>

                <motion.div variants={containerVariants} className="flex flex-wrap gap-3">
                    <motion.div variants={itemVariants} className="flex items-center gap-2 bg-white border border-slate-200 shadow-sm text-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold">
                        <Ruler size={16} className="text-[#e71d89]" /> LILA &lt; 23,5 cm → Risiko KEK
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2 bg-white border border-slate-200 shadow-sm text-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold">
                        <Scale size={16} className="text-[#e71d89]" /> IMT pra-hamil &lt; 18,5 → KEK
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2 bg-[#FFF5F9] border border-[#e71d89]/20 text-[#c21470] px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm">
                        <AlertTriangle size={16} className="text-[#e71d89]" /> Bukan pemeriksaan biokimia
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2 bg-white border border-slate-200 shadow-sm text-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold">
                        <CheckCircle2 size={16} className="text-[#e71d89]" /> Permenkes 21/2021 · Juknis PMT 2025
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* ================= KANAN - VISUAL CARD (ANIMASI PER DETAIL) ================= */}
            <div className="relative z-10 flex justify-center lg:justify-end items-end h-full">
                <motion.div
                    variants={rightCardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white border border-[#e71d89]/10 rounded-t-4xl p-8 pb-10 w-full max-w-sm text-center shadow-[0_-10px_40px_rgba(231,29,137,0.08)] relative"
                >
                    {/* 1. Teks Kecil */}
                    <motion.div variants={childItemVariants} className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mb-4">
                        Cut-off LILA Ibu Hamil
                    </motion.div>

                    {/* 2. Ikon SVG LILA */}
                    <motion.div variants={childItemVariants} className="relative w-full max-w-45 mx-auto mb-5">
                        <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <defs>
                                <marker id="arrowHead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#e71d89" />
                                </marker>
                            </defs>
                            <ellipse cx="80" cy="40" rx="72" ry="34" fill="#e71d89" opacity=".1" />
                            <ellipse cx="80" cy="40" rx="60" ry="26" fill="#e71d89" opacity=".2" />
                            <ellipse cx="80" cy="40" rx="46" ry="18" fill="#e71d89" opacity=".5" />
                            <ellipse cx="80" cy="40" rx="72" ry="34" stroke="#e71d89" strokeWidth="2" strokeDasharray="4 3" fill="none" />
                            <line x1="8" y1="40" x2="8" y2="10" stroke="#e71d89" strokeWidth="1.5" markerEnd="url(#arrowHead)" />
                            <text x="14" y="26" fill="#e71d89" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Lingkar</text>
                            <text x="14" y="37" fill="#e71d89" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Lengan</text>
                            <text x="14" y="48" fill="#e71d89" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Atas</text>
                        </svg>
                    </motion.div>

                    {/* 3. Angka Besar */}
                    <motion.div variants={childItemVariants} className="font-serif text-[52px] font-black text-[#e71d89] leading-none">
                        23,5<span className="text-lg text-[#e71d89]/60 ml-1 font-sans">cm</span>
                    </motion.div>

                    {/* 4. Deskripsi Angka */}
                    <motion.div variants={childItemVariants} className="text-[13px] text-slate-500 mt-1 mb-5 font-medium">
                        Batas ambang normal ibu hamil
                    </motion.div>

                    {/* 5. Label Status */}
                    <motion.div variants={childItemVariants} className="flex items-center justify-center gap-2 text-xs font-bold">
                        <span className="text-[#c21470] bg-[#FFF5F9] border border-[#e71d89]/20 px-3 py-1.5 rounded-lg shadow-sm">Di bawah → Risiko KEK</span>
                        <span className="text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">Di atas → Normal</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Lengkungan Bawah */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 transform translate-y-px">
                <svg className="relative block w-full h-15 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,120 C400,0 800,0 1200,120 Z" fill="#ffffff"></path>
                </svg>
            </div>
        </section>
    );
}