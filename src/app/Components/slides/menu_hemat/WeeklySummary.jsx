"use client";
import { motion } from "framer-motion";
import {
    Wallet, Calendar, Utensils, Zap, BarChart3,
    Sun, Sparkles, Waves, Leaf, ShoppingCart, Gift, Award
} from "lucide-react";
import { dataHemat } from "./dataMenuHemat";

const getDayIcon = (day) => {
    const cls = "shrink-0 text-[#e71d89]";
    switch (day) {
        case "Senin": return <Sun size={16} className={cls} />;
        case "Selasa": return <Sparkles size={16} className={cls} />;
        case "Rabu": return <Waves size={16} className={cls} />;
        case "Kamis": return <Leaf size={16} className={cls} />;
        case "Jumat": return <Sparkles size={16} className={cls} />;
        case "Sabtu": return <ShoppingCart size={16} className={cls} />;
        case "Minggu": return <Gift size={16} className={cls} />;
        default: return <Sun size={16} className={cls} />;
    }
};

export default function WeeklySummary() {
    const { weeklySummary } = dataHemat;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } }
    };

    return (
        // Bagian ini diubah: Background Navy langsung dipasang di section terluar agar full-width
        <section className="py-16 bg-[#1E293B] relative overflow-hidden">
            {/* Efek Cahaya Magenta di latar belakang */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#e71d89]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c21470]/20 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                // Pembungkus dalam dibatasi max-w-7xl agar isinya rapi di tengah
                className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
            >
                {/* --- HEADER --- */}
                <motion.div variants={itemVariants} className="mb-10 text-center md:text-left">
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                        <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 text-[#FFD1E8] backdrop-blur-sm">
                            <BarChart3 size={24} strokeWidth={2.5} />
                        </div>
                        <span>Rekap Budget <span className="text-[#e71d89]">Seminggu</span></span>
                    </h2>
                </motion.div>

                {/* --- GRID 4 KARTU STATISTIK --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { icon: <Wallet size={24} />, label: weeklySummary.cards[0].label, value: weeklySummary.cards[0].value },
                        { icon: <Calendar size={24} />, label: weeklySummary.cards[1].label, value: weeklySummary.cards[1].value },
                        { icon: <Utensils size={24} />, label: weeklySummary.cards[2].label, value: weeklySummary.cards[2].value },
                        { icon: <Zap size={24} />, label: weeklySummary.cards[3].label, value: weeklySummary.cards[3].value },
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            className="bg-white/5 border border-white/10 p-5 lg:p-6 rounded-2xl text-center backdrop-blur-sm transition-all"
                        >
                            <div className="flex justify-center mb-4 bg-white/10 w-12 h-12 rounded-full items-center mx-auto text-[#FFD1E8]">
                                {card.icon}
                            </div>
                            <div className="font-black text-xl lg:text-2xl mb-1 text-white">{card.value}</div>
                            <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold px-2">{card.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* --- TABEL BREAKDOWN HARIAN --- */}
                <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-4 p-4 lg:p-5 bg-white/5 border-b border-white/10 text-[11px] font-extrabold uppercase tracking-widest text-white/40">
                        <div>Hari</div>
                        <div>Menu Andalan</div>
                        <div>Gizi Utama</div>
                        <div className="text-right">Pengeluaran</div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-white/5">
                        {weeklySummary.breakdown.map((row, idx) => (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-4 p-4 lg:p-5 gap-3 md:gap-4 items-center hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-2.5 font-bold text-white text-[14px]">
                                    <div className="bg-[#FFF5F9] w-8 h-8 rounded-lg flex items-center justify-center">
                                        {getDayIcon(row.day)}
                                    </div>
                                    {row.day}
                                </div>
                                <div className="text-[13px] text-white/80 font-medium leading-snug">
                                    {row.menu}
                                </div>
                                <div className="text-[12px] text-[#FFD1E8]/70 font-semibold flex items-center md:items-start">
                                    <span className="md:hidden w-24 inline-block text-white/40 text-[10px] uppercase tracking-widest">Gizi:</span>
                                    {row.gizi}
                                </div>
                                <div className="text-left md:text-right text-[14px] font-black text-[#e71d89] flex items-center md:justify-end">
                                    <span className="md:hidden w-24 inline-block text-white/40 text-[10px] uppercase tracking-widest">Harga:</span>
                                    {row.budget}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Table Footer (Total) */}
                    <div className="grid grid-cols-1 md:grid-cols-4 p-5 lg:p-6 bg-linear-to-r from-[#c21470]/20 to-[#e71d89]/20 border-t-2 border-[#e71d89]/30 items-center gap-3">
                        <div className="flex items-center gap-2.5 font-black text-[#FFD1E8] text-[16px] tracking-wide">
                            <Award size={20} className="text-[#e71d89]" />
                            TOTAL
                        </div>
                        <div className="text-[13px] text-white/80 font-medium hidden md:block">
                            {weeklySummary.total.dayText}
                        </div>
                        <div className="text-[13px] text-[#FFD1E8] font-bold hidden md:block">
                            {weeklySummary.total.gizi}
                        </div>
                        <div className="text-left md:text-right font-serif text-2xl font-black text-white">
                            {weeklySummary.total.budget}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}