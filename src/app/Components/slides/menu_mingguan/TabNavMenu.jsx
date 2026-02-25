"use client";
import { motion } from "framer-motion";

export default function TabNavMenu({ activeTab, setActiveTab }) {
    const tabs = ["t1", "t2", "t3"];

    return (
        // 1. Container Animasi: Muncul (slide down) halus dari atas saat halaman dimuat
        <div className="bg-[#1A202C] sticky top-0 z-40 border-b border-white/10 flex justify-center shadow-md"
        >
            <div className="flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 w-full max-w-4xl relative">
                {tabs.map((tri) => {
                    const isActive = activeTab === tri;
                    return (
                        <button
                            key={tri}
                            onClick={() => setActiveTab(tri)}
                            // Hapus kelas border-b-4 dan bg-[#4CAF79]/10 dari sini, karena akan digantikan oleh elemen animasi
                            className={`flex-1 min-w-35 py-4 text-[13px] font-bold tracking-widest uppercase transition-colors relative z-10 ${isActive
                                    ? "text-[#4CAF79]" // Teks Hijau saat aktif
                                    : "text-white/40 hover:text-white/70" // Teks abu saat tidak aktif
                                }`}
                        >
                            {/* Teks Tab */}
                            <span className="relative z-20">
                                Trimester {tri.replace('t', '')}
                            </span>

                            {/* 2. INDIKATOR AKTIF YANG MELUNCUR (The "Anjay" Part) */}
                            {isActive && (
                                <motion.div
                                    // layoutId adalah kunci agar Framer Motion tahu ini elemen yang sama yang harus digerakkan
                                    layoutId="activeTabIndicator"
                                    className="absolute inset-0 bg-[#4CAF79]/10 border-b-4 border-[#4CAF79] z-0"
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 30
                                    }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}