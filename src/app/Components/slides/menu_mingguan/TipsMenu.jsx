"use client";
import { motion } from "framer-motion";
import {
    Lightbulb, CheckCircle2, XCircle,
    Utensils, Droplet, Pill, Leaf, Scale, Baby, // Icon DO
    ShieldAlert, FishOff, Coffee, Cookie, Flame, Beer // Icon DONT
} from "lucide-react";

export default function TipsMenu() {
    // 1. Animasi Header (Muncul dari atas dengan bounce)
    const headerVariant = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 }
        }
    };

    // 2. Animasi Container Kolom Kiri (Meluncur dari Kiri)
    const leftColVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring", stiffness: 80, damping: 20, delay: 0.4,
                staggerChildren: 0.15, delayChildren: 0.5 // Memicu anak-anaknya berurutan
            }
        }
    };

    // 3. Animasi Container Kolom Kanan (Meluncur dari Kanan)
    const rightColVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring", stiffness: 80, damping: 20, delay: 0.6,
                staggerChildren: 0.15, delayChildren: 0.7 // Memicu anak-anaknya berurutan (sedikit lebih lambat dari kiri)
            }
        }
    };

    // 4. Animasi Item List (Pop-up memantul)
    const itemPopVariant = {
        hidden: { opacity: 0, y: 30, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 200, damping: 15 } // Pantulan cepat dan tegas
        }
    };

    return (
        <section className="bg-linear-to-br from-[#0F3320] to-[#2A5C43] py-24 px-6 lg:px-12 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <motion.div
                    variants={headerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="font-serif text-[28px] md:text-[36px] text-white mb-3 flex items-center gap-3">
                        <Lightbulb className="text-[#D4AF37]" size={32} strokeWidth={2} /> Tips Penting Gizi Ibu Hamil
                    </h2>
                    <p className="text-white/60 text-[15px] mb-12 font-medium max-w-2xl">Panduan harian agar terhindar dari KEK selama kehamilan</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Kotak DO (Dianjurkan) - Meluncur dari Kiri */}
                    <motion.div
                        variants={leftColVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white/5 border border-white/10 rounded-4xl p-8 backdrop-blur-sm"
                    >
                        <h4 className="inline-flex items-center gap-2 bg-[#4CAF79]/25 text-[#86EFAC] text-[13px] font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-xl mb-8 shadow-sm shadow-[#4CAF79]/10">
                            <CheckCircle2 size={18} strokeWidth={2.5} /> Yang Dianjurkan
                        </h4>
                        <div className="flex flex-col gap-2">
                            {[
                                { i: <Utensils size={20} />, t: "Makan 3x sehari + 2x selingan — pola teratur membantu penyerapan gizi optimal" },
                                { i: <Droplet size={20} />, t: "Minum air putih 8–10 gelas/hari untuk mencegah dehidrasi" },
                                { i: <Pill size={20} />, t: "Konsumsi tablet Fe setiap malam + air jeruk agar lebih mudah diserap" },
                                { i: <Leaf size={20} />, t: "Perbanyak sayuran hijau gelap: bayam, kangkung, daun kelor — kaya folat & Fe" },
                                { i: <Scale size={20} />, t: "Variasikan protein hewani & nabati (telur, ayam, ikan, tempe, tahu) setiap hari" },
                                { i: <Baby size={20} />, t: "Trimester 1: makan porsi kecil tapi sering untuk mengatasi mual" }
                            ].map((tip, idx) => (
                                <motion.div key={idx} variants={itemPopVariant} className="flex gap-4 py-4 border-b border-white/10 last:border-0 items-start text-[14px] text-white/90 leading-relaxed font-light hover:bg-white/5 rounded-lg px-2 transition-colors">
                                    <div className="text-[#86EFAC] shrink-0 mt-0.5 bg-[#86EFAC]/10 p-2 rounded-full">{tip.i}</div>
                                    <div className="py-1">{tip.t}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Kotak DONT (Dihindari) - Meluncur dari Kanan */}
                    <motion.div
                        variants={rightColVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-rose-950/30 border border-rose-900/40 rounded-4xl p-8 backdrop-blur-sm"
                    >
                        <h4 className="inline-flex items-center gap-2 bg-[#EF4444]/25 text-[#FCA5A5] text-[13px] font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-xl mb-8 shadow-sm shadow-[#EF4444]/10">
                            <XCircle size={18} strokeWidth={2.5} /> Yang Dihindari
                        </h4>
                        <div className="flex flex-col gap-2">
                            {[
                                { i: <ShieldAlert size={20} />, t: "Makanan mentah/setengah matang — risiko bakteri Listeria & Salmonella" },
                                { i: <FishOff size={20} />, t: "Ikan tinggi merkuri (hiu, tuna sirip biru, king mackerel)" },
                                { i: <Coffee size={20} />, t: "Kafein berlebih — maksimal 200mg/hari (sekitar 1 cangkir kopi kecil)" },
                                { i: <Cookie size={20} />, t: "Junk food & minuman manis berlebih — memicu risiko diabetes gestasional" },
                                { i: <Flame size={20} />, t: "Makanan terlalu pedas & berminyak — menyebabkan heartburn dan mual" },
                                { i: <Beer size={20} />, t: "Alkohol dalam bentuk apapun — sangat berbahaya untuk perkembangan janin" }
                            ].map((tip, idx) => (
                                <motion.div key={idx} variants={itemPopVariant} className="flex gap-4 py-4 border-b border-white/10 last:border-0 items-start text-[14px] text-white/90 leading-relaxed font-light hover:bg-white/5 rounded-lg px-2 transition-colors">
                                    <div className="text-[#FCA5A5] shrink-0 mt-0.5 bg-[#FCA5A5]/10 p-2 rounded-full">{tip.i}</div>
                                    <div className="py-1">{tip.t}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}