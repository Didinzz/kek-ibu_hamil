"use client";

import { motion } from "framer-motion";
import { Activity, Baby, Flag, MapPin, Users, AlertCircle, RefreshCcw, TrendingUp } from "lucide-react";

export default function DampakMateri() {
    // --- KONFIGURASI ANIMASI ---
    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.7,
                delay: delay,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    const barVariants = {
        hidden: { width: 0 },
        visible: (widthPercent) => ({
            width: `${widthPercent}%`,
            transition: { duration: 1, delay: 0.8, ease: "easeOut" }
        })
    };

    return (
        <section id="dampak" className="py-16 px-6 lg:px-16 max-w-7xl mx-auto scroll-mt-20">
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
                        04 — Dampak Kesehatan
                        <div className="flex-1 h-px bg-[#e71d89]/20"></div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E293B] mb-3 tracking-tight">
                        Risiko Jika Tidak Ditangani
                    </h2>
                    <p className="text-[14px] text-slate-500 max-w-2xl leading-relaxed">
                        KEK pada ibu hamil bukan hanya masalah si ibu — dampaknya dirasakan langsung oleh bayi bahkan hingga jangka panjang.
                    </p>
                </motion.div>

                {/* === GRID IBU & BAYI === */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    {/* DAMPAK IBU (Pink Theme) */}
                    <motion.div
                        custom={0.1}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm"
                    >
                        <h3 className="font-serif text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#FFF5F9] flex items-center justify-center border border-[#e71d89]/10">
                                <Activity size={20} className="text-[#e71d89]" strokeWidth={2.5} />
                            </div>
                            Dampak pada Ibu
                        </h3>
                        <div className="space-y-3">
                            {[
                                { title: "Anemia", desc: "defisiensi zat besi akibat cadangan tubuh yang rendah" },
                                { title: "Perdarahan saat persalinan", desc: "kondisi tubuh lemah meningkatkan risiko komplikasi" },
                                { title: "Rentan infeksi", desc: "daya tahan tubuh menurun karena kekurangan gizi" },
                                { title: "Produksi ASI kurang", desc: "cadangan energi tidak cukup untuk menyusui optimal" },
                                { title: "Peningkatan risiko kematian ibu", desc: "terutama saat persalinan" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start bg-[#FAFAFA] border border-slate-100 p-4 rounded-xl hover:border-[#e71d89]/20 transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#e71d89] shrink-0 mt-2"></div>
                                    <div className="text-[13.5px] text-slate-600 leading-[1.6]">
                                        <strong className="text-[#1E293B]">{item.title}</strong> — {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* DAMPAK BAYI (Magenta Theme) */}
                    <motion.div
                        custom={0.2}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm"
                    >
                        <h3 className="font-serif text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#FFF5F9] flex items-center justify-center border border-[#e71d89]/10">
                                <Baby size={22} className="text-[#c21470]" strokeWidth={2.5} />
                            </div>
                            Dampak pada Bayi
                        </h3>
                        <div className="space-y-3">
                            {[
                                { title: "BBLR", desc: "(Berat Bayi Lahir Rendah < 2.500 g) — risiko komplikasi neonatal" },
                                { title: "Stunting", desc: "gangguan pertumbuhan linear jangka panjang pada anak" },
                                { title: "Gangguan perkembangan otak", desc: "kekurangan nutrisi mikro pada masa kritis" },
                                { title: "Prematuritas", desc: "risiko kelahiran sebelum usia kehamilan 37 minggu" },
                                { title: "Kematian neonatal", desc: "BBLR meningkatkan risiko kematian 20× lebih tinggi" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start bg-[#FAFAFA] border border-slate-100 p-4 rounded-xl hover:border-[#c21470]/20 transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#c21470] shrink-0 mt-2"></div>
                                    <div className="text-[13.5px] text-slate-600 leading-[1.6]">
                                        <strong className="text-[#1E293B]">{item.title}</strong> {item.title === "BBLR" ? "" : "—"} {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* === HIGHLIGHT 2 DATA === */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    {/* Data Nasional (Soft Pink) */}
                    <motion.div
                        custom={0.3}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-gradient-to-br from-[#FFF5F9] to-white border border-[#e71d89]/20 rounded-2xl p-6 lg:p-8 flex gap-5 items-center"
                    >
                        <div className="text-[#e71d89] shrink-0"><Flag size={40} strokeWidth={1.5} /></div>
                        <div>
                            <div className="font-serif text-3xl lg:text-4xl font-black text-[#1E293B] leading-none mb-1.5">17,3%</div>
                            <div className="text-[11.5px] font-bold text-[#e71d89] tracking-wide uppercase mb-2">Prevalensi Nasional — Riskesdas 2018</div>
                            <div className="text-[13.5px] text-slate-600 leading-relaxed">
                                Hampir <strong className="text-[#1E293B]">1 dari 5 ibu hamil</strong> di Indonesia terdeteksi risiko KEK. Angka Jawa Timur mencapai <strong className="text-[#1E293B]">~24,2%</strong>, lebih tinggi dari rata-rata nasional.
                            </div>
                        </div>
                    </motion.div>

                    {/* Data Lokal Tuban (Dark Navy) */}
                    <motion.div
                        custom={0.4}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-gradient-to-br from-[#1E293B] to-[#0f172a] rounded-2xl p-6 lg:p-8 flex gap-5 items-center shadow-lg relative overflow-hidden"
                    >
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e71d89]/20 rounded-full blur-2xl pointer-events-none"></div>
                        <div className="text-[#FFD1E8] shrink-0 relative z-10"><MapPin size={40} strokeWidth={1.5} /></div>
                        <div className="relative z-10">
                            <div className="font-serif text-3xl lg:text-4xl font-black text-white leading-none mb-1.5">32,97%</div>
                            <div className="text-[11.5px] font-bold text-[#FFD1E8] tracking-wide uppercase mb-2">Data Primer KIA x Gizi Puskesmas Soko 2025</div>
                            <div className="text-[13.5px] text-slate-300 leading-relaxed">
                                <strong className="text-white">181 dari 549</strong> ibu hamil teridentifikasi KEK/Risiko KEK — hampir <strong className="text-white">1 dari 3 ibu hamil</strong> di wilayah sasaran, melampaui angka nasional maupun Jawa Timur.
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* === PREVALENSI LOKAL (TUBAN) BOX UTAMA === */}
                <motion.div
                    custom={0.5}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 lg:p-10 mb-5"
                >
                    <h3 className="font-serif text-lg lg:text-xl font-bold text-[#1E293B] mb-8 flex items-center gap-2">
                        <TrendingUp size={22} className="text-[#e71d89]" strokeWidth={2.5} />
                        Gambaran Prevalensi KEK/Risiko KEK — Wilayah Kerja Puskesmas Soko, Tuban 2025
                    </h3>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-[#FAFAFA] border border-slate-100 rounded-2xl p-6 text-center">
                            <div className="flex justify-center mb-2 text-[#e71d89]"><Users size={24} /></div>
                            <div className="font-serif text-4xl font-black text-[#1E293B] leading-none mb-2">549</div>
                            <div className="text-[11.5px] font-bold text-slate-500">Total Ibu Hamil ANC 2025</div>
                        </div>
                        <div className="bg-[#FAFAFA] border border-slate-100 rounded-2xl p-6 text-center">
                            <div className="flex justify-center mb-2 text-[#c21470]"><AlertCircle size={24} /></div>
                            <div className="font-serif text-4xl font-black text-[#1E293B] leading-none mb-2">181</div>
                            <div className="text-[11.5px] font-bold text-slate-500">Ibu hamil teridentifikasi KEK/Risiko KEK</div>
                        </div>
                        <div className="bg-[#FFF5F9] border border-[#e71d89]/20 rounded-2xl p-6 text-center">
                            <div className="flex justify-center mb-2 text-[#e71d89]"><MapPin size={24} /></div>
                            <div className="font-serif text-4xl font-black text-[#e71d89] leading-none mb-2">32,97%</div>
                            <div className="text-[11.5px] font-bold text-[#c21470]">Prevalensi KEK/Risiko KEK lokal</div>
                        </div>
                    </div>

                    {/* Visual Comparison Bars */}
                    <div className="mb-6">
                        <div className="text-[10px] font-extrabold text-slate-400 mb-4 tracking-widest uppercase">Perbandingan Prevalensi</div>
                        <div className="space-y-4">
                            {[
                                { label: "Nasional", val: "17,3%", percent: 17.3, color: "bg-slate-200", textColor: "text-slate-500" },
                                { label: "Jawa Timur", val: "24,2%", percent: 24.2, color: "bg-[#FFD1E8]", textColor: "text-[#c21470]" },
                                { label: "Puskesmas Soko, Tuban", val: "32,97%", percent: 32.97, color: "bg-gradient-to-r from-[#e71d89] to-[#c21470]", textColor: "text-[#e71d89]" }
                            ].map((bar, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className={`text-[12px] font-bold w-28 shrink-0 ${i === 2 ? 'text-[#1E293B]' : 'text-slate-500'}`}>
                                        {bar.label}
                                    </div>
                                    <div className="flex-1 bg-[#FAFAFA] border border-slate-100 rounded-full h-2.5 overflow-hidden">
                                        <motion.div
                                            variants={barVariants}
                                            custom={bar.percent}
                                            className={`h-full rounded-full ${bar.color}`}
                                        ></motion.div>
                                    </div>
                                    <div className={`text-[13px] font-black w-14 shrink-0 text-right ${bar.textColor}`}>
                                        {bar.val}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-[14px] text-slate-600 leading-relaxed border-t border-slate-100 pt-5">
                        <p className="mb-3">
                            Dari 549 ibu hamil yang melakukan ANC di 2025, sebanyak <strong className="text-[#1E293B]">181 orang (32,97%) teridentifikasi mengalami KEK/Risiko KEK</strong> berdasarkan pengukuran LILA (&lt; 23,5 cm). Angka ini <strong className="text-[#1E293B]">hampir dua kali lipat prevalensi nasional</strong> (Riskesdas 2018: 17,3%) dan melampaui rata-rata Provinsi Jawa Timur (24,2%), menunjukkan urgensi intervensi gizi terstruktur di wilayah ini.
                        </p>
                        <div className="text-[11px] font-bold text-slate-400">
                            Sumber data lokal: Data Primer Puskesmas Soko 2025 | Data pembanding: Riskesdas 2018, Kemenkes RI
                        </div>
                    </div>
                </motion.div>

                {/* === SIKLUS MALNUTRISI (WARNING BOX) === */}
                <motion.div
                    custom={0.6}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-[#FFF5F9] border border-[#e71d89]/20 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-5 items-start shadow-sm"
                >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-[#e71d89]/10">
                        <RefreshCcw size={22} className="text-[#e71d89]" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="font-serif text-lg font-bold text-[#c21470] mb-2 leading-tight">
                            Siklus Malnutrisi Antargenerasi
                        </h4>
                        <p className="text-[14px] text-slate-700 leading-relaxed mb-4">
                            Bayi dengan BBLR akibat KEK ibu berisiko tinggi mengalami <strong className="text-[#1E293B]">stunting</strong> di masa kecil. Anak perempuan yang stunting cenderung tumbuh menjadi wanita bertubuh kecil dengan cadangan nutrisi rendah — yang kemudian saat hamil berisiko melahirkan bayi BBLR lagi. Siklus ini hanya bisa diputus dengan <strong className="text-[#1E293B]">intervensi gizi dari sebelum dan selama kehamilan.</strong>
                        </p>

                        [Image of intergenerational cycle of malnutrition]

                        <div className="text-[11px] font-bold text-slate-500 mt-4">
                            Sumber: UNICEF Conceptual Framework on Malnutrition; Kemenkes RI, Pedoman Gizi 1000 HPK
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}