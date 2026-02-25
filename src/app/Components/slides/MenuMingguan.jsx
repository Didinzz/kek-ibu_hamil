"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataMenu } from "./menu_mingguan/dataMenu";
import { HeartPulse } from "lucide-react";

import HeroMenu from "./menu_mingguan/HeroMenu";
import AkgMenu from "./menu_mingguan/AkgMenu"; // <--- IMPORT BARU
import TabNavMenu from "./menu_mingguan/TabNavMenu";
import DayCardMenu from "./menu_mingguan/DayCardMenu";
import TipsMenu from "./menu_mingguan/TipsMenu";

export default function MenuMingguan() {
    const [activeTab, setActiveTab] = useState("t1");
    const activeData = dataMenu[activeTab];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#FAFAFA] font-sans"
        >
            <HeroMenu />

            <AkgMenu /> {/* <--- TAMPILKAN DI SINI */}

            <TabNavMenu activeTab={activeTab} setActiveTab={setActiveTab} />

            <section className="py-12 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header Info Trimester */}
                        <div className={`border rounded-2xl p-5 mb-10 text-[14px] font-medium flex items-center gap-3 ${activeData.color}`}>
                            <HeartPulse size={20} className="shrink-0 text-[#2A5C43]" strokeWidth={2.5} />
                            {activeData.title}
                        </div>

                        {/* List Hari */}
                        <div className="space-y-8">
                            {activeData.days.map((day, idx) => (
                                <DayCardMenu key={idx} day={day} activeData={activeData} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>

            <TipsMenu />

            <footer className="bg-[#1A202C] pt-12 pb-24 lg:pb-12 px-6 lg:px-12 border-t-4 border-[#2A5C43] flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="font-black text-[#D4AF37] text-2xl tracking-tighter font-serif">CERMAT</div>
                    <div className="text-slate-400 text-xs mt-1 max-w-xs">Cegah KEK dengan Menu beRgizi untuk ibu haMil sehaT</div>
                </div>
                <div className="text-slate-400 text-xs text-center md:text-right leading-relaxed">
                    Sumber: Permenkes No. 28 Tahun 2019 (AKG 2019)<br />
                    Tabel Komposisi Pangan Indonesia (TKPI) 2017 — Kemenkes RI<br />
                    <span className="text-[#2A5C43] font-bold">Program Mini Project Gizi Kesehatan Masyarakat</span>
                </div>
            </footer>
        </motion.div>
    );
}