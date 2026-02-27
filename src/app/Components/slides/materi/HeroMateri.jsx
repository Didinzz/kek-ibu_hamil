"use client";

import { motion } from "framer-motion";
import { BookOpen, Ruler, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function HeroMateri() {
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
        // Kembali menggunakan Soft Pink/Krem pucat agar bersih
        <section className="bg-[#FFF5F9] pt-24 md:pt-32 pb-24 px-6 lg:px-16 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

            <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-[#e71d89]/5 blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/4 right-0 w-100 h-100 rounded-full bg-[#e71d89]/5 blur-3xl pointer-events-none"></div>

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
                    Kekurangan<br /><em className="italic text-[#e71d89]">Energi Kronis</em>
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

            <div className="relative z-10 flex justify-center lg:justify-end items-end h-full">
                <motion.div
                    variants={rightCardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white border border-[#e71d89]/10 rounded-t-4xl p-8 pb-10 w-full max-w-sm text-center shadow-[0_-10px_40px_rgba(231,29,137,0.08)] relative"
                >
                    <div className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mb-4">Cut-off LILA Ibu Hamil</div>

                    {/*  */}

                    <div className="relative w-full max-w-45 mx-auto mb-5">
                        <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <ellipse cx="80" cy="40" rx="72" ry="34" fill="#e71d89" opacity=".1" />
                            <ellipse cx="80" cy="40" rx="60" ry="26" fill="#e71d89" opacity=".2" />
                            <ellipse cx="80" cy="40" rx="46" ry="18" fill="#e71d89" opacity=".5" />
                            <ellipse cx="80" cy="40" rx="72" ry="34" stroke="#e71d89" strokeWidth="2.5" strokeDasharray="4 3" fill="none" />
                        </svg>
                    </div>

                    <div className="font-serif text-[52px] font-black text-[#e71d89] leading-none">
                        23,5<span className="text-lg text-[#e71d89]/60 ml-1 font-sans">cm</span>
                    </div>
                    <div className="text-[13px] text-slate-500 mt-1 mb-5 font-medium">Batas ambang normal ibu hamil</div>

                    <div className="flex items-center justify-center gap-2 text-xs font-bold">
                        <span className="text-[#c21470] bg-[#FFF5F9] border border-[#e71d89]/20 px-3 py-1.5 rounded-lg shadow-sm">Di bawah → Risiko KEK</span>
                        <span className="text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">Di atas → Normal</span>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 transform translate-y-px">
                <svg className="relative block w-full h-15 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,120 C400,0 800,0 1200,120 Z" fill="#ffffff"></path>
                </svg>
            </div>
        </section>
    );
}