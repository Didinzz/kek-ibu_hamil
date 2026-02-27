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
            className={`sticky top-0 z-40 px-6 lg:px-14 flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] transition-colors duration-500 shadow-md ${isPremium ? "bg-[#1E5C3A]" : "bg-[#111A0E] border-b border-[#D4A420]/15"
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
                            className={`relative flex items-center gap-2 px-6 lg:px-8 py-4 lg:py-5 font-bold text-[13px] tracking-[0.3px] transition-colors duration-300 ${isActive
                                    ? (isPremium ? "text-[#A8DBB8]" : "text-[#F0C840]")
                                    : "text-white/45 hover:text-white/80"
                                }`}
                        >
                            {/* Ikon Dinamis */}
                            {isActive && isPremium && <Leaf size={14} className="text-[#A8DBB8]" />}
                            {isActive && !isPremium && <Sparkles size={14} className="text-[#F0C840]" />}
                            {!isActive && <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>}

                            {tab.label}

                            {/* Animasi Garis Bawah (Persis seperti CSS border-bottom) */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTabIndicator"
                                    className={`absolute bottom-0 left-0 right-0 h-[3px] ${isPremium ? "bg-[#A8DBB8]" : "bg-[#F0C840]"
                                        }`}
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