"use client";

import { motion } from "framer-motion";
import HeroMateri from "./materi/HeroMateri";
import DefinisiMateri from "./materi/DefinisiMater";
import PerbandinganMateri from "./materi/PerbandinganMater";
import PenyebabPencegahan from "./materi/PenyebabPencegahan";
import DampakBahaya from "./materi/DampakBahaya";
import DeteksiMateri from "./materi/DeteksiMateri";

export default function MateriKEK() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#FAFAFA] font-sans"
        >
            {/* Memanggil seluruh seksi materi secara utuh */}
            <HeroMateri />
            <DefinisiMateri />
            <PerbandinganMateri />
            <PenyebabPencegahan type="penyebab" />
            <DampakBahaya type="dampak" />
            <DeteksiMateri />
            <PenyebabPencegahan type="pencegahan" />
            <DampakBahaya type="bahaya" />

            {/* FOOTER LENGKAP */}
            <footer className="bg-[#1A202C] pt-12 pb-24 lg:pb-12 px-6 lg:px-12 border-t-4 border-[#2A5C43] flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="font-black text-[#D4AF37] text-2xl tracking-tighter font-serif">CERMAT</div>
                    <div className="text-slate-400 text-xs mt-1 max-w-xs">Cegah KEK dengan Menu beRgizi untuk ibu haMil sehaT</div>
                </div>
                <div className="text-slate-400 text-xs text-center md:text-right leading-relaxed">
                    Sumber: Kemenkes RI — AKG 2019 (Permenkes No. 28 Tahun 2019)<br />
                    Riskesdas 2018 | Pedoman Gizi Seimbang 2014 | Buku KIA Kemenkes RI<br />
                    <span className="text-[#2A5C43] font-bold">Program Mini Project Gizi Kesehatan Masyarakat</span>
                </div>
            </footer>
        </motion.div>
    );
}