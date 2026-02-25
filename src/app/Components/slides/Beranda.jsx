"use client";

import { motion } from "framer-motion";

export default function Beranda({ setActiveSlide }) {
    // [Konfigurasi Animasi Tetap Sama Seperti Sebelumnya]
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
        exit: { opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
    };

    const textReveal = {
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
    };

    const imageReveal = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
    };

    const accentBoxReveal = {
        hidden: { opacity: 0, x: -20, y: -20 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } }
    };

    const badgePop = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.6 } }
    };

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full w-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-32 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-20 items-center content-center"
        >

            {/* =========================================
                BAGIAN 1: HERO TITLE 
                (Urutan 1 di HP, Kiri Atas di Laptop)
            ============================================= */}
            <motion.div
                variants={textReveal}
                className="order-1 lg:col-start-1 lg:row-start-1 flex flex-col gap-5 self-end"
            >
                <div className="flex items-center gap-4">
                    <div className="w-8 lg:w-10 h-1 bg-emerald-600 rounded-full"></div>
                    <span className="text-emerald-700 text-xs sm:text-sm font-bold tracking-widest uppercase">
                        Program Pencegahan
                    </span>
                </div>

                <div className="space-y-3">
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-[#D4AF37] font-serif">
                        <span className="text-slate-600 font-serif">Cermat.</span>
                    </span>
                    
                    <h2 className="font-medium text-slate-500 text-2xl sm:text-3xl lg:text-4xl leading-snug">
                        Cegah KEK dengan menu bergizi untuk ibu hamil.
                    </h2>
                </div>
            </motion.div>


            {/* =========================================
                BAGIAN 2: FOTO DOKTER
                (Urutan 2 di HP, Kanan di Laptop membentang 2 baris)
            ============================================= */}
            <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex justify-center lg:justify-end items-center relative mt-6 mb-2 lg:m-0 z-10">
                <div className="relative w-64 h-80 lg:w-80 lg:h-96">
                    <motion.div
                        variants={accentBoxReveal}
                        className="absolute top-6 -right-6 lg:top-8 lg:-right-8 w-full h-full bg-emerald-50 rounded-3xl -z-10"
                    />
                    <motion.img
                        variants={imageReveal}
                        src="https://media.istockphoto.com/id/1394644023/photo/smiling-asian-female-doctor-in-lab-coat-with-arms-crossed-against-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=UUxUQvECp_-dkNIKYN31huwVYxn6ZOWjxuyOIFh6bwE="
                        alt="Potret Dokter Sarah"
                        className="w-full h-full object-cover rounded-3xl shadow-xl shadow-slate-200 border border-slate-50 relative z-10"
                    />
                    <motion.div
                        variants={badgePop}
                        className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-12 bg-white p-4 lg:p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-3 lg:gap-4 z-20"
                    >
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-slate-900 font-bold text-xs lg:text-sm">dr. Sarah, Sp.GK</span>
                            <span className="text-slate-500 text-[10px] lg:text-xs font-medium">Spesialis Gizi Klinik</span>
                        </div>
                    </motion.div>
                </div>
            </div>


            <motion.div
                variants={textReveal}
                className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-8 self-start pt-6 lg:pt-8"
            >
                {/* Garis pemisah diletakkan di sini agar menyatu dengan bagian kutipan */}
                <div className="w-full h-px bg-slate-200"></div>

                <div className="border-l-4 border-emerald-500 pl-6 py-1">
                    <p className="text-lg lg:text-xl text-slate-700 font-medium leading-relaxed tracking-wide">
                        "Hallo, saya <strong className="font-extrabold text-slate-900">Dokter Sarah</strong>.
                        Website ini dirancang untuk membantu Bunda mengontrol
                        <span className="text-emerald-700 font-bold px-1"> KEK (Kekurangan Energi Kronis) </span>
                        dengan menu lezat yang disesuaikan dengan AKG Nasional."
                    </p>
                </div>

                <div>
                    <button
                        onClick={() => setActiveSlide("menu_mingguan")}
                        className="group inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all shadow-lg shadow-emerald-200"
                    >
                        Lihat Menu Mingguan
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </motion.div>

        </motion.div>
    );
}