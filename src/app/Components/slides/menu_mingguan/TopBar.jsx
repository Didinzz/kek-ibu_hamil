// TopBar.jsx
"use client";

export default function TopBar({ activeTier, setActiveTier, setActiveTrimester }) {
    // Fungsi untuk ganti kelas, sekaligus mereset trimester ke T1
    const handleTierChange = (tier) => {
        setActiveTier(tier);
        setActiveTrimester('t1');
    };

    return (
        <div className="bg-[#0D1A12] py-5 px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-5 border-b border-[#D4A420]/20 sticky top-0 z-50">

            {/* Brand Logo */}
            <div className="text-center md:text-left">
                <h1 className="font-serif text-[28px] font-bold text-[#F0C840] tracking-wide leading-none">
                    CERMAT
                </h1>
                <span className="text-white/40 text-[11px] lg:text-xs tracking-[2px] uppercase mt-1 block font-sans">
                    Menu Bergizi Ibu Hamil — Tuban, Jawa Timur
                </span>
            </div>

            {/* Tier Switcher Pills */}
            <div className="flex gap-2.5">
                <button
                    onClick={() => handleTierChange('premium')}
                    className={`px-5 py-2 rounded-full text-xs font-bold font-sans transition-all duration-300 border ${activeTier === 'premium'
                            ? 'bg-[#1E5C3A] text-white border-[#1E5C3A] shadow-[0_4px_16px_rgba(0,0,0,0.3)] -translate-y-0.5'
                            : 'bg-[#2D7A50]/20 text-[#74C69D] border-[#74C69D]/30 hover:bg-[#2D7A50]/40'
                        }`}
                >
                    🌿 Menu Premium
                </button>
                <button
                    onClick={() => handleTierChange('luxury')}
                    className={`px-5 py-2 rounded-full text-xs font-bold font-sans transition-all duration-300 border ${activeTier === 'luxury'
                            ? 'bg-[#D4A420] text-[#1A2820] border-[#D4A420] shadow-[0_4px_16px_rgba(0,0,0,0.3)] -translate-y-0.5'
                            : 'bg-[#D4A420]/15 text-[#F0C840] border-[#D4A420]/30 hover:bg-[#D4A420]/30'
                        }`}
                >
                    ✨ Menu Mewah
                </button>
            </div>

        </div>
    );
}