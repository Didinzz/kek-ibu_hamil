"use client";
import { motion } from "framer-motion";
import { Utensils, Milk, Sandwich, Apple, Fish, Beef, Coffee, Egg, Carrot, Soup, Croissant, Grape } from "lucide-react";
import { GiAvocado, GiBowlOfRice, GiChickenOven } from "react-icons/gi";
import { FaCarrot } from "react-icons/fa6";
import { TbBrandCakephp, TbCookie, TbSalad } from "react-icons/tb";

// --- 1. Helper Ikon Menu (Kombinasi Lucide & React Icons) ---
const renderIcon = (iconName) => {
    const props = { size: 26, strokeWidth: 1.5, className: "text-[#c21470]" };
    switch (iconName) {
        case 'egg': return <Egg {...props} />;
        case 'fruit': return <Apple {...props} />;
        case 'bean': return <TbSalad {...props} />;
        case 'fish': return <Fish {...props} />;
        case 'snack': return <TbCookie {...props} />;
        case 'soup': return <Soup {...props} />;
        case 'rice': return <GiBowlOfRice {...props} />;
        case 'avocado': return <GiAvocado {...props} />;
        case 'carrot': return <FaCarrot {...props} />;
        case 'grape': return <Grape {...props} />;
        case 'chicken': return <GiChickenOven {...props} />;
        case 'cake': return <TbBrandCakephp {...props} />;
        case 'meat': return <Beef {...props} />;
        case 'milk': return <Milk {...props} />;
        case 'coffee': return <Coffee {...props} />;
        case 'bread': return <Croissant {...props} />;
        case 'bento': return <Sandwich {...props} />;
        default: return <Utensils {...props} />;
    }
};

// --- 2. Helper Warna Chip Total Gizi ---
const getChipStyle = (type) => {
    switch (type) {
        case 'kal': return "bg-[#FFF5F9] text-[#c21470] border border-[#e71d89]/20";
        case 'prot': return "bg-[#F0FDF4] text-[#166534] border border-[#166534]/20";
        case 'fe': return "bg-[#FEF2F2] text-[#991B1B] border border-[#991B1B]/20";
        default: return "bg-slate-50 text-slate-600 border border-slate-200";
    }
};

export default function DayCardHemat({ data }) {
    // --- KONFIGURASI ANIMASI ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full mb-14"
        >
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-end justify-between gap-2 px-2 md:px-4 mb-4">
                <div>
                    <h3
                        className="text-3xl lg:text-4xl font-bold text-[#1E293B] leading-none"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {data.day}
                    </h3>
                    <p className="text-[11px] font-extrabold tracking-widest text-[#e71d89] uppercase mt-2">
                        {data.tagline}
                    </p>
                </div>

                <div className="text-left md:text-right w-full md:w-auto mt-2 md:mt-0">
                    <div className="text-[9px] font-bold tracking-widest uppercase text-slate-400 mb-1">
                        Budget Harian
                    </div>
                    <div
                        className="text-2xl font-bold text-[#c21470] leading-none"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {data.budget}
                    </div>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(231,29,137,0.06)] border border-[#e71d89]/10 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(231,29,137,0.1)]">

                {/* GRID MENU (5 Kolom) */}
                <div className="grid grid-cols-2 lg:grid-cols-5">
                    {data.meals?.map((meal, idx) => (
                        <div
                            key={idx}
                            className={`p-[20px_16px] flex flex-col group transition-colors hover:bg-[#FFF5F9]/60 
                            border-b border-slate-100 lg:border-b-0 
                            ${idx === data.meals.length - 1 ? "" : "lg:border-r lg:border-slate-100"}
                            `}
                        >
                            {/* Waktu & Tipe */}
                            <div className="text-[9.5px] font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5 text-slate-400">
                                {meal.time} <span className="text-[#e71d89]">—</span> {meal.typeMeal}
                            </div>

                            {/* Ikon */}
                            <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 origin-left">
                                {renderIcon(meal.type)}
                            </div>

                            {/* Nama Makanan */}
                            <div className="text-[13px] font-bold leading-snug min-h-3.5 mb-2 text-[#1E293B]">
                                {meal.menu}
                            </div>

                            {/* Detail */}
                            <div className="text-[11px] text-slate-500 leading-relaxed mb-5">
                                {meal.detail}
                            </div>

                            {/* Harga & Gizi Mini (Merata di Bawah) */}
                            <div className="mt-auto border-t border-slate-100 pt-3">
                                <div
                                    className="inline-block text-[15px] font-bold text-[#c21470] mb-1.5"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    {meal.price}
                                </div>
                                <div className="text-[10px] font-semibold text-slate-400 bg-slate-50/80 px-2 py-1 rounded border border-slate-100 w-fit">
                                    {meal.giziMini}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DAY TOTAL ROW (Bagian Bawah Card) */}
                {data.totalRow && (
                    <div className="bg-[#FAFAFA] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-5 lg:px-6 lg:py-5 border-t border-slate-200">
                        {/* Teks Kiri */}
                        <div className="text-[12px] font-bold text-slate-600">
                            {data.totalRow.left}
                        </div>

                        {/* Chips Gizi Tengah */}
                        <div className="flex flex-wrap gap-2">
                            {data.totalRow.chips?.map((chip, cIdx) => (
                                <span key={cIdx} className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${getChipStyle(chip.type)}`}>
                                    {chip.label}
                                </span>
                            ))}
                        </div>

                        {/* Total Harga Kanan */}
                        <div
                            className="text-xl md:text-2xl font-bold text-[#c21470] bg-white px-4 py-1.5 rounded-lg border border-[#e71d89]/20 shadow-sm"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            {data.totalRow.right}
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}