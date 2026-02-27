"use client";
import { motion } from "framer-motion";
import {
    ClipboardList, Info, Baby, ShieldCheck,
    TrendingUp, Activity, Sparkles
} from "lucide-react";

// Palet Warna Pink Proyek
const primaryPink = "#e71d89";
const deepPink = "#c21470";

// Data Transkripsi Lengkap dari Excel AKG 2019
const dataAkg = [
    {
        kategori: "Makronutrien & Cairan",
        icon: <Activity size={20} />,
        items: [
            { gizi: "Energi", unit: "kkal", normal: "2150", t1: "+180", t2: "+300", t3: "+300", ket: "Tambahan untuk pertumbuhan janin" },
            { gizi: "Protein", unit: "g", normal: "60", t1: "+1", t2: "+10", t3: "+30", ket: "Penting untuk pembentukan sel janin" },
            { gizi: "Lemak", unit: "g", normal: "60", t1: "+2.3", t2: "+2.3", t3: "+2.3", ket: "Untuk perkembangan otak janin" },
            { gizi: "Karbohidrat", unit: "g", normal: "340", t1: "+25", t2: "+40", t3: "+40", ket: "Sumber energi utama" },
            { gizi: "Serat", unit: "g", normal: "30", t1: "+3", t2: "+4", t3: "+4", ket: "Mencegah sembelit" },
            { gizi: "Air", unit: "ml", normal: "2350", t1: "+300", t2: "+300", t3: "+300", ket: "Cegah dehidrasi" },
        ]
    },
    {
        kategori: "Mikronutrien (Vitamin & Mineral)",
        icon: <Sparkles size={20} />,
        items: [
            { gizi: "Zat Besi / Fe", unit: "mg", normal: "26", t1: "+0", t2: "+9", t3: "+13", ket: "Cegah anemia pada bumil" },
            { gizi: "Asam Folat", unit: "mcg", normal: "400", t1: "+200", t2: "+200", t3: "+200", ket: "Cegah cacat tabung saraf" },
            { gizi: "Kalsium", unit: "mg", normal: "1000", t1: "+200", t2: "+200", t3: "+200", ket: "Pembentukan tulang & gigi janin" },
            { gizi: "Vitamin C", unit: "mg", normal: "75", t1: "+10", t2: "+10", t3: "+10", ket: "Membantu penyerapan zat besi" },
            { gizi: "Vitamin A", unit: "RE", normal: "600", t1: "+300", t2: "+300", t3: "+300", ket: "Perkembangan mata & imunitas" },
            { gizi: "Vitamin D", unit: "mcg", normal: "15", t1: "+0", t2: "+0", t3: "+0", ket: "Penyerapan kalsium" },
        ]
    }
];

export default function TabelKebutuhanGizi() {

    // --- KONFIGURASI ANIMASI ---
    const heroContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const heroItem = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const heroCard = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1, scale: 1, y: 0,
            transition: { type: "spring", stiffness: 120, damping: 14 }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const rowVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1, x: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    const gridCols = "grid-cols-[1.5fr_1.2fr_1fr_1fr_1fr_2fr]";

    return (
        <div className="bg-white min-h-screen font-sans">

            {/* ================= 1. HERO SECTION (Soft Pink) ================= */}
            <section className="relative bg-[#FFF5F9] pt-24 pb-20 px-6 lg:px-12 text-center overflow-hidden border-b border-[#e71d89]/10">
                <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#e71d89]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#c21470]/5 rounded-full blur-3xl pointer-events-none"></div>

                <motion.div
                    variants={heroContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div variants={heroItem} className="inline-flex items-center gap-2 bg-[#e71d89] text-white font-bold text-[11px] tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-lg shadow-[#e71d89]/20">
                        <ClipboardList size={14} strokeWidth={2.5} /> Referensi AKG 2019
                    </motion.div>

                    {/* Judul */}
                    <motion.h1 variants={heroItem} className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[#1E293B] leading-tight mb-6">
                        Kebutuhan Gizi <span className="text-[#e71d89]">Tambahan</span><br />
                        <span className="text-[#c21470] italic font-normal">Selama Kehamilan</span>
                    </motion.h1>

                    <motion.p variants={heroItem} className="text-slate-500 text-[15px] md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
                        Ketahui persis berapa banyak tambahan kalori, protein, dan vitamin yang dibutuhkan tubuh Anda dan janin pada setiap trimester kehamilan.
                    </motion.p>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <motion.div variants={heroCard} whileHover={{ y: -5 }} className="bg-white border border-[#e71d89]/10 rounded-2xl p-5 flex flex-col items-center shadow-sm cursor-default">
                            <div className="bg-[#FFF5F9] p-3 rounded-full mb-3 text-[#e71d89]">
                                <Baby size={24} />
                            </div>
                            <h3 className="font-bold text-[#1E293B] text-sm mb-1">Tumbuh Kembang</h3>
                            <p className="text-xs text-slate-500 text-center">Data dirancang khusus untuk pertumbuhan optimal janin.</p>
                        </motion.div>

                        <motion.div variants={heroCard} whileHover={{ y: -5 }} className="bg-white border border-[#e71d89]/10 rounded-2xl p-5 flex flex-col items-center shadow-sm cursor-default">
                            <div className="bg-[#FFF5F9] p-3 rounded-full mb-3 text-[#e71d89]">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="font-bold text-[#1E293B] text-sm mb-1">Bertahap per Trimester</h3>
                            <p className="text-xs text-slate-500 text-center">Kebutuhan gizi yang terus meningkat seiring usia kandungan.</p>
                        </motion.div>

                        <motion.div variants={heroCard} whileHover={{ y: -5 }} className="bg-white border border-[#e71d89]/10 rounded-2xl p-5 flex flex-col items-center shadow-sm cursor-default">
                            <div className="bg-[#FFF5F9] p-3 rounded-full mb-3 text-[#e71d89]">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="font-bold text-[#1E293B] text-sm mb-1">Permenkes RI</h3>
                            <p className="text-xs text-slate-500 text-center">Sesuai standar Permenkes No. 28 Tahun 2019 (AKG).</p>
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
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10">
                        <h2 className="font-serif text-3xl font-black text-[#1E293B] leading-tight">
                            Tabel <span className="text-[#e71d89]">AKG Ibu Hamil</span>
                        </h2>

                        <div className="flex items-center gap-3 text-slate-500 text-xs bg-[#FFF5F9] border border-[#e71d89]/10 px-5 py-3 rounded-2xl">
                            <Info size={20} className="text-[#e71d89] shrink-0" />
                            <span className="leading-relaxed font-medium">Sumber: Permenkes No. 28 Tahun 2019 tentang AKG.</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto [scrollbar-width:thin] pb-12 relative">
                        <div className="min-w-[1000px] relative">

                            {/* HEADER KOLOM (Navy Theme) */}
                            <div className={`grid ${gridCols} gap-4 bg-[#1E293B] text-white p-4 rounded-2xl mb-8 shadow-xl items-center border border-white/10`}>
                                <div className="text-center font-bold text-[11px] tracking-wider uppercase px-2">Zat Gizi</div>
                                <div className="text-center font-bold text-[11px] tracking-wider uppercase">Wanita Normal <span className="block text-[9px] text-[#FFD1E8] normal-case font-bold mt-0.5">(19-29 th)</span></div>
                                <div className="text-center font-bold text-[11px] tracking-wider uppercase bg-white/10 py-2 rounded-lg mx-1 text-[#FFD1E8]">Tambahan <span className="block text-[9px] text-white/70 mt-0.5">Trimester 1</span></div>
                                <div className="text-center font-bold text-[11px] tracking-wider uppercase bg-white/10 py-2 rounded-lg mx-1 text-[#FFD1E8]">Tambahan <span className="block text-[9px] text-white/70 mt-0.5">Trimester 2</span></div>
                                <div className="text-center font-bold text-[11px] tracking-wider uppercase bg-white/10 py-2 rounded-lg mx-1 text-[#FFD1E8]">Tambahan <span className="block text-[9px] text-white/70 mt-0.5">Trimester 3</span></div>
                                <div className="text-center font-bold text-[11px] tracking-wider uppercase px-2">Keterangan Manfaat</div>
                            </div>

                            {/* LOOPING KATEGORI */}
                            <div className="space-y-12">
                                {dataAkg.map((group, gIdx) => (
                                    <div key={gIdx} className="relative z-10">
                                        <h3 className="flex items-center gap-2 font-bold text-lg text-[#1E293B] mb-5 px-2">
                                            <div className="bg-[#FFF5F9] text-[#e71d89] p-2 rounded-full shadow-sm">
                                                {group.icon}
                                            </div>
                                            {group.kategori}
                                        </h3>

                                        <motion.div
                                            variants={listVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-50"
                                        >
                                            {group.items.map((item, iIdx) => {
                                                const isZeroT1 = item.t1 === "+0";
                                                const isZeroT2 = item.t2 === "+0";
                                                const isZeroT3 = item.t3 === "+0";

                                                return (
                                                    <motion.div
                                                        key={iIdx}
                                                        variants={rowVariants}
                                                        className={`grid ${gridCols} gap-4 p-4 items-center hover:bg-[#FFF5F9]/50 transition-colors group`}
                                                    >
                                                        <div className="font-bold text-[#1E293B] px-2 flex items-baseline gap-1">
                                                            {item.gizi} <span className="text-[10px] text-slate-400 font-medium normal-case">({item.unit})</span>
                                                        </div>

                                                        <div className="text-sm text-center text-slate-600 font-medium">{item.normal}</div>

                                                        {/* Tambahan T1 */}
                                                        <div className="text-sm text-center font-black rounded-lg py-2 mx-1 transition-all group-hover:bg-white flex justify-center items-center">
                                                            <span className={isZeroT1 ? 'text-slate-300 font-medium' : 'text-[#c21470] bg-[#FFF5F9] px-4 py-1.5 rounded-md w-full border border-[#e71d89]/5'}>
                                                                {item.t1}
                                                            </span>
                                                        </div>

                                                        {/* Tambahan T2 */}
                                                        <div className="text-sm text-center font-black rounded-lg py-2 mx-1 transition-all group-hover:bg-white flex justify-center items-center">
                                                            <span className={isZeroT2 ? 'text-slate-300 font-medium' : 'text-[#c21470] bg-[#FFF5F9] px-4 py-1.5 rounded-md w-full border border-[#e71d89]/5'}>
                                                                {item.t2}
                                                            </span>
                                                        </div>

                                                        {/* Tambahan T3 */}
                                                        <div className="text-sm text-center font-black rounded-lg py-2 mx-1 transition-all group-hover:bg-white flex justify-center items-center">
                                                            <span className={isZeroT3 ? 'text-slate-300 font-medium' : 'text-[#c21470] bg-[#FFF5F9] px-4 py-1.5 rounded-md w-full border border-[#e71d89]/5'}>
                                                                {item.t3}
                                                            </span>
                                                        </div>

                                                        <div className="text-[12px] text-slate-500 font-medium px-4 leading-relaxed border-l border-slate-100 group-hover:border-[#e71d89]/20 transition-colors">
                                                            {item.ket}
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
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