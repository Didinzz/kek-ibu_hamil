"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuPageData } from "./menu_mingguan/menuPageData";
import { HeartPulse } from "lucide-react";
import HeroMenu from "./menu_mingguan/HeroMenu";
import TabNavMenu from "./menu_mingguan/TabNavMenu";
import DayCardMenu from "./menu_mingguan/DayCardMenu";
import TipsMenu from "./menu_mingguan/TipsMenu";

export default function MenuMingguan() {
    // STATE BARU: Untuk mengontrol Premium vs Mewah
    const [activeTier, setActiveTier] = useState("premium");

    // STATE LAMA: Untuk mengontrol Trimester
    const [activeTab, setActiveTab] = useState("t1");

    // Mengambil data berdasarkan Tier dan Trimester yang aktif
    const activeData = menuPageData[activeTier][activeTab];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Transisi Background: Premium (Soft Pink) vs Mewah (Dark Navy)
            className={`h-full w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden font-sans transition-colors duration-500 ${activeTier === 'premium' ? 'bg-[#FCF8FA]' : 'bg-[#0f172a]'
                }`}
        >
            <HeroMenu
                activeTier={activeTier}
                setActiveTier={setActiveTier}
                setActiveTab={setActiveTab}
            />

            <TabNavMenu activeTab={activeTab} setActiveTab={setActiveTab} activeTier={activeTier} />

            <section className="py-12 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTier + activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header Info Trimester (Disesuaikan Warnanya) */}
                        <div className={`border rounded-2xl p-5 mb-10 text-[14px] font-medium flex items-center gap-3 ${activeTier === 'premium'
                                ? 'bg-white border-[#e71d89]/30 text-[#c21470] shadow-sm'
                                : 'bg-white/5 border-white/20 text-[#FFD1E8]'
                            }`}>
                            <HeartPulse size={20} className="shrink-0" strokeWidth={2.5} />
                            {activeData.note}
                        </div>
                        <div className="space-y-8">
                            {activeData.days.map((day, idx) => (
                                <DayCardMenu
                                    key={idx}
                                    day={day}
                                    activeTier={activeTier}
                                    activeTab={activeTab}
                                />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>

            <TipsMenu activeTier={activeTier} />
        </motion.div>
    );
}