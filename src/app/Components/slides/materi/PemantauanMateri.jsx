"use client";

import { motion } from "framer-motion";
import { Stethoscope, TestTube, Scale, Droplet, Baby, ClipboardCheck, Info, FileText, Flame } from "lucide-react";

export default function PemantauanMateri() {
    // --- KONFIGURASI ANIMASI PIPELINE & ITEM ---
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(4px)" },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                delay: delay,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    // Animasi garis pipeline memanjang
    const lineVariants = {
        hidden: { width: "0%" },
        visible: {
            width: "100%",
            transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 }
        }
    };

    const lineVerticalVariants = {
        hidden: { height: "0%" },
        visible: {
            height: "100%",
            transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 }
        }
    };

    // Data Jadwal ANC (100% Teks Asli)
    const ancSchedule = [
        {
            icon: <Stethoscope size={22} strokeWidth={2} />,
            tm: "TM I", k: "K1", time: "≤ 12 minggu",
            desc: <><strong className="text-[#1A2E22]">Wajib periksa dokter</strong><br />Skrining LILA + IMT + edukasi gizi</>,
            color: "text-[#2D6A4F]", bg: "bg-[#E8F5EE]", border: "border-[#2D6A4F]",
            gradient: "from-[#2D6A4F] to-[#40916C]"
        },
        {
            icon: <TestTube size={22} strokeWidth={2} />,
            tm: "TM I", k: "K2", time: "≤ 12 minggu",
            desc: <>Evaluasi hasil lab<br />Mulai PMT jika KEK/Risiko KEK</>,
            color: "text-[#2D6A4F]", bg: "bg-[#E8F5EE]", border: "border-[#40916C]",
            gradient: "from-[#40916C] to-[#74C69D]"
        },
        {
            icon: <Scale size={22} strokeWidth={2} />,
            tm: "TM II", k: "K3", time: "13–28 minggu",
            desc: <>Pantau kenaikan BB<br />Evaluasi respons PMT</>,
            color: "text-[#D4A420]", bg: "bg-[#FFF9E6]", border: "border-[#D4A420]",
            gradient: "from-[#74C69D] to-[#F4A830]"
        },
        {
            icon: <Droplet size={22} strokeWidth={2} />,
            tm: "TM III", k: "K4", time: "28–36 minggu",
            desc: <>Cek Hb + evaluasi gizi</>,
            color: "text-[#C84C31]", bg: "bg-[#FFF5ED]", border: "border-[#C84C31]",
            gradient: "from-[#F4A830] to-[#C84C31]"
        },
        {
            icon: <Baby size={22} strokeWidth={2} />,
            tm: "TM III", k: "K5", time: "28–36 minggu",
            desc: <><strong className="text-[#1A2E22]">Wajib periksa dokter</strong><br />Pantau tumbuh kembang janin</>,
            color: "text-[#C84C31]", bg: "bg-[#FFF5ED]", border: "border-[#C84C31]",
            gradient: "from-[#C84C31] to-[#92400E]"
        },
        {
            icon: <ClipboardCheck size={22} strokeWidth={2} />,
            tm: "TM III", k: "K6", time: "≥ 36 minggu",
            desc: <>Persiapan persalinan<br />Evaluasi akhir status gizi</>,
            color: "text-[#C84C31]", bg: "bg-[#FFF5ED]", border: "border-[#C84C31]",
            gradient: "from-[#92400E] to-[#1A2E22]"
        },
    ];

    return (
        <section id="pemantauan" className="py-16 px-6 lg:px-16 max-w-7xl mx-auto scroll-mt-20">
            <div className="w-full">

                {/* === HEADER SECTION === */}
                <motion.div
                    custom={0}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#2D6A4F] mb-3">
                        06 — Jadwal Pemantauan
                        <div className="flex-1 h-px bg-[#2D6A4F]/20"></div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2E22] mb-3 tracking-tight">
                        Kapan Harus Periksa?
                    </h2>
                    <p className="text-[14px] text-slate-500 max-w-2xl leading-relaxed">
                        ANC minimal <strong className="text-[#1A2E22]">6 kali</strong> selama kehamilan — standar Permenkes No. 21 Tahun 2021, menyesuaikan rekomendasi WHO. Minimal 2× diperiksa langsung oleh dokter.
                    </p>
                </motion.div>

                {/* === PIPELINE LAYOUT === */}
                <div className="relative mb-16 pt-4">

                    {/* GARIS PIPELINE DESKTOP (Horizontal) */}
                    <div className="hidden lg:block absolute top-7.5 left-[8%] right-[8%] h-2 bg-slate-100 rounded-full z-0 overflow-hidden">
                        <motion.div
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="h-full bg-linear-to-r from-[#2D6A4F] via-[#F4A830] to-[#C84C31] rounded-full"
                        ></motion.div>
                    </div>

                    {/* GARIS PIPELINE MOBILE (Vertical) */}
                    <div className="block lg:hidden absolute top-4 bottom-4 left-8.75 w-1.5 bg-slate-100 rounded-full z-0 overflow-hidden">
                        <motion.div
                            variants={lineVerticalVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="w-full bg-linear-to-b from-[#2D6A4F] via-[#F4A830] to-[#C84C31] rounded-full"
                        ></motion.div>
                    </div>

                    {/* ITEM-ITEM PIPELINE */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between relative z-10">
                        {ancSchedule.map((item, index) => (
                            <motion.div
                                key={index}
                                custom={0.2 + (index * 0.2)} // Animasi muncul berurutan mengikuti garis
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="flex flex-row lg:flex-col items-start lg:items-center flex-1 relative group"
                            >
                                {/* Titik Node (Bulatan Ikon) */}
                                <div className={`w-16 h-16 shrink-0 lg:mx-auto rounded-full bg-white border-4 ${item.border} flex items-center justify-center ${item.color} shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                    {item.icon}
                                </div>

                                {/* Konten Teks */}
                                <div className="ml-5 lg:ml-0 lg:mt-6 lg:text-center flex-1">
                                    <div className="inline-flex items-center justify-center gap-1.5 bg-slate-100 border border-slate-200 text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md mb-2">
                                        <span className={item.color}>{item.tm}</span> <span className="text-slate-400">|</span> <span className="text-slate-600">{item.k}</span>
                                    </div>
                                    <div className="text-[13px] font-bold text-[#1A2E22] mb-1.5 lg:px-2">{item.time}</div>
                                    <div className="text-[11px] text-slate-500 leading-relaxed lg:px-4">{item.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* === INFO DISTRIBUSI ANC (BOX) === */}
                <motion.div
                    custom={0.5}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex items-start gap-4 bg-[#FAFAFA] border border-slate-200 rounded-2xl p-6 mb-10 shadow-sm"
                >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                        <FileText size={20} className="text-[#2D6A4F]" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="text-[14px] font-bold text-[#1A2E22] mb-1.5">
                            Distribusi ANC: 2× TM I — 1× TM II — 3× TM III
                        </h4>
                        <p className="text-[13.5px] text-slate-600 leading-relaxed">
                            Berdasarkan Permenkes No. 21 Tahun 2021. Minimal 2× diperiksa dokter: pada K1 (TM I) dan K5 (TM III). Untuk ibu hamil KEK/Risiko KEK disarankan frekuensi pemantauan lebih sering dari minimal.
                        </p>
                    </div>
                </motion.div>

                {/* === KEBUTUHAN ENERGI PER TRIMESTER === */}
                <motion.div
                    custom={0.6}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 lg:p-8"
                >
                    <h3 className="font-serif text-xl font-bold text-[#1A2E22] mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FFF5ED] flex items-center justify-center border border-[#C84C31]/10 shadow-sm">
                            <Flame size={20} className="text-[#C84C31]" strokeWidth={2.5} />
                        </div>
                        Kebutuhan Energi per Trimester (AKG 2019)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                        {/* KARTU TM I */}
                        <motion.div custom={0.7} variants={itemVariants} className="bg-white border border-[#2D6A4F]/20 rounded-2xl p-6 text-center shadow-sm relative overflow-hidden group hover:border-[#2D6A4F]/50 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#2D6A4F]"></div>
                            <div className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase mb-3 mt-2">Trimester 1</div>
                            <div className="font-serif text-4xl font-black text-[#1A2E22] leading-none mb-1">+180</div>
                            <div className="text-[12px] text-slate-500 font-medium mb-4">kkal/hari dari kebutuhan dasar</div>
                            <div className="inline-block bg-[#E8F5EE] border border-[#2D6A4F]/10 text-[11px] text-[#2D6A4F] font-bold px-4 py-1.5 rounded-full">
                                ~2.030 kkal total
                            </div>
                        </motion.div>

                        {/* KARTU TM II */}
                        <motion.div custom={0.8} variants={itemVariants} className="bg-white border border-[#F4A830]/20 rounded-2xl p-6 text-center shadow-sm relative overflow-hidden group hover:border-[#F4A830]/50 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#F4A830]"></div>
                            <div className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase mb-3 mt-2">Trimester 2</div>
                            <div className="font-serif text-4xl font-black text-[#1A2E22] leading-none mb-1">+300</div>
                            <div className="text-[12px] text-slate-500 font-medium mb-4">kkal/hari dari kebutuhan dasar</div>
                            <div className="inline-block bg-[#FFF9E6] border border-[#F4A830]/10 text-[11px] text-[#D4A420] font-bold px-4 py-1.5 rounded-full">
                                ~2.350 kkal total
                            </div>
                        </motion.div>

                        {/* KARTU TM III */}
                        <motion.div custom={0.9} variants={itemVariants} className="bg-white border border-[#C84C31]/20 rounded-2xl p-6 text-center shadow-sm relative overflow-hidden group hover:border-[#C84C31]/50 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#C84C31]"></div>
                            <div className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase mb-3 mt-2">Trimester 3</div>
                            <div className="font-serif text-4xl font-black text-[#1A2E22] leading-none mb-1">+300</div>
                            <div className="text-[12px] text-slate-500 font-medium mb-4">kkal/hari dari kebutuhan dasar</div>
                            <div className="inline-block bg-[#FFF5ED] border border-[#C84C31]/10 text-[11px] text-[#C84C31] font-bold px-4 py-1.5 rounded-full">
                                ~2.350 kkal total
                            </div>
                        </motion.div>
                    </div>

                    <div className="inline-flex items-center gap-3 bg-[#FAFAFA] border border-slate-100 rounded-xl px-5 py-4 text-[11.5px] text-slate-600">
                        <Info size={16} className="text-slate-400 shrink-0" />
                        <span className="leading-relaxed">Sumber: <strong className="text-[#1A2E22]">Peraturan Menteri Kesehatan Republik Indonesia Nomor 28 Tahun 2019 tentang Angka Kecukupan Gizi yang Dianjurkan untuk Masyarakat Indonesia.</strong> (Kebutuhan dasar wanita dewasa 19–49 tahun = ±1.750–1.900 kkal/hari)</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}