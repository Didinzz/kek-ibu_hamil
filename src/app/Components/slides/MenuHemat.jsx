"use client";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react"; // Import ikon pengganti emoji
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
            className="h-full w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#FAFAFA] font-sans"
        >
            <HeroHemat stats={dataHemat.stats} />
            <PrinsipHemat principles={dataHemat.principles} />

            {/* Container lebar max-w-7xl agar grid kartu lebih lega */}
            <section className="py-12 px-4 lg:px-8 max-w-7xl mx-auto min-h-screen">
                <div className="mb-10 text-center md:text-left">
                    {/* Mengganti Emoji 📅 dengan Icon CalendarDays */}
                    <h2 className="font-black text-3xl text-[#1A202C] mb-2 flex items-center justify-center md:justify-start gap-3">
                        <CalendarDays className="text-[#1A202C]" size={32} strokeWidth={2.5} />
                        <span>Menu <span className="text-[#2A5C43]">7 Hari</span> Lengkap</span>
                    </h2>
                    <p className="text-slate-500 text-sm">Harga estimasi pasar tradisional 2024. Hemat pangkal sehat!</p>
                </div>

                <div className="grid gap-8">
                    {dataHemat.days.map((day, idx) => (
                        <DayCardHemat key={idx} data={day} index={idx} />
                    ))}
                </div>
            </section>

            <WeeklySummary />
            <TipsHemat tips={dataHemat.tips} />

            {/* Footer Sederhana Tanpa Emoji */}
            <footer className="bg-[#1A202C] py-8 text-center border-t-4 border-[#D4AF37]">
                <p className="text-slate-400 text-xs leading-relaxed">
                    <strong className="text-[#D4AF37]">Program CERMAT</strong> — Edisi Hemat<br />
                    Harga dapat berbeda di setiap wilayah.
                </p>
            </footer>
        </motion.div>
    );
}