"use client";
import { motion } from "framer-motion";

export default function TabNavMenu({ activeTab, setActiveTab }) {
    const tabs = ["t1", "t2", "t3"];

    return (
        // Membuang 'sticky top-0 z-40' dan latar belakang gelap
        // Menggantinya dengan latar yang membaur dengan bagian menu (FAFAFA)
        <div className="bg-[#FAFAFA] flex justify-center pt-12 pb-4 px-6">

            {/* Wadah Kapsul (Pill Container) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white shadow-sm border border-slate-200 p-1.5 rounded-full flex relative w-full max-w-2xl"
            >
                {tabs.map((tri) => {
                    const isActive = activeTab === tri;
                    return (
                        <button
                            key={tri}
                            onClick={() => setActiveTab(tri)}
                            className={`flex-1 py-3.5 md:py-4 text-[12px] md:text-[13px] font-bold tracking-widest uppercase transition-colors relative z-10 rounded-full cursor-pointer ${isActive
                                    ? "text-white" // Teks menjadi putih saat aktif (karena ditimpa kapsul hijau)
                                    : "text-slate-400 hover:text-[#2A5C43]" // Teks abu-abu saat tidak aktif
                                }`}
                        >
                            <span className="relative z-20">
                                Trimester {tri.replace('t', '')}
                            </span>

                            {/* INDIKATOR KAPSUL MELUNCUR (The "Anjay" Animation) */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTabPill"
                                    className="absolute inset-0 bg-[#2A5C43] rounded-full z-0 shadow-lg shadow-[#2A5C43]/30"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30
                                    }}
                                />
                            )}
                        </button>
                    );
                })}
            </motion.div>

        </div>
    );
}