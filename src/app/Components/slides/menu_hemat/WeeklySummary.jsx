"use client";
import { motion } from "framer-motion";
import { Wallet, Calendar, Zap, TrendingUp, BarChart3 } from "lucide-react";

export default function WeeklySummary() {

    // 1. Variasi Induk: Mengatur jadwal muncul (Stagger)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Jeda antar elemen
                delayChildren: 0.1
            }
        }
    };

    // 2. Variasi Header: Muncul perlahan dari bawah
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // 3. Variasi Kartu: Efek Pop-up Memantul
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120, damping: 12 }
        }
    };

    return (
        // Menggunakan Magenta Solid agar data rekap ini sangat menonjol dan estetik
        <section className="py-16 px-6 lg:px-12 bg-[#e71d89] text-white overflow-hidden relative">

            {/* Efek Cahaya Putih Transparan di latar belakang */}
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[40%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none"></div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-5xl mx-auto relative z-10"
            >
                {/* Header Section */}
                <motion.div variants={fadeUpVariants} className="text-center mb-10">
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-2 flex items-center justify-center gap-3">
                        <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                            <BarChart3 className="text-white" size={24} strokeWidth={2.5} />
                        </div>
                        <span>Rekap Budget Seminggu</span>
                    </h2>
                    <p className="text-white/80 text-sm font-light">Ringkasan pengeluaran dan estimasi gizi rata-rata.</p>
                </motion.div>

                {/* Grid Kartu */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {[
                        { l: "Total", v: "Rp 154rb", i: <Wallet className="text-[#e71d89]" size={24} /> },
                        { l: "Rata-rata", v: "Rp 22rb", i: <Calendar className="text-[#e71d89]" size={24} /> },
                        { l: "Per Makan", v: "Rp 4.400", i: <TrendingUp className="text-[#e71d89]" size={24} /> },
                        { l: "Kalori", v: "~2.057", i: <Zap className="text-[#e71d89]" size={24} /> },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                            className="bg-white/10 border border-white/20 p-6 rounded-2xl text-center backdrop-blur-sm cursor-default transition-all shadow-sm"
                        >
                            {/* Ikon dengan background putih agar logo magenta-nya terlihat jelas */}
                            <div className="flex justify-center mb-4 bg-white w-12 h-12 rounded-full items-center mx-auto shadow-md shadow-[#c21470]/30">
                                {item.i}
                            </div>
                            <div className="font-black text-xl md:text-2xl mb-1 text-white">{item.v}</div>
                            <div className="text-[10px] md:text-[11px] text-white/70 uppercase tracking-widest font-bold">{item.l}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}