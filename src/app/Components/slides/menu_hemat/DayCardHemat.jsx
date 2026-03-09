"use client";
import { motion } from "framer-motion";
import {
    Clock, Apple, Fish, Egg, Flame, Utensils, Bean, Candy, Lightbulb,
    Activity, Droplet, Bone, Sparkles, Wheat, AlertCircle, Star, Info
} from "lucide-react";

const getMealIcon = (type) => {
    const cls = "text-[#e71d89]";
    switch (type) {
        case "egg": return <Egg size={20} strokeWidth={2} className={cls} />;
        case "fruit": return <Apple size={20} strokeWidth={2} className={cls} />;
        case "bean": return <Bean size={20} strokeWidth={2} className={cls} />;
        case "fish": return <Fish size={20} strokeWidth={2} className={cls} />;
        case "snack": return <Candy size={20} strokeWidth={2} className={cls} />;
        case "soup": return <Flame size={20} strokeWidth={2} className={cls} />;
        default: return <Utensils size={20} strokeWidth={2} className={cls} />;
    }
};

const getTagIcon = (type) => {
    const cls = "shrink-0";
    switch (type) {
        case 'kal': return <Flame size={12} className={cls} />;
        case 'prot': return <Activity size={12} className={cls} />;
        case 'fe': return <Droplet size={12} className={cls} />;
        case 'ca': return <Bone size={12} className={cls} />;
        case 'vit': return <Sparkles size={12} className={cls} />;
        case 'om': return <Fish size={12} className={cls} />;
        case 'serat': return <Wheat size={12} className={cls} />;
        default: return <Sparkles size={12} className={cls} />;
    }
};

const getTagColor = (type) => {
    switch (type) {
        case 'kal': return "bg-[#FFF5F9] text-[#c21470]";
        case 'prot': return "bg-[#EFF6FF] text-[#1E40AF]";
        case 'fe': return "bg-[#FEF2F2] text-[#991B1B]";
        case 'ca': return "bg-[#FEF9C3] text-[#854D0E]";
        case 'vit': return "bg-[#F5F3FF] text-[#6B21A8]";
        case 'om': return "bg-[#ECFDF5] text-[#065F46]";
        case 'serat': return "bg-[#FFF7ED] text-[#9A3412]";
        default: return "bg-slate-100 text-slate-600";
    }
};

const getTimeBorder = (timeString) => {
    if (timeString.includes("07.00")) return "border-l-[3px] border-amber-500";
    if (timeString.includes("10.00")) return "border-l-[3px] border-emerald-500";
    if (timeString.includes("12.00")) return "border-l-[3px] border-blue-500";
    if (timeString.includes("15.00")) return "border-l-[3px] border-purple-500";
    if (timeString.includes("18.00")) return "border-l-[3px] border-indigo-500";
    return "border-l-[3px] border-slate-300";
};

const getNoteIcon = (type) => {
    if (type === 'alert') return <AlertCircle size={16} className="text-[#e71d89] shrink-0 mt-0.5" strokeWidth={2.5} />;
    if (type === 'star') return <Star size={16} className="text-[#D4AF37] shrink-0 mt-0.5" fill="currentColor" strokeWidth={1} />;
    return <Lightbulb size={16} className="text-[#e71d89] shrink-0 mt-0.5" strokeWidth={2.5} />;
};

export default function DayCardHemat({ data }) {

    // --- KONFIGURASI ANIMASI SLOW & SMOOTH ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25, // Diperlambat agar keluarnya satu-satu berasa banget
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.1, staggerDirection: -1 }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 60, // Meluncur dari bawah (jaraknya agak jauh biar dramatis)
            scale: 0.95,
            filter: "blur(8px)" // Awalnya blur
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.5, // Durasinya diperlama (0.8 detik)
                ease: [0.16, 1, 0.3, 1] // Custom kurva ease: lambat & mulus di akhir
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            filter: "blur(5px)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            // whileInView membuat animasi nunggu sampai layarnya dilihat (scroll down)
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // amount: 0.1 = mulai pas 10% masuk layar
            exit="exit"
            className="w-full"
        >
            {/* ================= LEGEND / KETERANGAN NUTRISI ================= */}
            <motion.div variants={itemVariants} className="bg-white border border-slate-200 rounded-xl p-4 mb-6 shadow-sm flex flex-col md:flex-row md:items-center gap-3">
                <div className="flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-slate-400 shrink-0">
                    <Info size={14} /> Keterangan Nutrisi:
                </div>
                <div className="flex flex-wrap gap-2">
                    {[
                        { type: 'kal', lbl: 'Energi' },
                        { type: 'prot', lbl: 'Protein' },
                        { type: 'fe', lbl: 'Zat Besi' },
                        { type: 'ca', lbl: 'Kalsium' },
                        { type: 'vit', lbl: 'Vitamin' },
                        { type: 'om', lbl: 'Omega-3' },
                        { type: 'serat', lbl: 'Serat' }
                    ].map((leg, i) => (
                        <span key={i} className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${getTagColor(leg.type)}`}>
                            {getTagIcon(leg.type)} {leg.lbl}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* ================= HEADER KARTU HARI INI ================= */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#1E293B]">
                    {data.day} <span className="text-sm lg:text-base text-slate-400 font-sans font-normal ml-1">({data.title})</span>
                </h3>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="flex-1 md:flex-none bg-[#c21470] text-white px-4 py-2 rounded-xl text-center shadow-sm">
                        <div className="font-serif text-base lg:text-lg font-bold leading-none mb-0.5">{data.totalKkal}</div>
                        <div className="text-[9px] text-white/70 font-bold uppercase tracking-widest">Energi Harian</div>
                    </div>
                    <div className="flex-1 md:flex-none bg-white border border-slate-200 text-[#1E293B] px-4 py-2 rounded-xl text-center shadow-sm">
                        <div className="font-black text-base lg:text-lg leading-none mb-0.5">{data.budget}</div>
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Total Budget</div>
                    </div>
                </div>
            </motion.div>

            {/* ================= LIST MENU VERTIKAL ================= */}
            <div className="space-y-3">
                {data.meals.map((meal, mIdx) => (
                    <motion.div
                        key={mIdx}
                        variants={itemVariants}
                        className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow group ${getTimeBorder(meal.time)}`}
                    >
                        <div className="p-3 lg:p-4 flex flex-col md:flex-row md:items-start gap-3 lg:gap-5">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#FFF5F9] border border-[#e71d89]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                {getMealIcon(meal.type)}
                            </div>

                            <div className="flex-1">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5">
                                    <Clock size={12} strokeWidth={2.5} /> {meal.time}
                                </div>
                                <h4 className="text-[13px] lg:text-[14px] font-bold text-[#1E293B] leading-snug mb-1 group-hover:text-[#c21470] transition-colors">
                                    {meal.menu}
                                </h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed mb-2.5">
                                    {meal.detail}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {meal.tags && meal.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9.5px] font-bold ${getTagColor(tag.type)}`}>
                                            {getTagIcon(tag.type)} {tag.label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="md:text-right mt-2 md:mt-0 shrink-0">
                                <div className="inline-block text-[12px] font-black text-[#1E293B] bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                                    {meal.price}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ================= DAILY SUMMARY ================= */}
            {data.summary && (
                <motion.div variants={itemVariants} className="mt-5 bg-[#FFF5F9] border border-[#e71d89]/20 rounded-xl p-4 lg:p-5 shadow-sm">
                    <div className="text-[11px] font-black tracking-widest uppercase text-[#c21470] mb-3 flex items-center gap-2">
                        <Activity size={14} /> Ringkasan Gizi Harian — {data.day}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-4">
                        {data.summary.map((s, idx) => (
                            <div key={idx} className="bg-white border border-[#e71d89]/10 rounded-lg p-3 shadow-sm hover:border-[#e71d89]/30 transition-colors">
                                <div className="text-lg font-black text-[#1E293B] leading-none mb-1 flex items-baseline gap-1">
                                    {s.val} {s.unit && <span className="text-[10px] font-bold text-slate-400">{s.unit}</span>}
                                </div>
                                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wide mb-0.5">{s.lbl}</div>
                                <div className="text-[9.5px] font-bold text-[#e71d89]">{s.pct}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white border border-[#e71d89]/20 p-3 rounded-lg text-[11.5px] text-[#1E293B] font-medium flex gap-2.5 items-start shadow-sm">
                        {getNoteIcon(data.noteType)}
                        <span className="leading-relaxed">{data.note}</span>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}