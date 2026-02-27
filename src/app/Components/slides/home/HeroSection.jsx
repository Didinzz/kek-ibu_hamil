"use client";
import { motion } from "framer-motion";
import { BookOpen, Utensils, Leaf, Pill, Egg, ShoppingCart, CheckCircle2 } from "lucide-react";

export default function HeroSection({ setActiveSlide }) {

    // --- KONFIGURASI ANIMASI FRAMER MOTION ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    // Konfigurasi animasi looping
    const floatVariants = (delay = 0) => ({
        animate: {
            y: [0, -12, 0],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay }
        }
    });

    const spinPopVariants = {
        animate: {
            scale: [1, 1.15, 1],
            rotate: [0, 10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const morphVariants = {
        animate: {
            borderRadius: [
                "55% 45% 45% 55% / 40% 55% 45% 60%",
                "45% 55% 60% 40% / 55% 40% 60% 45%",
                "60% 40% 45% 55% / 45% 60% 40% 55%",
                "55% 45% 45% 55% / 40% 55% 45% 60%"
            ],
            transition: { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }
    };

    return (
        // Menggunakan background dasar krem lembut asli (#FDF8F0) agar major area tetap hangat
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative min-h-screen pt-32 pb-24 px-6 lg:px-16 overflow-hidden flex flex-col justify-end bg-[#FDF8F0]"
        >

            {/* --- BACKGROUND DECORATIONS --- */}
            {/* Titik-titik pola background diredam warnanya menjadi sangat tipis nge-pink */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(231,29,137,0.06)_1.5px,transparent_1.5px)] bg-size-[36px_36px] pointer-events-none z-0"></div>

            {/* Ornamen Bulatan Lembut (Muted Blush & Pale Ochre) */}
            {/* Warna Ochre diredam total agar tidak bentrok */}
            <div className="absolute w-96 h-96 scale-150 -top-24 -right-20 rounded-full bg-[radial-gradient(circle,#FBF0ED_0%,transparent_70%)] opacity-20 pointer-events-none z-0"></div>
            <div className="absolute w-80 h-80 bottom-24 -left-16 rounded-full bg-[radial-gradient(circle,#EAD8C1_0%,transparent_70%)] opacity-15 pointer-events-none z-0"></div>
            <div className="absolute w-40 h-40 top-48 left-1/3 rounded-full bg-[radial-gradient(circle,#FBF0ED_0%,transparent_70%)] opacity-10 pointer-events-none z-0"></div>

            {/* Arc Putih Lengkung di Bawah (Tetap) */}
            <div className="absolute -bottom-1 left-0 right-0 h-32 bg-white [clip-path:ellipse(60%_100%_at_50%_100%)] z-10"></div>


            {/* --- KONTEN UTAMA --- */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end relative z-20 w-full">

                {/* === KIRI: TEKS UTAMA === */}
                <div className="pb-10 lg:pb-16 flex flex-col items-start">

                    {/* Tag Lokasi (Warna Merah Muda Bersih) */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-[#FFF5F9] border border-[#e71d89]/15 text-[#e71d89] px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-8 shadow-sm">
                        <motion.span variants={spinPopVariants} animate="animate" className="w-6 h-6 bg-[#e71d89] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                            <Leaf size={12} strokeWidth={3} />
                        </motion.span>
                        Program Gizi — Tuban, Jatim
                    </motion.div>

                    {/* Headline (Teks Dongker Gelap Elegan) */}
                    <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-black text-[#1E293B] mb-6 tracking-tight">
                        Bumil Sehat,<br />
                        <span className="text-[#e71d89]">Bebas</span>
                        <span className="text-[#e71d89] font-serif"> Risiko KEK</span>
                    </motion.h1>

                    {/* Paragraf */}
                    <motion.p variants={itemVariants} className="text-base md:text-lg leading-relaxed text-slate-600 max-w-lg mb-10">
                        Halo Bunda, saya <strong className="text-[#e71d89] font-bold">dr. Sarah</strong> 👋 — Website ini hadir untuk
                        menemani Bunda mencegah dan mengelola risiko
                        <strong className="text-[#e71d89] font-bold"> Kekurangan Energi Kronis (KEK)</strong>.
                        Lewat panduan menu bergizi yang terjangkau dan disesuaikan dengan standar <strong className="text-[#e71d89] font-bold">AKG 2019</strong>.
                    </motion.p>

                    {/* Tombol Aksi */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
                        {/* Tombol Utama: Merah Muda Solid */}
                        <button
                            onClick={() => setActiveSlide("menu_mingguan")}
                            className="bg-[#e71d89] hover:bg-[#c21470] text-white px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-[#e71d89]/30 hover:shadow-xl hover:shadow-[#e71d89]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        >
                            <Utensils size={18} className="group-hover:rotate-12 transition-transform" /> Lihat Menu 7 Hari
                        </button>
                        {/* Tombol Sekunder: Outline Merah Muda */}
                        <button
                            onClick={() => setActiveSlide("materi_kek")}
                            className="bg-white border-2 border-[#e71d89] hover:bg-[#e71d89]/5 text-[#e71d89] px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm"
                        >
                            <BookOpen size={18} /> Kenali Risiko KEK
                        </button>
                    </motion.div>

                    {/* Statistik Bawah */}
                    <motion.div variants={itemVariants} className="flex items-stretch">
                        <div className="pr-6 lg:pr-8 border-r border-slate-200 mr-6 lg:mr-8">
                            <div className="font-serif text-3xl md:text-4xl font-bold text-[#e71d89] leading-none">
                                7<sup className="text-lg text-[#EAD8C1] ml-1">hari</sup>
                            </div>
                            <div className="text-xs text-slate-500 font-semibold tracking-wide mt-2">Menu Lengkap</div>
                        </div>
                        <div className="pr-6 lg:pr-8 border-r border-slate-200 mr-6 lg:mr-8">
                            <div className="font-serif text-3xl md:text-4xl font-bold text-[#e71d89] leading-none">3</div>
                            <div className="text-xs text-slate-500 font-semibold tracking-wide mt-2">Panduan Trimester</div>
                        </div>
                        <div>
                            <div className="font-serif text-3xl md:text-4xl font-bold text-[#e71d89] leading-none">
                                ≤48<sup className="text-lg text-[#EAD8C1] ml-1">rb</sup>
                            </div>
                            <div className="text-xs text-slate-500 font-semibold tracking-wide mt-2">Budget / Hari</div>
                        </div>
                    </motion.div>
                </div>


                {/* === KANAN: FOTO DR SARAH === */}
                <motion.div variants={itemVariants} className="hidden lg:flex justify-center items-end relative">
                    <div className="relative w-full max-w-md aspect-4/5">

                        {/* === BLOB BEBELAKANG (Rombak Total) === */}
                        {/* Diubah menjadi gradien PURE PINK, Soft Pink -> Magenta Pink (#e71d89) */}
                        {/* Tanpa unsur emas/ochre sama sekali di dalam gradien ini */}
                        <motion.div
                            variants={morphVariants}
                            animate="animate"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-100 h-117.5 bg-linear-to-br from-[#FFD1E8] via-[#e71d89] to-[#c21470] z-0 opacity-85"
                        />

                        {/* Chip Melayang Kiri Atas */}
                        <motion.div variants={floatVariants(0)} animate="animate" className="absolute top-10 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 z-30 border border-slate-100">
                            <div className="bg-[#FFF5F9] p-2 rounded-full text-[#e71d89]">
                                <Pill size={20} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-[#1E293B] leading-tight">Tablet Fe Gratis</div>
                                <div className="text-[10px] text-slate-500 mt-0.5">di Puskesmas Tuban</div>
                            </div>
                        </motion.div>

                        {/* Chip Melayang Kanan Tengah (Ochre diredam parah agar netral) */}
                        <motion.div variants={floatVariants(1.2)} animate="animate" className="absolute top-1/3 -right-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 z-30 border border-slate-100">
                            <div className="bg-[#FAFAFA] border border-[#EAD8C1]/20 p-2 rounded-full text-[#EAD8C1]">
                                <Egg size={20} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-[#1E293B] leading-tight">Protein Cukup</div>
                                <div className="text-[10px] text-slate-500 mt-0.5">Tiap Trimester</div>
                            </div>
                        </motion.div>

                        {/* Chip Melayang Kiri Bawah (Merah Muda Solid) */}
                        <motion.div variants={floatVariants(2)} animate="animate" className="absolute bottom-40 -left-12 bg-[#e71d89] text-white rounded-2xl p-4 shadow-xl flex items-center gap-4 z-30">
                            <div className="bg-white/20 p-2 rounded-full text-white">
                                <ShoppingCart size={20} />
                            </div>
                            <div>
                                <div className="text-xs font-bold leading-tight">Harga Pasar Tuban</div>
                                <div className="text-[10px] text-white/80 mt-0.5">Realistis & Hemat</div>
                            </div>
                        </motion.div>

                        {/* FOTO DOKTER (Ukuran disesuaikan jadi w-96 agar lebih besar seperti revisi sebelumnya) */}
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-96 z-10 drop-shadow-2xl">
                            <img
                                src="/images/dokter.png"
                                alt="Foto dr. Sarah"
                                className="w-full h-auto object-contain pointer-events-none"
                            />
                        </div>

                        {/* Name Card Kanan Bawah */}
                        <motion.div variants={floatVariants(0.5)} animate="animate" className="absolute bottom-16 right-0 lg:-right-4 bg-white rounded-2xl px-6 py-3 shadow-2xl z-30 border-l-4 border-[#e71d89]">
                            <div className="font-serif text-base font-bold text-[#1E293B]">dr. Sarah</div>
                            <div className="text-xs text-slate-500 font-semibold mt-1">Dokter Internsip</div>
                            <div className="inline-flex items-center gap-1.5 mt-2 bg-[#FFF5F9] px-3 py-1.5 rounded-full text-[10px] font-bold text-[#e71d89]">
                                <CheckCircle2 size={12} /> AKG 2019 Kemenkes
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}