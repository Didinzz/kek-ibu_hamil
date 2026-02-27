"use client";

import { motion } from "framer-motion";

const menuItems = [
    { id: "beranda", label: "Beranda" },
    { id: "materi_kek", label: "Materi KEK/Resiko KEK" },
    { id: "menu_mingguan", label: "Menu Mingguan" },
    { id: "menu_antiboncos", label: "Menu Anti Boncos" },
    { id: "tabel_gizi", label: "Tabel Konversi" },
    { id: "kebutuhan_gizi", label: "Kebutuhan Gizi" },
    { id: "tips_bumil", label: "Tips Bumil" },
];

export default function Navbar({ activeSlide, setActiveSlide }) {
    return (
        <div className="fixed bottom-0 md:bottom-auto md:top-6 left-0 right-0 z-50 flex justify-center md:px-4 pointer-events-none">

            <motion.nav
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                // PERUBAHAN GAYA KOTAK:
                // HP: w-full, rounded-none (sudut siku), border-t (garis atas tipis), py-3 (padding atas bawah agar enak dipencet jempol)
                // Laptop (md): w-auto, rounded-full, border keliling, p-1.5
                className="pointer-events-auto bg-white/95 md:bg-white/80 backdrop-blur-xl border-t border-slate-200 shadow-lg w-full md:w-auto rounded-none md:rounded-full py-3 px-2 md:p-1.5 max-w-full"
            >
                {/* Tambahan padding horizontol (px-2) di layar HP agar menu pertama/terakhir tidak terlalu nempel dengan pinggiran HP */}
                <ul className="flex items-center gap-2 overflow-x-auto flex-nowrap px-2 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {menuItems.map((item) => {
                        const isActive = activeSlide === item.id;

                        return (
                            <li key={item.id} className="relative shrink-0">
                                <button
                                    onClick={() => setActiveSlide(item.id)}
                                    // Padding tombol sedikit disesuaikan agar pas dengan ruang jari Android
                                    className={`relative cursor-pointer z-10 px-5 py-2.5 text-sm font-semibold transition-colors duration-300 rounded-full ${isActive
                                            ? "text-[#2A5C43]" // Menggunakan warna hijau premium sebelumnya
                                            : "text-slate-500 hover:text-slate-800"
                                        }`}
                                >
                                    {item.label}
                                </button>

                                {/* INDIKATOR AKTIF: Gaya "Pill" seperti Material You Android */}
                                {isActive && (
                                    <motion.div
                                        layoutId="floating-nav-indicator"
                                        // Menggunakan hijau muda transparan agar menyatu dengan background putih
                                        className="absolute inset-0 bg-emerald-50 rounded-full border border-emerald-100/50"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30
                                        }}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </motion.nav>
        </div>
    );
}