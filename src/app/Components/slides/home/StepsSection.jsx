"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Apple, Fish, Utensils,
    ChevronDown, Search, HeartPulse, Scale, CheckCircle, Sparkles,
    Bean, Flame, Candy, Calendar
} from "lucide-react";
import { dataHemat } from "../menu_hemat/dataMenuHemat";

const getMealIcon = (type) => {
    switch (type) {
        case 'egg': return <Utensils size={18} />;
        case 'fruit': return <Apple size={18} />;
        case 'fish': return <Fish size={18} />;
        case 'bean': return <Bean size={18} />;
        case 'soup': return <Flame size={18} />;
        case 'snack': return <Candy size={18} />;
        default: return <Utensils size={18} />;
    }
};

export default function StepsSection() {
    const [selectedDay, setSelectedDay] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [todayMenu, setTodayMenu] = useState(null);

    useEffect(() => {
        const daftarHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const namaHariIni = daftarHari[new Date().getDay()];
        setSelectedDay(namaHariIni);
    }, []);

    useEffect(() => {
        if (selectedDay) {
            const menu = dataHemat.days.find(d => d.day === selectedDay);
            setTodayMenu(menu);
        }
    }, [selectedDay]);

    // --- VARIAN ANIMASI ---
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

    // Animasi khusus saat pergantian isi menu
    const contentVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } }
    };

    return (
        <section className="py-20 lg:py-32 px-6 lg:px-16 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 lg:mb-16">
                    <div className="text-xs font-bold tracking-widest uppercase text-[#e71d89] mb-3 flex items-center gap-2">
                        <Sparkles size={14} /> Panduan Cerdas
                    </div>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight">
                        Cara Mudah <br />
                        Mulai Hidup <em className="italic text-[#e71d89]">Sehat & Hemat</em>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Kiri: Langkah-langkah */}
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
                        <motion.div variants={stepVariants} className="flex gap-5 p-5 rounded-2xl border border-transparent hover:border-[#e71d89]/20 hover:bg-[#FFF5F9] transition-all group">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FFF5F9] group-hover:bg-[#e71d89] text-[#e71d89] group-hover:text-white flex items-center justify-center font-serif text-2xl font-bold transition-colors">1</div>
                            <div>
                                <h3 className="text-base font-bold text-[#1E293B] mb-1.5 flex items-center gap-2">Cek Anggaran Harian <Search size={16} className="text-[#e71d89]" /></h3>
                                <p className="text-sm text-slate-500">Lihat rencana makan hari ini di kartu sebelah kanan. Rata-rata hanya butuh Rp 22.000/hari.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={stepVariants} className="flex gap-5 p-5 rounded-2xl border border-transparent hover:border-[#e71d89]/20 hover:bg-[#FFF5F9] transition-all group">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FFF5F9] group-hover:bg-[#e71d89] text-[#e71d89] group-hover:text-white flex items-center justify-center font-serif text-2xl font-bold transition-colors">2</div>
                            <div>
                                <h3 className="text-base font-bold text-[#1E293B] mb-1.5 flex items-center gap-2">Pilih Menu Favorit <Calendar size={16} className="text-[#e71d89]" /></h3>
                                <p className="text-sm text-slate-500">Klik tombol hari untuk melihat menu hari lain. Semua dirancang praktis untuk Bunda di rumah.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={stepVariants} className="flex gap-5 p-5 rounded-2xl border border-transparent hover:border-[#e71d89]/30 hover:bg-[#e71d89] hover:text-white transition-all group">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#e71d89] group-hover:bg-white text-white group-hover:text-[#e71d89] flex items-center justify-center font-serif text-2xl font-bold transition-colors">3</div>
                            <div>
                                <h3 className="text-base font-bold text-[#1E293B] group-hover:text-white mb-1.5 flex items-center gap-2">Pantau Gizi Berkala <Scale size={16} className="text-[#e71d89] group-hover:text-[#FFD1E8]" /></h3>
                                <p className="text-sm text-slate-500 group-hover:text-white/80">Jangan lupa timbang BB dan cek LILA secara rutin untuk memastikan janin tumbuh optimal.</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Kanan: Card dengan Animasi Transisi */}
                    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" className="bg-white rounded-4xl border border-slate-200 shadow-2xl shadow-[#e71d89]/10 overflow-hidden flex flex-col">
                        <div className="bg-[#e71d89] p-6 lg:p-8 relative shrink-0">
                            <div className="absolute top-6 right-6 z-20">
                                <div className="relative">
                                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold transition-all border border-white/20 cursor-pointer">
                                        {selectedDay} <ChevronDown size={14} className={isDropdownOpen ? "rotate-180" : ""} />
                                    </button>
                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-30">
                                                {dataHemat.days.map((d) => (
                                                    <button key={d.day} onClick={() => { setSelectedDay(d.day); setIsDropdownOpen(false); }} className={`w-full text-left px-4 py-3 text-sm font-bold flex items-center justify-between hover:bg-[#FFF5F9] cursor-pointer ${selectedDay === d.day ? 'text-[#e71d89] bg-[#FFF5F9]' : 'text-slate-600'}`}>
                                                        {d.day} {selectedDay === d.day && <CheckCircle size={14} />}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div key={selectedDay} variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2 pr-24">
                                        {selectedDay === new Date().toLocaleDateString('id-ID', { weekday: 'long' }) ? "Menu Hari Ini" : `Menu ${selectedDay}`}
                                    </h3>
                                    <p className="text-[#FFD1E8] text-sm font-medium">{todayMenu?.title} • {todayMenu?.budget}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="p-6 lg:p-8 bg-[#FAFAFA] grow min-h-[320px]">
                            <AnimatePresence mode="wait">
                                <motion.div key={selectedDay} variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="space-y-1 divide-y divide-slate-200">
                                    {todayMenu?.meals.map((meal, index) => (
                                        <div key={index} className="py-4 first:pt-0 last:pb-0 flex gap-4 items-center group">
                                            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#e71d89] shrink-0 group-hover:bg-[#e71d89] group-hover:text-white transition-all">
                                                {getMealIcon(meal.type)}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-[10px] font-bold text-[#c21470] mb-0.5 uppercase">{meal.time}</div>
                                                <div className="text-sm font-bold text-[#1E293B] leading-tight">{meal.menu}</div>
                                            </div>
                                            <div className="hidden sm:block text-[11px] font-bold text-[#e71d89] bg-[#FFF5F9] px-3 py-1.5 rounded-lg">{meal.price}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="bg-[#1E293B] p-6 flex justify-between items-center shrink-0">
                            <AnimatePresence mode="wait">
                                <motion.div key={selectedDay} variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                                    <div className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">Total Budget</div>
                                    <div className="text-[#FFD1E8] font-serif text-2xl font-bold">{todayMenu?.budget}</div>
                                </motion.div>
                            </AnimatePresence>
                            <div className="text-right">
                                <div className="text-[10px] text-slate-400 font-semibold mb-1 uppercase tracking-wider">Status</div>
                                <div className="text-white font-bold text-sm">Bergizi & Hemat</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}