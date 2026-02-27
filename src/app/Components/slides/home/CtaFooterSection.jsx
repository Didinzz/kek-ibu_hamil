"use client";
import { motion } from "framer-motion";
import { Utensils, BookOpen, Sparkles } from "lucide-react";

export default function CtaFooterSection({ setActiveSlide }) {

    // --- KONFIGURASI ANIMASI BARU (LEBIH ELEGAN) ---

    // 1. Stagger Container untuk memunculkan elemen berurutan
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    // 2. Cinematic Text Reveal (Masuk dari bawah + efek Blur tajam)
    const cinematicReveal = {
        hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } // Kurva mulus ala Apple
        }
    };

    // 3. Spring Button (Efek memantul untuk memancing klik)
    const buttonPop = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120, damping: 14 }
        }
    };

    // 4. Footer Slide Up
    const footerReveal = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <>
            {/* ================= 1. CTA SECTION ================= */}
            <section className="relative bg-[#FDF8F0] py-24 lg:py-32 px-6 lg:px-16 text-center overflow-hidden">

                {/* ANIMASI BLOB BACKGROUND (Breathing/Berdenyut lambat) */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(45,106,79,0.08)_0%,transparent_65%)] pointer-events-none"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
                >
                    {/* Eyebrow */}
                    <motion.div variants={cinematicReveal} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#2D6A4F] mb-5 bg-[#F0F7F2] px-4 py-2 rounded-full border border-[#2D6A4F]/10">
                        <Sparkles size={14} className="text-[#F4A830]" /> Yuk, Mulai Sekarang
                    </motion.div>

                    {/* Judul Utama */}
                    <motion.h2 variants={cinematicReveal} className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[#1A2E22] leading-[1.1] mb-6 tracking-tight">
                        Jaga Gizi Bunda,<br />
                        <em className="italic text-[#2D6A4F] font-normal">Jaga Masa Depan</em>{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4830A] to-[#F4A830]">Si Kecil</span>
                    </motion.h2>

                    {/* Deskripsi */}
                    <motion.p variants={cinematicReveal} className="text-base text-[#5A7065] leading-relaxed mb-10 max-w-xl">
                        Bergabunglah dalam Program CERMAT dan mulai perjalanan kehamilan yang lebih sehat, cerdas, dan tenang — bersama dr. Sarah.
                    </motion.p>

                    {/* Tombol Aksi */}
                    <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            variants={buttonPop}
                            onClick={() => setActiveSlide("menu_mingguan")}
                            className="bg-[#2D6A4F] hover:bg-[#40916C] text-white px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl shadow-[#2D6A4F]/30 hover:shadow-2xl hover:shadow-[#2D6A4F]/40 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <Utensils size={18} className="group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300" />
                            Eksplorasi Menu Sehat
                        </motion.button>

                        <motion.button
                            variants={buttonPop}
                            onClick={() => setActiveSlide("materi_kek")}
                            className="bg-white hover:bg-[#F0F7F2] text-[#2D6A4F] border-2 border-[#2D6A4F]/20 hover:border-[#2D6A4F] px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-black/5 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <BookOpen size={18} className="group-hover:scale-110 transition-transform duration-300" />
                            Pelajari Risiko KEK
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>


        </>
    );
}