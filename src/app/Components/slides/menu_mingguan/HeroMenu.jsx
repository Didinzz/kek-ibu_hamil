"use client";
import { motion } from "framer-motion";

export default function HeroMenu() {
    // 1. Variasi Induk: Mengatur urutan kemunculan dari atas ke bawah
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Jeda antar elemen
                delayChildren: 0.1     // Jeda awal sebelum animasi mulai
            }
        }
    };

    // 2. Variasi Anak: Efek fade-up dengan pengereman halus
    const itemFadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // 3. Variasi Khusus untuk Kartu Statistik (Pop-up)
    const cardPopUp = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="relative bg-[#1A202C] pt-24 pb-16 px-6 lg:px-12 text-center overflow-hidden">
            {/* Ornamen Blob Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#2A5C43]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Bungkus Utama Animasi */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible" // Menggunakan animate agar langsung jalan saat dimuat
                className="relative z-10 max-w-4xl mx-auto"
            >
                {/* Badge dengan Border Hijau, Teks Emas */}
                <motion.div variants={itemFadeUp} className="inline-block bg-[#2A5C43]/20 text-[#D4AF37] font-bold text-[11px] tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-[#2A5C43]">
                    Program CERMAT — Cegah KEK Pada Ibu Hamil
                </motion.div>

                <motion.h1 variants={itemFadeUp} className="font-black text-5xl md:text-6xl text-white leading-tight mb-4">
                    Menu Bumil <span className="text-[#D4AF37] font-serif italic font-normal">Sehat</span><br />7 Hari Penuh
                </motion.h1>

                <motion.p variants={itemFadeUp} className="text-slate-400 text-[15px] max-w-lg mx-auto font-light mb-10">
                    Panduan makan harian ibu hamil untuk semua trimester — bergizi, terjangkau, dan mudah dibuat di rumah.
                </motion.p>

                {/* Wadah 3 Kartu Statistik */}
                <div className="flex flex-wrap justify-center gap-4">
                    <motion.div variants={cardPopUp} className="bg-white/5 border border-white/5 rounded-2xl px-6 py-4 backdrop-blur-md">
                        <div className="font-serif text-4xl text-[#D4AF37] mb-1">7</div>
                        <div className="text-[11px] text-white/50 font-bold uppercase tracking-widest">Hari Menu</div>
                    </motion.div>

                    <motion.div variants={cardPopUp} className="bg-white/5 border border-white/5 rounded-2xl px-6 py-4 backdrop-blur-md">
                        <div className="font-serif text-4xl text-[#D4AF37] mb-1">3</div>
                        <div className="text-[11px] text-white/50 font-bold uppercase tracking-widest">Trimester</div>
                    </motion.div>

                    <motion.div variants={cardPopUp} className="bg-white/5 border border-white/5 rounded-2xl px-6 py-4 backdrop-blur-md">
                        <div className="font-serif text-4xl text-[#D4AF37] mb-1">5x</div>
                        <div className="text-[11px] text-white/50 font-bold uppercase tracking-widest">Makan/Hari</div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}