"use client";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Pin, BookOpenText } from "lucide-react";

export default function DefinisiMateri() {
    // 1. Induk Animasi (Stagger)
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.1
            }
        }
    };

    // 2. Anak Animasi (Fade Up)
    const itemFadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="apa" className="py-24 px-6 lg:px-12 bg-white">
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >

                {/* --- KOLOM KIRI --- */}
                <div className="flex flex-col gap-5">

                    <motion.div variants={itemFadeUp} className="text-[#2A5C43] text-[11px] font-bold tracking-[2px] uppercase">
                        <BookOpenText className="inline mr-2" /> Definisi
                    </motion.div>

                    <motion.h2 variants={itemFadeUp} className="font-black text-[38px] leading-[1.2] text-[#1A202C]">
                        Apa itu <span className="text-[#2A5C43] font-serif italic font-normal">Risiko KEK?</span>
                    </motion.h2>

                    <motion.div variants={itemFadeUp} className="text-slate-500 text-[15px] leading-[1.7] mb-2">
                        Risiko KEK adalah kondisi ibu hamil yang terdeteksi <strong className="text-[#1A202C]">berisiko</strong> mengalami Kekurangan Energi Kronik berdasarkan hasil pengukuran Lingkar Lengan Atas (LILA) yang kurang dari 23,5 cm.
                    </motion.div>

                    <motion.div variants={itemFadeUp} className="flex flex-col gap-4 mt-2">

                        {/* KARTU 1: NORMAL */}
                        <div className="bg-[#FAF3E0]/30 border border-[#2A5C43]/20 rounded-2xl p-6 flex items-center gap-5 hover:shadow-md hover:border-[#2A5C43]/40 transition-all duration-300">
                            <div className="text-[#2A5C43] shrink-0">
                                <CheckCircle2 strokeWidth={1.5} size={40} />
                            </div>
                            <div>
                                <div className="font-extrabold text-[#2A5C43] text-[15px] mb-1">LILA Normal — Tidak Berisiko</div>
                                <div className="font-serif text-[32px] leading-none text-[#2A5C43] mb-1">≥ 23,5 cm</div>
                                <div className="text-[12px] text-slate-500 leading-snug">Cadangan energi ibu hamil mencukupi untuk kehamilan sehat.</div>
                            </div>
                        </div>

                        {/* KARTU 2: RISIKO KEK */}
                        <div className="bg-[#FFFBEB] border border-[#F59E0B]/30 rounded-2xl p-6 flex items-center gap-5 hover:shadow-md hover:border-[#F59E0B]/50 transition-all duration-300">
                            <div className="text-[#B45309] shrink-0">
                                <AlertTriangle strokeWidth={1.5} size={40} />
                            </div>
                            <div>
                                <div className="font-extrabold text-[#B45309] text-[15px] mb-1">Berisiko KEK — Perlu Intervensi</div>
                                <div className="font-serif text-[32px] leading-none text-[#B45309] mb-1">&lt; 23,5 cm</div>
                                <div className="text-[12px] text-[#B45309]/80 leading-snug">Memerlukan pemantauan gizi intensif dan konseling kesehatan.</div>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* --- KOLOM KANAN: KOTAK INFO --- */}
                <motion.div
                    variants={itemFadeUp}
                    className="bg-[#1A202C] rounded-3xl p-10 relative overflow-hidden shadow-xl"
                >
                    <div className="absolute -top-10 left-5 text-[200px] font-serif text-white/5 leading-none pointer-events-none">"</div>
                    <div className="relative z-10 text-white/85 text-[15px] leading-[1.8]">
                        <p className="mb-5 font-light">
                            LILA (Lingkar Lengan Atas) adalah cara <strong className="text-[#4caf79] font-semibold">skrining/pemantauan</strong> untuk mendeteksi risiko kekurangan gizi pada ibu hamil. Pengukuran dilakukan pada lengan kiri bagian tengah, antara ujung bahu dan ujung siku.
                        </p>
                        <p className="mb-6 font-light">
                            Ibu hamil dengan LILA &lt;23,5 cm dinyatakan <strong className="text-[#fc8181] font-semibold">berisiko KEK</strong> — artinya ia memiliki cadangan energi yang rendah dan berisiko tinggi mengalami kekurangan gizi kronik jika tidak segera ditangani.
                        </p>
                        <p className="mb-6 font-light">
                            Pita LILA tersedia gratis di seluruh <strong className="text-[#4caf79] font-semibold">Posyandu dan Puskesmas</strong> di Indonesia dan mudah digunakan oleh kader kesehatan.
                        </p>

                        {/* CATATAN PENTING (Warna Hijau Terang) */}
                        <div className="bg-[#4caf79]/10 border-l-[3px] border-[#4caf79] p-4 rounded-r-xl flex items-start gap-3">
                            <div className="text-[#4caf79] shrink-0 mt-0.5">
                                <Pin strokeWidth={2.5} size={16} />
                            </div>
                            <div className="text-[13px] text-white/90 font-medium leading-relaxed">
                                LILA tidak berubah signifikan selama kehamilan, sehingga bisa diukur kapan saja dalam trimester berapa pun.
                            </div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}