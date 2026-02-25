"use client";
import { motion } from "framer-motion";
import {
    Lightbulb,
    AlertTriangle,
    Stethoscope,
    Ruler,
    Search,
    Clock,
    HeartPulse,
    ShieldCheck,
    BarChart3,
    ClipboardList,
    Microscope,
    Zap,
    Activity,
    UserPlus,
    RefreshCw // <-- Import icon baru di sini
} from "lucide-react";

export default function PerbandinganMateri() {
    // Animasi dasar yang lebih lambat dan ayunan lebih jauh agar SANGAT KENTARA
    const fadeUpSlow = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // Animasi khusus dengan sedikit delay untuk kartu sebelah kanan
    const fadeUpSlowDelay = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="perbedaan" className="py-24 px-6 lg:px-12 bg-[#1A202C]">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER --- */}
                <motion.div
                    variants={fadeUpSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Mengganti Emoji dengan Icon Lucide */}
                    <div className="flex items-center gap-2 text-[#D4AF37] text-[11px] font-bold tracking-[2px] uppercase mb-3">
                        <RefreshCw size={14} strokeWidth={2.5} /> Perbandingan Penting
                    </div>

                    <h2 className="font-black text-[38px] leading-[1.2] text-white mb-3.5">
                        Bedanya <span className="text-[#D4AF37] font-serif italic font-normal">Risiko KEK</span> vs <span className="font-serif italic font-normal text-[#D4AF37]">KEK</span>
                    </h2>
                    <div className="text-white/60 text-[15px] max-w-145 leading-[1.7] mb-10 font-light">
                        Banyak yang mengira keduanya sama — padahal ada perbedaan mendasar yang penting untuk dipahami tenaga kesehatan maupun ibu hamil.
                    </div>
                </motion.div>

                {/* --- KOTAK INFO --- */}
                <motion.div
                    variants={fadeUpSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-2xl p-5 mb-12 flex gap-4 items-start text-[14px] leading-[1.7] text-white/85"
                >
                    <div className="text-[#D4AF37] shrink-0 mt-0.5">
                        <Lightbulb strokeWidth={2} size={28} />
                    </div>
                    <div>
                        <strong className="text-white">Mengapa istilahnya berbeda?</strong> Karena LILA hanya merupakan alat <em>skrining</em>, bukan diagnosis. LILA mengukur cadangan lemak dan otot lengan sebagai proxy status gizi. Ibu dengan LILA &lt;23,5 cm <em>berisiko tinggi</em> mengalami KEK, namun diagnosis KEK yang sesungguhnya memerlukan penilaian lebih lanjut oleh tenaga kesehatan, termasuk riwayat asupan makan, pemeriksaan klinis, dan data biokimia.
                    </div>
                </motion.div>

                {/* --- KARTU PERBANDINGAN --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

                    {/* KARTU RISIKO (Kiri) */}
                    <motion.div
                        variants={fadeUpSlow}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-linear-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/25 rounded-[20px] p-8"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] text-[11px] font-extrabold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-5">
                            <AlertTriangle size={14} strokeWidth={2.5} /> Risiko KEK
                        </div>
                        <h3 className="font-serif text-[28px] text-white mb-6 leading-tight">Risiko Kekurangan<br />Energi Kronik</h3>

                        <ul className="flex flex-col gap-3.5">
                            {[
                                { i: <Ruler size={12} />, t: <>Dideteksi melalui pengukuran <strong>LILA &lt;23,5 cm</strong></> },
                                { i: <Search size={12} />, t: <>Merupakan hasil <strong>skrining</strong>, bukan diagnosis definitif</> },
                                { i: <Clock size={12} />, t: <>Menandakan <strong>cadangan gizi rendah</strong> dan berpotensi berkembang menjadi KEK</> },
                                { i: <HeartPulse size={12} />, t: <>Perlu <strong>pemantauan lanjut</strong> dan konseling gizi intensif</> },
                                { i: <ShieldCheck size={12} />, t: <>Masih dapat dicegah berkembang lebih lanjut dengan intervensi dini</> },
                                { i: <BarChart3 size={12} />, t: <>Digunakan dalam program <strong>surveilans gizi</strong> di Posyandu & Puskesmas</> }
                            ].map((li, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-[13px] text-white/80 leading-[1.6]">
                                    <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">{li.i}</span>
                                    <span>{li.t}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* KARTU KEK DEFINITIF (Kanan) */}
                    <motion.div
                        variants={fadeUpSlowDelay}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-linear-to-br from-[#e53e3e]/15 to-[#e53e3e]/5 border border-[#e53e3e]/30 rounded-[20px] p-8"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#e53e3e]/20 text-[#fc8181] text-[11px] font-extrabold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-5">
                            <Stethoscope size={14} strokeWidth={2.5} /> KEK (Definitif)
                        </div>
                        <h3 className="font-serif text-[28px] text-white mb-6 leading-tight">Kekurangan Energi<br />Kronik</h3>

                        <ul className="flex flex-col gap-3.5">
                            {[
                                { i: <ClipboardList size={12} />, t: <>Ditegakkan melalui <strong>penilaian gizi komprehensif</strong> oleh tenaga kesehatan</> },
                                { i: <Microscope size={12} />, t: <>Didukung data <strong>biokimia</strong> (albumin, hemoglobin) dan riwayat asupan makan</> },
                                { i: <Zap size={12} />, t: <>Kondisi kekurangan energi & protein yang sudah berlangsung <strong>dalam waktu lama</strong></> },
                                { i: <Stethoscope size={12} />, t: <>Membutuhkan <strong>penanganan medis</strong> dan pemberian PMT</> },
                                { i: <Activity size={12} />, t: <>Sudah berdampak nyata pada kondisi fisik dan status kesehatan ibu</> },
                                { i: <UserPlus size={12} />, t: <>Diagnosis final oleh <strong>dokter atau ahli gizi</strong>, bukan hanya kader</> }
                            ].map((li, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-[13px] text-white/80 leading-[1.6]">
                                    <span className="w-5 h-5 rounded-full bg-[#fc8181]/20 text-[#fc8181] flex items-center justify-center shrink-0 mt-0.5">{li.i}</span>
                                    <span>{li.t}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                {/* --- TABEL PERBANDINGAN --- */}
                <motion.div
                    variants={fadeUpSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="border border-white/10 rounded-[1.25rem] overflow-hidden overflow-x-auto"
                >
                    <div className="min-w-150">
                        {/* Header Tabel */}
                        <div className="grid grid-cols-[1.2fr_1fr_1fr] text-[12px] font-extrabold uppercase tracking-[1px]">
                            <div className="p-4 bg-white/5 text-white/50">Aspek</div>
                            <div className="p-4 bg-[#D4AF37]/10 text-[#D4AF37] flex items-center gap-2">
                                <AlertTriangle size={14} /> Risiko KEK
                            </div>
                            <div className="p-4 bg-[#e53e3e]/10 text-[#fc8181] flex items-center gap-2">
                                <Stethoscope size={14} /> KEK (Definitif)
                            </div>
                        </div>
                        {/* Isi Tabel */}
                        {[
                            ["Alat Ukur", "Pita LILA", "LILA + biokimia + klinis"],
                            ["Ambang Batas", "LILA < 23,5 cm", "Penilaian menyeluruh"],
                            ["Status", "Skrining / pemantauan", "Diagnosis definitif"],
                            ["Pelaksana", "Kader, bidan, perawat", "Dokter / ahli gizi"],
                            ["Tindak Lanjut", "Konseling & pemantauan", "Terapi gizi + PMT"],
                            ["Tempat", "Posyandu, Puskesmas", "Puskesmas, RS"]
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-white/5 text-[13px] hover:bg-white/5 transition-colors">
                                <div className="p-4 text-white/60 font-medium bg-white/5">{row[0]}</div>
                                <div className="p-4 text-white/85 bg-[#D4AF37]/5">{row[1]}</div>
                                <div className="p-4 text-white/85 bg-[#e53e3e]/5">{row[2]}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}