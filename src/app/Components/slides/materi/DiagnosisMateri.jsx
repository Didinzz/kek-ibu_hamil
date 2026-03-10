"use client";
import { motion } from "framer-motion";
import { Ruler, Scale, Info, PersonStanding, Crosshair, Target, Eye, ClipboardList, ArrowRight } from "lucide-react";

export default function DiagnosisMateri() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };
    const barFillVariants = {
        hidden: { width: "0%" },
        visible: { width: "100%", transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1 } }
    };
    const sliderVariants = {
        hidden: { left: "0%", opacity: 0 },
        visible: { left: "67.14%", opacity: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1 } }
    };

    return (
        <section id="diagnosis" className="py-16 px-6 lg:px-16 max-w-7xl mx-auto scroll-mt-20">
            <div className="w-full">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="mb-8">
                    <motion.div variants={itemVariants} className="flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#e71d89] mb-3">
                        02 — Diagnosis & Skrining
                        <div className="flex-1 h-px bg-[#e71d89]/20"></div>
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="font-serif text-3xl md:text-4xl font-bold text-[#1E293B] mb-3 tracking-tight">
                        Cara Menegakkan Diagnosis
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-[14px] text-slate-500 max-w-2xl leading-relaxed">
                        Dua metode antropometri yang diakui pedoman Kemenkes — LILA untuk skrining lapangan, IMT untuk konfirmasi pada TM I.
                    </motion.p>
                </motion.div>

                <div className="bg-[#1E293B] rounded-3xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative overflow-hidden mb-6 shadow-xl">
                    <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#e71d89]/30 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#c21470]/20 rounded-full blur-3xl pointer-events-none"></div>

                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 space-y-6">
                        <motion.div variants={itemVariants} className="text-[10px] font-extrabold tracking-widest uppercase text-[#FFD1E8] mb-3">Metode Standar Kemenkes RI</motion.div>
                        <motion.h3 variants={itemVariants} className="font-serif text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                            LILA & <em className="italic text-[#e71d89] font-medium">IMT</em> Pra-Hamil
                        </motion.h3>
                        <div className="text-[14px] text-white/85 leading-[1.7] space-y-5">
                            <motion.div variants={itemVariants} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#e71d89] text-white flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5">1</div>
                                <div>
                                    <strong className="text-white mb-1 flex items-center gap-2"><Ruler size={16} className="text-[#e71d89]" /> LILA &lt; 23,5 cm</strong>
                                    Ibu hamil dinyatakan <em className="not-italic text-[#FFD1E8] font-bold">Risiko KEK</em>. Diukur kapan saja selama kehamilan oleh bidan/kader menggunakan pita LILA. Mudah, murah, bisa dilakukan di Posyandu.
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5">2</div>
                                <div>
                                    <strong className="text-white mb-1 flex items-center gap-2"><Scale size={16} className="text-white/80" /> IMT &lt; 18,5 kg/m²</strong>
                                    Ibu dinyatakan <em className="not-italic text-white font-bold">KEK</em>. Dinilai dari IMT pra-hamil atau saat TM I (usia kehamilan ≤ 12 minggu). IMT = BB(kg) ÷ TB(m)². Lebih definitif namun butuh data BB pra-hamil.
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className="pt-5 border-t border-white/10">
                                <p className="mb-2">Dalam alur tatalaksana, Kemenkes menyatukan keduanya sebagai <strong className="text-[#FFD1E8]">"KEK/Risiko KEK"</strong> — intervensi yang diberikan sama.</p>
                                <div className="text-[11.5px] text-white/50 flex items-start gap-2">
                                    <Info size={14} className="shrink-0 mt-0.5" />
                                    <span>Sumber: <strong className="text-white/70">Ayosehat.kemkes.go.id; Juknis PMT Lokal Kemenkes 2025</strong></span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 bg-white/5 border border-white/10 rounded-[20px] p-6 lg:p-7 backdrop-blur-md">
                        <motion.div variants={itemVariants} className="text-[11px] font-bold tracking-widest uppercase text-[#FFD1E8] mb-5">Interpretasi LILA Ibu Hamil</motion.div>
                        <motion.div variants={itemVariants} className="mb-6 relative">
                            <div className="h-3.5 rounded-full w-full bg-white/10 relative overflow-hidden shadow-inner">
                                <motion.div variants={barFillVariants} className="absolute top-0 left-0 h-full bg-linear-to-r from-[#e71d89] via-white/50 to-white/10 rounded-full" />
                            </div>
                            <motion.div variants={sliderVariants} className="absolute -top-1.5 w-1.5 h-6 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20" />
                            <div className="flex justify-between text-[10.5px] text-white/50 font-semibold mt-3 px-1">
                                <span>20 cm</span><span className="text-white font-bold">23,5</span><span>30 cm</span>
                            </div>
                        </motion.div>
                        <div className="space-y-3 mb-5">
                            <motion.div variants={itemVariants} className="flex items-center gap-3 bg-[#e71d89]/20 border border-[#e71d89]/30 p-3 rounded-xl">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#e71d89] shrink-0"></div>
                                <div>
                                    <div className="font-serif text-[15px] font-bold text-[#FFD1E8] leading-none mb-1">&lt; 23,5 cm</div>
                                    <div className="text-[11.5px] text-white/70 font-medium flex items-center gap-1">
                                        <ArrowRight size={12} className="text-white/50" /> <strong className="text-white">Risiko KEK</strong> · Intervensi segera
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl">
                                <div className="w-2.5 h-2.5 rounded-full bg-white/40 shrink-0"></div>
                                <div>
                                    <div className="font-serif text-[15px] font-bold text-white/80 leading-none mb-1">≥ 23,5 cm</div>
                                    <div className="text-[11.5px] text-white/50 font-medium flex items-center gap-1">
                                        <ArrowRight size={12} className="text-white/30" /> Normal · Tetap pantau rutin
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-[12px] text-white/70 leading-relaxed text-center">
                            + Jika IMT pra-hamil / TM I &lt; 18,5 kg/m² → dikategorikan <strong className="text-white">KEK</strong>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 lg:p-8">
                    <motion.h3 variants={itemVariants} className="font-serif text-xl font-bold text-[#1E293B] mb-6 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#FFF5F9] flex items-center justify-center text-[#e71d89]">
                            <ClipboardList size={18} strokeWidth={2.5} />
                        </div>
                        Prosedur Pengukuran LILA yang Benar
                    </motion.h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                        {[
                            { icon: <PersonStanding size={24} />, title: "Posisi", desc: "Lengan kiri rileks, menggantung natural di sisi tubuh" },
                            { icon: <Crosshair size={24} />, title: "Titik Ukur", desc: "Pertengahan antara akromion dan olekranon" },
                            { icon: <Target size={24} />, title: "Cara Melingkar", desc: "Pita melingkari lengan pas — tidak longgar, tidak menekan" },
                            { icon: <Eye size={24} />, title: "Baca Hasil", desc: "Baca skala pada angka yang tepat, catat dalam cm" }
                        ].map((step, index) => (
                            <motion.div key={index} variants={itemVariants} className="bg-[#FAFAFA] border border-slate-100 rounded-xl p-5 text-center hover:border-[#e71d89]/30 transition-colors">
                                <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-[#e71d89] shadow-sm border border-slate-100 mb-3">
                                    {step.icon}
                                </div>
                                <div className="text-[13px] font-bold text-[#1E293B] mb-1.5">{step.title}</div>
                                <div className="text-[11.5px] text-slate-500 leading-relaxed">{step.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#FFF5F9] border border-[#e71d89]/20 rounded-lg px-4 py-2.5 text-[11.5px] text-slate-600">
                        <Info size={14} className="text-[#e71d89] shrink-0" />
                        <span>Sumber: <strong className="text-[#1E293B]">Pedoman Pelayanan Gizi Ibu Hamil KEK, Kemenkes RI 2018 | Buku Saku Pemantauan Status Gizi (PSG) Kemenkes RI 2017</strong></span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}