"use client";
import { motion } from "framer-motion";
import {
    Stethoscope,
    CheckCircle2,
    Heart,
    FlaskConical,
    MapPin,
    MessageSquareQuote
} from "lucide-react";

export default function DrSarahSection() {

    // --- KONFIGURASI ANIMASI ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemFadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        // Background menggunakan Sangat Soft Pink sebagai pemisah halus dari section putih sebelumnya
        <section className="py-20 lg:py-32 px-6 lg:px-16 bg-[#FFF5F9] overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* ================= 1. KIRI: QUOTE CARD DR. SARAH ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={slideInLeft}
                    className="relative"
                >
                    {/* Background Kotak diubah menjadi Magenta Pink */}
                    <div className="bg-[#e71d89] rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl shadow-[#e71d89]/20">
                        {/* Aksen Tanda Kutip Raksasa di Background */}
                        <div className="absolute -top-6 -left-2 font-serif text-[180px] leading-none text-white opacity-10 select-none pointer-events-none">
                            &ldquo;
                        </div>

                        {/* Ikon Dokter */}
                        <div className="w-20 h-20 bg-white/10 rounded-full border-4 border-white/20 flex items-center justify-center mb-8 relative z-10">
                            <Stethoscope size={36} className="text-white" />
                        </div>

                        {/* Teks Kutipan */}
                        <p className="font-serif text-lg lg:text-xl italic text-white/95 leading-relaxed mb-8 relative z-10">
                            "Bunda tidak perlu bahan makanan mahal untuk memiliki kehamilan yang sehat. Cukup kenali kebutuhan gizi di setiap trimester, pilih bahan yang tepat dari pasar terdekat, dan konsumsi tablet Fe setiap malam. Itu saja sudah cukup untuk menjaga Bunda dan si kecil dari ancaman KEK."
                        </p>

                        {/* Author Info */}
                        <div className="border-t border-white/15 pt-6 flex items-center gap-4 relative z-10">
                            <div>
                                <div className="text-base font-bold text-white">dr. Sarah</div>
                                <div className="text-[11px] font-semibold text-white/80 uppercase tracking-widest mt-1">
                                    Dokter Internship · Program CERMAT Tuban
                                </div>
                            </div>
                            {/* Ikon Checkmark dibuat putih dengan ikon pink agar kontras tapi tidak pakai kuning */}
                            <div className="ml-auto bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                                <CheckCircle2 size={20} className="text-[#e71d89]" />
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge (AKG 2019) */}
                    <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-xl border-b-4 border-[#e71d89] z-20"
                    >
                        <div className="font-serif text-3xl font-bold text-[#e71d89] leading-tight">
                            AKG<br />2019
                        </div>
                        <div className="text-[11px] font-bold text-slate-500 mt-1">
                            Permenkes No.28/2019
                        </div>
                    </motion.div>
                </motion.div>


                {/* ================= 2. KANAN: MENGAPA CERMAT ================= */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-start"
                >
                    {/* Header */}
                    <motion.div variants={itemFadeUp} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#e71d89] mb-3">
                        <Heart size={14} className="text-[#e71d89] fill-[#e71d89]" /> Mengapa CERMAT
                    </motion.div>

                    <motion.h2 variants={itemFadeUp} className="font-serif text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight mb-5">
                        Program yang <br />
                        <em className="italic text-[#e71d89] font-serif">Berpihak pada Bunda</em>
                    </motion.h2>

                    <motion.p variants={itemFadeUp} className="text-base text-slate-500 leading-relaxed mb-10 max-w-lg">
                        Dirancang dengan pendekatan ilmu gizi terkini, bahasa yang mudah dipahami, dan bahan yang tersedia di sekitar rumah Bunda.
                    </motion.p>

                    {/* List Alasan (Why Item) */}
                    <div className="flex flex-col gap-4 w-full">

                        {/* Item 1 */}
                        <motion.div variants={itemFadeUp} className="flex gap-5 items-start p-5 rounded-2xl border border-[#e71d89]/10 bg-white hover:border-[#e71d89]/40 hover:shadow-lg hover:shadow-[#e71d89]/5 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-[#FFF5F9] flex items-center justify-center shrink-0 group-hover:bg-[#e71d89] group-hover:text-white text-[#e71d89] transition-colors duration-300">
                                <FlaskConical size={22} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-[#1E293B] mb-1.5 group-hover:text-[#e71d89] transition-colors">
                                    Berbasis Ilmu Gizi Terpercaya
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Semua rekomendasi mengacu pada AKG 2019 (Permenkes No. 28/2019), standar kebutuhan gizi nasional yang ditetapkan Kemenkes RI.
                                </p>
                            </div>
                        </motion.div>

                        {/* Item 2 */}
                        <motion.div variants={itemFadeUp} className="flex gap-5 items-start p-5 rounded-2xl border border-[#e71d89]/10 bg-white hover:border-[#e71d89]/40 hover:shadow-lg hover:shadow-[#e71d89]/5 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-[#FFF5F9] flex items-center justify-center shrink-0 group-hover:bg-[#e71d89] group-hover:text-white text-[#e71d89] transition-colors duration-300">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-[#1E293B] mb-1.5 group-hover:text-[#e71d89] transition-colors">
                                    Disesuaikan untuk Tuban, Jatim
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Harga bahan pangan mengacu pada Pasar Baru Tuban, Pasar Pramuka, dan ikan segar dari TPI Kradenan, Palang.
                                </p>
                            </div>
                        </motion.div>

                        {/* Item 3 */}
                        <motion.div variants={itemFadeUp} className="flex gap-5 items-start p-5 rounded-2xl border border-[#e71d89]/10 bg-white hover:border-[#e71d89]/40 hover:shadow-lg hover:shadow-[#e71d89]/5 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-[#FFF5F9] flex items-center justify-center shrink-0 group-hover:bg-[#e71d89] group-hover:text-white text-[#e71d89] transition-colors duration-300">
                                <MessageSquareQuote size={22} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-[#1E293B] mb-1.5 group-hover:text-[#e71d89] transition-colors">
                                    Mudah Dipahami Semua Kalangan
                                </h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Informasi dikemas tanpa jargon medis yang rumit — cocok untuk ibu hamil dari berbagai latar belakang pendidikan.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}