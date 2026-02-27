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
        </motion.div>
    );
}