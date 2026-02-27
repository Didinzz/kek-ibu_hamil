"use client";

import { motion } from "framer-motion";
import { Ruler, Scale, Info, PersonStanding, Crosshair, Target, Eye, ClipboardList, ArrowRight } from "lucide-react";

export default function DiagnosisMateri() {
    // --- KONFIGURASI ANIMASI YANG LEBIH DRAMATIS & MEWAH ---
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 60, // Jarak luncur lebih jauh
            scale: 0.95, // Efek membesar perlahan
            filter: "blur(8px)"
        },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8, // Durasi lebih lama agar mulus
                delay: delay,
                ease: [0.16, 1, 0.3, 1] // Custom kurva ease (cepat di awal, melambat halus di akhir)
            }
        })
    };

    return (
        <section id="diagnosis" className="py-16 px-6 lg:px-16 max-w-7xl mx-auto scroll-mt-20">
            <div className="w-full">

                {/* === HEADER SECTION === */}
                <motion.div
                    custom={0}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#40916C] mb-3">
                        02 — Diagnosis & Skrining
                        <div className="flex-1 h-px bg-[#40916C]/20"></div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2E22] mb-3 tracking-tight">
                        Cara Menegakkan Diagnosis
                    </h2>
                    <p className="text-[14px] text-slate-500 max-w-2xl leading-relaxed">
                        Dua metode antropometri yang diakui pedoman Kemenkes — LILA untuk skrining lapangan, IMT untuk konfirmasi pada TM I.
                    </p>
                </motion.div>

                {/* === DIAGNOSIS BOX (Dark Emerald Theme) === */}
                <motion.div
                    custom={0.15}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-[#1A2E22] rounded-3xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative overflow-hidden mb-6 shadow-md"
                >
                    {/* Glow effect */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#2D6A4F]/40 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Left: Teks Diagnosis */}
                    <div className="relative z-10">
                        <div className="text-[10px] font-extrabold tracking-widest uppercase text-[#74C69D] mb-3">
                            Metode Standar Kemenkes RI
                        </div>
                        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#E8F5F5] mb-6 leading-tight">
                            LILA & <em className="italic text-[#74C69D] font-medium">IMT</em> Pra-Hamil
                        </h3>

                        <div className="text-[14px] text-[#E8F5F5]/85 leading-[1.7] space-y-5">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#F4A830] text-[#1A2E22] flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5">1</div>
                                <div>
                                    <strong className="text-white mb-1 flex items-center gap-2">
                                        <Ruler size={16} className="text-[#F4A830]" /> LILA &lt; 23,5 cm
                                    </strong>
                                    Ibu hamil dinyatakan <em className="not-italic text-[#F4A830] font-bold">Risiko KEK</em>. Diukur kapan saja selama kehamilan oleh bidan/kader menggunakan pita LILA. Mudah, murah, bisa dilakukan di Posyandu.
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#74C69D] text-[#1A2E22] flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5">2</div>
                                <div>
                                    <strong className="text-white mb-1 flex items-center gap-2">
                                        <Scale size={16} className="text-[#74C69D]" /> IMT &lt; 18,5 kg/m²
                                    </strong>
                                    Ibu dinyatakan <em className="not-italic text-[#74C69D] font-bold">KEK</em>. Dinilai dari IMT pra-hamil atau saat TM I (usia kehamilan ≤ 12 minggu). IMT = BB(kg) ÷ TB(m)². Lebih definitif namun butuh data BB pra-hamil.
                                </div>
                            </div>

                            <div className="pt-5 border-t border-white/10">
                                <p className="mb-2">Dalam alur tatalaksana, Kemenkes menyatukan keduanya sebagai <strong className="text-white">"KEK/Risiko KEK"</strong> — intervensi yang diberikan sama.</p>
                                <div className="text-[11.5px] text-[#74C69D]/80 flex items-start gap-2">
                                    <Info size={14} className="shrink-0 mt-0.5" />
                                    <span>Sumber: <strong className="text-white/80">Ayosehat.kemkes.go.id; Juknis PMT Lokal Kemenkes 2025</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: LILA Meter Visual */}
                    <div className="relative z-10 bg-white/5 border border-white/10 rounded-[20px] p-6 lg:p-7 backdrop-blur-sm">
                        <div className="text-[11px] font-bold tracking-widest uppercase text-[#74C69D] mb-5">
                            Interpretasi LILA Ibu Hamil
                        </div>

                        {/* LILA Gradient Bar */}
                        <div className="mb-6 relative">
                            <div className="h-3.5 rounded-full w-full bg-linear-to-r from-[#C84C31] via-[#F4A830] to-[#2D6A4F] relative shadow-inner">
                                <div className="absolute -top-1.25 left-[67.14%] w-1.5 h-6 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.5)]"></div>
                            </div>
                            <div className="flex justify-between text-[10.5px] text-white/50 font-semibold mt-2 px-1">
                                <span>20 cm</span>
                                <span className="mr-8">23,5</span>
                                <span>30 cm</span>
                            </div>
                        </div>

                        {/* Keterangan Zona */}
                        <div className="space-y-3 mb-5">
                            <div className="flex items-center gap-3 bg-[#C84C31]/15 border border-[#C84C31]/20 p-3 rounded-xl">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#C84C31] shrink-0"></div>
                                <div>
                                    <div className="font-serif text-[15px] font-bold text-[#F4A830] leading-none mb-1">&lt; 23,5 cm</div>
                                    <div className="text-[11.5px] text-white/70 font-medium flex items-center gap-1">
                                        <ArrowRight size={12} className="text-white/50" /> <strong className="text-white">Risiko KEK</strong> · Intervensi segera
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-[#2D6A4F]/30 border border-[#2D6A4F]/40 p-3 rounded-xl">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#74C69D] shrink-0"></div>
                                <div>
                                    <div className="font-serif text-[15px] font-bold text-[#74C69D] leading-none mb-1">≥ 23,5 cm</div>
                                    <div className="text-[11.5px] text-white/70 font-medium flex items-center gap-1">
                                        <ArrowRight size={12} className="text-white/50" /> Normal · Tetap pantau rutin
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#40916C]/15 border border-[#40916C]/20 rounded-xl p-3.5 text-[12px] text-white/80 leading-relaxed text-center">
                            + Jika IMT pra-hamil / TM I &lt; 18,5 kg/m² → dikategorikan <strong className="text-[#74C69D]">KEK</strong>
                        </div>
                    </div>
                </motion.div>

                {/* === PROSEDUR PENGUKURAN LILA === */}
                <motion.div
                    custom={0.3}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 lg:p-8"
                >
                    <h3 className="font-serif text-xl font-bold text-[#1A2E22] mb-6 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] flex items-center justify-center text-[#2D6A4F]">
                            <ClipboardList size={18} strokeWidth={2.5} />
                        </div>
                        Prosedur Pengukuran LILA yang Benar
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                        {/* 4 Kotak ini dianimasikan beruntun satu per satu dengan custom delay bertahap */}
                        {[
                            { icon: <PersonStanding size={24} strokeWidth={1.5} />, title: "Posisi", desc: "Lengan kiri rileks, menggantung natural di sisi tubuh" },
                            { icon: <Crosshair size={24} strokeWidth={1.5} />, title: "Titik Ukur", desc: "Pertengahan antara tulang akromion dan olekranon" },
                            { icon: <Target size={24} strokeWidth={1.5} />, title: "Cara Melingkar", desc: "Pita melingkari lengan pas — tidak longgar, tidak menekan" },
                            { icon: <Eye size={24} strokeWidth={1.5} />, title: "Baca Hasil", desc: "Baca skala pada angka yang tepat, catat dalam satuan cm" }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                custom={0.4 + (index * 0.15)} // Delay dominos: 0.4, 0.55, 0.7, 0.85
                                variants={itemVariants}
                                className="bg-[#FAFAFA] border border-slate-100 rounded-xl p-5 text-center hover:border-[#B7E4C7] transition-colors"
                            >
                                <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-[#2D6A4F] shadow-sm border border-slate-100 mb-3">
                                    {step.icon}
                                </div>
                                <div className="text-[13px] font-bold text-[#1A2E22] mb-1.5">{step.title}</div>
                                <div className="text-[11.5px] text-slate-500 leading-relaxed">{step.desc}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="inline-flex items-center gap-2 bg-[#FFF9E6] border border-[#F4A830]/20 rounded-lg px-4 py-2.5 text-[11.5px] text-slate-600">
                        <Info size={14} className="text-[#D4A420] shrink-0" />
                        <span>Sumber: <strong className="text-[#1A2E22]">Pedoman Pelayanan Gizi Ibu Hamil KEK, Kemenkes RI 2018 | Buku Saku Pemantauan Status Gizi (PSG) Kemenkes RI 2017</strong></span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}