"use client";
import { motion } from "framer-motion";
import { Wallet, CalendarRange, Utensils, Zap } from "lucide-react";

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
        <section className="relative bg-[#F0FAF5] pt-24 pb-16 px-6 lg:px-12 text-center overflow-hidden border-b border-[#2A5C43]/10">
            {/* Background Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#2A5C43]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative z-10 max-w-4xl mx-auto"
            >
                {/* 1. Badge Program */}
                <motion.div variants={textVariants}>
                    <div className="inline-block bg-[#2A5C43] text-white font-bold text-[11px] tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#2A5C43]/20">
                        💰 Program CERMAT — Edisi Hemat
                    </div>
                </motion.div>

                {/* 2. Judul Utama */}
                <motion.h1 variants={textVariants} className="font-black text-4xl md:text-6xl text-[#1A202C] leading-tight mb-4">
                    Menu Bumil <span className="text-[#2A5C43]">Bergizi</span><br />
                    <span className="text-[#D4AF37] font-serif italic font-normal">Tanpa Kantong Bolong</span>
                </motion.h1>

                {/* 3. Deskripsi */}
                <motion.p variants={textVariants} className="text-slate-500 text-[15px] max-w-lg mx-auto mb-10 leading-relaxed">
                    Panduan menu makan ibu hamil selama 7 hari dengan bahan-bahan lokal murah bergizi — tetap sehat, tetap semangat! 🌿
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
                            variants={cardVariants} // Gunakan variasi khusus kartu
                            whileHover={{ y: -5, transition: { duration: 0.2 } }} // Efek hover tambahan
                            className="bg-white border-2 border-[#2A5C43]/10 rounded-2xl p-4 flex flex-col items-center hover:border-[#2A5C43] transition-colors shadow-sm"
                        >
                            <div className="text-[#2A5C43] mb-2 bg-[#2A5C43]/10 p-2 rounded-full">{item.icon}</div>
                            <div className="font-black text-xl text-[#1A202C]">{item.val}</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.lbl}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}