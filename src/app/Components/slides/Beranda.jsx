"use client";
import { motion } from "framer-motion";
import HeroSection from "./home/HeroSection";
import LayananSection from "./home/LayananSection";
import DrSarahSection from "./home/DrSarahSection";
import InfoStripSection from "./home/InfoStripSection";
import StepsSection from "./home/StepsSection";
import CtaFooterSection from "./home/CtaFooterSection";
// Nanti kita akan import bagian lainnya di sini:
// import LayananSection from "./LayananSection";
// import DrSarahSection from "./DrSarahSection";

export default function Beranda({ setActiveSlide }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            // Container utama dengan scrollbar disembunyikan
            className="h-full w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#FDF8F0] font-sans relative"
        >
            {/* GRAIN OVERLAY BACKGROUND (Sesuai desain baru) */}
            <div className="fixed inset-0 pointer-events-none z-999 opacity-40 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%220.04%22/%3E%3C/svg%3E')]"></div>

            {/* 1. HERO SECTION */}
            {/* Kita oper setActiveSlide agar tombol di dalam Hero bisa diklik untuk pindah halaman */}
            <HeroSection setActiveSlide={setActiveSlide} />

            {/* 2. LAYANAN SECTION (Coming Soon) */}
            <LayananSection setActiveSlide={setActiveSlide} />

            {/* 3. DR SARAH QUOTE (Coming Soon) */}
            <DrSarahSection />

            <InfoStripSection />

            <StepsSection />

            <CtaFooterSection setActiveSlide={setActiveSlide}/>

            


        </motion.div>
    );
}