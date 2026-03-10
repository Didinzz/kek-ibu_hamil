"use client";
import { motion } from "framer-motion";
import { Bean, Fish, Leaf, ShoppingBasket } from "lucide-react";

const getIcon = (icon) => {
    // Mengganti warna icon dari Emas menjadi Merah Muda terang
    const cls = "text-[#FFD1E8]";
    switch (icon) {
        case "bean": return <Bean size={28} className={cls} />;
        case "fish": return <Fish size={28} className={cls} />;
        case "leaf": return <Leaf size={28} className={cls} />;
        case "shop": return <ShoppingBasket size={28} className={cls} />;
        default: return <Bean size={28} className={cls} />;
    }
};

export default function PrinsipHemat({ principles }) {
    // 1. Variasi Induk: Mengatur jadwal muncul anak-anaknya
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    // 2. Variasi Anak: Efek muncul memantul (Pop-up Spring)
    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 120, damping: 12 }
        }
    };

    return (
        // Background diganti menjadi Navy Gelap agar elegan
        <section className="bg-[#1E293B] py-16 px-6 relative overflow-hidden">
            {/* Dekorasi Glow Pink di belakang */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#e71d89]/10 blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Animasi: Fade Down */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-white font-serif text-2xl md:text-3xl">
                        <span className="text-[#e71d89]">4 Prinsip</span> Menu Hemat Bumil
                    </h2>
                </motion.div>

                {/* Grid Kartu dengan Stagger */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {principles.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            // Border dan hover diubah jadi nuansa pink
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#e71d89]/30 transition-all group cursor-default shadow-lg"
                        >
                            {/* Icon Wrapper */}
                            <div className="mb-5 bg-[#e71d89]/20 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#e71d89] transition-all duration-300 shadow-lg shadow-black/20">
                                {getIcon(item.icon)}
                            </div>

                            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}