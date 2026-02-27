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
        // Background menggunakan Primary Pink secara penuh
        <section className="relative bg-[#e71d89] py-16 lg:py-20 px-6 lg:px-16 overflow-hidden">

            {/* --- BACKGROUND GLOW EFFECT --- */}
            {/* Cahaya Putih Lembut di Kiri agar tidak flat */}
            <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[40%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)] pointer-events-none"></div>
            {/* Cahaya Putih Lembut di Kanan */}
            <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[40%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none"></div>

            {/* --- KONTEN GRID --- */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                // Garis pembatas (divider) diubah menjadi putih transparan
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 relative z-10"
            >

                {/* DATA 1: Batas LILA */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center px-4 py-8 md:py-0 md:px-10">
                    <div className="bg-white p-4 rounded-full mb-5 text-[#e71d89] shadow-md shadow-[#c21470]/30">
                        <Baby size={32} strokeWidth={1.5} />
                    </div>
                    <div className="font-serif text-5xl lg:text-6xl font-bold text-white leading-none mb-3">
                        23.5<span className="text-2xl lg:text-3xl font-medium text-white/80 ml-1">cm</span>
                    </div>
                    <p className="text-sm text-white/90 font-medium leading-relaxed max-w-55">
                        Batas LILA normal ibu hamil <br className="hidden md:block" />
                        — di bawahnya risiko KEK
                    </p>
                </motion.div>

                {/* DATA 2: Tablet Fe */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center px-4 py-8 md:py-0 md:px-10">
                    <div className="bg-white p-4 rounded-full mb-5 text-[#e71d89] shadow-md shadow-[#c21470]/30">
                        <Pill size={32} strokeWidth={1.5} />
                    </div>
                    <div className="font-serif text-5xl lg:text-6xl font-bold text-white leading-none mb-3">
                        90<span className="text-3xl lg:text-4xl font-medium text-white/80 ml-1">+</span>
                    </div>
                    <p className="text-sm text-white/90 font-medium leading-relaxed max-w-55">
                        Tablet Fe wajib diminum <br className="hidden md:block" />
                        selama masa kehamilan
                    </p>
                </motion.div>

                {/* DATA 3: Persentase Risiko */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center px-4 py-8 md:py-0 md:px-10">
                    <div className="bg-white p-4 rounded-full mb-5 text-[#e71d89] shadow-md shadow-[#c21470]/30">
                        <PieChart size={32} strokeWidth={1.5} />
                    </div>
                    <div className="font-serif text-5xl lg:text-6xl font-bold text-white leading-none mb-3">
                        17<span className="text-3xl lg:text-4xl font-medium text-white/80 ml-1">%</span>
                    </div>
                    <p className="text-sm text-white/90 font-medium leading-relaxed max-w-55">
                        Ibu hamil Indonesia <br className="hidden md:block" />
                        berisiko KEK (Riskesdas 2023)
                    </p>
                </motion.div>

            </motion.div>
        </section>
    );
}