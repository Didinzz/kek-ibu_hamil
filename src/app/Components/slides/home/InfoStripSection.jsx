"use client";
import { motion } from "framer-motion";
import { Baby, Pill, PieChart } from "lucide-react";

export default function InfoStripSection() {

    // --- KONFIGURASI ANIMASI ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 15 }
        }
    };

    return (
        <section className="relative bg-[#1A2E22] py-16 lg:py-20 px-6 lg:px-16 overflow-hidden">

            {/* --- BACKGROUND GLOW EFFECT --- */}
            {/* Cahaya Hijau di Kiri */}
            <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[40%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(116,198,157,0.15)_0%,transparent_60%)] pointer-events-none"></div>
            {/* Cahaya Emas di Kanan */}
            <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[40%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(244,168,48,0.12)_0%,transparent_60%)] pointer-events-none"></div>

            {/* --- KONTEN GRID --- */}
            {/* Menggunakan divide-x untuk memberikan garis pembatas vertikal antar kolom di layar besar, dan divide-y di layar HP */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10"
            >

                {/* DATA 1: Batas LILA */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center px-4 py-8 md:py-0 md:px-10">
                    <div className="bg-white/5 p-4 rounded-full mb-5 text-[#B7E4C7]">
                        <Baby size={32} strokeWidth={1.5} />
                    </div>
                    <div className="font-serif text-5xl lg:text-6xl font-bold text-[#F4A830] leading-none mb-3">
                        23.5<span className="text-2xl lg:text-3xl font-medium text-[#F4A830]/80 ml-1">cm</span>
                    </div>
                    <p className="text-sm text-white/60 font-medium leading-relaxed max-w-55">
                        Batas LILA normal ibu hamil <br className="hidden md:block" />
                        — di bawahnya risiko KEK
                    </p>
                </motion.div>

                {/* DATA 2: Tablet Fe */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center px-4 py-8 md:py-0 md:px-10">
                    <div className="bg-white/5 p-4 rounded-full mb-5 text-[#B7E4C7]">
                        <Pill size={32} strokeWidth={1.5} />
                    </div>
                    <div className="font-serif text-5xl lg:text-6xl font-bold text-[#F4A830] leading-none mb-3">
                        90<span className="text-3xl lg:text-4xl font-medium text-[#F4A830]/80 ml-1">+</span>
                    </div>
                    <p className="text-sm text-white/60 font-medium leading-relaxed max-w-55">
                        Tablet Fe wajib diminum <br className="hidden md:block" />
                        selama masa kehamilan
                    </p>
                </motion.div>

                {/* DATA 3: Persentase Risiko */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center px-4 py-8 md:py-0 md:px-10">
                    <div className="bg-white/5 p-4 rounded-full mb-5 text-[#B7E4C7]">
                        <PieChart size={32} strokeWidth={1.5} />
                    </div>
                    <div className="font-serif text-5xl lg:text-6xl font-bold text-[#F4A830] leading-none mb-3">
                        17<span className="text-3xl lg:text-4xl font-medium text-[#F4A830]/80 ml-1">%</span>
                    </div>
                    <p className="text-sm text-white/60 font-medium leading-relaxed max-w-55">
                        Ibu hamil Indonesia <br className="hidden md:block" />
                        berisiko KEK (Riskesdas 2023)
                    </p>
                </motion.div>

            </motion.div>
        </section>
    );
}