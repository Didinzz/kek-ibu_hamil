"use client";
import { motion } from "framer-motion";
import {
    Syringe, Droplet, ShieldPlus, Milk, // Ikon Ibu
    Scale, TrendingDown, Brain, ShieldOff, // Ikon Bayi
    Zap, AlertOctagon, Hospital, BatteryWarning, Activity, Baby, User
} from "lucide-react";

export default function DampakBahaya({ type }) {
    const isDampak = type === "dampak";

    // --- DATA DENGAN IKON LUCIDE ---
    const dampakIbu = [
        { icon: <Syringe size={22} strokeWidth={1.5} />, title: "Anemia Kehamilan", desc: "Kekurangan zat besi dan protein menyebabkan kadar hemoglobin rendah, mudah lelah, dan pusing." },
        { icon: <Droplet size={22} strokeWidth={1.5} />, title: "Risiko Perdarahan Saat Persalinan", desc: "Kondisi tubuh lemah meningkatkan risiko komplikasi perdarahan yang membahayakan jiwa ibu." },
        { icon: <ShieldPlus size={22} strokeWidth={1.5} />, title: "Rentan Infeksi Pasca Persalinan", desc: "Daya tahan tubuh menurun membuat ibu rentan terhadap infeksi setelah melahirkan." },
        { icon: <Milk size={22} strokeWidth={1.5} />, title: "Produksi ASI Berkurang", desc: "Cadangan gizi tubuh ibu tidak mencukupi untuk mendukung produksi ASI yang optimal." }
    ];

    const dampakBayi = [
        { icon: <Scale size={22} strokeWidth={1.5} />, title: "BBLR (Berat Badan Lahir Rendah)", desc: "Bayi lahir dengan berat <2.500 gram, meningkatkan risiko kematian neonatal hingga 3x lipat." },
        { icon: <TrendingDown size={22} strokeWidth={1.5} />, title: "Stunting (Gagal Tumbuh)", desc: "Kekurangan gizi kronik sejak dalam kandungan menjadi akar utama masalah stunting di Indonesia." },
        { icon: <Brain size={22} strokeWidth={1.5} />, title: "Gangguan Perkembangan Otak", desc: "Kurangnya protein dan asam folat menghambat pembentukan sel saraf dan perkembangan kognitif janin." },
        { icon: <ShieldOff size={22} strokeWidth={1.5} />, title: "Imunitas Rendah", desc: "Bayi lahir dengan sistem kekebalan tubuh lemah, lebih rentan terhadap penyakit infeksi." }
    ];

    const bahayaData = [
        { icon: <BatteryWarning size={32} strokeWidth={1.5} />, title: "Sangat Lemas & Pucat", desc: "Kelelahan ekstrem, pucat pada wajah, bibir, dan kuku — tanda anemia berat akibat kekurangan zat besi." },
        { icon: <Scale size={32} strokeWidth={1.5} />, title: "Berat Badan Tidak Naik", desc: "BB tidak bertambah atau turun lebih dari 2 bulan kehamilan — tanda asupan gizi sangat tidak mencukupi." },
        { icon: <Activity size={32} strokeWidth={1.5} />, title: "Mual Muntah Hebat", desc: "Tidak dapat makan sama sekali selama lebih dari 24 jam akibat mual dan muntah yang tidak terkontrol." },
        { icon: <Baby size={32} strokeWidth={1.5} />, title: "Gerak Janin Berkurang", desc: "Gerakan bayi dalam kandungan terasa berkurang atau tidak bergerak sama sekali dalam sehari — segera ke faskes!" }
    ];

    // --- ANIMASI ---
    const fadeUpSlow = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
    };

    // Delay otomatis berdasarkan index agar muncul berurutan
    const cardFadeUp = (index) => ({
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] } }
    });

    // ==========================================
    // RENDER: BAGIAN DAMPAK SERIUS (Gelap/Hijau)
    // ==========================================
    if (isDampak) {
        return (
            <section id="dampak" className="py-24 px-6 lg:px-12 bg-[#0F2318]">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <motion.div variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        <div className="flex items-center gap-2 text-[#fc8181] text-[11px] font-bold tracking-[2px] uppercase mb-2.5">
                            <Zap size={14} strokeWidth={2.5} /> Akibat Risiko KEK
                        </div>
                        <h2 className="font-black text-[38px] leading-[1.2] text-white mb-3.5">
                            Dampak <span className="font-serif italic font-normal text-[#fc8181]">Serius</span> Jika Tidak Ditangani
                        </h2>
                        <div className="text-white/60 text-[15px] max-w-145 leading-[1.7] mb-12 font-light">
                            Risiko KEK yang tidak segera ditangani akan berkembang menjadi KEK dan berdampak besar pada ibu maupun janin yang dikandungnya.
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Kolom Ibu */}
                        <div>
                            <motion.div variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                                <h3 className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[1px] px-4 py-2.5 rounded-xl mb-5 bg-[#D4AF37]/15 text-[#D4AF37] inline-flex">
                                    <User size={16} strokeWidth={2.5} /> Dampak pada Ibu
                                </h3>
                            </motion.div>

                            {dampakIbu.map((item, i) => (
                                <motion.div
                                    key={`ibu-${i}`} custom={i} variants={cardFadeUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                                    className="flex gap-4 items-start p-5 rounded-2xl mb-3 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors group"
                                >
                                    <div className="text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5">{item.icon}</div>
                                    <div>
                                        <div className="text-[15px] font-bold text-white mb-1.5">{item.title}</div>
                                        <div className="text-[13px] text-white/60 leading-[1.6] font-light">{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Kolom Bayi */}
                        <div>
                            <motion.div variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                                <h3 className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[1px] px-4 py-2.5 rounded-xl mb-5 bg-[#fc8181]/15 text-[#fc8181] inline-flex">
                                    <Baby size={16} strokeWidth={2.5} /> Dampak pada Bayi
                                </h3>
                            </motion.div>

                            {dampakBayi.map((item, i) => (
                                <motion.div
                                    key={`bayi-${i}`} custom={i} variants={cardFadeUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                                    className="flex gap-4 items-start p-5 rounded-2xl mb-3 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors group"
                                >
                                    <div className="text-[#fc8181] opacity-70 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5">{item.icon}</div>
                                    <div>
                                        <div className="text-[15px] font-bold text-white mb-1.5">{item.title}</div>
                                        <div className="text-[13px] text-white/60 leading-[1.6] font-light">{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // ==========================================
    // RENDER: BAGIAN TANDA BAHAYA (Maroon Merah)
    // ==========================================
    return (
        <section id="bahaya" className="py-24 px-6 lg:px-12 bg-linear-to-br from-[#7F1D1D] to-[#450a0a]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                    <div className="flex items-center gap-2 text-white/70 text-[11px] font-bold tracking-[2px] uppercase mb-2.5">
                        <AlertOctagon size={14} strokeWidth={2.5} /> Waspada!
                    </div>
                    <h2 className="font-black text-[38px] leading-[1.2] text-white mb-3.5">
                        Tanda Bahaya yang Harus Segera Ditangani
                    </h2>
                    <div className="text-white/75 text-[15px] max-w-145 leading-[1.7] mb-12 font-light">
                        Jika ibu hamil mengalami tanda-tanda berikut, segera kunjungi tenaga kesehatan atau fasilitas kesehatan terdekat tanpa menunda.
                    </div>
                </motion.div>

                {/* Grid Kartu */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {bahayaData.map((item, i) => (
                        <motion.div
                            key={`bahaya-${i}`} custom={i} variants={cardFadeUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                            className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors group"
                        >
                            <div className="text-white/50 group-hover:text-white transition-colors mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="text-[15px] font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-[13px] text-white/70 leading-[1.6] font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Alert Bawah */}
                <motion.div
                    variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                    className="mt-8 bg-white/10 border border-white/30 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-5 items-center text-white shadow-2xl"
                >
                    <div className="text-white/80 shrink-0">
                        <Hospital size={48} strokeWidth={1.5} />
                    </div>
                    <div className="text-[14px] leading-[1.6] font-light">
                        <strong className="text-[16px] font-bold block mb-1">Jangan tunda! Segera ke fasilitas kesehatan terdekat.</strong>
                        Puskesmas, Bidan Desa, atau IGD Rumah Sakit siap membantu. Penanganan dini Risiko KEK dapat mencegah berkembang menjadi KEK dan mencegah komplikasi serius bagi ibu dan bayi.
                    </div>
                </motion.div>

            </div>
        </section>
    );
}