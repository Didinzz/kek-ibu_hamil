"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays } from "lucide-react";
import HeroHemat from "./menu_hemat/HeroHemat";
import PrinsipHemat from "./menu_hemat/PrinsipHemat";
import DayCardHemat from "./menu_hemat/DayCardHemat";
import WeeklySummary from "./menu_hemat/WeeklySummary";
import TipsHemat from "./menu_hemat/TipsHemat";
import { dataHemat } from "./menu_hemat/dataMenuHemat";
import { tipsHemat } from "./menu_hemat/tipsHemat";

export default function MenuHemat() {
    const [activeDay, setActiveDay] = useState("");

    // Set default tab ke Hari Ini
    useEffect(() => {
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const today = days[new Date().getDay()];
        setActiveDay(today);
    }, []);

    const activeData = dataHemat.days.find(d => d.day === activeDay) || dataHemat.days[0];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#FAFAFA] font-sans relative"
        >
            <HeroHemat stats={dataHemat.stats} />
            <PrinsipHemat principles={dataHemat.principles} />

            {/* ================= TAB NAVIGATION ================= */}
            <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm px-4 lg:px-8 flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
                {/* Lebar disamakan dengan kontainer utama max-w-7xl */}
                <div className="flex w-full md:w-auto max-w-7xl mx-auto">
                    {dataHemat.days.map((d) => {
                        const isActive = activeDay === d.day;
                        return (
                            <button
                                key={d.day}
                                onClick={() => setActiveDay(d.day)}
                                className={`relative px-6 lg:px-8 py-4 font-bold text-[13px] tracking-[0.3px] transition-colors duration-300 whitespace-nowrap ${isActive ? "text-[#e71d89]" : "text-slate-400 hover:text-[#1E293B] cursor-pointer"
                                    }`}
                            >
                                {d.day}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeHematTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.75 bg-[#e71d89]"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ================= KONTEN MENU HARIAN ================= */}
            {/* Lebar dikembalikan ke max-w-7xl agar konsisten dengan halaman lain */}
            <section className="py-12 px-4 lg:px-8 max-w-7xl mx-auto min-h-screen">
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="font-black text-2xl lg:text-3xl text-[#1E293B] flex items-center gap-3">
                        <div className="bg-[#FFF5F9] p-2 rounded-xl border border-[#e71d89]/10 text-[#e71d89]">
                            <CalendarDays size={24} strokeWidth={2.5} />
                        </div>
                        <span>Menu <span className="text-[#e71d89]">{activeData.day}</span></span>
                    </h2>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <DayCardHemat key={activeDay} data={activeData} />
                    </motion.div>
                </AnimatePresence>
            </section>

            <WeeklySummary />
            <TipsHemat tips={tipsHemat} />

        </motion.div>
    );
}