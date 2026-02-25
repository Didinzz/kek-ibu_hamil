"use client";
import { motion } from "framer-motion";
import {
    Lightbulb, CheckCircle2, XCircle,
    Utensils, Droplet, Pill, Leaf, Scale, Bone, Baby,
    ShieldAlert, FishOff, Coffee, Flame, Cookie, WineOff
} from "lucide-react";

// --- DATA TRANSKRIPSI ---
const tipsAnjuran = [
    { title: "Makan 3x sehari + 2x selingan", desc: "Pola makan teratur membantu penyerapan gizi optimal.", icon: <Utensils size={22} /> },
    { title: "Minum air putih 8-10 gelas/hari", desc: "Cegah dehidrasi dan mendukung sirkulasi darah.", icon: <Droplet size={22} /> },
    { title: "Konsumsi tablet Fe anjuran bidan", desc: "Diminum malam hari dengan air jeruk agar lebih mudah diserap.", icon: <Pill size={22} /> },
    { title: "Perbanyak sayuran hijau gelap", desc: "Bayam, kangkung, daun kelor kaya zat besi dan folat.", icon: <Leaf size={22} /> },
    { title: "Variasikan sumber protein", desc: "Kombinasi protein hewani & nabati untuk gizi lengkap.", icon: <Scale size={22} /> },
    { title: "Konsumsi makanan kaya kalsium", desc: "Susu, tahu, tempe, ikan teri untuk tulang janin.", icon: <Bone size={22} /> },
    { title: "Porsi kecil tapi sering (Trimester 1)", desc: "Membantu mengatasi mual dan muntah di awal kehamilan.", icon: <Baby size={22} /> },
];

const tipsHindari = [
    { title: "Makanan mentah/setengah matang", desc: "Risiko bakteri berbahaya bagi janin (Listeria, Salmonella).", icon: <ShieldAlert size={22} /> },
    { title: "Ikan tinggi merkuri", desc: "Hiu, tuna besar — merkuri berbahaya untuk saraf janin.", icon: <FishOff size={22} /> },
    { title: "Kafein berlebih (>200mg/hari)", desc: "Dapat mengganggu perkembangan janin.", icon: <Coffee size={22} /> },
    { title: "Makanan pedas & berminyak", desc: "Menyebabkan mual, heartburn, dan gangguan pencernaan.", icon: <Flame size={22} /> },
    { title: "Junk food & minuman manis", desc: "Risiko diabetes gestasional dan kenaikan BB berlebih.", icon: <Cookie size={22} /> },
    { title: "Alkohol", desc: "Sangat berbahaya bagi perkembangan janin.", icon: <WineOff size={22} /> },
];

export default function TipsBumil() {

    return (
        <section className="bg-[#FAFAFA] py-24 px-4 lg:px-8 overflow-hidden font-sans relative">

            {/* Ornamen Background Elegan */}
            <div className="absolute top-0 left-0 w-full h-125 bg-linear-to-b from-[#2A5C43]/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ================= 1. HERO SECTION ================= */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 bg-white text-[#2A5C43] font-bold text-[11px] tracking-widest uppercase px-5 py-2.5 rounded-full mb-6 shadow-sm border border-[#2A5C43]/10"
                    >
                        <Lightbulb size={16} strokeWidth={2.5} className="text-[#D4AF37]" /> Catatan Penting
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="font-black text-4xl md:text-5xl text-[#1A202C] leading-tight mb-5"
                    >
                        Tips Keseharian <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2A5C43] to-[#408261]">Ibu Hamil</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-slate-500 text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed"
                    >
                        Panduan pola hidup sehat sehari-hari untuk memastikan kehamilan yang lancar, aman, dan janin yang berkembang sempurna.
                    </motion.p>
                </div>

                {/* ================= 2. CONTENT GRID (FLOATING CARDS) ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* --- KOLOM KIRI: ANJURAN --- */}
                    <div className="space-y-4">
                        {/* Title Header */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex items-center gap-3 mb-8 px-2"
                        >
                            <div className="bg-[#2A5C43] p-2.5 rounded-xl shadow-md shadow-[#2A5C43]/20">
                                <CheckCircle2 size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl text-[#1A202C]">Dianjurkan</h3>
                                <p className="text-xs font-bold text-[#2A5C43] uppercase tracking-wider">Lakukan Secara Rutin</p>
                            </div>
                        </motion.div>

                        {/* Card List Anjuran - Animasi Per Item */}
                        {tipsAnjuran.map((tip, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -40, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }} // Memicu saat discroll persis ke item ini
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 group hover:shadow-lg hover:border-[#2A5C43]/20 transition-all duration-300 cursor-default relative overflow-hidden"
                            >
                                {/* Highlight Bar (kiri) saat hover */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2A5C43] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                                <div className="bg-[#F0FAF5] text-[#2A5C43] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#2A5C43] group-hover:text-white transition-all duration-300">
                                    {tip.icon}
                                </div>
                                <div className="pt-0.5">
                                    <h4 className="font-bold text-[#1A202C] text-[15px] mb-1.5 group-hover:text-[#2A5C43] transition-colors">{tip.title}</h4>
                                    <p className="text-[13px] text-slate-500 leading-relaxed">{tip.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                    {/* --- KOLOM KANAN: HINDARI --- */}
                    <div className="space-y-4">
                        {/* Title Header */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex items-center gap-3 mb-8 px-2"
                        >
                            <div className="bg-rose-700 p-2.5 rounded-xl shadow-md shadow-rose-700/20">
                                <XCircle size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl text-[#1A202C]">Dihindari</h3>
                                <p className="text-xs font-bold text-rose-600 uppercase tracking-wider">Berbahaya Bagi Janin</p>
                            </div>
                        </motion.div>

                        {/* Card List Hindari - Animasi Per Item */}
                        {tipsHindari.map((tip, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }} // Memicu saat discroll persis ke item ini
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 group hover:shadow-lg hover:border-rose-200 transition-all duration-300 cursor-default relative overflow-hidden"
                            >
                                {/* Highlight Bar (kiri) saat hover */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                                <div className="bg-rose-50 text-rose-600 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                                    {tip.icon}
                                </div>
                                <div className="pt-0.5">
                                    <h4 className="font-bold text-[#1A202C] text-[15px] mb-1.5 group-hover:text-rose-700 transition-colors">{tip.title}</h4>
                                    <p className="text-[13px] text-slate-500 leading-relaxed">{tip.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}