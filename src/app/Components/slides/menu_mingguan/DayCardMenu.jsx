"use client";
import { motion } from "framer-motion";
import { Utensils, Milk, Sandwich, Apple, Fish, Beef, Coffee, Egg, Carrot, Soup, Croissant } from "lucide-react";

// Helper Ikon
const renderIcon = (iconName, isPremium) => {
    const color = isPremium ? "text-[#c21470]" : "text-[#FFD1E8]";
    const props = { size: 28, strokeWidth: 1.5, className: color };

    switch (iconName) {
        case 'egg': return <Egg {...props} />;
        case 'milk': return <Milk {...props} />;
        case 'bento': return <Sandwich {...props} />;
        case 'fruit': return <Apple {...props} />;
        case 'fish': return <Fish {...props} />;
        case 'meat': return <Beef {...props} />;
        case 'soup': return <Soup {...props} />;
        case 'snack': return <Carrot {...props} />;
        case 'coffee': return <Coffee {...props} />;
        case 'bread': return <Croissant {...props} />;
        default: return <Utensils {...props} />;
    }
};

// Helper Tag Gizi
const getTagColor = (cls, isPremium) => {
    if (isPremium) {
        switch (cls) {
            case 'tag-e': return "bg-[#FFF5F9] text-[#c21470] border border-[#e71d89]/20";
            case 'tag-p': return "bg-[#F0FDF4] text-[#166534] border border-[#166534]/20";
            case 'tag-fe': return "bg-[#FEF2F2] text-[#991B1B] border border-[#991B1B]/20";
            case 'tag-om': return "bg-[#FAF5FF] text-[#5B21B6] border border-[#5B21B6]/20";
            case 'tag-ca': return "bg-[#EFF6FF] text-[#1E40AF] border border-[#1E40AF]/20";
            default: return "bg-gray-100 text-gray-700";
        }
    } else {
        switch (cls) {
            case 'tag-e': return "bg-[#e71d89]/15 text-[#FFD1E8]";
            case 'tag-p': return "bg-[#2D7A50]/20 text-[#A8DBB8]";
            case 'tag-fe': return "bg-[#C0392B]/15 text-[#FCA5A5]";
            case 'tag-om': return "bg-[#633CB4]/20 text-[#C4B5FD]";
            case 'tag-ca': return "bg-[#1E3A8A]/30 text-[#93C5FD]";
            default: return "bg-white/10 text-white/60";
        }
    }
};

export default function DayCardMenu({ day, activeTier, activeTab }) {
    const isPremium = activeTier === 'premium';

    const getHeaderGradient = () => {
        if (!isPremium) return "bg-gradient-to-br from-[#1E293B] to-[#0f172a] border-b border-[#e71d89]/20";
        if (activeTab === "t1") return "bg-gradient-to-br from-[#FFD1E8] to-[#FBCFE8]";
        if (activeTab === "t2") return "bg-gradient-to-br from-[#F9A8D4] to-[#F472B6]";
        return "bg-gradient-to-br from-[#e71d89] to-[#c21470]";
    };

    // --- KONFIGURASI ANIMASI ---
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1, // Memicu anak (meals) muncul bergantian
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-3xl overflow-hidden mb-6 transition-all duration-300 hover:-translate-y-1 ${isPremium
                    ? "bg-white shadow-[0_4px_24px_rgba(231,29,137,0.06)] border border-[#e71d89]/10"
                    : "bg-[#111827] border border-[#e71d89]/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(231,29,137,0.15)]"
                }`}
        >

            {/* ================= HEADER ================= */}
            <div className={`px-6 py-4 flex items-center justify-between ${getHeaderGradient()}`}>
                <div
                    className={`text-2xl font-bold ${isPremium && activeTab !== "t3" ? "text-[#1E293B]" : "text-white"
                        }`}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    {day.dayName}
                </div>

                <div className={`rounded-xl px-4 py-2 text-center ${isPremium
                        ? (activeTab === "t3" ? "bg-white/20" : "bg-white/40 border border-white/50")
                        : "bg-[#e71d89]/15 border border-[#e71d89]/30"
                    }`}>
                    <div
                        className={`text-[20px] leading-none font-bold ${isPremium && activeTab !== "t3" ? "text-[#c21470]" : "text-white"
                            }`}
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {day.budgetRp}
                    </div>
                    <div className={`text-[9px] font-bold tracking-[0.5px] uppercase mt-1 ${isPremium && activeTab !== "t3" ? "text-slate-600" : "text-white/70"
                        }`} style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {day.budgetLbl}
                    </div>
                </div>
            </div>

            {/* ================= GRID MENU (5 Kolom dengan Animasi Smooth) ================= */}
            <div className="grid grid-cols-2 lg:grid-cols-5">
                {day.meals.map((meal, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants} // Menggunakan varian untuk memunculkan item satu per satu
                        className={`p-[16px_14px] flex flex-col transition-colors duration-300 group ${isPremium
                                ? "border-b lg:border-b-0 lg:border-r border-slate-100 hover:bg-[#FFF5F9]"
                                : "border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-white/5"
                            } ${idx === day.meals.length - 1 ? "lg:border-r-0" : ""}`}
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >

                        {/* Waktu */}
                        <div className={`text-[9px] font-bold uppercase tracking-[1px] mb-1.5 flex items-center gap-1.5 ${isPremium ? "text-slate-400" : "text-[#FFD1E8]/60"
                            }`}>
                            {meal.time}
                        </div>

                        {/* Ikon */}
                        <div className="mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 origin-left">
                            {renderIcon(meal.icon, isPremium)}
                        </div>

                        {/* Nama Makanan */}
                        <div className={`text-[11px] font-bold leading-normal min-h-3 mb-2 ${isPremium ? "text-[#1E293B]" : "text-slate-200"
                            }`}>
                            {meal.name}
                        </div>

                        {/* Harga & Tag Nutrisi */}
                        <div className="mt-auto">
                            <div className={`inline-block text-[11px] font-extrabold px-2.5 py-1 rounded-lg mb-1.5 transition-colors ${isPremium
                                    ? "bg-[#FFF5F9] text-[#e71d89] group-hover:bg-[#FFD1E8]"
                                    : "bg-white/10 text-white group-hover:bg-[#e71d89]/20"
                                }`}>
                                {meal.price}
                            </div>

                            <div className="flex flex-wrap gap-1">
                                {meal.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${getTagColor(tag.cls, isPremium)}`}>
                                        {tag.label}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>

            {/* ================= DAY TOTAL ================= */}
            <div className={`p-[12px_24px] flex flex-wrap gap-2.5 items-center border-t ${isPremium ? "bg-[#FAFAFA] border-slate-100" : "bg-[#0b1221] border-white/5"
                }`} style={{ fontFamily: "'Outfit', sans-serif" }}>

                {/* Stats */}
                {day.total.stats.map((stat, sIdx) => (
                    <div key={sIdx} className={`px-3.5 py-1.5 rounded-lg text-[11px] font-bold border ${isPremium ? "bg-white border-slate-200 text-slate-500" : "bg-white/5 border-white/10 text-white/50"
                        }`}>
                        {stat.pre} <strong className={`text-[13px] ${isPremium ? "text-[#e71d89]" : "text-[#FFD1E8]"}`}>{stat.strong}</strong> {stat.post}
                    </div>
                ))}

                {/* Total Bayar */}
                <div className={`ml-auto rounded-xl px-5 py-2 border-2 text-[13px] font-extrabold flex items-center gap-2 ${isPremium ? "bg-[#FFF5F9] border-[#e71d89]/30 text-[#c21470]" : "bg-[#e71d89]/10 border-[#e71d89]/40 text-[#FFD1E8]"
                    }`}>
                    {day.total.label}
                    <span
                        className="text-[18px] font-normal tracking-wide"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {day.total.price}
                    </span>
                </div>

            </div>

        </motion.div>
    );
}