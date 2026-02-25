"use client";
import { motion } from "framer-motion";
import {
    Clock, Apple, Fish, Drumstick, Egg, Milk, Coffee, Croissant,
    Carrot, Flame, Scale
} from "lucide-react";

// Semua Ikon menggunakan warna Primer (Hijau Gelap)
const getMealIcon = (type) => {
    const iconClass = "text-[#2A5C43]";
    switch (type) {
        case "egg": return <Egg size={22} strokeWidth={2} className={iconClass} />;
        case "milk": return <Milk size={22} strokeWidth={2} className={iconClass} />;
        case "bento": return <Carrot size={22} strokeWidth={2} className={iconClass} />;
        case "fruit": return <Apple size={22} strokeWidth={2} className={iconClass} />;
        case "fish": return <Fish size={22} strokeWidth={2} className={iconClass} />;
        case "tea": return <Coffee size={22} strokeWidth={2} className={iconClass} />;
        case "soup": return <Flame size={22} strokeWidth={2} className={iconClass} />;
        case "bread": return <Croissant size={22} strokeWidth={2} className={iconClass} />;
        case "bean": return <Scale size={22} strokeWidth={2} className={iconClass} />;
        case "meat": return <Drumstick size={22} strokeWidth={2} className={iconClass} />;
        case "snack": return <Apple size={22} strokeWidth={2} className={iconClass} />;
        default: return <Apple size={22} strokeWidth={2} className={iconClass} />;
    }
};

export default function DayCardMenu({ day, activeData }) {
    // 1. Variasi Induk untuk Card (Memicu animasi anak saat di-scroll)
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1 // Jeda waktu munculnya tiap menu
            }
        }
    };

    // 2. Variasi Anak (Setiap item menu akan pop-up bergantian)
    const mealVariants = {
        hidden: { opacity: 0, scale: 0.85, y: 15 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120, damping: 14 }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow"
        >

            {/* Header Hari (Warna Hijau Gradasi dari dataMenu) */}
            <div className={`${activeData.headerGrad} p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4`}>
                {/* TEKS HARI DIUBAH MENJADI PUTIH (text-white) */}
                <h3 className="font-serif text-[28px] text-white leading-none">{day.name}</h3>
                <div className="flex gap-3 flex-wrap">
                    <div className="bg-white/10 text-white px-4 py-2 rounded-xl text-center backdrop-blur-sm border border-white/10">
                        <div className="font-bold text-[18px] leading-none mb-1">{day.kkal}</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-70">kkal</div>
                    </div>
                    <div className="bg-white/10 text-white px-4 py-2 rounded-xl text-center backdrop-blur-sm border border-white/10">
                        <div className="font-bold text-[18px] leading-none mb-1">{day.prot}</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-70">Protein</div>
                    </div>
                    <div className="bg-white/10 text-white px-4 py-2 rounded-xl text-center backdrop-blur-sm border border-white/10">
                        <div className="font-bold text-[18px] leading-none mb-1">{day.fe}</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-70">Zat Besi</div>
                    </div>
                </div>
            </div>

            {/* Row 5 Waktu Makan dengan Animasi Stagger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {day.meals.map((meal, mIdx) => (
                    <motion.div
                        key={mIdx}
                        variants={mealVariants}
                        className="p-5 flex flex-col h-full hover:bg-slate-50 transition-colors"
                    >
                        {/* TEKS WAKTU MAKAN DIUBAH KE HIJAU AGAR TERBACA */}
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#2A5C43] uppercase tracking-widest mb-3">
                            <Clock size={12} strokeWidth={2.5} /> {meal.time}
                        </div>

                        {/* Ikon Makanan (Hijau Gelap) dengan Latar Hijau Muda */}
                        <div className="bg-[#2A5C43]/10 w-12 h-12 rounded-[14px] flex items-center justify-center mb-4">
                            {getMealIcon(meal.type)}
                        </div>

                        {/* Nama Menu */}
                        <div className="text-[13px] font-bold text-[#1A202C] leading-normal mb-5 grow">
                            {meal.menu}
                        </div>

                        {/* Info Gizi (Chips) */}
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {meal.chips.map((chip, cIdx) => (
                                <span key={cIdx} className={`text-[10px] font-extrabold px-2 py-1 rounded-md ${chip.c === 'e' ? 'bg-amber-50 text-amber-700' :
                                        chip.c === 'p' ? 'bg-[#ECFDF5] text-[#059669]' : 'bg-rose-50 text-rose-700'
                                    }`}>
                                    {chip.v}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

        </motion.div>
    );
}