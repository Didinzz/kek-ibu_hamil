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
                    <div className="text-xs font-bold tracking-widest uppercase text-[#e71d89] mb-3">
                        ✦ Apa yang Ada di Sini
                    </div>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight max-w-2xl">
                        Panduan Lengkap <br />
                        untuk Bumil <em className="italic text-[#e71d89] font-serif">Sehat</em>
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

                    {/* CARD 1: Menu Harian (Solid Pink) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-[#e71d89] text-white rounded-3xl p-8 lg:p-10 overflow-hidden shadow-lg shadow-[#e71d89]/20 hover:shadow-2xl hover:shadow-[#e71d89]/30 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                    >
                        {/* Ornamen Lingkaran Sudut */}
                        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-500"></div>

                        <div className="absolute top-6 right-8 font-serif text-6xl font-black opacity-10 pointer-events-none">
                            01
                        </div>

                        <div>
                            <div className="mb-5">
                                <Utensils size={36} strokeWidth={1.5} className="text-white" />
                            </div>
                            <div className="text-[10px] font-bold tracking-widest uppercase mb-2 opacity-80">
                                Menu Harian
                            </div>
                            <h3 className="font-serif text-2xl font-bold leading-snug mb-3">
                                7 Hari Menu Bergizi per Trimester
                            </h3>
                            <p className="text-sm leading-relaxed text-white/90 mb-8">
                                21 variasi menu lezat dan terjangkau — dirancang sesuai kebutuhan energi, protein, dan zat besi tiap trimester berdasarkan AKG 2019. Harga disesuaikan pasar Tuban.
                            </p>
                        </div>

                        <button
                            onClick={() => setActiveSlide("menu_mingguan")}
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD1E8] hover:text-white transition-colors group/btn cursor-pointer"
                        >
                            Lihat menu lengkap <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>


                    {/* CARD 2: Edukasi KEK (Clean White + Pink Accent) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-white border border-[#e71d89]/15 text-[#1E293B] rounded-3xl p-8 lg:p-10 overflow-hidden shadow-lg hover:shadow-xl hover:border-[#e71d89]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#FFF5F9] group-hover:scale-110 transition-transform duration-500"></div>

                        <div className="absolute top-6 right-8 font-serif text-6xl font-black text-[#e71d89] opacity-5 pointer-events-none">
                            02
                        </div>

                        <div className="relative z-10">
                            <div className="mb-5">
                                <div className="w-14 h-14 bg-[#FFF5F9] rounded-2xl flex items-center justify-center">
                                    <Ruler size={30} strokeWidth={2} className="text-[#e71d89]" />
                                </div>
                            </div>
                            <div className="text-[10px] font-bold tracking-widest uppercase mb-2 text-[#e71d89]">
                                Edukasi KEK
                            </div>
                            <h3 className="font-serif text-2xl font-bold leading-snug mb-3 text-[#1E293B]">
                                Kenali Risiko KEK Lebih Awal
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-500 mb-8">
                                Pahami cara baca hasil ukur LILA, perbedaan Risiko KEK dan KEK definitif, penyebab, serta langkah pencegahan yang tepat agar Bunda dan janin tetap sehat.
                            </p>
                        </div>

                        <button
                            onClick={() => setActiveSlide("materi_kek")}
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#e71d89] hover:text-[#c21470] transition-colors group/btn cursor-pointer relative z-10"
                        >
                            Pelajari selengkapnya <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>


                    {/* CARD 3: Antiboncos (Magenta Gradient) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative bg-linear-to-br from-[#c21470] to-[#e71d89] text-white rounded-3xl p-8 lg:p-10 overflow-hidden shadow-lg shadow-[#c21470]/20 hover:shadow-2xl hover:shadow-[#e71d89]/30 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
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
                            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-white/80 transition-colors group/btn cursor-pointer"
                        >
                            Tips hemat belanja <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}