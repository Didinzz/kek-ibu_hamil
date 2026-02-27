"use client";
import { motion } from "framer-motion";
import {
    Lightbulb, CheckCircle2, XCircle,
    Utensils, Droplet, Pill, Leaf, Scale, Bone, Baby,
    ShieldAlert, FishOff, Coffee, Flame, Cookie, WineOff
} from "lucide-react";

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
        <section className="bg-white py-24 px-4 lg:px-8 overflow-hidden font-sans relative">
            {/* Ornamen Background Soft Pink */}
            <div className="absolute top-0 left-0 w-full h-125 bg-gradient-to-b from-[#FFF5F9] to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* ================= 1. HERO SECTION ================= */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-[#FFF5F9] text-[#e71d89] font-bold text-[11px] tracking-widest uppercase px-5 py-2.5 rounded-full mb-6 border border-[#e71d89]/10"
                    >
                        <Lightbulb size={16} strokeWidth={2.5} /> Catatan Penting
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-black text-4xl md:text-5xl text-[#1E293B] leading-tight mb-5"
                    >
                        Tips Keseharian <span className="text-[#e71d89]">Ibu Hamil</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-500 text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed"
                    >
                        Panduan pola hidup sehat sehari-hari untuk memastikan kehamilan yang lancar, aman, dan janin yang berkembang sempurna.
                    </motion.p>
                </div>

                {/* ================= 2. CONTENT GRID ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* --- KOLOM KIRI: ANJURAN (Pink) --- */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-8 px-2"
                        >
                            <div className="bg-[#e71d89] p-2.5 rounded-xl shadow-md shadow-[#e71d89]/20">
                                <CheckCircle2 size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl text-[#1E293B]">Dianjurkan</h3>
                                <p className="text-xs font-bold text-[#e71d89] uppercase tracking-wider">Lakukan Secara Rutin</p>
                            </div>
                        </motion.div>

                        {tipsAnjuran.map((tip, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 group hover:shadow-md hover:border-[#e71d89]/20 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="bg-[#FFF5F9] text-[#e71d89] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#e71d89] group-hover:text-white transition-all duration-300">
                                    {tip.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1E293B] text-[15px] mb-1 group-hover:text-[#e71d89] transition-colors">{tip.title}</h4>
                                    <p className="text-[13px] text-slate-500 leading-relaxed">{tip.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- KOLOM KANAN: HINDARI (Magenta/Rose) --- */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-8 px-2"
                        >
                            <div className="bg-[#c21470] p-2.5 rounded-xl shadow-md shadow-[#c21470]/20">
                                <XCircle size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl text-[#1E293B]">Dihindari</h3>
                                <p className="text-xs font-bold text-[#c21470] uppercase tracking-wider">Berbahaya Bagi Janin</p>
                            </div>
                        </motion.div>

                        {tipsHindari.map((tip, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 group hover:shadow-md hover:border-[#c21470]/20 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="bg-[#FFF5F9] text-[#c21470] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#c21470] group-hover:text-white transition-all duration-300">
                                    {tip.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1E293B] text-[15px] mb-1 group-hover:text-[#c21470] transition-colors">{tip.title}</h4>
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