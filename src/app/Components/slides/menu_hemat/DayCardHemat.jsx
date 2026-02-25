"use client";
import { motion } from "framer-motion";
import {
    Clock, Apple, Fish, Drumstick, Egg, Milk, Coffee, Croissant,
    Carrot, Flame, Scale, Utensils, Bean, Soup, Candy
} from "lucide-react";

// Mapping Icon berdasarkan tipe makanan
const getMealIcon = (type) => {
    // Kita gunakan warna Emas untuk Ikon agar kontras dengan background hijau muda
    const cls = "text-[#D4AF37]";
    switch (type) {
        case "egg": return <Egg size={24} strokeWidth={2} className={cls} />;
        case "fruit": return <Apple size={24} strokeWidth={2} className={cls} />;
        case "bean": return <Scale size={24} strokeWidth={2} className={cls} />; // Tempe/Tahu
        case "fish": return <Fish size={24} strokeWidth={2} className={cls} />;
        case "snack": return <Candy size={24} strokeWidth={2} className={cls} />;
        case "soup": return <Flame size={24} strokeWidth={2} className={cls} />;
        default: return <Utensils size={24} strokeWidth={2} className={cls} />;
    }
};

export default function DayCardHemat({ data, index }) {

    // 1. Animasi Kartu Induk
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1 // Memicu anak-anaknya muncul berurutan
            }
        }
    };

    // 2. Animasi Item Menu (Pop Up)
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
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
            className="bg-white rounded-4xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
        >

            {/* --- HEADER KARTU (Hijau) --- */}
            <div className="bg-linear-to-r from-[#1A4A2E] to-[#2A5C43] p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-white">
                <div className="flex items-center gap-4">
                    {/* Nomor Hari */}
                    <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center font-serif text-xl border border-white/10">
                        {index + 1}
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl leading-none mb-1 text-white">{data.day}</h3>
                        <p className="text-[11px] text-[#D4AF37] font-bold uppercase tracking-widest">{data.title}</p>
                    </div>
                </div>

                {/* Badge Total Budget */}
                <div className="bg-white text-[#2A5C43] px-4 py-2 rounded-xl text-center shadow-lg">
                    <div className="font-black text-lg leading-none mb-0.5">{data.budget}</div>
                    <div className="text-[9px] text-[#2A5C43]/70 font-bold uppercase tracking-widest">Total Hari Ini</div>
                </div>
            </div>

            {/* --- GRID MENU (Layout Hemat Tempat) --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {data.meals.map((meal, mIdx) => (
                    <motion.div
                        key={mIdx}
                        variants={itemVariants} // Animasi per item
                        className="p-5 flex flex-col h-full hover:bg-[#F0FAF5]/50 transition-colors group"
                    >
                        {/* Waktu */}
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#2A5C43] uppercase tracking-widest mb-3">
                            <Clock size={12} strokeWidth={2.5} /> {meal.time.split(" ")[0]}
                            <span className="text-slate-400">{meal.time.split(" ")[1]}</span>
                        </div>

                        {/* Ikon */}
                        <div className="bg-[#2A5C43]/10 w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            {getMealIcon(meal.type)}
                        </div>

                        {/* Nama Menu & Detail */}
                        <div className="mb-4 grow">
                            <div className="text-[13px] font-bold text-[#1A202C] leading-tight mb-1.5">
                                {meal.menu}
                            </div>
                            <div className="text-[11px] text-slate-500 leading-relaxed font-light">
                                {meal.detail}
                            </div>
                        </div>

                        {/* Footer Item: Harga & Kalori */}
                        <div className="flex items-center justify-between mt-auto border-t border-slate-100 pt-3">
                            <span className="text-[13px] font-black text-[#2A5C43]">
                                {meal.price}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                                {meal.meta}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

        </motion.div>
    );
}