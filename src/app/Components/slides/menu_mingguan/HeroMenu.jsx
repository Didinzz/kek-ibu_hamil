"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
    Leaf, Sparkles, ShoppingCart,
    Drumstick, Fish, Milk, Apple, Carrot, Beef, Cherry,
    Shrimp, Avocado
} from "lucide-react";

export default function HeroMenu({ activeTier, setActiveTier, setActiveTab }) {
    const isPremium = activeTier === "premium";


    const handleTierChange = (tier) => {
        setActiveTier(tier);
        setActiveTab("t1");
    };

    // --- KONFIGURASI ANIMASI STAGGER ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } // Apple-like ease
        },
        exit: {
            opacity: 0,
            y: -20,
            filter: "blur(5px)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="relative w-full">

            {/* ================= 1. HERO BANNER ================= */}
            <div className="relative px-6 py-12 lg:px-14 lg:py-20 overflow-hidden">

                {/* --- BACKGROUND CROSSFADE (SMOOTH TRANSITION) --- */}
                {/* BG Premium */}
                <div className={`absolute inset-0 bg-linear-to-br from-[#1A3D28] to-[#0D2218] transition-opacity duration-1000 ease-in-out z-0 ${isPremium ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(82,176,110,0.08)_0%,transparent_60%),radial-gradient(ellipse_40%_60%_at_10%_80%,rgba(45,122,80,0.06)_0%,transparent_60%)]"></div>
                </div>

                {/* BG Mewah */}
                <div className={`absolute inset-0 bg-linear-to-br from-[#060E09] via-[#0D1A12] to-[#141F10] border-b border-[#D4A420]/15 transition-opacity duration-1000 ease-in-out z-0 ${isPremium ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(212,164,32,0.06)_0%,transparent_60%),radial-gradient(ellipse_40%_60%_at_10%_80%,rgba(184,134,11,0.05)_0%,transparent_60%)]"></div>
                </div>

                {/* --- KONTEN HERO --- */}
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8 items-start md:items-center justify-between">

                    {/* KIRI: TEKS HERO DINAMIS */}
                    <div className="max-w-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTier} // Trigger ulang animasi saat tier berubah
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible" // Memicu animasi saat terlihat di layar
                                viewport={{ once: true, margin: "-50px" }}
                                exit="exit"
                                className="flex flex-col items-start"
                            >
                                {/* Eyebrow */}
                                <motion.div variants={itemVariants} className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-6 border backdrop-blur-sm ${isPremium
                                    ? "bg-[#52B06E]/15 text-[#74C69D] border-[#52B06E]/20"
                                    : "bg-[#D4A420]/12 text-[#F0C840] border-[#D4A420]/20"
                                    }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isPremium ? "bg-[#74C69D]" : "bg-[#F0C840]"}`}></span>
                                    {isPremium ? "Kelas Menengah · Rp 75k–100k / hari" : "Kelas Atas · Rp 150k–250k / hari"}
                                </motion.div>

                                {/* Title */}
                                <motion.h1 variants={itemVariants} className={`font-serif text-[44px] md:text-[52px] leading-[1.05] font-bold mb-5 ${isPremium ? "text-[#E8F5EE]" : "text-[#F8F0D8]"
                                    }`}>
                                    {isPremium ? (
                                        <>Gizi Optimal,<br />Bahan <em className="text-[#74C69D] italic font-medium font-serif">Berkualitas</em></>
                                    ) : (
                                        <>Gizi <em className="text-[#F0C840] italic font-medium font-serif">Istimewa</em>,<br />Bumil Berdaya</>
                                    )}
                                </motion.h1>

                                {/* Description */}
                                <motion.p variants={itemVariants} className={`text-[15px] leading-[1.8] max-w-140 mb-8 ${isPremium ? "text-[#E8F5EE]/65" : "text-[#F8F0D8]/55"
                                    }`}>
                                    {isPremium ? (
                                        <>Menu kelas menengah dengan bahan <strong className="font-bold text-[#A8DBB8]">lebih segar & variatif</strong> ayam kampung, ikan kembung segar, daging giling, tahu sutra, susu sapi cair, buah potong premium, dan smoothie bergizi. Tetap hemat dibanding restoran, tapi jauh lebih bernutrisi!</>
                                    ) : (
                                        <>Pengalaman makan premium layaknya chef's table  dengan <strong className="font-bold text-[#F0C840]">salmon fillet, wagyu, udang segar, smoothie bowl artisan, yogurt Yunani, keju, dan suplemen gizi terpilih.</strong> Dirancang untuk Bunda yang ingin memanjakan diri sekaligus memaksimalkan gizi si kecil.</>
                                    )}
                                </motion.p>

                                {/* Stats */}
                                <motion.div variants={itemVariants} className="flex gap-8 md:gap-10 items-center">
                                    <div>
                                        <div className={`font-serif text-3xl md:text-4xl font-bold leading-none ${isPremium ? "text-[#74C69D]" : "text-[#F0C840]"}`}>7</div>
                                        <div className={`text-[11px] font-semibold tracking-wide mt-2 ${isPremium ? "text-white/45" : "text-white/35"}`}>Hari Menu</div>
                                    </div>
                                    <div className="w-px h-10 bg-white/10"></div>
                                    <div>
                                        <div className={`font-serif text-3xl md:text-4xl font-bold leading-none ${isPremium ? "text-[#74C69D]" : "text-[#F0C840]"}`}>
                                            {isPremium ? "~88rb" : "~190rb"}
                                        </div>
                                        <div className={`text-[11px] font-semibold tracking-wide mt-2 ${isPremium ? "text-white/45" : "text-white/35"}`}>Rata-rata / hari</div>
                                    </div>
                                    <div className="w-px h-10 bg-white/10"></div>
                                    <div>
                                        <div className={`font-serif text-3xl md:text-4xl font-bold leading-none ${isPremium ? "text-[#74C69D]" : "text-[#F0C840]"}`}>
                                            {isPremium ? "AKG" : "Premium"}
                                        </div>
                                        <div className={`text-[11px] font-semibold tracking-wide mt-2 ${isPremium ? "text-white/45" : "text-white/35"}`}>
                                            {isPremium ? "2019 Kemenkes" : "Bahan Pilihan"}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* KANAN: TIER SWITCHER (Mengambang) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="shrink-0 flex flex-col gap-3 w-full md:w-auto p-2 rounded-4xl bg-black/30 backdrop-blur-md border border-white/10 shadow-2xl"
                    >
                        <button
                            onClick={() => handleTierChange('premium')}
                            className={`flex items-center justify-between gap-6 px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-500 w-full ${isPremium
                                ? "bg-[#2D7A50] text-white shadow-[0_8px_20px_rgba(45,122,80,0.4)]"
                                : "text-white/50 hover:bg-white/5 hover:text-white/80"
                                }`}
                        >
                            <span className="flex items-center gap-3">
                                <Leaf size={18} className={isPremium ? "text-[#A8DBB8]" : ""} /> Menu Premium
                            </span>
                            {isPremium && <div className="w-2 h-2 rounded-full bg-[#A8DBB8] shadow-[0_0_8px_#A8DBB8] animate-pulse"></div>}
                        </button>

                        <button
                            onClick={() => handleTierChange('luxury')}
                            className={`flex items-center justify-between gap-6 px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-500 w-full ${!isPremium
                                ? "bg-[#D4A420] text-[#1A2820] shadow-[0_8px_20px_rgba(212,164,32,0.4)]"
                                : "text-white/50 hover:bg-white/5 hover:text-white/80"
                                }`}
                        >
                            <span className="flex items-center gap-3">
                                <Sparkles size={18} className={!isPremium ? "text-[#1A2820]" : ""} /> Menu Mewah
                            </span>
                            {!isPremium && <div className="w-2 h-2 rounded-full bg-[#1A2820] animate-pulse"></div>}
                        </button>
                    </motion.div>

                </div>
            </div>

            {/* ================= 2. HARGA BOX (ESTIMASI BAHAN) ================= */}
            <div className={`py-7 px-6 lg:px-14 border-b-2 transition-colors duration-1000 ${isPremium
                ? "bg-[#F0FAF4] border-[#2D7A50]/15"
                : "bg-[#111A0E] border-[#D4A420]/20"
                }`}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTier}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        exit="exit"
                        className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4"
                    >
                        {/* Label Harga Box */}
                        <motion.div variants={itemVariants} className={`flex items-center gap-2 text-[11px] font-extrabold tracking-[2px] uppercase shrink-0 ${isPremium ? "text-[#2D7A50]" : "text-[#D4A420]"
                            }`}>
                            <ShoppingCart size={16} strokeWidth={2.5} />
                            {isPremium ? "Estimasi Harga Pasar Premium" : "Estimasi Restoran Sehat"}
                        </motion.div>

                        {/* Chips Harga Box (Staggered) */}
                        <div className="flex flex-wrap gap-2.5 md:ml-auto">
                            {isPremium ? (
                                <>
                                    <motion.span variants={itemVariants} className="flex items-center gap-1.5 bg-white text-[#1E5C3A] border-[1.5px] border-[#2D7A50]/15 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        <Drumstick size={14} className="text-[#52B06E]" /> Ayam kampung 18–22rb
                                    </motion.span>
                                    <motion.span variants={itemVariants} className="flex items-center gap-1.5 bg-white text-[#1E5C3A] border-[1.5px] border-[#2D7A50]/15 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        <Fish size={14} className="text-[#52B06E]" /> Salmon/tuna 15–25rb
                                    </motion.span>
                                    <motion.span variants={itemVariants} className="flex items-center gap-1.5 bg-white text-[#1E5C3A] border-[1.5px] border-[#2D7A50]/15 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        <Milk size={14} className="text-[#52B06E]" /> Susu cair 8–12rb
                                    </motion.span>
                                    <motion.span variants={itemVariants} className="flex items-center gap-1.5 bg-white text-[#1E5C3A] border-[1.5px] border-[#2D7A50]/15 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        {/* <Avocado size={14} className="text-[#52B06E]" />  */}
                                        <span className="text-[#52B06E] text-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-avocado-icon lucide-avocado"><path d="M22 7a4.95 4.95 0 0 0-8.6-3.4c-1.5 1.6-1.6 1.8-5 2.6a8 8 0 1 0 9.4 9.5c.7-3.4 1-3.6 2.6-5 1-1 1.6-2.3 1.6-3.7" /><circle cx="10" cy="14" r="3.5" /></svg>
                                        </span>

                                        Alpukat 6–10rb
                                    </motion.span>
                                    <motion.span variants={itemVariants} className="flex items-center gap-1.5 bg-white text-[#1E5C3A] border-[1.5px] border-[#2D7A50]/15 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        <Carrot size={14} className="text-[#52B06E]" /> Brokoli 8–12rb
                                    </motion.span>
                                </>
                            ) : (
                                <>
                                    <motion.span variants={itemVariants} className="flex items-center gap-1.5 bg-[#1A2820] text-[#F0C840] border-[1.5px] border-[#D4A420]/30 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        <Fish size={14} className="text-[#D4A420]" /> Salmon fillet 35–50rb
                                    </motion.span>
                                    <motion.span variants={itemVariants} className="flex items-center gap-1.5 bg-[#1A2820] text-[#F0C840] border-[1.5px] border-[#D4A420]/30 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        <Beef size={14} className="text-[#D4A420]" /> Daging wagyu 60–90rb
                                    </motion.span>
                                    <motion.span variants={itemVariants} className="flex items-center gap-1.5 bg-[#1A2820] text-[#F0C840] border-[1.5px] border-[#D4A420]/30 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        <Shrimp size={14} className="text-[#D4A420]" /> Udang vaname 30–45rb
                                    </motion.span>
                                    <motion.span variants={itemVariants} className="flex items-center gap-1.5 bg-[#1A2820] text-[#F0C840] border-[1.5px] border-[#D4A420]/30 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        <Cherry size={14} className="text-[#D4A420]" /> Buah beri impor 20–35rb
                                    </motion.span>
                                    <motion.span variants={itemVariants} className="flex items-center gap-1.5 bg-[#1A2820] text-[#F0C840] border-[1.5px] border-[#D4A420]/30 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        <Milk size={14} className="text-[#D4A420]" /> Yogurt Yunani 18–28rb
                                    </motion.span>
                                </>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}