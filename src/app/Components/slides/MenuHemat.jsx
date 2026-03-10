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
            className="h-full w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#FAFAFA] font-sans relative"
        >
            <HeroHemat stats={dataHemat.stats} />
            <PrinsipHemat principles={dataHemat.principles} />

            {/* ================= KONTEN MENU HARIAN (Tampil Semua 7 Hari) ================= */}
            <section className="py-16 px-4 lg:px-8 max-w-7xl mx-auto min-h-screen">

                {/* Judul Bagian Menu */}
                <div className="mb-12 flex flex-col justify-between gap-4">
                    <h2 className="font-black text-2xl lg:text-3xl text-[#1E293B] flex items-center gap-3">
                        <div className="bg-[#FFF5F9] p-2.5 rounded-xl border border-[#e71d89]/10 text-[#e71d89]">
                            <CalendarDays size={26} strokeWidth={2.5} />
                        </div>
                        <span>Menu <span className="text-[#e71d89]">7 Hari Lengkap</span></span>
                    </h2> 
                    <span className="text-normal font-semibold">Harga estimasi pasar tradisional area Jawa 2024. Bisa lebih hemat jika beli bahan segar langsung dari pasar!</span>
                </div>

                {/* List Kartu Berurutan ke Bawah */}
                <div className="flex flex-col gap-12">
                    {dataHemat.days.map((dayData, idx) => (
                        <DayCardHemat key={idx} data={dayData} />
                    ))}
                </div>
            </section>

            <WeeklySummary />
            <TipsHemat tips={dataHemat.tips} />

        </motion.div>
    );
}