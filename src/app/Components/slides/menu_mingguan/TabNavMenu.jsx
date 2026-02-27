"use client";
import { motion } from "framer-motion";
import { Sparkles, Leaf } from "lucide-react";

export default function TabNavMenu({ activeTab, setActiveTab, activeTier }) {
    const isPremium = activeTier === 'premium';

    const tabs = [
        { id: "t1", label: "Trimester 1" },
        { id: "t2", label: "Trimester 2" },
        { id: "t3", label: "Trimester 3" }
    ];

    return (
        <div
            // Premium: Putih border bawah | Mewah: Navy gelap border bawah magenta
            className={`sticky top-0 z-40 px-6 lg:px-14 flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] transition-colors duration-500 shadow-sm ${isPremium ? "bg-white border-b border-slate-200" : "bg-[#0b1221] border-b border-[#e71d89]/15"
                }`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
        >
            <div className="flex w-full md:w-auto">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative flex items-center gap-2 px-6 lg:px-8 py-4 lg:py-5 font-bold text-[13px] tracking-[0.3px] transition-colors duration-300 cursor-pointer ${isActive
                                ? (isPremium ? "text-[#e71d89]" : "text-[#FFD1E8]")
                                : (isPremium ? "text-slate-400 hover:text-slate-800" : "text-white/45 hover:text-white/80")
                                }`}
                        >
                            {/* Ikon Dinamis */}
                            {isActive && isPremium && <Leaf size={14} className="text-[#e71d89]" />}
                            {isActive && !isPremium && <Sparkles size={14} className="text-[#FFD1E8]" />}
                            {!isActive && <span className={`w-1.5 h-1.5 rounded-full ${isPremium ? "bg-slate-200" : "bg-white/20"}`}></span>}

                            {tab.label}

                            {/* Animasi Garis Bawah (Garis aktif) */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTabIndicator"
                                    className={`absolute -bottom-px left-0 right-0 h-0.75 ${isPremium ? "bg-[#e71d89]" : "bg-[#FFD1E8]"}`}
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}