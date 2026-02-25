"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function AkgMenu() {
    const akgData = [
        {
            tri: "1", label: "Trimester 1", focus: "Atasi mual · Tinggi folat & zat besi",
            grad: "bg-linear-to-br from-[#FFFBEB] to-[#FDE68A]", textColor: "text-[#B45309]",
            data: [{ l: "Energi tambahan", v: "+180 kkal" }, { l: "Protein tambahan", v: "+1 g" }, { l: "Asam Folat", v: "+200 mcg" }, { l: "Air", v: "+300 ml" }]
        },
        {
            tri: "2", label: "Trimester 2", focus: "Pertumbuhan janin · Tinggi protein & kalsium",
            grad: "bg-linear-to-br from-[#E8F5EE] to-[#A7F3D0]", textColor: "text-[#059669]",
            data: [{ l: "Energi tambahan", v: "+300 kkal" }, { l: "Protein tambahan", v: "+10 g" }, { l: "Zat Besi", v: "+9 mg" }, { l: "Air", v: "+300 ml" }]
        },
        {
            tri: "3", label: "Trimester 3", focus: "Persiapan persalinan · Tinggi serat & zat besi",
            grad: "bg-linear-to-br from-[#E3F2FD] to-[#BFDBFE]", textColor: "text-[#1D4ED8]",
            data: [{ l: "Energi tambahan", v: "+300 kkal" }, { l: "Protein tambahan", v: "+30 g" }, { l: "Zat Besi", v: "+13 mg" }, { l: "Air", v: "+300 ml" }]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="bg-white py-16 px-6 lg:px-12 border-b-[3px] border-[#E8F0E8]">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
                    <h2 className="font-serif text-[28px] md:text-[32px] text-[#2A5C43] mb-2 flex items-center gap-3">
                        <Zap className="text-[#D4AF37]" size={28} /> Kebutuhan Gizi Tambahan per Trimester
                    </h2>
                    <p className="text-slate-500 text-[14px] mb-10 font-medium">Permenkes No. 28 Tahun 2019 — Angka Kecukupan Gizi (AKG) 2019</p>
                </motion.div>

                <motion.div
                    variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {akgData.map((item, idx) => (
                        <motion.div key={idx} variants={cardVariants} className={`${item.grad} rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                            {/* Angka Background Transparan */}
                            <div className="absolute top-2 right-4 font-serif text-[100px] font-black opacity-[0.07] leading-none text-black pointer-events-none">
                                {item.tri}
                            </div>

                            <h3 className={`text-[15px] font-black uppercase tracking-widest mb-1 ${item.textColor}`}>{item.label}</h3>
                            <div className="text-[12px] text-slate-600 mb-6 font-medium italic">{item.focus}</div>

                            <div className="flex flex-col gap-3">
                                {item.data.map((row, rIdx) => (
                                    <div key={rIdx} className="flex justify-between items-center pb-2 border-b border-black/5 last:border-0">
                                        <span className="text-[13px] font-bold text-slate-700">{row.l}</span>
                                        <span className="text-[13px] font-extrabold text-[#2A5C43] bg-white/60 px-3 py-1 rounded-lg backdrop-blur-sm shadow-sm">{row.v}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}