"use client";
import { motion } from "framer-motion";
import { Wallet, CalendarRange, Utensils, Zap, Sparkles, Sprout } from "lucide-react";

export default function HeroHemat({ stats }) {
    // 1. Variasi Induk: Mengatur urutan waktu (Stagger)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Jeda antar elemen (Badge -> Judul -> Teks -> Stats)
                delayChildren: 0.1
            }
        }
    };

    // 2. Variasi Teks: Muncul perlahan dari bawah
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // 3. Variasi Kartu Statistik: Efek Pop-up Memantul
    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 150, damping: 12 }
        }
    };

    return (
        // Background diganti menjadi Soft Pink (#FFF5F9) dengan border transparan Magenta
        <section className="relative bg-[#FFF5F9] pt-24 pb-16 px-6 lg:px-12 text-center overflow-hidden border-b border-[#e71d89]/10">

            {/* Background Blobs (Magenta Soft Glow) */}
            <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#e71d89]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#FFD1E8]/40 rounded-full blur-3xl pointer-events-none"></div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative z-10 max-w-4xl mx-auto"
            >
                {/* 1. Badge Program */}
                <motion.div variants={textVariants}>
                    <div className="inline-flex items-center gap-2 bg-white text-[#e71d89] font-bold text-[11px] tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-[#e71d89]/20 shadow-sm">
                        <Wallet size={14} /> Program CERMAT — Edisi Hemat
                    </div>
                </motion.div>

                {/* 2. Judul Utama (Navy & Magenta) */}
                <motion.h1 variants={textVariants} className="font-black text-4xl md:text-6xl text-[#1E293B] leading-tight mb-4">
                    Menu Bumil <span className="text-[#e71d89]">Bergizi</span><br />
                    <span className="text-[#c21470] font-serif italic font-normal">Tanpa Kantong Bolong</span>
                </motion.h1>

                {/* 3. Deskripsi */}
                <motion.p variants={textVariants} className="text-slate-500 text-[15px] max-w-lg mx-auto mb-10 leading-relaxed flex items-center justify-center gap-1 flex-wrap">
                    Panduan menu makan ibu hamil selama 7 hari dengan bahan-bahan lokal murah bergizi — tetap sehat, tetap semangat!
                </motion.p>

                {/* 4. Stats Grid (Isinya juga akan muncul berurutan karena ada di dalam containerVariants) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    {[
                        { val: stats.daily, lbl: "Rata-rata/hari", icon: <Wallet size={18} /> },
                        { val: stats.total, lbl: "Total seminggu", icon: <CalendarRange size={18} /> },
                        { val: stats.meals, lbl: "Makan/hari", icon: <Utensils size={18} /> },
                        { val: stats.cal, lbl: "kkal/hari", icon: <Zap size={18} /> }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            // Kartu putih bersih dengan hover outline Magenta
                            className="bg-white border border-[#e71d89]/10 rounded-2xl p-4 flex flex-col items-center hover:border-[#e71d89]/40 hover:shadow-md transition-all shadow-sm group"
                        >
                            {/* Ikon dengan background soft pink */}
                            <div className="text-[#e71d89] mb-2 bg-[#FFF5F9] p-2.5 rounded-xl group-hover:bg-[#e71d89] group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <div className="font-black text-xl text-[#1E293B]">{item.val}</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{item.lbl}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}