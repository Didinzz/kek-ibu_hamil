"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Import komponen-komponen materi
import HeroMateri from "./materi/HeroMateri";
import DefinisiMateri from "./materi/DefinisiMateri";
import DiagnosisMateri from "./materi/DiagnosisMateri";
import PenyebabMateri from "./materi/PenyebabMateri";
import DampakMateri from "./materi/DampakMateri";
import TatalaksanaMateri from "./materi/TatalaksanaMateri";
import PemantauanMateri from "./materi/PemantauanMateri";
import SumberMateri from "./materi/SumberMateri";

export default function MateriKEK() {
    useEffect(() => {
        if (window.location.hash === "#definisi") {
            const timer = setTimeout(() => {
                const targetElement = document.getElementById("definisi");
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                window.history.replaceState(null, null, window.location.pathname);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#FAFAFA] font-sans text-slate-800"
        >
            <HeroMateri />
            <DefinisiMateri />
            <DiagnosisMateri />
            <PenyebabMateri />
            <DampakMateri />
            <TatalaksanaMateri />
            <PemantauanMateri />
            <SumberMateri />
        </motion.div>
    );
}