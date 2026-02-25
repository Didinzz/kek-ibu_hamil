"use client";
import { motion } from "framer-motion";
import { Lightbulb, Fish, Bean, Leaf, ShoppingCart, Apple, Pill } from "lucide-react";

const getIcon = (icon) => {
    const cls = "text-[#D4AF37]"; // Menggunakan warna Emas standar kita
    switch (icon) {
        case "fish": return <Fish className={cls} size={26} />;
        case "bean": return <Bean className={cls} size={26} />; // Menggunakan Icon Kacang
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
        <section className="py-20 px-6 lg:px-12 bg-[#FFFBEB] border-t border-[#D4AF37]/20">
            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-10"
                >
                    <div className="bg-white p-3 rounded-full shadow-sm border border-[#D4AF37]/20">
                        <Lightbulb className="text-[#D4AF37]" size={28} strokeWidth={2.5} />
                    </div>
                    <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#92400E]">
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
                            whileHover={{ y: -5, transition: { duration: 0.2 } }} // Efek Hover
                            className="bg-white p-6 rounded-2xl shadow-sm border border-[#D4AF37]/10 flex gap-4 items-start hover:shadow-md transition-shadow cursor-default"
                        >
                            {/* Icon Wrapper */}
                            <div className="bg-[#FFFBEB] p-3.5 rounded-2xl shrink-0 border border-[#D4AF37]/10">
                                {getIcon(tip.icon)}
                            </div>

                            {/* Text Content */}
                            <div>
                                <h4 className="font-bold text-[#1A202C] text-sm mb-1.5">{tip.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed font-light">{tip.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}