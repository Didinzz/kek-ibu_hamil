"use client";
import { motion } from "framer-motion";
import {
    CalendarDays,
    Ruler,
    BarChartBig,
    MessageCircleHeart,
    AlertTriangle,
    Microscope
} from "lucide-react"; // Import Ikon Modern

export default function DeteksiMateri() {
    // Data Langkah dengan Ikon Lucide
    const steps = [
        { num: "1", icon: <CalendarDays size={32} strokeWidth={1.5} />, title: "Kunjungi Posyandu / Puskesmas", desc: "Datangi fasilitas kesehatan terdekat untuk pemeriksaan kehamilan rutin. ANC minimal 6x selama kehamilan.", badge: "ANC Terpadu" },
        { num: "2", icon: <Ruler size={32} strokeWidth={1.5} />, title: "Pengukuran LILA", desc: "Kader/petugas mengukur LILA menggunakan pita LILA pada lengan kiri bagian tengah antara siku dan bahu.", badge: "Pita LILA" },
        { num: "3", icon: <BarChartBig size={32} strokeWidth={1.5} />, title: "Interpretasi Hasil", desc: "Hasil <23,5 cm = Berisiko KEK. Perlu segera dirujuk untuk konseling gizi dan tindak lanjut oleh tenaga kesehatan.", badge: "Batas 23,5 cm" },
        { num: "4", icon: <MessageCircleHeart size={32} strokeWidth={1.5} />, title: "Konseling & Intervensi Gizi", desc: "Tenaga kesehatan memberikan konseling gizi, PMT (Pemberian Makanan Tambahan), dan pemantauan rutin hingga LILA meningkat.", badge: "PMT Bumil" }
    ];

    // Animasi Dasar
    const fadeUpSlow = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
    };

    // Animasi Kartu Staggered (Berurutan)
    const cardFadeUp = (index) => ({
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }
        }
    });

    return (
        <section id="deteksi" className="py-24 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER --- */}
                <motion.div variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                    <div className="flex items-center gap-2 text-[#2A5C43] text-[11px] font-bold tracking-[2px] uppercase mb-2.5">
                        <Microscope size={14} strokeWidth={2.5} /> Cara Mendeteksi
                    </div>
                    <h2 className="font-black text-[38px] leading-[1.2] text-[#1A202C] mb-3.5">
                        Bagaimana Cara Mendeteksi <span className="text-[#D4AF37] font-serif italic font-normal">Risiko KEK?</span>
                    </h2>
                    <div className="text-slate-500 text-[15px] max-w-145 leading-[1.7] mb-12">
                        Deteksi Risiko KEK menggunakan pengukuran LILA — mudah, cepat, dan tersedia gratis di seluruh Posyandu dan Puskesmas!
                    </div>
                </motion.div>

                {/* --- GRID LANGKAH-LANGKAH --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={cardFadeUp(i)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            // Ubah border atas jadi Hijau, hover jadi Emas
                            className="bg-[#FAFAFA] rounded-[20px] p-7 pb-5 text-center border-t-4 border-[#2A5C43]/30 hover:border-[#2A5C43] hover:-translate-y-1 shadow-sm transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#2A5C43] text-white font-serif text-[20px] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#2A5C43]/20">
                                {step.num}
                            </div>
                            {/* Ikon Hijau */}
                            <div className="mb-4 text-[#2A5C43] flex justify-center group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-[15px] font-bold text-[#1A202C] mb-2">{step.title}</h3>
                            <p className="text-[13px] text-slate-500 leading-[1.6] mb-4 font-light">{step.desc}</p>
                            {/* Badge Emas */}
                            <span className="inline-block mt-auto bg-[#FAF3E0] text-[#D4AF37] text-[11px] font-extrabold px-3.5 py-1.5 rounded-full">
                                {step.badge}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* --- KOTAK PERINGATAN (Amber/Jingga Tanah) --- */}
                <motion.div
                    variants={fadeUpSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-12 bg-[#FFFBEB] border border-[#F59E0B]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start shadow-md"
                >
                    <div className="text-[#B45309] shrink-0">
                        <AlertTriangle size={36} strokeWidth={1.5} />
                    </div>
                    <div>
                        <div className="font-extrabold text-[16px] text-[#B45309] mb-2">Penting Dipahami: LILA adalah Alat Skrining, Bukan Diagnosis!</div>
                        <div className="text-[14px] text-[#B45309]/90 leading-[1.7] font-light">
                            Hasil LILA &lt;23,5 cm hanya menyatakan ibu <strong className="text-[#B45309] font-bold">berisiko KEK</strong> — bukan berarti ibu sudah pasti menderita KEK. Diperlukan penilaian gizi yang lebih lengkap oleh tenaga kesehatan untuk menegakkan diagnosis KEK sesungguhnya. Namun, hasil skrining ini tetap harus ditindaklanjuti dengan serius karena menandakan <strong className="text-[#B45309] font-bold">cadangan energi tubuh yang rendah</strong> yang berisiko bagi kehamilan.
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}