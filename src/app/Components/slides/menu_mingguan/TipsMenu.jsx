"use client";
import { motion } from "framer-motion";
import {
    Fish, Milk, Wheat, Cherry, Sprout,
    Beef, Coffee, Sparkles, Star
} from "lucide-react";

export default function TipsMenu({ activeTier }) {
    const isPremium = activeTier === "premium";

    // --- DATA TIPS PREMIUM (Tema Pink/Magenta) ---
    const premiumTips = [
        {
            icon: <Fish size={28} className="text-[#FFD1E8]" strokeWidth={1.5} />,
            title: "Salmon & Tuna Beli Frozen",
            desc: "Beli ikan salmon / tuna frozen di supermarket Tuban jauh lebih hemat — Rp 25–35rb / 100g fillet. Nutrisi tetap terjaga karena flash-frozen."
        },
        {
            icon: <Milk size={28} className="text-[#FFD1E8]" strokeWidth={1.5} />,
            title: "Yogurt & Susu Beli Mingguan",
            desc: "Beli yogurt kemasan 1L dan susu UHT 1L lebih hemat dari beli sachet per hari. 1L susu cukup untuk 4 gelas — jauh lebih ekonomis."
        },
        {
            icon: <span className="text-[#FFD1E8] text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 7a4.95 4.95 0 0 0-8.6-3.4c-1.5 1.6-1.6 1.8-5 2.6a8 8 0 1 0 9.4 9.5c.7-3.4 1-3.6 2.6-5 1-1 1.6-2.3 1.6-3.7" /><circle cx="10" cy="14" r="3.5" /></svg>
            </span>,
            title: "Alpukat Lokal Jawa Timur",
            desc: "Alpukat Malang/Banyuwangi di pasar Tuban cuma Rp 6–8rb/buah. Jauh lebih murah dari supermarket kota besar. Kaya folat & lemak sehat."
        },
        {
            icon: <Wheat size={28} className="text-[#FFD1E8]" strokeWidth={1.5} />,
            title: "Ganti Nasi Putih ke Merah",
            desc: "Beras merah Rp 15–18rb/kg di pasar Tuban. Indeks glikemik lebih rendah, serat lebih tinggi — sangat baik untuk kontrol gula darah bumil."
        },
        {
            icon: <Sprout size={28} className="text-[#FFD1E8]" strokeWidth={1.5} />,
            title: "Kacang untuk Selingan",
            desc: "Almond, kenari, kacang mete jauh lebih bergizi dari gorengan. Beli curah di pasar Rp 40–60rb/100g — cukup untuk 1 minggu."
        },
        {
            icon: <Cherry size={28} className="text-[#FFD1E8]" strokeWidth={1.5} />,
            title: "Stroberi Lokal Musim Panen",
            desc: "Beli stroberi saat musim panen (April–Juni) harga bisa Rp 15rb/250g. Di luar musim, ganti dengan jambu biji, jeruk, atau pepaya."
        }
    ];

    // --- DATA TIPS MEWAH (Tema Navy/Violet) ---
    const luxuryTips = [
        {
            icon: <Fish size={28} className="text-[#e71d89]" strokeWidth={1.5} />,
            title: "Salmon Sashimi = DHA Terbaik",
            desc: "Salmon sashimi-grade mengandung DHA 3× lebih tinggi dari ikan biasa — krusial untuk otak bayi di trimester 3. Pesan online frozen."
        },
        {
            icon: <Beef size={28} className="text-[#e71d89]" strokeWidth={1.5} />,
            title: "Wagyu Bukan Sekadar Mewah",
            desc: "Wagyu kaya zat besi heme, zinc, dan B12. Porsi 100g/hari sudah memenuhi 40% kebutuhan zat besi ibu hamil. Kualitas di atas kuantitas."
        },
        {
            icon: <Cherry size={28} className="text-[#e71d89]" strokeWidth={1.5} />,
            title: "Buah Beri = Antioksidan Super",
            desc: "Blueberry, stroberi, dan raspberry kaya folat & vitamin C yang tingkatkan penyerapan zat besi. Tambahkan ke yogurt setiap hari."
        },
        {
            icon: <Sprout size={28} className="text-[#e71d89]" strokeWidth={1.5} />,
            title: "Spirulina & Chia Superfood",
            desc: "Spirulina 1 sdt mengandung protein & zat besi lebih tinggi dari daging. Biji chia kaya omega-3 nabati. Praktis untuk smoothie."
        },
        {
            icon: <Milk size={28} className="text-[#e71d89]" strokeWidth={1.5} />,
            title: "Greek Yogurt vs Susu Biasa",
            desc: "Yogurt Yunani punya protein 2× lebih tinggi dari susu biasa, plus probiotik untuk pencernaan. Pilih plain tanpa pemanis buatan."
        },
        {
            icon: <Coffee size={28} className="text-[#e71d89]" strokeWidth={1.5} />,
            title: "Susu Almond & Oat Premium",
            desc: "Untuk variasi, susu almond kaya vitamin E & kalsium. Oat milk kaya beta-glucan untuk kolesterol stabil. Ganti 1-2 gelas susu harian."
        }
    ];

    const currentTips = isPremium ? premiumTips : luxuryTips;

    // --- ANIMASI ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div className={`py-16 md:py-24 px-6 lg:px-14 transition-colors duration-700 ${
            // Transisi Background: Pink Pekat vs Navy Sangat Gelap (Hampir Hitam)
            isPremium
                ? "bg-[#c21470]"
                : "bg-[#0b1221] border-t border-[#e71d89]/20"
            }`}>
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER TIPS --- */}
                <div className="mb-12">
                    <h2 className={`font-serif text-3xl md:text-4xl font-bold flex items-center gap-3 mb-3 ${isPremium ? "text-white" : "text-white"
                        }`}>
                        {!isPremium && <Sparkles size={28} className="text-[#e71d89]" />}
                        {isPremium && <Star size={28} className="text-[#FFD1E8]" fill="currentColor" />}
                        {isPremium ? "Tips Menu Premium" : "Tips Menu Mewah"}
                    </h2>
                    <p className={`text-sm md:text-base max-w-2xl ${isPremium ? "text-pink-100/80" : "text-slate-400"
                        }`}>
                        {isPremium
                            ? "Cara cerdas mendapatkan bahan makanan berkualitas tinggi dengan harga terbaik di sekitar Tuban."
                            : "Strategi memaksimalkan kualitas asupan gizi tanpa membuang anggaran secara tidak efisien."}
                    </p>
                </div>

                {/* --- GRID KARTU TIPS --- */}
                <motion.div
                    key={activeTier}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {currentTips.map((tip, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            // Styling Kartu (Glassmorphism Pink vs Dark Navy/Magenta Accent)
                            className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${isPremium
                                    ? "bg-white/10 border border-white/20 hover:bg-white/20 hover:shadow-[0_8px_30px_rgba(231,29,137,0.3)]"
                                    : "bg-white/5 border border-[#e71d89]/20 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(231,29,137,0.15)] hover:border-[#e71d89]/50"
                                }`}
                        >
                            <div className={`mb-5 w-14 h-14 rounded-full flex items-center justify-center ${isPremium ? "bg-black/15" : "bg-[#e71d89]/10"
                                }`}>
                                {tip.icon}
                            </div>
                            <h3 className={`font-bold text-lg mb-3 ${isPremium ? "text-white" : "text-[#FFD1E8]"
                                }`}>
                                {tip.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${isPremium ? "text-white/80" : "text-slate-400"
                                }`}>
                                {tip.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}