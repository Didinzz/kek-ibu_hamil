"use client";
import { motion } from "framer-motion";
import { Ruler, AlertTriangle, Baby, ShieldCheck, ArrowRight } from "lucide-react"; 

export default function HeroMateri() {
    // 1. Variasi Container Induk (Mengatur urutan kemunculan anak-anaknya)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Jeda waktu kemunculan tiap elemen
                delayChildren: 0.1,    // Jeda sebelum animasi pertama dimulai
            }
        }
    };

    // 2. Variasi Teks (Bergeser lembut dari bawah ke atas)
    const itemFadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Easing pengereman halus
        }
    };

    // 3. Variasi Kartu Bento (Sedikit membesar/scale-up dari bawah)
    const cardPopUp = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="relative bg-[#1A202C] min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-12 overflow-hidden">
            
            {/* Blobs Background */}
            <div className="absolute top-0 left-0 w-125 h-125 bg-[#2A5C43]/15 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 right-10 w-100 h-100 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* BUNGKUS UTAMA ANIMASI */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
            >

                {/* --- KOLOM KIRI: TEKS --- */}
                <div className="flex flex-col items-start">
                    <motion.div variants={itemFadeUp} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Edukasi Gizi Ibu Hamil
                    </motion.div>

                    <motion.h1 variants={itemFadeUp} className="font-black text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight">
                        Kenali <span className="text-[#D4AF37] font-serif italic font-normal">Risiko KEK</span><br />Pada Ibu Hamil
                    </motion.h1>

                    <motion.p variants={itemFadeUp} className="text-slate-400 text-base max-w-110 leading-relaxed mb-9 font-light">
                        Risiko Kekurangan Energi Kronik (Risiko KEK) terdeteksi melalui pengukuran LILA. Kenali lebih awal, cegah lebih dini sebelum berkembang menjadi KEK.
                    </motion.p>

                    <motion.div variants={itemFadeUp} className="flex flex-wrap gap-4">
                        <button
                            onClick={() => document.getElementById('apa').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[#2A5C43] hover:bg-[#347656] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-[#2A5C43]/30 flex items-center gap-2 cursor-pointer"
                        >
                            Pelajari Sekarang
                        </button>
                        <button
                            onClick={() => document.getElementById('perbedaan').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-transparent border border-white/20 hover:bg-white/10 text-white/90 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 group cursor-pointer"
                        >
                            Bedanya KEK & Risiko KEK
                            <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </button>
                    </motion.div>
                </div>

                {/* --- KOLOM KANAN: BENTO GRID LAYOUT --- */}
                <div className="grid grid-cols-2 gap-4">

                    {/* Kartu 1 (Kiri - Memanjang) */}
                    <motion.div variants={cardPopUp} className="col-span-2 sm:col-span-1 row-span-2 bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors flex flex-col justify-between">
                        <div className="mb-8 text-white/50">
                            <Ruler strokeWidth={1.5} size={36} />
                        </div>
                        <div>
                            <div className="font-serif text-5xl leading-none text-[#D4AF37] mb-3">&lt;23,5</div>
                            <div className="text-sm text-slate-400 leading-snug">cm LILA — batas skrining Risiko KEK pada bumil.</div>
                        </div>
                    </motion.div>

                    {/* Kartu 2 (Kanan Atas) */}
                    <motion.div variants={cardPopUp} className="col-span-2 sm:col-span-1 bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors flex flex-col justify-between">
                        <div className="mb-2 text-white/50 self-end">
                            <AlertTriangle strokeWidth={1.5} size={24} />
                        </div>
                        <div>
                            <div className="font-serif text-4xl leading-none text-[#D4AF37] mb-2">17,3%</div>
                            <div className="text-sm text-slate-400 leading-snug">Prevalensi bumil berisiko KEK di Indonesia.</div>
                        </div>
                    </motion.div>

                    {/* Kartu 3 (Kanan Bawah) */}
                    <motion.div variants={cardPopUp} className="col-span-2 sm:col-span-1 bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors flex flex-col justify-between">
                        <div className="mb-2 text-white/50 self-end">
                            <Baby strokeWidth={1.5} size={24} />
                        </div>
                        <div>
                            <div className="font-serif text-4xl leading-none text-[#D4AF37] mb-2">3x</div>
                            <div className="text-sm text-slate-400 leading-snug">Risiko melahirkan Bayi Berat Lahir Rendah (BBLR).</div>
                        </div>
                    </motion.div>

                    {/* Kartu 4 (Bawah - Membentang) */}
                    <motion.div variants={cardPopUp} className="col-span-2 bg-linear-to-br from-[#2A5C43] to-[#1a3a2a] border border-[#347656]/30 p-6 rounded-2xl shadow-xl shadow-[#2A5C43]/20 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        <div className="text-[#D4AF37] shrink-0">
                            <ShieldCheck strokeWidth={1.5} size={40} />
                        </div>
                        <div>
                            <div className="font-serif text-3xl leading-tight text-white mb-2">Bisa Dicegah!</div>
                            <div className="text-sm text-white/70 leading-relaxed max-w-sm">
                                Risiko KEK dapat dicegah dengan asupan gizi cukup, pemantauan rutin LILA, dan edukasi sejak dini.
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}