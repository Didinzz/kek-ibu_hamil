"use client";

import { motion } from "framer-motion";
import { Utensils, Wallet, HeartPulse, ShieldAlert, GraduationCap, CalendarRange } from "lucide-react";

export default function PenyebabMateri() {
    // --- KONFIGURASI ANIMASI DRAMATIS ALA APPLE ---
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.95,
            filter: "blur(6px)"
        },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    // Data Faktor Penyebab dengan palet warna Pink/Ungu yang di-soft-kan
    const causes = [
        {
            icon: <Utensils size={24} strokeWidth={1.5} />,
            title: "Asupan Energi & Protein Tidak Adekuat",
            desc: "Konsumsi makanan sehari-hari tidak mencukupi kebutuhan energi dan protein, terutama saat kehamilan yang kebutuhannya meningkat signifikan dibanding kondisi tidak hamil.",
            src: "Sumber: Pedoman Gizi Seimbang, Kemenkes RI 2014",
            iconBg: "bg-[#FFF5F9]", // Soft Pink
            iconColor: "text-[#e71d89]", // Magenta
            hoverBorder: "group-hover:border-[#e71d89]/40"
        },
        {
            icon: <Wallet size={24} strokeWidth={1.5} />,
            title: "Keterbatasan Ekonomi & Akses Pangan",
            desc: "Kemiskinan atau keterbatasan akses terhadap bahan pangan bergizi mengakibatkan kualitas dan kuantitas makanan yang dikonsumsi tidak terpenuhi dalam jangka panjang.",
            src: "Sumber: Riskesdas 2018, Kemenkes RI",
            iconBg: "bg-slate-50", // Soft Gray
            iconColor: "text-slate-600", // Dark Gray
            hoverBorder: "group-hover:border-slate-300"
        },
        {
            icon: <HeartPulse size={24} strokeWidth={1.5} />,
            title: "Mual Muntah Berlebih (Hiperemesis)",
            desc: "Mual dan muntah pada trimester pertama yang berat (hiperemesis gravidarum) menyebabkan asupan makanan menurun drastis dan bila berlanjut dapat memperparah kondisi KEK.",
            src: "Sumber: Pedoman Pelayanan Gizi Bumil KEK, Kemenkes 2018",
            iconBg: "bg-[#FDF2F8]", // Soft Pink Red
            iconColor: "text-[#c21470]", // Deep Magenta
            hoverBorder: "group-hover:border-[#c21470]/40"
        },
        {
            icon: <ShieldAlert size={24} strokeWidth={1.5} />,
            title: "Penyakit Infeksi Berulang",
            desc: "Infeksi kronis seperti TBC, diare berulang, atau cacingan meningkatkan kebutuhan energi sekaligus menurunkan penyerapan nutrisi, menciptakan lingkaran setan kekurangan gizi.",
            src: "Sumber: UNICEF Conceptual Framework; WHO Nutrition 2020",
            iconBg: "bg-[#F8FAFC]", // Very light slate
            iconColor: "text-[#1E293B]", // Navy
            hoverBorder: "group-hover:border-[#1E293B]/30"
        },
        {
            icon: <GraduationCap size={24} strokeWidth={1.5} />,
            title: "Pengetahuan Gizi Rendah",
            desc: "Kurangnya pengetahuan tentang makanan bergizi untuk ibu hamil menyebabkan pola makan tidak seimbang, meskipun secara ekonomi sebenarnya mampu memenuhi kebutuhan gizi.",
            src: "Sumber: Riskesdas 2018; Riskesdas 2013, Kemenkes RI",
            iconBg: "bg-[#F5F3FF]", // Soft Lavender/Purple
            iconColor: "text-[#8B5CF6]", // Soft Purple
            hoverBorder: "group-hover:border-[#8B5CF6]/40"
        },
        {
            icon: <CalendarRange size={24} strokeWidth={1.5} />,
            title: "Kehamilan Usia Muda / Jarak Pendek",
            desc: "Ibu hamil di usia < 20 tahun masih dalam masa tumbuh kembang, sehingga bersaing memperebutkan nutrisi dengan janinnya. Jarak kehamilan < 2 tahun juga meningkatkan risiko KEK.",
            src: "Sumber: Pedoman Pelayanan Gizi Bumil KEK, Kemenkes 2018",
            iconBg: "bg-[#FFF1F2]", // Blush Pink
            iconColor: "text-[#E11D48]", // Rose Pink
            hoverBorder: "group-hover:border-[#E11D48]/40"
        }
    ];

    return (
        <section id="penyebab" className="py-16 px-6 lg:px-16 max-w-7xl mx-auto scroll-mt-20">
            <div className="w-full">

                {/* === HEADER SECTION === */}
                <motion.div
                    custom={0}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-10"
                >
                    <div className="flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#e71d89] mb-3">
                        03 — Faktor Penyebab
                        <div className="flex-1 h-px bg-[#e71d89]/20"></div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E293B] mb-3 tracking-tight">
                        Mengapa KEK Terjadi?
                    </h2>
                    <p className="text-[14px] text-slate-500 max-w-2xl leading-relaxed">
                        KEK bersifat multifaktorial — tidak hanya soal tidak makan, tapi ada faktor sosial, ekonomi, dan biologis yang saling berkaitan.
                    </p>
                </motion.div>

                {/* === 6 GRID KARTU PENYEBAB === */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {causes.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={0.15 + (index * 0.1)} // Efek Domino: 0.15, 0.25, 0.35, dst.
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className={`bg-white border border-slate-200 rounded-2xl p-6 lg:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group ${item.hoverBorder} flex flex-col h-full`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-12 ${item.iconBg} ${item.iconColor} rounded-xl flex items-center justify-center shrink-0 border border-black/5`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-[14.5px] font-bold text-[#1E293B] leading-tight">
                                    {item.title}
                                </h4>
                            </div>

                            <p className="text-[13.5px] text-slate-600 leading-[1.7] mb-5 flex-1">
                                {item.desc}
                            </p>

                            {/* Warna Teks Sumber disesuaikan menjadi Netral agar tidak terlalu ramai */}
                            <div className="text-[10px] font-bold text-slate-400 mt-auto pt-4 border-t border-slate-100">
                                {item.src}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}