"use client";
import { motion } from "framer-motion";
import { Fish, Bean, Leaf, ShoppingCart, Apple, Pill, Lightbulb } from "lucide-react";

const getTipIcon = (iconName) => {
    const cls = "text-[#e71d89]";
    switch (iconName) {
        case "fish": return <Fish className={cls} size={28} strokeWidth={2} />;
        case "bean": return <Bean className={cls} size={28} strokeWidth={2} />;
        case "leaf": return <Leaf className={cls} size={28} strokeWidth={2} />;
        case "cart": return <ShoppingCart className={cls} size={28} strokeWidth={2} />;
        case "fruit": return <Apple className={cls} size={28} strokeWidth={2} />;
        case "pill": return <Pill className={cls} size={28} strokeWidth={2} />;
        default: return <Lightbulb className={cls} size={28} strokeWidth={2} />;
    }
};

export default function TipsHemat({ tips }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        // Bagian ini diubah: Background Soft Pink ditaruh di luar
        <section className="py-20 bg-[#FFF5F9] border-t border-[#e71d89]/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Judul Tips */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center md:justify-start gap-3 mb-10"
                >
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-[#e71d89]/10">
                        <Lightbulb className="text-[#e71d89]" size={24} strokeWidth={2.5} />
                    </div>
                    <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#c21470]">
                        Tips Belanja Hemat untuk Bumil
                    </h2>
                </motion.div>

                {/* Grid Tips */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {tips.map((tip, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-[#e71d89]/10 flex gap-4 items-start hover:shadow-md hover:border-[#e71d89]/30 transition-all cursor-default"
                        >
                            <div className="bg-[#FFF5F9] p-3.5 rounded-xl shrink-0 border border-[#e71d89]/10">
                                {getTipIcon(tip.icon)}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1E293B] text-[14px] mb-1.5 leading-snug">
                                    {tip.title}
                                </h4>
                                <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                                    {tip.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}