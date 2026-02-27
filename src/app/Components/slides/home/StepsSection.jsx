"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Coffee, Apple, Fish, Beef, Sandwich, Bone, Milk, Utensils,
    ChevronDown, Search, HeartPulse, Scale, CheckCircle, Sparkles,
    BeanIcon
} from "lucide-react";
import { dataMenu } from "../menu_mingguan/dataMenu";

// Helper untuk ikon berdasarkan tipe makanan
const getMealIcon = (type) => {
    switch (type) {
        case 'egg': return <Utensils size={18} />;
        case 'milk': return <Milk size={18} />;
        case 'bento': return <Sandwich size={18} />;
        case 'fruit': return <Apple size={18} />;
        case 'fish': return <Fish size={18} />;
        case 'meat': return <Beef size={18} />;
        case 'bean': return <BeanIcon size={18} />;
        case 'soup': return <Coffee size={18} />;
        case 'tea': return <Coffee size={18} />;
        case 'bread': return <Sandwich size={18} />;
        case 'snack': return <Apple size={18} />;
        default: return <Utensils size={18} />;
    }
};

export default function StepsSection() {
    const [selectedTrimester, setSelectedTrimester] = useState('t1');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [todayMenu, setTodayMenu] = useState(null);

    // Effect untuk mendapatkan hari saat ini
    useEffect(() => {
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const todayIndex = new Date().getDay();
        const todayName = days[todayIndex];

        // Cari menu hari ini berdasarkan Trimester yang dipilih
        const menuForToday = dataMenu[selectedTrimester].days.find(day => day.name === todayName);
        setTodayMenu(menuForToday);
    }, [selectedTrimester]);

    // --- ANIMASI ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const stepVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Animasi pergantian trimester
    const contentChangeVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, y: -15, transition: { duration: 0.2, ease: "easeIn" } }
    };

    return (
        // Background putih bersih
        <section className="py-20 lg:py-32 px-6 lg:px-16 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-14 lg:mb-16"
                >
                    <div className="text-xs font-bold tracking-widest uppercase text-[#e71d89] mb-3 flex items-center gap-2">
                        <Sparkles size={14} /> Cara Pakai
                    </div>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight">
                        4 Langkah Mudah <br />
                        bersama <em className="italic text-[#e71d89]">dr. Sarah</em>
                    </h2>
                </motion.div>

                {/* --- GRID SPLIT (STEPS & MOCKUP CARD) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* KIRI: LIST LANGKAH-LANGKAH */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-4"
                    >
                        {/* Step 1 */}
                        <motion.div variants={stepVariants} className="flex gap-5 p-5 rounded-2xl border border-transparent hover:border-[#e71d89]/20 hover:bg-[#FFF5F9] transition-all duration-300 group">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FFF5F9] group-hover:bg-[#e71d89] text-[#e71d89] group-hover:text-white flex items-center justify-center font-serif text-2xl font-bold transition-colors">
                                1
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#1E293B] mb-1.5 flex items-center gap-2">
                                    Kenali Trimester Bunda <Search size={16} className="text-[#e71d89]" />
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Pilih trimester kehamilan agar rekomendasi menu dan kebutuhan gizi yang muncul benar-benar sesuai kondisi Bunda.</p>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div variants={stepVariants} className="flex gap-5 p-5 rounded-2xl border border-transparent hover:border-[#e71d89]/20 hover:bg-[#FFF5F9] transition-all duration-300 group">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FFF5F9] group-hover:bg-[#e71d89] text-[#e71d89] group-hover:text-white flex items-center justify-center font-serif text-2xl font-bold transition-colors">
                                2
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#1E293B] mb-1.5 flex items-center gap-2">
                                    Pelajari Materi KEK <HeartPulse size={16} className="text-[#e71d89]" />
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Pahami apa itu Risiko KEK, cara baca ukuran LILA, penyebab, dan dampaknya — agar Bunda bisa mencegah sejak dini.</p>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div variants={stepVariants} className="flex gap-5 p-5 rounded-2xl border border-transparent hover:border-[#e71d89]/20 hover:bg-[#FFF5F9] transition-all duration-300 group">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FFF5F9] group-hover:bg-[#e71d89] text-[#e71d89] group-hover:text-white flex items-center justify-center font-serif text-2xl font-bold transition-colors">
                                3
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#1E293B] mb-1.5 flex items-center gap-2">
                                    Ikuti Menu 7 Hari <Utensils size={16} className="text-[#e71d89]" />
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Terapkan menu harian bergizi yang sudah disesuaikan dengan harga pasar Tuban — mulai dari Rp 33.000/hari saja!</p>
                            </div>
                        </motion.div>

                        {/* Step 4 (Highlight Step) */}
                        <motion.div variants={stepVariants} className="flex gap-5 p-5 rounded-2xl border border-transparent hover:border-[#e71d89]/30 hover:bg-[#e71d89] hover:text-white transition-all duration-300 group">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#e71d89] group-hover:bg-white text-white group-hover:text-[#e71d89] flex items-center justify-center font-serif text-2xl font-bold transition-colors shadow-sm">
                                4
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-[#1E293B] group-hover:text-white mb-1.5 flex items-center gap-2 transition-colors">
                                    Pantau & Kontrol Rutin <Scale size={16} className="text-[#e71d89] group-hover:text-[#FFD1E8] transition-colors" />
                                </h3>
                                <p className="text-sm text-slate-500 group-hover:text-white/90 leading-relaxed transition-colors">Ukur LILA di Posyandu tiap bulan, rutin minum tablet Fe malam hari + air jeruk, dan konsultasi dengan bidan berkala.</p>
                            </div>
                        </motion.div>
                    </motion.div>


                    {/* KANAN: MOCKUP MENU CARD */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white rounded-4xl border border-slate-200 shadow-2xl shadow-[#e71d89]/10 overflow-hidden flex flex-col"
                    >
                        {/* Card Header (Solid Pink) */}
                        <div className="bg-[#e71d89] p-6 lg:p-8 relative shrink-0">

                            {/* Trimester Dropdown Toggle */}
                            <div className="absolute top-6 right-6 z-20">
                                <div className="relative">
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold transition-all border border-white/20 cursor-pointer"
                                    >
                                        Trimester {selectedTrimester.replace('t', '')} <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-30"
                                            >
                                                {['t1', 't2', 't3'].map((t) => (
                                                    <button
                                                        key={t}
                                                        onClick={() => {
                                                            setSelectedTrimester(t);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className={`w-full text-left px-4 py-3 text-sm font-bold flex items-center justify-between hover:bg-[#FFF5F9] transition-colors cursor-pointer ${selectedTrimester === t ? 'text-[#e71d89] bg-[#FFF5F9]' : 'text-slate-600'}`}
                                                    >
                                                        Trimester {t.replace('t', '')}
                                                        {selectedTrimester === t && <CheckCircle size={14} />}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2 pr-28">
                                Menu Hari Ini
                            </h3>

                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={selectedTrimester + "-header"}
                                    variants={contentChangeVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="text-[#FFD1E8] text-sm font-medium flex items-center gap-2"
                                >
                                    {todayMenu?.name || "Memuat..."} • Target {todayMenu?.kkal} kkal
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 lg:p-8 bg-[#FAFAFA] grow">
                            <AnimatePresence mode="wait">
                                {todayMenu ? (
                                    <motion.div
                                        key={selectedTrimester + "-body"}
                                        variants={contentChangeVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="space-y-1 divide-y divide-slate-200"
                                    >
                                        {todayMenu.meals.map((meal, index) => (
                                            <div key={index} className="py-4 first:pt-0 last:pb-0 flex gap-4 items-center group">
                                                {/* Ikon Makanan (Pink Theme) */}
                                                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#e71d89] shrink-0 group-hover:scale-110 group-hover:bg-[#e71d89] group-hover:text-white transition-all duration-300">
                                                    {getMealIcon(meal.type)}
                                                </div>

                                                {/* Detail Makanan */}
                                                <div className="flex-1">
                                                    <div className="text-xs font-bold text-[#c21470] mb-0.5">{meal.time}</div>
                                                    <div className="text-sm font-bold text-[#1E293B] leading-snug">{meal.menu}</div>
                                                </div>

                                                {/* HARGA PER MENU */}
                                                {meal.price && (
                                                    <div className="hidden sm:block text-xs font-bold text-[#e71d89] bg-[#FFF5F9] border border-[#e71d89]/10 px-3 py-1.5 rounded-lg shrink-0">
                                                        {meal.price}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <div className="py-10 text-center text-slate-400 font-medium animate-pulse">
                                        Menyiapkan menu hari ini...
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Card Footer (Menggunakan Biru Dongker Elegan agar kontras dengan Pink) */}
                        <div className="bg-[#1E293B] p-6 flex justify-between items-center shrink-0">
                            <div>
                                <div className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">Total Hari Ini</div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedTrimester + "-totalprice"}
                                        variants={contentChangeVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="text-[#FFD1E8] font-serif text-[22px] lg:text-2xl font-bold"
                                    >
                                        {todayMenu?.totalPrice || "-"}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Menampilkan Protein & Zat Besi di kanan */}
                            <div className="flex gap-4 text-right">
                                <div>
                                    <div className="text-[10px] text-slate-400 font-semibold mb-1 uppercase tracking-wider">Protein</div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={selectedTrimester + "-prot"}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-white font-bold text-sm"
                                        >
                                            {todayMenu?.prot || "-"}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                <div className="w-px bg-slate-600 my-1"></div>
                                <div>
                                    <div className="text-[10px] text-slate-400 font-semibold mb-1 uppercase tracking-wider">Zat Besi</div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={selectedTrimester + "-fe"}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-white font-bold text-sm"
                                        >
                                            {todayMenu?.fe || "-"}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}