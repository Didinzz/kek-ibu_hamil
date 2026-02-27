"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
    Leaf, Sparkles, ShoppingCart,
    Drumstick, Fish, Milk, Carrot, Beef, Cherry,
    Shrimp
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
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
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
            <div className="relative px-6 py-12 lg:px-14 lg:py-20 overflow-hidden transition-colors duration-1000">

                {/* --- BACKGROUND CROSSFADE --- */}

                {/* BG Premium (Soft Pink Cerah) */}
                <div className={`absolute inset-0 bg-[#FFF5F9] transition-opacity duration-1000 z-0 ${isPremium ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(231,29,137,0.05)_0%,transparent_60%)]"></div>
                </div>

                {/* BG Mewah (Biru Navy Pekat Elegan - Tidak Terlalu Gelap) */}
                <div className={`absolute inset-0 bg-[#1e293b] border-b border-[#e71d89]/20 transition-opacity duration-1000 z-0 ${isPremium ? 'opacity-0' : 'opacity-100'}`}>
                    {/* Glow Pink samar di latar biru agar tetap kohesif */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_20%_30%,rgba(231,29,137,0.15)_0%,transparent_50%)]"></div>
                </div>

                {/* --- KONTEN HERO --- */}
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8 items-start md:items-center justify-between">

                    {/* KIRI: TEKS HERO DINAMIS */}
                    <div className="max-w-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTier}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col items-start"
                            >
                                {/* Badge */}
                                <motion.div variants={itemVariants} className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-6 border backdrop-blur-sm ${isPremium
                                    ? "bg-white text-[#e71d89] border-[#e71d89]/20"
                                    : "bg-[#e71d89]/20 text-[#FFD1E8] border-[#e71d89]/40"
                                    }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isPremium ? "bg-[#e71d89]" : "bg-[#FFD1E8]"}`}></span>
                                    {isPremium ? "Kelas Menengah · Rp 75k–100k / hari" : "Kelas Atas · Rp 150k–250k / hari"}
                                </motion.div>

                                {/* Title */}
                                <motion.h1 variants={itemVariants} className={`font-serif text-[44px] md:text-[52px] leading-[1.05] font-bold mb-5 ${isPremium ? "text-[#1E293B]" : "text-white"}`}>
                                    {isPremium ? (
                                        <>Gizi Optimal,<br />Bahan <em className="text-[#e71d89] italic font-medium font-serif">Berkualitas</em></>
                                    ) : (
                                        <>Gizi <em className="text-[#e71d89] italic font-medium font-serif">Istimewa</em>,<br />Bumil Berdaya</>
                                    )}
                                </motion.h1>

                                {/* Description */}
                                <motion.p variants={itemVariants} className={`text-[15px] leading-[1.8] max-w-140 mb-8 ${isPremium ? "text-slate-500" : "text-slate-300"}`}>
                                    {isPremium ? (
                                        <>Menu kelas menengah dengan bahan <strong className="font-bold text-[#e71d89]">lebih segar & variatif</strong> ayam kampung, ikan kembung segar, tahu sutra, dan buah potong premium.</>
                                    ) : (
                                        <>Pengalaman makan premium dengan <strong className="font-bold text-[#FFD1E8]">salmon fillet, wagyu, udang segar, dan suplemen gizi terpilih.</strong> Dirancang khusus untuk memaksimalkan gizi si kecil.</>
                                    )}
                                </motion.p>

                                {/* Stats */}
                                <motion.div variants={itemVariants} className="flex gap-8 md:gap-10 items-center">
                                    <div>
                                        <div className={`font-serif text-3xl md:text-4xl font-bold leading-none ${isPremium ? "text-[#e71d89]" : "text-[#FFD1E8]"}`}>7</div>
                                        <div className="text-[11px] font-semibold tracking-wide mt-2 opacity-50 text-current">Hari Menu</div>
                                    </div>
                                    <div className={`w-px h-10 ${isPremium ? "bg-slate-200" : "bg-white/10"}`}></div>
                                    <div>
                                        <div className={`font-serif text-3xl md:text-4xl font-bold leading-none ${isPremium ? "text-[#e71d89]" : "text-[#FFD1E8]"}`}>
                                            {isPremium ? "~88rb" : "~190rb"}
                                        </div>
                                        <div className="text-[11px] font-semibold tracking-wide mt-2 opacity-50 text-current">Rata-rata / hari</div>
                                    </div>
                                    <div className={`w-px h-10 ${isPremium ? "bg-slate-200" : "bg-white/10"}`}></div>
                                    <div>
                                        <div className={`font-serif text-3xl md:text-4xl font-bold leading-none ${isPremium ? "text-[#e71d89]" : "text-[#FFD1E8]"}`}>
                                            {isPremium ? "AKG" : "Premium"}
                                        </div>
                                        <div className="text-[11px] font-semibold tracking-wide mt-2 opacity-50 text-current">
                                            {isPremium ? "2019 Kemenkes" : "Bahan Pilihan"}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* KANAN: TIER SWITCHER (Floating Glass) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`shrink-0 flex flex-col gap-3 w-full md:w-auto p-2 rounded-4xl border shadow-xl transition-all duration-500 ${isPremium
                            ? "bg-white border-[#e71d89]/10"
                            : "bg-[#0f172a]/40 border-white/10 backdrop-blur-md"}`}
                    >
                        {/* Tombol Premium */}
                        <button
                            onClick={() => handleTierChange('premium')}
                            className={`flex items-center justify-between gap-6 px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-500 w-full ${isPremium
                                ? "bg-[#FFF5F9] text-[#e71d89] shadow-sm"
                                : "text-white/40 hover:text-white/70"
                                }`}
                        >
                            <span className="flex items-center gap-3">
                                <Leaf size={18} /> Menu Premium
                            </span>
                            {isPremium && <div className="w-2 h-2 rounded-full bg-[#e71d89] animate-pulse"></div>}
                        </button>

                        {/* Tombol Mewah */}
                        <button
                            onClick={() => handleTierChange('luxury')}
                            className={`flex items-center justify-between gap-6 px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-500 w-full ${!isPremium
                                ? "bg-[#e71d89] text-white shadow-lg"
                                : "text-slate-400 hover:text-slate-600"
                                }`}
                        >
                            <span className="flex items-center gap-3">
                                <Sparkles size={18} /> Menu Mewah
                            </span>
                            {!isPremium && <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>}
                        </button>
                    </motion.div>

                </div>
            </div>

            {/* ================= 2. HARGA BOX ================= */}
            <div className={`py-7 px-6 lg:px-14 border-b transition-colors duration-1000 ${isPremium
                ? "bg-white border-slate-100"
                : "bg-[#0f172a] border-white/5"
                }`}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTier}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4"
                    >
                        <motion.div variants={itemVariants} className={`flex items-center gap-2 text-[11px] font-extrabold tracking-[2px] uppercase shrink-0 ${isPremium ? "text-[#e71d89]" : "text-[#FFD1E8]"}`}>
                            <ShoppingCart size={16} strokeWidth={2.5} />
                            {isPremium ? "Estimasi Harga Pasar" : "Estimasi Restoran"}
                        </motion.div>

                        <div className="flex flex-wrap gap-2.5 md:ml-auto">
                            {(isPremium ? [
                                { icon: <Drumstick size={14} />, text: "Ayam kampung 18–22rb" },
                                { icon: <Fish size={14} />, text: "Ikan kembung 10–15rb" },
                                { icon: <Milk size={14} />, text: "Susu sapi 8–12rb" }
                            ] : [
                                { icon: <Fish size={14} />, text: "Salmon fillet 35–50rb" },
                                { icon: <Beef size={14} />, text: "Wagyu slice 60–90rb" },
                                { icon: <Shrimp size={14} />, text: "Udang vaname 30–45rb" }
                            ]).map((chip, i) => (
                                <motion.span
                                    key={i}
                                    variants={itemVariants}
                                    className={`flex items-center gap-1.5 border px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${isPremium
                                        ? "bg-[#FFF5F9] text-[#c21470] border-[#e71d89]/10"
                                        : "bg-white/5 text-[#FFD1E8] border-white/10"}`}
                                >
                                    {chip.icon} {chip.text}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}