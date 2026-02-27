"use client";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import HeroHemat from "./menu_hemat/HeroHemat";
import PrinsipHemat from "./menu_hemat/PrinsipHemat";
import DayCardHemat from "./menu_hemat/DayCardHemat";
import WeeklySummary from "./menu_hemat/WeeklySummary";
import TipsHemat from "./menu_hemat/TipsHemat";
import { dataHemat } from "./menu_hemat/dataMenuHemat";

export default function MenuHemat() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Background utama menggunakan Putih Bersih agar konten terlihat jelas
            className="h-full w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-white font-sans"
        >
            <HeroHemat stats={dataHemat.stats} />
            <PrinsipHemat principles={dataHemat.principles} />

            {/* Container lebar max-w-7xl agar grid kartu lebih lega */}
            <section className="py-12 px-4 lg:px-8 max-w-7xl mx-auto min-h-screen">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="font-black text-3xl text-[#1E293B] mb-2 flex items-center justify-center md:justify-start gap-3">
                        {/* Ikon CalendarDays dengan warna Magenta */}
                        <div className="bg-[#FFF5F9] p-2.5 rounded-xl border border-[#e71d89]/10 text-[#e71d89]">
                            <CalendarDays size={28} strokeWidth={2.5} />
                        </div>
                        <span>Menu <span className="text-[#e71d89]">7 Hari</span> Lengkap</span>
                    </h2>
                    <p className="text-slate-500 text-sm">Harga estimasi pasar tradisional Tuban. Hemat pangkal sehat!</p>
                </div>

                <div className="grid gap-8">
                    {dataHemat.days.map((day, idx) => (
                        <DayCardHemat key={idx} data={day} index={idx} />
                    ))}
                </div>
            </section>

            <WeeklySummary />
            <TipsHemat tips={dataHemat.tips} />

        </motion.div>
    );
}