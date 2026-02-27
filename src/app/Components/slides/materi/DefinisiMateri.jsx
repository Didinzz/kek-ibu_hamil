"use client";

import { motion } from "framer-motion";
import { BookOpen, Baby, AlertTriangle, Info } from "lucide-react";

export default function DefinisiMateri() {
    // --- KONFIGURASI ANIMASI INDIVIDUAL ---
    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                delay: delay,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        // Background putih bersih agar menyatu dengan lengkungan (curve) dari HeroMateri di atasnya
        <section id="definisi" className="py-16 px-6 lg:px-16 max-w-7xl mx-auto scroll-mt-20 bg-white">
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
                    <div className="flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#e71d89] mb-3">
                        01 — Definisi
                        <div className="flex-1 h-px bg-[#e71d89]/20"></div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E293B] mb-3 tracking-tight">
                        Apa Itu KEK?
                    </h2>
                    <p className="text-[14px] text-slate-500 max-w-2xl leading-relaxed">
                        Pemahaman dasar yang perlu diketahui tenaga kesehatan dan ibu hamil sebelum melakukan skrining.
                    </p>
                </motion.div>

                {/* === BENTO GRID LAYOUT (COMPACT & SLEEK) === */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                    {/* KARTU 1: Definisi Umum (Soft Pink Background) */}
                    <motion.div
                        custom={0.1}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative bg-linear-to-br from-[#FFF5F9] to-white border border-[#e71d89]/15 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#e71d89] shadow-sm border border-[#e71d89]/10 shrink-0">
                                <BookOpen size={20} strokeWidth={2} />
                            </div>
                            <div>
                                <div className="text-[10px] font-extrabold tracking-widest uppercase text-[#e71d89]">Definisi Umum</div>
                                <h3 className="font-serif text-xl font-bold text-[#1E293B] leading-tight">Kekurangan Energi Kronis (KEK)</h3>
                            </div>
                        </div>
                        <p className="text-[14px] text-slate-600 leading-relaxed">
                            KEK adalah keadaan dimana seseorang mengalami <strong className="text-[#1E293B] font-bold">kekurangan asupan energi dan protein yang berlangsung lama (kronis)</strong>, ditandai oleh rendahnya cadangan energi dalam jangka waktu cukup lama. Kondisi ini berbeda dengan kekurangan gizi akut karena sifatnya menahun dan bisa dimulai sejak masa remaja sebelum kehamilan.
                        </p>
                    </motion.div>

                    {/* KARTU 2: Konteks Ibu Hamil (Clean White Background) */}
                    <motion.div
                        custom={0.2}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-[#FFF5F9] rounded-xl flex items-center justify-center text-[#e71d89] shadow-sm border border-[#e71d89]/10 shrink-0">
                                <Baby size={20} strokeWidth={2.5} />
                            </div>
                            <div>
                                <div className="text-[10px] font-extrabold tracking-widest uppercase text-[#e71d89]">Pada Ibu Hamil — Pedoman Kemenkes</div>
                                <h3 className="font-serif text-xl font-bold text-[#1E293B] leading-tight">KEK vs Risiko KEK: Apa Bedanya?</h3>
                            </div>
                        </div>

                        <div className="text-[14px] text-slate-600 leading-relaxed">
                            <p>Dalam pedoman Kemenkes, terminologi <strong className="text-[#1E293B] font-bold">"KEK/Risiko KEK"</strong> dipakai bersamaan dalam alur tatalaksana. Secara teknis:</p>
                            <ul className="mt-2 space-y-1 mb-2 pl-1">
                                <li className="flex gap-2 items-start"><span className="text-[#e71d89]">•</span><span><strong className="text-[#1E293B]">LILA &lt; 23,5 cm</strong> = <em className="text-[#1E293B] font-medium not-italic">risiko</em> KEK (skrining)</span></li>
                                <li className="flex gap-2 items-start"><span className="text-[#e71d89]">•</span><span><strong className="text-[#1E293B]">IMT pra-hamil &lt; 18,5 kg/m²</strong> pada TM I (≤12 minggu) = KEK lebih definitif.</span></li>
                            </ul>
                            <p>Intervensi yang diberikan <strong className="text-[#1E293B] font-bold">sama</strong> untuk keduanya.</p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 text-[11.5px] text-slate-500">
                            Sumber: <strong className="text-slate-600">Ayosehat Kemkes; Juknis PMT Lokal Kemenkes 2025</strong>
                        </div>
                    </motion.div>

                </div>

                {/* === WARNING ALERT BOX (Magenta Theme) === */}
                <motion.div
                    custom={0.3}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative bg-[#FFF5F9] border border-[#e71d89]/20 rounded-2xl p-5 lg:p-6 flex flex-col md:flex-row gap-5 items-start shadow-sm"
                >
                    {/* Garis merah muda tebal di sisi kiri */}
                    <div className="absolute left-0 top-5 bottom-5 w-1.5 bg-[#e71d89] rounded-r-md opacity-80"></div>

                    <div className="w-10 h-10 bg-[#e71d89]/10 rounded-full flex items-center justify-center shrink-0">
                        <AlertTriangle size={20} className="text-[#e71d89]" strokeWidth={2.5} />
                    </div>

                    <div className="flex-1">
                        {/* Judul warning menggunakan Magenta Tua (#c21470) agar terkesan penting namun tetap senada */}
                        <h4 className="font-serif text-lg font-bold text-[#c21470] mb-2 leading-tight">
                            Penting: KEK/Risiko KEK BUKAN Didiagnosis dengan Pemeriksaan Biokimia
                        </h4>
                        <p className="text-[14px] text-slate-700 leading-relaxed mb-3">
                            Standar skrining KEK pada ibu hamil adalah <strong className="text-[#1E293B]">pengukuran LILA dan/atau IMT pra-hamil (antropometri)</strong>, bukan pemeriksaan laboratorium biokimia seperti albumin serum atau kadar Hb. Pemeriksaan biokimia (Hb) digunakan untuk mendiagnosis <strong className="text-[#1E293B]">anemia</strong> yang merupakan <em>komorbiditas</em> KEK — bukan untuk mendiagnosis KEK/risiko KEK itu sendiri. Dalam Juknis PMT Lokal 2025, alur tatalaksana ditulis "KEK/Risiko KEK" untuk mencakup kedua kondisi tersebut.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white/80 border border-[#e71d89]/15 rounded-md px-3 py-2 text-[11.5px] text-slate-600">
                            <Info size={14} className="text-[#e71d89] shrink-0" />
                            <span>Sumber: <strong className="text-[#1E293B]">Juknis PMT Berbahan Pangan Lokal, Kemenkes RI 2025; Pedoman Pelayanan Gizi Bumil KEK, 2018</strong></span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}