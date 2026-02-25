"use client";
import { motion } from "framer-motion";
import { Bean, Fish, Leaf, ShoppingBasket } from "lucide-react"; // Mengganti Scale dengan Bean

const getIcon = (icon) => {
    switch (icon) {
        case "bean": return <Bean size={28} className="text-[#D4AF37]" />; // Icon Kacang untuk Protein Nabati
        case "fish": return <Fish size={28} className="text-[#D4AF37]" />;
        case "leaf": return <Leaf size={28} className="text-[#D4AF37]" />;
        case "shop": return <ShoppingBasket size={28} className="text-[#D4AF37]" />;
        default: return <Bean size={28} />;
    }
};

export default function PrinsipHemat({ principles }) {
    // 1. Variasi Induk: Mengatur jadwal muncul anak-anaknya
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 } // Jeda 0.2 detik antar kartu
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
        <section className="bg-[#1A202C] py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Animasi: Fade Down */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-white font-serif text-2xl md:text-3xl">
                        <span className="text-[#D4AF37]">4 Prinsip</span> Menu Hemat Bumil
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
                            variants={cardVariants} // Menggunakan variasi pop-up
                            whileHover={{ y: -8, transition: { duration: 0.2 } }} // Efek hover naik sedikit
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group cursor-default"
                        >
                            {/* Icon Wrapper */}
                            <div className="mb-5 bg-white/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300 shadow-lg shadow-black/20">
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