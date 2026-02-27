"use client";
import { motion } from "framer-motion";
import { Utensils, Ruler, Wallet, ArrowRight } from "lucide-react";

export default function LayananSection({ setActiveSlide }) {

    // --- KONFIGURASI ANIMASI ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <section className="py-20 lg:py-32 px-6 lg:px-16 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER SECTION --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-14 lg:mb-16"
                >
                    <div className="text-xs font-bold tracking-widest uppercase text-[#74C69D] mb-3">
                        ✦ Apa yang Ada di Sini
                    </div>
                    <h2 className="font-serif itali text-4xl lg:text-5xl font-bold text-[#1A2E22] leading-tight max-w-2xl">
                        Panduan Lengkap <br />
                        untuk Bumil <em className="italic text-[#D4830A] font-serif">Sehat</em>
                    </h2>
                </motion.div>

                {/* --- CARDS GRID --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >

                    {/* CARD 1: Menu Harian (Forest / Hijau Tua) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-[#2D6A4F] text-white rounded-3xl p-8 lg:p-10 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                    >
                        {/* Ornamen Lingkaran Sudut */}
                        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-500"></div>

                        <div className="absolute top-6 right-8 font-serif text-6xl font-black opacity-10 pointer-events-none">
                            01
                        </div>

                        <div>
                            <div className="mb-5">
                                <Utensils size={36} strokeWidth={1.5} className="text-white" />
                            </div>
                            <div className="text-[10px] font-bold tracking-widest uppercase mb-2 opacity-70">
                                Menu Harian
                            </div>
                            <h3 className="font-serif text-2xl font-bold leading-snug mb-3">
                                7 Hari Menu Bergizi per Trimester
                            </h3>
                            <p className="text-sm leading-relaxed text-white/80 mb-8">
                                21 variasi menu lezat dan terjangkau — dirancang sesuai kebutuhan energi, protein, dan zat besi tiap trimester berdasarkan AKG 2019. Harga disesuaikan pasar Tuban.
                            </p>
                        </div>

                        <button
                            onClick={() => setActiveSlide("menu_mingguan")}
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#B7E4C7] hover:text-white transition-colors group/btn"
                        >
                            Lihat menu lengkap <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>


                    {/* CARD 2: Edukasi KEK (Sand / Cream) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-[#F5EAD6] border-2 border-[#2D6A4F]/10 text-[#1A2E22] rounded-3xl p-8 lg:p-10 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/30 group-hover:scale-110 transition-transform duration-500"></div>

                        <div className="absolute top-6 right-8 font-serif text-6xl font-black text-[#2D6A4F] opacity-10 pointer-events-none">
                            02
                        </div>

                        <div>
                            <div className="mb-5">
                                <Ruler size={36} strokeWidth={1.5} className="text-[#2D6A4F]" />
                            </div>
                            <div className="text-[10px] font-bold tracking-widest uppercase mb-2 text-[#2D6A4F] opacity-70">
                                Edukasi KEK
                            </div>
                            <h3 className="font-serif text-2xl font-bold leading-snug mb-3 text-[#1A2E22]">
                                Kenali Risiko KEK Lebih Awal
                            </h3>
                            <p className="text-sm leading-relaxed text-[#5A7065] mb-8">
                                Pahami cara baca hasil ukur LILA, perbedaan Risiko KEK dan KEK definitif, penyebab, serta langkah pencegahan yang tepat agar Bunda dan janin tetap sehat.
                            </p>
                        </div>

                        <button
                            onClick={() => setActiveSlide("kebutuhan_gizi")}
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#40916C] hover:text-[#2D6A4F] transition-colors group/btn"
                        >
                            Pelajari selengkapnya <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>


                    {/* CARD 3: Antiboncos (Amber / Oranye) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-linear-to-br from-[#D4830A] to-[#F4A830] text-white rounded-3xl p-8 lg:p-10 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-500"></div>

                        <div className="absolute top-6 right-8 font-serif text-6xl font-black opacity-15 pointer-events-none">
                            03
                        </div>

                        <div>
                            <div className="mb-5">
                                <Wallet size={36} strokeWidth={1.5} className="text-white" />
                            </div>
                            <div className="text-[10px] font-bold tracking-widest uppercase mb-2 opacity-80">
                                Antiboncos Tuban
                            </div>
                            <h3 className="font-serif text-2xl font-bold leading-snug mb-3">
                                Bergizi Hemat Rp 33–48 Ribu
                            </h3>
                            <p className="text-sm leading-relaxed text-white/90 mb-8">
                                Semua bahan tersedia di Pasar Baru Tuban & warung sekitar. Ikan segar langsung dari TPI Palang. Tablet Fe gratis di Puskesmas. Tidak perlu khawatir soal budget!
                            </p>
                        </div>

                        <button
                            onClick={() => setActiveSlide("menu_antiboncos")}
                            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-white/80 transition-colors group/btn"
                        >
                            Tips hemat belanja <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}