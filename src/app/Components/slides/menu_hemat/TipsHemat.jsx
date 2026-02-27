"use client";
import { motion } from "framer-motion";
import { Lightbulb, Fish, Bean, Leaf, ShoppingCart, Apple, Pill } from "lucide-react";

const getIcon = (icon) => {
    // Menggunakan warna Magenta Pink untuk Ikon
    const cls = "text-[#e71d89]";
    switch (icon) {
        case "fish": return <Fish className={cls} size={26} />;
        case "bean": return <Bean className={cls} size={26} />;
        case "leaf": return <Leaf className={cls} size={26} />;
        case "cart": return <ShoppingCart className={cls} size={26} />;
        case "fruit": return <Apple className={cls} size={26} />;
        case "pill": return <Pill className={cls} size={26} />;
        default: return <Lightbulb className={cls} size={26} />;
    }
};

export default function TipsHemat({ tips }) {

    // 1. Variasi Container: Mengatur antrean animasi anak-anaknya
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Jeda waktu antar kartu
                delayChildren: 0.2
            }
        }
    };

    // 2. Variasi Kartu: Muncul dari bawah dengan efek pegas
    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        // Background Soft Pink dengan border transparan Pink
        <section className="py-20 px-6 lg:px-12 bg-[#FFF5F9] border-t border-[#e71d89]/10">
            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-10"
                >
                    <div className="bg-white p-3 rounded-full shadow-sm border border-[#e71d89]/15">
                        <Lightbulb className="text-[#e71d89]" size={28} strokeWidth={2.5} />
                    </div>
                    {/* Teks Dongker Gelap */}
                    <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1E293B]">
                        Tips Belanja Hemat Bumil
                    </h2>
                </motion.div>

                {/* Grid Kartu dengan Animasi */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {tips.map((tip, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            // Kartu putih, hover dengan shadow pink lembut
                            className="bg-white p-6 rounded-2xl shadow-sm border border-[#e71d89]/10 flex gap-4 items-start hover:shadow-md hover:border-[#e71d89]/30 transition-all cursor-default"
                        >
                            {/* Icon Wrapper (Soft Pink) */}
                            <div className="bg-[#FFF5F9] p-3.5 rounded-2xl shrink-0 border border-[#e71d89]/10">
                                {getIcon(tip.icon)}
                            </div>

                            {/* Text Content */}
                            <div>
                                <h4 className="font-bold text-[#1E293B] text-sm mb-1.5">{tip.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed font-light">{tip.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}