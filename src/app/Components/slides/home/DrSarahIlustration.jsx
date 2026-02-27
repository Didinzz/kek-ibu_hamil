export default function DrSarahIllustration({ className }) {
    return (
        <svg viewBox="0 0 300 520" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>

            {/* ================= 1. BACKGROUND & KAKI ================= */}
            <ellipse cx="150" cy="512" rx="85" ry="10" fill="rgba(45,106,79,0.15)" />
            <ellipse cx="110" cy="500" rx="28" ry="12" fill="#d4e4ee" />
            <ellipse cx="190" cy="500" rx="28" ry="12" fill="#d4e4ee" />
            <ellipse cx="110" cy="494" rx="24" ry="14" fill="#b8cede" />
            <ellipse cx="190" cy="494" rx="24" ry="14" fill="#b8cede" />
            <rect x="94" y="430" width="44" height="68" rx="12" fill="#2d6a4f" />
            <rect x="162" y="430" width="44" height="68" rx="12" fill="#2d6a4f" />

            {/* ================= 2. BADAN JAS DOKTER ================= */}
            {/* Badan Jas: Bahu melengkung halus dari pangkal leher (150, 215) turun ke bahu (90, 230 & 210, 230) */}
            <path d="M90 230 Q150 215 210 230 L230 460 H70 Z" fill="#f0f4ff" />
            <line x1="150" y1="280" x2="150" y2="460" stroke="#dce6f5" strokeWidth="2.5" strokeLinecap="round" />

            {/* Kantong & Pulpen */}
            <rect x="75" y="360" width="45" height="35" rx="8" fill="#dce6f5" />
            <rect x="180" y="360" width="45" height="35" rx="8" fill="#dce6f5" />
            <rect x="190" y="352" width="5" height="18" rx="2" fill="#2d6a4f" />
            <rect x="198" y="356" width="5" height="14" rx="2" fill="#d4830a" />

            {/* ================= 3. LENGAN (Menyatu Sempurna dengan Bahu) ================= */}
            {/* Titik awal (M90 dan M210) sekarang menyatu persis dengan ujung pundak jas di atas */}
            {/* Lengan Kiri (Pegang Papan) */}
            <path d="M90 230 L65 295 L80 345" fill="none" stroke="#f0f4ff" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
            {/* Lengan Kanan (Melambai) */}
            <path d="M210 230 L245 295 L265 245" fill="none" stroke="#f0f4ff" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />

            {/* ================= 4. TANGAN & CLIPBOARD ================= */}
            {/* Tangan Kanan (Melambai) */}
            <g transform="translate(270, 230) rotate(15)">
                <ellipse cx="0" cy="0" rx="14" ry="18" fill="#f0c090" />
                <path d="M-10 -5 Q-14 -10 -8 -15" stroke="#e0a878" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>

            {/* Tangan Kiri menopang Papan */}
            <ellipse cx="80" cy="355" rx="12" ry="15" fill="#f0c090" transform="rotate(-20 80 355)" />

            {/* Clipboard (Dimiringkan natural ke arah badan) */}
            <g transform="translate(25, 290) rotate(-6)">
                <rect x="0" y="0" width="55" height="75" rx="8" fill="white" stroke="#dce6f5" strokeWidth="1.5" />
                <rect x="12" y="-8" width="30" height="14" rx="4" fill="#2d6a4f" />
                <line x1="8" y1="20" x2="47" y2="20" stroke="#e8eef5" strokeWidth="2" strokeLinecap="round" />
                <line x1="8" y1="30" x2="47" y2="30" stroke="#e8eef5" strokeWidth="2" strokeLinecap="round" />
                <line x1="8" y1="40" x2="35" y2="40" stroke="#e8eef5" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 12 L16 18 L28 6" stroke="#40916c" strokeWidth="3" strokeLinecap="round" fill="none" />
                <text x="27.5" y="62" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#2d6a4f">CERMAT</text>
            </g>

            {/* ================= 5. KEPALA & WAJAH (Layer Bawah Hijab) ================= */}
            {/* Base Kepala Belakang (Membentuk volume hijab di belakang) */}
            <ellipse cx="150" cy="140" rx="55" ry="65" fill="#1a4030" />

            {/* Leher & Wajah */}
            <rect x="135" y="180" width="30" height="40" rx="15" fill="#f0c090" />
            <ellipse cx="150" cy="138" rx="46" ry="54" fill="#f0c090" />

            {/* Detail Wajah (Tetap Imut) */}
            <g id="CuteFace">
                <ellipse cx="128" cy="133" rx="10" ry="11" fill="white" />
                <ellipse cx="128" cy="135" rx="7" ry="8" fill="#3a1e0a" />
                <ellipse cx="128" cy="136" rx="3.5" ry="4" fill="#0d0604" />
                <circle cx="131" cy="132" r="2" fill="white" />

                <ellipse cx="172" cy="133" rx="10" ry="11" fill="white" />
                <ellipse cx="172" cy="135" rx="7" ry="8" fill="#3a1e0a" />
                <ellipse cx="172" cy="136" rx="3.5" ry="4" fill="#0d0604" />
                <circle cx="175" cy="132" r="2" fill="white" />

                <path d="M116 118 Q127 113 138 118" stroke="#4a2810" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M162 118 Q173 113 184 118" stroke="#4a2810" strokeWidth="3" strokeLinecap="round" fill="none" />

                <path d="M148 143 Q145 153 150 153 Q155 153 152 143" fill="#d8a070" opacity="0.7" />

                <path d="M138 166 Q150 178 162 166" stroke="#c07050" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <path d="M142 166 Q150 172 158 166" fill="#d4806a" opacity="0.6" />

                <ellipse cx="124" cy="153" rx="9" ry="6" fill="#f09070" opacity="0.3" />
                <ellipse cx="176" cy="153" rx="9" ry="6" fill="#f09070" opacity="0.3" />
            </g>

            {/* ================= 6. HIJAB DEPAN ================= */}

            {/* === PERBAIKAN CIPUT (INNER HIJAB) DI SINI === */}
            {/* Ditarik naik dari Y=100 ke Y=90, dan titik melengkungnya ditarik dari Y=78 ke Y=65 */}
            <path d="M 118 90 Q 150 102 182 90 Q 150 65 118 90 Z" fill="#143024" />

            {/* Juntaian Hijab Depan */}
            <path d="M 106 160 Q 150 205 194 160 Q 220 230 185 270 Q 150 255 115 270 Q 80 230 106 160 Z" fill="#1a4030" />

            {/* Garis Lipatan Hijab di Dada untuk efek kedalaman */}
            <path d="M 125 215 Q 150 245 175 215" stroke="#143024" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* ================= 7. AKSESORIS AKHIR (Di Atas Hijab) ================= */}
            {/* Stethoscope */}
            <path d="M120 250 Q115 310 150 330 Q185 310 180 250" fill="none" stroke="#1a2e22" strokeWidth="4" strokeLinecap="round" />
            <line x1="150" y1="330" x2="150" y2="355" stroke="#1a2e22" strokeWidth="4" strokeLinecap="round" />
            <circle cx="150" cy="365" r="9" fill="#2d6a4f" stroke="#1a2e22" strokeWidth="3" />
            <circle cx="150" cy="365" r="2.5" fill="#1a2e22" />
            {/* Earpieces menyelinap ke balik hijab */}
            <path d="M120 250 Q125 220 125 200" fill="none" stroke="#1a2e22" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M180 250 Q175 220 175 200" fill="none" stroke="#1a2e22" strokeWidth="3.5" strokeLinecap="round" />

            {/* Name Tag (Digeser sedikit ke bawah agar tidak tertabrak juntaian hijab) */}
            <g transform="translate(162, 285)">
                <rect x="0" y="0" width="52" height="26" rx="5" fill="white" stroke="#c4d6ed" strokeWidth="1.5" />
                <rect x="0" y="0" width="14" height="26" rx="5" fill="#2d6a4f" />
                <circle cx="7" cy="13" r="4.5" fill="white" opacity="0.2" />
                <text x="33" y="11" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fontWeight="800" fill="#1a2e22">dr. SARAH</text>
                <text x="33" y="19" textAnchor="middle" fontFamily="sans-serif" fontSize="4.5" fontWeight="600" fill="#5a7065">Dokter Internship</text>
            </g>

        </svg>
    );
}