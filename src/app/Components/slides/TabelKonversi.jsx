"use client";
import { motion } from "framer-motion";
import {
    Calculator, Wheat, Drumstick, Bean,
    Carrot, Apple, Milk, Info, RefreshCcw,
    ShieldCheck, BookOpen
} from "lucide-react";

const primaryColor = "#2A5C43";

const dataKonversi = [
    {
        kategori: "Sumber Karbohidrat",
        icon: <Wheat size={20} className={`text-[${primaryColor}]`} />,
        items: [
            { nama: "Nasi putih", porsi: "150g (1 centong)", e: 195, p: 3.3, l: 0.3, k: 43.2, fe: 0.2 },
            { nama: "Nasi putih", porsi: "200g (1.5 centong)", e: 260, p: 4.4, l: 0.4, k: 57.6, fe: 0.3 },
            { nama: "Roti gandum", porsi: "2 lembar (60g)", e: 158, p: 5.8, l: 2.1, k: 30.4, fe: 1.4 },
            { nama: "Oatmeal", porsi: "40g (4 sdm)", e: 152, p: 5.5, l: 2.7, k: 27.4, fe: 1.7 },
            { nama: "Ubi rebus", porsi: "100g", e: 83, p: 1.4, l: 0.2, k: 19.3, fe: 0.6 },
        ]
    },
    {
        kategori: "Sumber Protein Hewani",
        icon: <Drumstick size={20} className={`text-[${primaryColor}]`} />,
        items: [
            { nama: "Telur rebus", porsi: "1 butir (55g)", e: 77, p: 6.3, l: 5.3, k: 0.6, fe: 0.9 },
            { nama: "Ayam rebus", porsi: "1 potong (80g)", e: 151, p: 18.2, l: 8.4, k: 0, fe: 0.8 },
            { nama: "Ikan kembung goreng", porsi: "1 ekor (80g)", e: 140, p: 18, l: 7.2, k: 0, fe: 1.6 },
            { nama: "Ikan lele goreng", porsi: "1 ekor (100g)", e: 148, p: 19, l: 7.5, k: 0, fe: 0.9 },
            { nama: "Hati ayam", porsi: "50g", e: 71, p: 9.8, l: 2.7, k: 1.3, fe: 4.9 },
            { nama: "Hati sapi", porsi: "50g", e: 68, p: 10.2, l: 2.3, k: 1.8, fe: 5.2 },
            { nama: "Daging sapi rebus", porsi: "50g", e: 102, p: 12.5, l: 5.5, k: 0, fe: 1.5 },
        ]
    },
    {
        kategori: "Sumber Protein Nabati",
        icon: <Bean size={20} className={`text-[${primaryColor}]`} />,
        items: [
            { nama: "Tempe goreng", porsi: "2 potong (50g)", e: 100, p: 9.4, l: 5, k: 6.8, fe: 2.2 },
            { nama: "Tahu goreng", porsi: "1 potong (100g)", e: 124, p: 9, l: 8, k: 3.1, fe: 1 },
            { nama: "Kacang tanah rebus", porsi: "30g (segenggam)", e: 108, p: 4.9, l: 8.4, k: 3.8, fe: 0.7 },
            { nama: "Kacang merah rebus", porsi: "50g", e: 82, p: 5.5, l: 0.3, k: 14.8, fe: 2 },
        ]
    },
    {
        kategori: "Sayuran",
        icon: <Carrot size={20} className={`text-[${primaryColor}]`} />,
        items: [
            { nama: "Bayam tumis", porsi: "1 mangkok (100g)", e: 36, p: 3.5, l: 0.5, k: 6.5, fe: 3.9 },
            { nama: "Kangkung tumis", porsi: "1 mangkok (100g)", e: 29, p: 3, l: 0.3, k: 5.4, fe: 2.5 },
            { nama: "Brokoli kukus", porsi: "100g", e: 34, p: 2.8, l: 0.4, k: 6.6, fe: 0.7 },
            { nama: "Wortel rebus", porsi: "100g", e: 35, p: 0.9, l: 0.2, k: 8.2, fe: 0.4 },
            { nama: "Daun kelor", porsi: "50g", e: 44, p: 3.2, l: 0.6, k: 8, fe: 3.5 },
        ]
    },
    {
        kategori: "Buah-buahan",
        icon: <Apple size={20} className={`text-[${primaryColor}]`} />,
        items: [
            { nama: "Pepaya", porsi: "150g (1 potong)", e: 60, p: 0.9, l: 0.1, k: 15.1, fe: 0.2 },
            { nama: "Pisang ambon", porsi: "1 buah (100g)", e: 99, p: 1.2, l: 0.2, k: 25.8, fe: 0.3 },
            { nama: "Jeruk manis", porsi: "1 buah (100g)", e: 45, p: 0.9, l: 0.2, k: 11.2, fe: 0.2 },
            { nama: "Semangka", porsi: "150g", e: 46, p: 0.9, l: 0.2, k: 11.5, fe: 0.2 },
        ]
    },
    {
        kategori: "Susu & Olahannya",
        icon: <Milk size={20} className={`text-[${primaryColor}]`} />,
        items: [
            { nama: "Susu ibu hamil", porsi: "1 gelas (200ml)", e: 195, p: 8, l: 5.5, k: 28, fe: 5 },
            { nama: "Yogurt plain", porsi: "1 cup (100g)", e: 61, p: 3.5, l: 3.3, k: 4.7, fe: 0.1 },
            { nama: "Keju cheddar", porsi: "1 potong (30g)", e: 120, p: 7.5, l: 9.9, k: 0.1, fe: 0.1 },
        ]
    }
];

export default function TabelKonversi() {
    // Animasi Intro Hero
    const heroContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    // Animasi untuk Teks (Badge, Judul, Deskripsi) - Slide ke atas
    const heroItem = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Animasi untuk 3 Kartu Info - Pop-up memantul
    const heroCard = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120, damping: 14 }
        }
    };

    // --- ANIMASI TABEL ---
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const rowVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 120, damping: 12 }
        }
    };

    const gridCols = "grid-cols-[2fr_1.5fr_1fr_1fr_1fr_1fr_1fr]";

    return (
        <div className="bg-[#FAFAFA] min-h-screen font-sans">

            {/* ================= 1. HERO SECTION ================= */}
            <section className="relative bg-[#F0FAF5] pt-24 pb-20 px-6 lg:px-12 text-center overflow-hidden border-b border-[#2A5C43]/10">
                {/* Ornamen Blur Background */}
                <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#2A5C43]/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

                <motion.div
                    variants={heroContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div variants={heroItem} className="inline-flex items-center gap-2 bg-[#2A5C43] text-white font-bold text-[11px] tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-lg shadow-[#2A5C43]/20">
                        <Calculator size={14} strokeWidth={2.5} /> Panduan Takaran & Substitusi
                    </motion.div>

                    {/* Judul */}
                    <motion.h1 variants={heroItem} className="font-black text-4xl md:text-5xl lg:text-6xl text-[#1A202C] leading-tight mb-6">
                        Tabel Konversi <span className="text-[#2A5C43]">Gizi</span><br />
                        <span className="text-[#D4AF37] font-serif italic font-normal">Bahan Makanan</span>
                    </motion.h1>

                    {/* Deskripsi */}
                    <motion.p variants={heroItem} className="text-slate-500 text-[15px] md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
                        Gunakan tabel ini sebagai panduan untuk menukar bahan makanan sesuai selera dan budget Anda, tanpa takut kekurangan asupan nutrisi harian selama kehamilan.
                    </motion.p>

                    {/* Info Cards / Fitur Hero (Grid dengan Animasi Staggered Pop-up) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <motion.div variants={heroCard} whileHover={{ y: -5, transition: { duration: 0.2 } }}  className="bg-white/60 border-2 hover:border-[#2A5C43] backdrop-blur-sm border-[#2A5C43]/10 rounded-2xl p-5 flex flex-col items-center hover:bg-white transition-colors shadow-sm cursor-default">
                            <div className="bg-[#2A5C43]/10 p-3 rounded-full mb-3 text-[#2A5C43]">
                                <RefreshCcw size={24} />
                            </div>
                            <h3 className="font-bold text-[#1A202C] text-sm mb-1">Mudah Ditukar</h3>
                            <p className="text-xs text-slate-500 text-center">Tukar ayam dengan ikan atau telur dengan nutrisi setara.</p>
                        </motion.div>

                        <motion.div variants={heroCard} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="bg-white/60 border-2 hover:border-[#2A5C43] backdrop-blur-sm border-[#2A5C43]/10 rounded-2xl p-5 flex flex-col items-center hover:bg-white transition-colors shadow-sm cursor-default">
                            <div className="bg-[#2A5C43]/10 p-3 rounded-full mb-3 text-[#2A5C43]">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="font-bold text-[#1A202C] text-sm mb-1">Fokus Bumil</h3>
                            <p className="text-xs text-slate-500 text-center">Disertai highlight khusus untuk Protein dan Zat Besi.</p>
                        </motion.div>

                        <motion.div variants={heroCard} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="bg-white/60 border-2 hover:border-[#2A5C43] backdrop-blur-sm border-[#2A5C43]/10 rounded-2xl p-5 flex flex-col items-center hover:bg-white transition-colors shadow-sm cursor-default">
                            <div className="bg-[#2A5C43]/10 p-3 rounded-full mb-3 text-[#2A5C43]">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="font-bold text-[#1A202C] text-sm mb-1">Standar Kemenkes</h3>
                            <p className="text-xs text-slate-500 text-center">Berdasarkan data akurat TKPI 2017 resmi pemerintah.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* ================= 2. TABLE SECTION ================= */}
            <section className="py-16 px-4 lg:px-8 overflow-hidden relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                    className="max-w-6xl mx-auto relative"
                >
                    {/* --- HEADER KECIL SEBELUM TABEL --- */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10">
                        <h2 className="font-black text-2xl text-[#1A202C] leading-tight">
                            Daftar Kandungan <span className="text-[#2A5C43]">Per Porsi</span>
                        </h2>

                        <div className="flex items-center gap-3 text-slate-500 text-xs bg-white border border-slate-100 px-5 py-3 rounded-2xl shadow-sm">
                            <Info size={20} className="text-[#2A5C43] shrink-0" />
                            <span className="leading-relaxed">Sumber: Tabel kompoosisi Pangan Indonesia (TKPI) 2017 - Kemenkes RI </span>
                        </div>
                    </div>

                    {/* --- DATA GRID CONTAINER --- */}
                    <div className="overflow-x-auto [scrollbar-width:thin] pb-24 relative">
                        <div className="min-w-225 relative">

                            {/* HEADER KOLOM (Sekarang Sticky, Di-Tengah, & ada efek Blur) */}
                            <div className={`sticky top-4 z-40 grid ${gridCols} gap-4 bg-[#2A5C43]/95 backdrop-blur-md text-white p-4 rounded-2xl mb-8 shadow-xl shadow-[#2A5C43]/20 items-center border border-white/10`}>
                                <div className="text-center font-bold text-[13px] tracking-wider uppercase px-2">Bahan Makanan</div>
                                <div className="text-center font-bold text-[13px] tracking-wider uppercase px-2">Porsi</div>
                                <div className="text-center font-bold text-[13px] tracking-wider uppercase">Energi <span className="block text-[10px] opacity-70 normal-case font-normal">(kkal)</span></div>
                                <div className="text-center font-black text-[13px] tracking-wider uppercase text-emerald-200 bg-white/10 py-2 rounded-lg mx-1">Protein <span className="block text-[10px] opacity-80 normal-case font-normal">(g)</span></div>
                                <div className="text-center font-bold text-[13px] tracking-wider uppercase">Lemak <span className="block text-[10px] opacity-70 normal-case font-normal">(g)</span></div>
                                <div className="text-center font-bold text-[13px] tracking-wider uppercase">Karbo <span className="block text-[10px] opacity-70 normal-case font-normal">(g)</span></div>
                                <div className="text-center font-black text-[13px] tracking-wider uppercase text-[#D4AF37] bg-white/10 py-2 rounded-lg mx-1">Zat Besi <span className="block text-[10px] opacity-80 normal-case font-normal">(mg)</span></div>
                            </div>

                            {/* LOOPING KATEGORI */}
                            <div className="space-y-12">
                                {dataKonversi.map((group, gIdx) => (
                                    <div key={gIdx} className="relative z-10">

                                        {/* Judul Kategori */}
                                        <h3 className="flex items-center gap-2 font-bold text-lg text-[#2A5C43] mb-4 px-2">
                                            <div className="bg-[#2A5C43]/10 p-2 rounded-full shadow-sm">
                                                {group.icon}
                                            </div>
                                            {group.kategori}
                                        </h3>

                                        {/* Blok Data Kategori dengan Animasi */}
                                        <motion.div
                                            variants={listVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-100px" }}
                                            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-50"
                                        >
                                            {group.items.map((item, iIdx) => (
                                                <motion.div
                                                    key={iIdx}
                                                    variants={rowVariants}
                                                    className={`grid ${gridCols} gap-4 p-4 items-center hover:bg-[#F0FAF5] transition-colors group`}
                                                >
                                                    {/* Text dikembalikan rata kiri agar enak dibaca, tapi header di atasnya tetap rata tengah */}
                                                    <div className="font-bold text-[#1A202C] px-2">{item.nama}</div>
                                                    <div className="text-sm text-slate-500 font-medium px-2">{item.porsi}</div>

                                                    <div className="text-sm text-center text-slate-600 font-medium">{item.e}</div>

                                                    {/* Highlight Protein */}
                                                    <div className="text-sm text-center font-black text-[#2A5C43] bg-[#F0FAF5] py-2 rounded-lg mx-1 group-hover:bg-white group-hover:shadow-sm transition-all">
                                                        {item.p}
                                                    </div>

                                                    <div className="text-sm text-center text-slate-600 font-medium">{item.l}</div>
                                                    <div className="text-sm text-center text-slate-600 font-medium">{item.k}</div>

                                                    {/* Highlight Zat Besi */}
                                                    <div className="text-sm text-center font-black text-[#92400E] bg-[#FFFBEB] py-2 rounded-lg mx-1 group-hover:bg-white group-hover:shadow-sm transition-all">
                                                        {item.fe}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}