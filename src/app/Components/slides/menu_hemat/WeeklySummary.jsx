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
        <section className="py-16 px-6 lg:px-12 bg-[#2A5C43] text-white overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-5xl mx-auto"
            >
                {/* Header Section */}
                <motion.div variants={fadeUpVariants} className="text-center mb-10">
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-2 flex items-center justify-center gap-3">
                        <BarChart3 className="text-[#D4AF37]" size={28} strokeWidth={2.5} />
                        <span>Rekap Budget Seminggu</span>
                    </h2>
                    <p className="text-white/70 text-sm font-light">Ringkasan pengeluaran dan estimasi gizi rata-rata.</p>
                </motion.div>

                {/* Grid Kartu */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {[
                        { l: "Total", v: "Rp 154rb", i: <Wallet className="text-[#D4AF37]" size={24} /> },
                        { l: "Rata-rata", v: "Rp 22rb", i: <Calendar className="text-[#D4AF37]" size={24} /> },
                        { l: "Per Makan", v: "Rp 4.400", i: <TrendingUp className="text-[#D4AF37]" size={24} /> },
                        { l: "Kalori", v: "~2.057", i: <Zap className="text-[#D4AF37]" size={24} /> },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }} // Efek Hover
                            className="bg-white/10 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm cursor-default transition-colors"
                        >
                            <div className="flex justify-center mb-3 bg-white/10 w-12 h-12 rounded-full items-center mx-auto shadow-lg shadow-black/10">
                                {item.i}
                            </div>
                            <div className="font-black text-xl md:text-2xl mb-1 text-white">{item.v}</div>
                            <div className="text-[10px] md:text-[11px] text-white/60 uppercase tracking-widest font-bold">{item.l}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}