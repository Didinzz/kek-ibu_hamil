"use client";

import { motion } from "framer-motion";
import { Pill, Info, Target, CheckCircle2 } from "lucide-react";

export default function TatalaksanaMateri() {
    // --- KONFIGURASI ANIMASI INDIVIDUAL ---
    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.7,
                delay: delay,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    // --- DATA 5 LANGKAH (TEKS 100% SESUAI ASLI) ---
    const steps = [
        {
            title: "Konseling Gizi & Edukasi Pola Makan",
            body: <>Tenaga gizi memberikan <strong className="text-[#1A2E22]">konseling individual</strong> tentang kebutuhan kalori dan protein sesuai AKG 2019 per trimester, pemilihan bahan makanan bergizi terjangkau, dan cara pengolahan yang tepat. Makan 3 kali utama + 2 selingan per hari.</>,
            src: "Sumber: Pedoman Pelayanan Gizi Ibu Hamil KEK, Kemenkes RI 2018",
            numColor: "bg-[#2D6A4F] text-white"
        },
        {
            title: "PMT Berbahan Pangan Lokal",
            body: <>Ibu hamil KEK/Risiko KEK mendapat <strong className="text-[#1A2E22]">Makanan Tambahan (MT) berbahan pangan lokal</strong> minimal selama <strong className="text-[#1A2E22]">120 hari</strong>. PMT diberikan segera setelah terdeteksi, idealnya sebelum usia kehamilan 16 minggu. PMT bukan pengganti makan utama — ibu tetap wajib makan 3× sehari + 2 selingan. Butuh tambahan <strong className="text-[#1A2E22]">+500 kkal/hari</strong> dari asupan harian untuk mengejar kenaikan BB.</>,
            src: "Sumber: Juknis PMT Berbahan Pangan Lokal, Kemenkes RI 2025 (Kepdirjen No. 576)",
            numColor: "bg-[#40916C] text-white"
        },
        {
            title: "Suplementasi Tablet Tambah Darah (TTD / Fe)",
            body: <>Semua ibu hamil mendapat <strong className="text-[#1A2E22]">minimal 90 tablet Fe</strong> selama kehamilan. Diminum 1 tablet/hari pada malam hari sebelum tidur, disertai air jeruk atau air putih. <strong className="text-[#C84C31]">Jangan diminum bersamaan dengan teh, kopi, atau susu</strong> karena menghambat penyerapan.</>,
            src: "Sumber: Permenkes No. 88 Tahun 2014 tentang Standar TTD; Kemenkes RI",
            numColor: "bg-[#C84C31] text-white"
        },
        {
            title: "Pemantauan Berat Badan & LILA Berkala",
            body: <>Timbang BB setiap kunjungan ANC (minimal <strong className="text-[#1A2E22]">6 kali</strong> selama kehamilan: 2× TM I, 1× TM II, 3× TM III). Kenaikan BB yang diharapkan untuk ibu KEK/Risiko KEK: <strong className="text-[#1A2E22]">±0,5 kg/minggu</strong>. Ukur LILA setiap bulan untuk evaluasi respons intervensi. Jika BB tidak naik adekuat di bulan pertama, evaluasi penyebab dan intensifkan intervensi.</>,
            src: "Sumber: Permenkes No. 21 Tahun 2021; Juknis PMT Lokal Kemenkes 2025",
            numColor: "bg-[#2D6A4F] text-white"
        },
        {
            title: "Rujukan ke Ahli Gizi / Dokter Spesialis",
            body: <>Bila setelah pemantauan rutin BB tidak naik adekuat atau terdapat <strong className="text-[#1A2E22]">komorbiditas</strong> (anemia berat Hb &lt; 8 g/dL, penyakit penyerta, hiperemesis berat), lakukan pemeriksaan oleh dokter. Jika tidak bisa ditangani di Puskesmas, segera rujuk ke RS. Juknis 2025 menyebut khusus kategori: <strong className="text-[#1A2E22]">KEK/Risiko KEK + penyakit/komplikasi kehamilan → rujuk RS</strong>.</>,
            src: "Sumber: Juknis PMT Berbahan Pangan Lokal, Kemenkes RI 2025 (Kepdirjen No. 576)",
            numColor: "bg-[#1A2E22] text-white"
        }
    ];

    return (
        <section id="pencegahan" className="py-16 px-6 lg:px-16 max-w-7xl mx-auto scroll-mt-20">
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
                    <div className="flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#40916C] mb-3">
                        05 — Pencegahan & Tatalaksana
                        <div className="flex-1 h-px bg-[#40916C]/20"></div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2E22] mb-3 tracking-tight">
                        Apa yang Harus Dilakukan?
                    </h2>
                    <p className="text-[14px] text-slate-500 max-w-3xl leading-relaxed">
                        Berdasarkan Juknis PMT Lokal Kemenkes 2025, intervensi untuk ibu hamil KEK/Risiko KEK mencakup PMT berbahan pangan lokal, TTD, konseling gizi, dan pemantauan ANC rutin.
                    </p>
                </motion.div>

                {/* === LAYOUT UTAMA (KIRI: TIMELINE, KANAN: KARTU) === */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* KOLOM KIRI: TIMELINE 5 LANGKAH */}
                    <div className="lg:col-span-7 relative">
                        {/* Garis vertikal timeline */}
                        <div className="absolute top-4 bottom-8 left-5.75 w-px bg-slate-200 hidden sm:block z-0"></div>

                        <div className="space-y-6 sm:space-y-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    custom={0.1 + (index * 0.15)} // Animasi cascade beruntun
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
                                >
                                    {/* Nomor Langkah */}
                                    <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center font-serif text-xl font-bold shadow-sm ${step.numColor}`}>
                                        {index + 1}
                                    </div>

                                    {/* Konten Langkah */}
                                    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm flex-1 hover:border-[#B7E4C7] transition-colors">
                                        <h4 className="text-[15px] font-bold text-[#1A2E22] mb-2">{step.title}</h4>
                                        <p className="text-[13.5px] text-slate-600 leading-[1.7] mb-4">
                                            {step.body}
                                        </p>
                                        <div className="text-[10.5px] font-bold text-[#40916C] pt-3 border-t border-slate-100">
                                            {step.src}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* KOLOM KANAN: KARTU INFO PENTING */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">

                        {/* KARTU 1: PMT PANGAN LOKAL */}
                        <motion.div
                            custom={0.4}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-[#1A2E22] rounded-3xl p-6 lg:p-8 relative overflow-hidden shadow-lg"
                        >
                            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#2D6A4F]/40 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-widest uppercase text-[#B7E4C7] mb-3">
                                    <Target size={14} /> Target Tambahan Asupan
                                </div>
                                <h3 className="font-serif text-xl font-bold text-[#E8F5F5] mb-5 leading-tight">
                                    PMT Pangan Lokal Ibu Hamil KEK/Risiko KEK
                                </h3>

                                <div className="space-y-2 mb-5">
                                    {[
                                        { label: "Tambahan energi/hari", val: "+500 kkal" },
                                        { label: "Dari protein (<25%)", val: "≤ 125 kkal" },
                                        { label: "Durasi PMT", val: "Min. 120 hari" },
                                        { label: "Mulai PMT", val: "Idealnya < 16 minggu" },
                                        { label: "Bentuk MT", val: "Pangan lokal siap santap" },
                                        { label: "Pantau BB", val: "Tiap bulan" }
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-3">
                                            <span className="text-[12px] text-white/70">{row.label}</span>
                                            <span className="text-[12px] font-bold text-[#F4A830]">{row.val}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-[11px] text-[#B7E4C7]/70 leading-relaxed border-t border-white/10 pt-4 flex gap-2 items-start">
                                    <Info size={14} className="shrink-0 mt-0.5" />
                                    <span>Sumber: Juknis PMT Berbahan Pangan Lokal bagi Ibu Hamil dan Balita, Kemenkes RI 2025 (Kepdirjen Kesehatan Primer & Komunitas No. 576). PMT berbasis pangan lokal menggantikan PMT biskuit pabrikan.</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* KARTU 2: ATURAN MINUM TABLET FE */}
                        <motion.div
                            custom={0.5}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-[#FFF5ED] border border-[#C84C31]/20 rounded-3xl p-6 lg:p-8 shadow-sm"
                        >
                            <h4 className="font-serif text-lg font-bold text-[#C84C31] mb-5 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#C84C31]/10 flex items-center justify-center">
                                    <Pill size={18} strokeWidth={2.5} />
                                </div>
                                Aturan Minum Tablet Fe yang Benar
                            </h4>
                            <div className="space-y-3">
                                {[
                                    <>Minum <strong className="text-[#1A2E22]">malam hari sebelum tidur</strong> untuk kurangi efek mual</>,
                                    <>Konsumsi bersama <strong className="text-[#1A2E22]">air jeruk / vit. C</strong> untuk meningkatkan absorpsi</>,
                                    <><strong className="text-[#C84C31]">Hindari</strong> minum bersamaan dengan teh, kopi, susu — menghambat penyerapan</>,
                                    <>Efek samping normal: <strong className="text-[#1A2E22]">feses berwarna hitam</strong> — tidak berbahaya</>
                                ].map((txt, i) => (
                                    <div key={i} className="flex gap-3 items-start bg-white/60 border border-[#C84C31]/10 p-3.5 rounded-xl">
                                        <CheckCircle2 size={16} className="text-[#C84C31] shrink-0 mt-0.5" strokeWidth={2.5} />
                                        <div className="text-[13px] text-slate-600 leading-relaxed">
                                            {txt}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}