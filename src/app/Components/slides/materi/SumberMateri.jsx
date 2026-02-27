"use client";

import { motion } from "framer-motion";
import { BookMarked, ShieldAlert, Link2, FileText, CheckCircle2 } from "lucide-react";

export default function SumberMateri() {
    // --- KONFIGURASI ANIMASI INDIVIDUAL ---
    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                delay: delay,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    // --- DATA REFERENSI (100% TEKS ASLI HTML) ---
    const references = [
        {
            id: "01",
            title: "Permenkes RI No. 21 Tahun 2021 tentang Penyelenggaraan Pelayanan Kesehatan Masa Sebelum Hamil, Masa Hamil, Persalinan, dan Masa Sesudah Melahirkan — dasar hukum ANC 6×",
            pub: "Kementerian Kesehatan RI, 2021",
            icon: <FileText size={16} />
        },
        {
            id: "02",
            title: "Juknis Pemberian Makanan Tambahan Berbahan Pangan Lokal bagi Ibu Hamil dan Balita (Kepdirjen Kesehatan Primer & Komunitas No. 576) — dasar hukum PMT 120 hari & terminologi KEK/Risiko KEK",
            pub: "Kementerian Kesehatan RI, Direktorat Gizi Masyarakat, 2025",
            icon: <FileText size={16} />
        },
        {
            id: "03",
            title: "Permenkes RI No. 28 Tahun 2019 tentang Angka Kecukupan Gizi (AKG) yang Dianjurkan untuk Masyarakat Indonesia",
            pub: "Kementerian Kesehatan RI, 2019",
            icon: <FileText size={16} />
        },
        {
            id: "04",
            title: "Pedoman Pelayanan Gizi pada Ibu Hamil Kekurangan Energi Kronis (KEK)",
            pub: "Kementerian Kesehatan RI, Direktorat Gizi Masyarakat, 2018",
            icon: <BookMarked size={16} />
        },
        {
            id: "05",
            title: "Riset Kesehatan Dasar (Riskesdas) 2018 — Data Prevalensi KEK Ibu Hamil Nasional & Provinsi Jawa Timur",
            pub: "Badan Penelitian dan Pengembangan Kesehatan, Kemenkes RI, 2018",
            icon: <BookMarked size={16} />
        },
        {
            id: "06",
            title: "Permenkes RI No. 88 Tahun 2014 tentang Standar Tablet Tambah Darah bagi Wanita Usia Subur dan Ibu Hamil",
            pub: "Kementerian Kesehatan RI, 2014",
            icon: <FileText size={16} />
        },
        {
            id: "07",
            title: "Halaman Resmi Ayosehat Kemkes — Ibu Hamil KEK: Definisi, Kriteria LILA & IMT, Penatalaksanaan",
            pub: "ayosehat.kemkes.go.id — Kementerian Kesehatan RI",
            icon: <Link2 size={16} />
        },
        {
            id: "08",
            title: "Pedoman Gizi Seimbang",
            pub: "Kementerian Kesehatan RI, Direktorat Bina Gizi, 2014",
            icon: <BookMarked size={16} />
        }
    ];

    return (
        <div className="w-full bg-[#FAFAFA]">
            {/* ================= BAGIAN DAFTAR PUSTAKA ================= */}
            <section id="sumber" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto scroll-mt-20 border-t border-slate-200">

                {/* === HEADER SECTION === */}
                <motion.div
                    custom={0}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-10 text-center max-w-2xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#e71d89] mb-4">
                        <div className="w-8 h-px bg-[#e71d89]/30"></div>
                        07 — Daftar Pustaka
                        <div className="w-8 h-px bg-[#e71d89]/30"></div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#e71d89] mb-4 tracking-tight">
                        Sumber & Referensi
                    </h2>
                    <p className="text-[14px] text-slate-500 leading-relaxed">
                        Seluruh materi mengacu pada sumber resmi pemerintah Indonesia. Diperbarui mengikuti pedoman terbaru 2021–2025.
                    </p>
                </motion.div>

                {/* === GRID 8 REFERENSI === */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                    {references.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={0.1 + (index * 0.1)} // Efek kemunculan kartu beruntun (stagger)
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-white border border-slate-200 rounded-2xl p-5 lg:p-6 shadow-sm hover:shadow-md hover:border-[#e71d89]/40 transition-all duration-300 flex items-start gap-4 group"
                        >
                            <div className="text-[12px] font-black text-slate-300 group-hover:text-[#e71d89] transition-colors pt-1">
                                [{item.id}]
                            </div>
                            <div>
                                <h4 className="text-[13px] font-bold text-[#1E293B] leading-[1.6] mb-3 group-hover:text-[#c21470] transition-colors">
                                    {item.title}
                                </h4>
                                <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg inline-flex group-hover:bg-[#FFF5F9] group-hover:border-[#e71d89]/10 transition-colors">
                                    <span className="text-slate-400 group-hover:text-[#e71d89] transition-colors">{item.icon}</span> {item.pub}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* === DISCLAIMER BOX (Magenta Navy Warning) === */}
                <motion.div
                    custom={0.9} // Muncul paling akhir setelah semua kartu sumber
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative bg-[#FFF5F9] border border-[#e71d89]/20 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row gap-5 items-start shadow-sm"
                >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-[#e71d89]/20 shadow-sm">
                        <ShieldAlert size={24} className="text-[#c21470]" strokeWidth={2} />
                    </div>
                    <div>
                        <div className="text-[11px] font-bold tracking-widest uppercase text-[#c21470] mb-2">
                            Catatan Penting
                        </div>
                        <p className="text-[13.5px] text-slate-700 leading-[1.7]">
                            Materi ini disusun sebagai bahan edukasi dalam Program CERMAT dan tidak menggantikan diagnosis atau konsultasi medis profesional. Untuk penanganan kasus KEK secara individual, ibu hamil wajib berkonsultasi langsung dengan bidan, dokter, atau ahli gizi di fasilitas kesehatan terdekat. <strong className="text-[#1E293B]">Seluruh informasi mengacu pada pedoman resmi Kementerian Kesehatan Republik Indonesia yang berlaku.</strong>
                        </p>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}