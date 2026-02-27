"use client";
import { motion } from "framer-motion";
import { Utensils, Milk, Sandwich, Apple, Fish, Beef, Coffee, Egg, Carrot, Soup, Croissant } from "lucide-react";

// Helper Ikon yang Lebih Rapi
const renderIcon = (iconName, isPremium) => {
    const color = isPremium ? "text-[#1A2820]" : "text-[#E8F0D8]";
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

// Helper Tag Gizi (Mengikuti persis CSS asli Anda)
const getTagColor = (cls, isPremium) => {
    if (isPremium) {
        switch (cls) {
            case 'tag-e': return "bg-[#FEF9C3] text-[#7C5800]";
            case 'tag-p': return "bg-[#DCFCE7] text-[#14532D]";
            case 'tag-fe': return "bg-[#FEE2E2] text-[#7F1D1D]";
            case 'tag-om': return "bg-[#EDE9FE] text-[#4C1D95]";
            case 'tag-ca': return "bg-[#DBEAFE] text-[#1E3A5F]";
            default: return "bg-gray-100 text-gray-700";
        }
    } else {
        switch (cls) {
            case 'tag-e': return "bg-[#D4A420]/15 text-[#F0C840]";
            case 'tag-p': return "bg-[#2D7A50]/20 text-[#74C69D]";
            case 'tag-fe': return "bg-[#C0392B]/15 text-[#FCA5A5]";
            case 'tag-om': return "bg-[#633CB4]/15 text-[#C4B5FD]";
            case 'tag-ca': return "bg-[#1E3A8A]/15 text-[#93C5FD]";
            default: return "bg-white/10 text-white/60";
        }
    }
};

export default function DayCardMenu({ day, activeTier, activeTab }) {
    const isPremium = activeTier === 'premium';

    // Logika Header Gradient persis CSS asli
    const getHeaderGradient = () => {
        if (!isPremium) return "bg-gradient-to-br from-[#1A1400] to-[#2A2000] border-b border-[#D4A420]";
        if (activeTab === "t1") return "bg-gradient-to-br from-[#1A5C3A] to-[#2D7A50]";
        if (activeTab === "t2") return "bg-gradient-to-br from-[#145C3A] to-[#1E8A50]";
        return "bg-gradient-to-br from-[#145C3A] to-[#1E8A50]";
    };

    // Varian Animasi untuk Kartu (Muncul perlahan dari bawah)
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-3xl overflow-hidden mb-6 transition-all duration-300 hover:-translate-y-1 ${isPremium
                    ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                    : "bg-[#111A0E] border border-[#D4A420]/12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(212,164,32,0.15)]"
                }`}
        >

            {/* ================= HEADER ================= */}
            <div className={`px-6 py-4 flex items-center justify-between ${getHeaderGradient()}`}>
                <div
                    className={`text-2xl font-bold ${isPremium ? "text-white" : "text-[#F0C840]"}`}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }} // Pastikan font Serif aktif
                >
                    {day.dayName}
                </div>

                <div className={`rounded-xl px-4 py-2 text-center ${isPremium ? "bg-white/20" : "bg-[#D4A420]/12 border border-[#D4A420]/25"
                    }`}>
                    <div
                        className={`text-[20px] leading-none font-bold ${isPremium ? "text-white" : "text-[#F0C840]"}`}
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {day.budgetRp}
                    </div>
                    <div className={`text-[9px] font-bold tracking-[0.5px] uppercase mt-1 ${isPremium ? "text-white/70" : "text-[#D4A420]/60"}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {day.budgetLbl}
                    </div>
                </div>
            </div>

            {/* ================= GRID MENU (5 Kolom) ================= */}
            <div className="grid grid-cols-2 lg:grid-cols-5">
                {day.meals.map((meal, idx) => (
                    <div
                        key={idx}
                        className={`p-[16px_14px] flex flex-col transition-colors duration-300 group ${isPremium
                                ? "border-b lg:border-b-0 lg:border-r border-[#F0F0F0] hover:bg-slate-50"
                                : "border-b lg:border-b-0 lg:border-r border-[#D4A420]/10 hover:bg-white/2"
                            } ${idx === day.meals.length - 1 ? "lg:border-r-0" : ""}`}
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >

                        {/* Waktu */}
                        <div className={`text-[9px] font-bold uppercase tracking-[1px] mb-1.5 flex items-center gap-1.5 ${isPremium ? "text-[#5A7065]" : "text-[#D4A420]/55"
                            }`}>
                            {meal.time}
                        </div>

                        {/* Ikon */}
                        <div className="mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 origin-left">
                            {renderIcon(meal.icon, isPremium)}
                        </div>

                        {/* Nama Makanan */}
                        <div className={`text-[11px] font-bold leading-normal min-h-[12.5 mb-2 ${isPremium ? "text-[#1A2820]" : "text-[#E8F0D8]"
                            }`}>
                            {meal.name}
                        </div>

                        {/* Harga & Tag Nutrisi */}
                        <div className="mt-auto">
                            <div className={`inline-block text-[11px] font-extrabold px-2.5 py-1 rounded-lg mb-1.5 transition-colors ${isPremium ? "bg-[#E8F5EE] text-[#1E5C3A] group-hover:bg-[#D1E8DB]" : "bg-[#D4A420]/12 text-[#F0C840] group-hover:bg-[#D4A420]/20"
                                }`}>
                                {meal.price}
                            </div>

                            <div className="flex flex-wrap gap-0.75">
                                {meal.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className={`text-[9px] font-bold px-1.75 py-0.5 rounded-md ${getTagColor(tag.cls, isPremium)}`}>
                                        {tag.label}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* ================= DAY TOTAL ================= */}
            <div className={`p-[12px_24px] flex flex-wrap gap-2.5 items-center border-t ${isPremium ? "bg-[#F8FDF9] border-[#EDF7F1]" : "bg-[#D4A420]/4 border-[#D4A420]/10"
                }`} style={{ fontFamily: "'Outfit', sans-serif" }}>

                {/* Stats */}
                {day.total.stats.map((stat, sIdx) => (
                    <div key={sIdx} className={`px-3.5 py-1.25 rounded-lg text-[11px] font-bold border ${isPremium ? "bg-white border-[#E0EEE6] text-[#5A7065]" : "bg-white/4 border-[#D4A420]/15 text-white/50"
                        }`}>
                        {stat.pre} <strong className={`text-[13px] ${isPremium ? "text-[#2D7A50]" : "text-[#F0C840]"}`}>{stat.strong}</strong> {stat.post}
                    </div>
                ))}

                {/* Total Bayar */}
                <div className={`ml-auto rounded-xl px-5 py-2 border-2 text-[13px] font-extrabold flex items-center gap-2 ${isPremium ? "bg-[#E8F5EE] border-[#52B06E] text-[#1E5C3A]" : "bg-[#D4A420]/10 border-[#D4A420] text-[#F0C840]"
                    }`}>
                    {day.total.label}
                    <span
                        className="text-[18px] font-normal tracking-wide"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }} // Pastikan angka harganya pakai Garamond
                    >
                        {day.total.price}
                    </span>
                </div>

            </div>

        </motion.div>
    );
}