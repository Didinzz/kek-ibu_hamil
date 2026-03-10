// menuPageData.js
// Data Khusus untuk Halaman Menu Mingguan (Tampilan Premium & Mewah)

export const menuPageData = {
    // ==========================================
    // 🌿 TIER 1: MENU PREMIUM
    // ==========================================
    premium: {
        t1: {
            note: "Trimester 1 — Fokus folat, B6, & zat besi. Porsi kecil tapi bergizi tinggi untuk atasi mual.",
            days: [
                {
                    dayName: "Senin", budgetRp: "Rp 82.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "07.00 Sarapan", icon: "soup", name: "Oatmeal susu sapi + Telur rebus 2 btr + Pisang cavendish", price: "Rp 22.000", tags: [{ cls: "tag-e", label: "±520 kkal" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "10.00 Selingan", icon: "milk", name: "Smoothie alpukat + susu + madu", price: "Rp 14.000", tags: [{ cls: "tag-e", label: "±310 kkal" }, { cls: "tag-fe", label: "Zat besi ✓" }] },
                        { time: "12.00 Siang", icon: "meat", name: "Nasi merah + Ayam kampung rebus + Tumis brokoli + Tahu sutra", price: "Rp 30.000", tags: [{ cls: "tag-e", label: "±580 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-ca", label: "Kalsium ✓" }] },
                        { time: "15.00 Selingan", icon: "fruit", name: "Buah potong mix (melon, semangka, jeruk)", price: "Rp 10.000", tags: [{ cls: "tag-e", label: "±120 kkal" }] },
                        { time: "18.00 Malam", icon: "fish", name: "Nasi + Ikan kembung kuah kuning + Sayur bayam + Tempe goreng tepung", price: "Rp 22.000", tags: [{ cls: "tag-e", label: "±520 kkal" }, { cls: "tag-fe", label: "Fe ✓" }, { cls: "tag-om", label: "Omega ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.050", post: "kkal" }, { pre: "Protein", strong: "±72g", post: "" }, { pre: "Zat Besi", strong: "±28mg", post: "" }],
                        label: "Total:", price: "Rp 82.000"
                    }
                },
                {
                    dayName: "Selasa", budgetRp: "Rp 88.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "07.00 Sarapan", icon: "egg", name: "Roti gandum + Telur orak-arik bayam + Susu sapi cair 250ml", price: "Rp 25.000", tags: [{ cls: "tag-e", label: "±490 kkal" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "10.00 Selingan", icon: "milk", name: "Jus jeruk peras segar + biskuit gandum", price: "Rp 12.000", tags: [{ cls: "tag-e", label: "±180 kkal" }] },
                        { time: "12.00 Siang", icon: "rice", name: "Nasi putih + Hati ayam masak tomat + Tumis kangkung bawang putih", price: "Rp 26.000", tags: [{ cls: "tag-e", label: "±540 kkal" }, { cls: "tag-fe", label: "Fe tinggi ✓" }] },
                        { time: "15.00 Selingan", icon: "avocado", name: "Alpukat potong + madu", price: "Rp 10.000", tags: [{ cls: "tag-e", label: "±200 kkal" }] },
                        { time: "18.00 Malam", icon: "soup", name: "Soto ayam kampung + Nasi + Telur", price: "Rp 28.000", tags: [{ cls: "tag-e", label: "±560 kkal" }, { cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±1.970", post: "kkal" }, { pre: "Protein", strong: "±75g", post: "" }, { pre: "Zat Besi", strong: "±32mg", post: "" }],
                        label: "Total:", price: "Rp 88.000"
                    }
                },
                {
                    dayName: "Rabu", budgetRp: "Rp 78.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "07.00 Sarapan", icon: "milk", name: "Bubur ayam lengkap dan sate puyuh + Telur rebus + Susu bumil sachet", price: "Rp 20.000", tags: [{ cls: "tag-e", label: "±480 kkal" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "10.00 Selingan", icon: "banana", name: "Banana smoothie", price: "Rp 11.000", tags: [{ cls: "tag-e", label: "±220 kkal" }] },
                        { time: "12.00 Siang", icon: "fish", name: "Nasi + Ikan tuna bumbu kuning + Tumis buncis wortel + Tempe bacem", price: "Rp 30.000", tags: [{ cls: "tag-e", label: "±570 kkal" }, { cls: "tag-om", label: "Omega ✓" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "15.00 Selingan", icon: "fruit", name: "Apel merah + kacang almond 10 biji", price: "Rp 12.000", tags: [{ cls: "tag-e", label: "±190 kkal" }] },
                        { time: "18.00 Malam", icon: "meat", name: "Nasi + Ayam panggang lemon herb + Sup jagung wortel", price: "Rp 26.000", tags: [{ cls: "tag-e", label: "±520 kkal" }, { cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.020", post: "kkal" }, { pre: "Protein", strong: "±74g", post: "" }, { pre: "Zat Besi", strong: "±27mg", post: "" }],
                        label: "Total:", price: "Rp 78.000"
                    }
                },
                {
                    dayName: "Kamis", budgetRp: "Rp 85.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "07.00 Sarapan", icon: "rice", name: "Nasi goreng sayur + Telur mata sapi + Susu sapi 250ml", price: "Rp 23.000", tags: [{ cls: "tag-e", label: "±500 kkal" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "10.00 Selingan", icon: "milk", name: "Smoothie bayam + pisang + susu (green smoothie)", price: "Rp 14.000", tags: [{ cls: "tag-e", label: "±280 kkal" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "12.00 Siang", icon: "chicken", name: "Nasi merah + Ayam Bumbu Opor + Tumis brokoli bawang", price: "Rp 28.000", tags: [{ cls: "tag-e", label: "±560 kkal" }, { cls: "tag-fe", label: "Fe tinggi ✓" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "15.00 Selingan", icon: "fruit", name: "Pepaya Calina potong + jeruk", price: "Rp 8.000", tags: [{ cls: "tag-e", label: "±100 kkal" }] },
                        { time: "18.00 Malam", icon: "fish", name: "Nasi + Ikan kakap goreng tepung + Sayur asem + Tahu goreng", price: "Rp 32.000", tags: [{ cls: "tag-e", label: "±540 kkal" }, { cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±1.980", post: "kkal" }, { pre: "Protein", strong: "±77g", post: "" }, { pre: "Zat Besi", strong: "±34mg", post: "" }],
                        label: "Total:", price: "Rp 85.000"
                    }
                },
                {
                    dayName: "Jumat", budgetRp: "Rp 92.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "07.00 Sarapan", icon: "cake", name: "Pancake oat + Telur + Madu + Stroberi segar", price: "Rp 26.000", tags: [{ cls: "tag-e", label: "±510 kkal" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "10.00 Selingan", icon: "milk", name: "Susu sapi cair hangat + Dark chocolate 2 kotak", price: "Rp 16.000", tags: [{ cls: "tag-e", label: "±280 kkal" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "12.00 Siang", icon: "chicken", name: "Nasi + Ayam Kremes + Tempe goreng + Lalapan + Sambal", price: "Rp 32.000", tags: [{ cls: "tag-e", label: "±590 kkal" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "15.00 Selingan", icon: "avocado", name: "Alpukat kocok susu + madu", price: "Rp 12.000", tags: [{ cls: "tag-e", label: "±220 kkal" }] },
                        { time: "18.00 Malam", icon: "fish", name: "Nasi + Ikan salmon pan-seared + Tumis asparagus + Sup tofu", price: "Rp 36.000", tags: [{ cls: "tag-e", label: "±560 kkal" }, { cls: "tag-om", label: "Omega-3 ✓" }, { cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.160", post: "kkal" }, { pre: "Protein", strong: "±79g", post: "" }, { pre: "Zat Besi", strong: "±26mg", post: "" }],
                        label: "Total:", price: "Rp 92.000"
                    }
                },
                {
                    dayName: "Sabtu", budgetRp: "Rp 90.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "07.00 Sarapan", icon: "bento", name: "Granola yogurt bowl + Potongan buah segar + Madu", price: "Rp 26.000", tags: [{ cls: "tag-e", label: "±480 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "10.00 Selingan", icon: "carrot", name: "Jus tomat + wortel peras segar", price: "Rp 12.000", tags: [{ cls: "tag-e", label: "±110 kkal" }] },
                        { time: "12.00 Siang", icon: "meat", name: "Nasi + Rendang daging sapi (80g) + Gulai nangka + Tempe", price: "Rp 36.000", tags: [{ cls: "tag-e", label: "±620 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "15.00 Selingan", icon: "grape", name: "Anggur + Kacang kenari 10 biji", price: "Rp 14.000", tags: [{ cls: "tag-e", label: "±210 kkal" }] },
                        { time: "18.00 Malam", icon: "soup", name: "Sup krim jagung + Roti gandum 2 lbr + Telur rebus", price: "Rp 22.000", tags: [{ cls: "tag-e", label: "±480 kkal" }, { cls: "tag-ca", label: "Ca ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±1.900", post: "kkal" }, { pre: "Protein", strong: "±71g", post: "" }, { pre: "Zat Besi", strong: "±29mg", post: "" }],
                        label: "Total:", price: "Rp 90.000"
                    }
                },
                {
                    dayName: "Minggu", budgetRp: "Rp 96.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "07.00 Sarapan", icon: "rice", name: "Nasi uduk + Ayam goreng + Tempe dan Kacang Tanah Orek + Jeruk", price: "Rp 30.000", tags: [{ cls: "tag-e", label: "±580 kkal" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "10.00 Selingan", icon: "milk", name: "Smoothie mangga + kurma 2 biji", price: "Rp 14.000", tags: [{ cls: "tag-e", label: "±270 kkal" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "12.00 Siang", icon: "fish", name: "Nasi + Gurame Saus Padang + Urap Sayur (Bayam dan Tauge) + Tahu goreng", price: "Rp 34.000", tags: [{ cls: "tag-e", label: "±570 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-om", label: "Omega ✓" }] },
                        { time: "15.00 Selingan", icon: "carrot", name: "Jus jambu merah, strawberry, wortel", price: "Rp 14.000", tags: [{ cls: "tag-e", label: "±110 kkal" }] },
                        { time: "18.00 Malam", icon: "soup", name: "Nasi + Ayam kecap kampung + Cah kangkung", detail: "Nasi 260 kkal · Ayam kecap 215 kkal · Cah kangkung 85 kkal", price: "Rp 25.000", tags: [{ cls: "tag-e", label: "±560 kkal" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.060", post: "kkal" }, { pre: "Protein", strong: "±76g", post: "" }, { pre: "Zat Besi", strong: "±28mg", post: "" }],
                        label: "Total:", price: "Rp 96.000"
                    }
                }
            ]
        },
        t2: {
            note: "Trimester 2 — Porsi lebih besar, tambah protein & kalsium. Nafsu makan membaik!",
            days: [
                {
                    dayName: "Senin", budgetRp: "Rp 89.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "Sarapan", icon: "egg", name: "Telur Benedict (roti + telur rebus + saus tomat) + Susu sapi cair", price: "Rp 28.000", tags: [{ cls: "tag-e", label: "±540 kkal" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "Selingan", icon: "milk", name: "Smoothie bayam mangga + biji chia", price: "Rp 16.000", tags: [{ cls: "tag-e", label: "±290 kkal" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "Siang", icon: "meat", name: "Nasi merah + Semur daging sapi + Tumis brokoli + Sup tahu", price: "Rp 36.000", tags: [{ cls: "tag-e", label: "±620 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "Selingan", icon: "fruit", name: "Apel + Keju cheddar 1 slice", price: "Rp 10.000", tags: [{ cls: "tag-e", label: "±180 kkal" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "Malam", icon: "fish", name: "Nasi + Ikan salmon panggang + Tumis asparagus + Sup krim", price: "Rp 38.000", tags: [{ cls: "tag-e", label: "±570 kkal" }, { cls: "tag-om", label: "Omega-3 ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.200", post: "kkal" }, { pre: "Protein", strong: "±86g", post: "" }, { pre: "Zat Besi", strong: "±33mg", post: "" }],
                        label: "Total:", price: "Rp 89.000"
                    }
                },
                {
                    dayName: "Selasa", budgetRp: "Rp 95.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "Sarapan", icon: "soup", name: "Overnight oats + Yogurt Yunani + Buah beri + Madu", price: "Rp 28.000", tags: [{ cls: "tag-e", label: "±520 kkal" }, { cls: "tag-ca", label: "Ca ✓" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "Selingan", icon: "milk", name: "Susu full cream hangat + Kurma 3 biji", price: "Rp 14.000", tags: [{ cls: "tag-e", label: "±280 kkal" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "Siang", icon: "rice", name: "Nasi + Ayam kampung goreng lengkuas + Sup brokoli, wortel, tofu", price: "Rp 34.000", tags: [{ cls: "tag-e", label: "±640 kkal" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "Selingan", icon: "avocado", name: "Guacamole alpukat + Roti gandum 2 lbr", price: "Rp 16.000", tags: [{ cls: "tag-e", label: "±290 kkal" }] },
                        { time: "Malam", icon: "meat", name: "Nasi + Hati sapi masak kecap + Tumis kangkung bawang putih + Tahu", price: "Rp 30.000", tags: [{ cls: "tag-e", label: "±560 kkal" }, { cls: "tag-fe", label: "Fe tinggi ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.290", post: "kkal" }, { pre: "Protein", strong: "±88g", post: "" }, { pre: "Zat Besi", strong: "±36mg", post: "" }],
                        label: "Total:", price: "Rp 95.000"
                    }
                },
                {
                    dayName: "Rabu–Minggu", budgetRp: "~Rp 88rb", budgetLbl: "Rata-rata",
                    meals: [
                        { time: "Variasi Sarapan", icon: "utensils", name: "Rotasi: nasi uduk, bubur ayam premium, roti gandum + telur, oatmeal, pancake", price: "Rp 22–30rb", tags: [{ cls: "tag-p", label: "Prot ✓" }] },
                        { time: "Variasi Selingan", icon: "milk", name: "Smoothie berganti-ganti: bayam+pisang, mangga+susu, alpukat+madu, jus jeruk segar", price: "Rp 10–16rb", tags: [{ cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "Variasi Siang", icon: "meat", name: "Rotasi: ayam kampung, ikan gurame/kakap, daging sapi, hati ayam, udang segar", price: "Rp 30–40rb", tags: [{ cls: "tag-p", label: "Prot ✓" }, { cls: "tag-om", label: "Omega ✓" }] },
                        { time: "Variasi Selingan", icon: "fruit", name: "Buah segar premium: alpukat, stroberi, melon, anggur, pepaya calina", price: "Rp 10–15rb", tags: [{ cls: "tag-e", label: "Vitamin ✓" }] },
                        { time: "Variasi Malam", icon: "fish", name: "Rotasi: salmon, tuna, ayam, daging giling, sup cream, nasi + protein hewani", price: "Rp 26–38rb", tags: [{ cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Target Energi", strong: "±2.350", post: "kkal" }, { pre: "Protein", strong: "±85g", post: "" }, { pre: "Total/hari", strong: "Rp 75–100rb", post: "" }],
                        label: "Rata-rata:", price: "~Rp 88.000"
                    }
                }
            ]
        },
        t3: {
            note: "Trimester 3 — Fokus protein, serat & omega-3 untuk perkembangan otak bayi. Porsi lebih kecil tapi sering.",
            days: [
                {
                    dayName: "Senin", budgetRp: "Rp 93.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "Sarapan", icon: "soup", name: "Oatmeal + Buah segar + Telur rebus 2 btr + Susu sapi cair", price: "Rp 28.000", tags: [{ cls: "tag-e", label: "±540 kkal" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "Selingan", icon: "milk", name: "Susu full cream + Kurma 3 biji + Kacang almond", price: "Rp 18.000", tags: [{ cls: "tag-e", label: "±310 kkal" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "Siang", icon: "fish", name: "Nasi + Ikan salmon teriyaki + Tumis brokoli + Miso sup", price: "Rp 38.000", tags: [{ cls: "tag-e", label: "±580 kkal" }, { cls: "tag-om", label: "DHA ✓" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "Selingan", icon: "fruit", name: "Alpukat potong + madu + biji wijen", price: "Rp 12.000", tags: [{ cls: "tag-e", label: "±210 kkal" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "Malam", icon: "meat", name: "Nasi + Tumis daging sapi cincang + Sayur bayam + Tahu sutra", price: "Rp 32.000", tags: [{ cls: "tag-e", label: "±560 kkal" }, { cls: "tag-fe", label: "Fe ✓" }, { cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.200", post: "kkal" }, { pre: "Protein", strong: "±90g", post: "" }, { pre: "DHA/Omega-3", strong: "✓ Tinggi", post: "" }],
                        label: "Total:", price: "Rp 93.000"
                    }
                },
                {
                    dayName: "Selasa–Minggu", budgetRp: "~Rp 87rb", budgetLbl: "Rata-rata",
                    meals: [
                        { time: "Sarapan Rotasi", icon: "utensils", name: "Telur + oatmeal/roti gandum/nasi + susu sapi cair — bergantian tiap hari", price: "Rp 24–30rb", tags: [{ cls: "tag-p", label: "Prot ✓" }] },
                        { time: "Selingan Pagi", icon: "milk", name: "Smoothie DHA: alpukat + susu + kurma + biji chia (sumber omega-3 nabati)", price: "Rp 16–18rb", tags: [{ cls: "tag-om", label: "DHA ✓" }] },
                        { time: "Makan Siang", icon: "fish", name: "Protein hewani premium bergantian: salmon, tuna, udang, ayam kampung, hati sapi", price: "Rp 30–40rb", tags: [{ cls: "tag-p", label: "Prot ✓" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "Selingan Sore", icon: "fruit", name: "Buah segar premium + kacang-kacangan (almond, kenari, kacang mete)", price: "Rp 12–16rb", tags: [{ cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "Makan Malam", icon: "soup", name: "Nasi + protein hewani + 2 jenis sayuran + sup/kuah — fokus ringan & bergizi", price: "Rp 26–34rb", tags: [{ cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Target Energi", strong: "±2.350", post: "kkal" }, { pre: "Protein", strong: "±88g", post: "" }, { pre: "Total/hari", strong: "Rp 80–100rb", post: "" }],
                        label: "Rata-rata:", price: "~Rp 87.000"
                    }
                }
            ]
        }
    },

    // ==========================================
    // ✨ TIER 2: MENU MEWAH
    // ==========================================
    luxury: {
        t1: {
            note: "Trimester 1 — Bahan super premium, anti-mual alami, smoothie artisan, suplemen gizi optimal.",
            days: [
                {
                    dayName: "Senin", budgetRp: "Rp 175.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "07.00 Sarapan", icon: "soup", name: "Smoothie bowl: acai + granola artisan + buah beri + madu manuka + biji chia", price: "Rp 48.000", tags: [{ cls: "tag-e", label: "±480 kkal" }, { cls: "tag-p", label: "Antioksidan ✓" }] },
                        { time: "10.00 Selingan", icon: "coffee", name: "Latte susu almond hangat + Date bites (kurma isi kacang mete)", price: "Rp 28.000", tags: [{ cls: "tag-e", label: "±320 kkal" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "12.00 Siang", icon: "fish", name: "Nasi koshihikari + Salmon fillet panggang lemon dill + Asparagus + Sup miso tahu", price: "Rp 65.000", tags: [{ cls: "tag-e", label: "±620 kkal" }, { cls: "tag-om", label: "DHA ✓" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "15.00 Selingan", icon: "snack", name: "Yogurt Yunani + Dark chocolate 85% + Stroberi segar", price: "Rp 28.000", tags: [{ cls: "tag-e", label: "±280 kkal" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "18.00 Malam", icon: "fish", name: "Nasi + Udang vaname saus tiram + Tumis brokoli bawang putih + Sup krim jamur", price: "Rp 55.000", tags: [{ cls: "tag-e", label: "±560 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-ca", label: "Ca ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.260", post: "kkal" }, { pre: "Protein", strong: "±88g", post: "" }, { pre: "DHA/Omega", strong: "✓ Optimal", post: "" }],
                        label: "Total:", price: "Rp 175.000"
                    }
                },
                {
                    dayName: "Selasa", budgetRp: "Rp 192.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "07.00 Sarapan", icon: "egg", name: "Eggs Florentine (telur poached + bayam + roti sourdough) + Jus cold-press jeruk beet", price: "Rp 52.000", tags: [{ cls: "tag-e", label: "±520 kkal" }, { cls: "tag-fe", label: "Fe ✓" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "10.00 Selingan", icon: "milk", name: "Green smoothie premium: kale + alpukat + susu almond + spirulina + madu", price: "Rp 32.000", tags: [{ cls: "tag-e", label: "±290 kkal" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "12.00 Siang", icon: "meat", name: "Nasi + Wagyu beef (100g) saus mushroom + Sautéed buncis bawang + Sup bayam", price: "Rp 80.000", tags: [{ cls: "tag-e", label: "±680 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-fe", label: "Fe tinggi ✓" }] },
                        { time: "15.00 Selingan", icon: "fruit", name: "Mixed berry bowl (blueberry + stroberi + raspberry) + Granola", price: "Rp 30.000", tags: [{ cls: "tag-e", label: "±180 kkal" }] },
                        { time: "18.00 Malam", icon: "fish", name: "Nasi + Tuna steak panggang + Tumis asparagus + Edamame + Miso soup", price: "Rp 58.000", tags: [{ cls: "tag-e", label: "±540 kkal" }, { cls: "tag-om", label: "Omega-3 ✓" }, { cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.210", post: "kkal" }, { pre: "Protein", strong: "±94g", post: "" }, { pre: "Zat Besi", strong: "±38mg", post: "" }],
                        label: "Total:", price: "Rp 192.000"
                    }
                },
                {
                    dayName: "Rabu", budgetRp: "Rp 180.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "07.00 Sarapan", icon: "bread", name: "Protein pancake + Greek yogurt + Madu manuka + Blueberry segar + Susu almond", price: "Rp 48.000", tags: [{ cls: "tag-e", label: "±510 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "10.00 Selingan", icon: "snack", name: "Almond butter + Roti sourdough + Kurma medjool 2 biji", price: "Rp 26.000", tags: [{ cls: "tag-e", label: "±340 kkal" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "12.00 Siang", icon: "meat", name: "Nasi + Ayam kampung roast lemon herb + Puree ubi + Salad bayam keju feta", price: "Rp 58.000", tags: [{ cls: "tag-e", label: "±620 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "15.00 Selingan", icon: "fruit", name: "Chia pudding susu almond + Stroberi + Granola artisan", price: "Rp 28.000", tags: [{ cls: "tag-e", label: "±260 kkal" }, { cls: "tag-om", label: "Omega-3 ✓" }] },
                        { time: "18.00 Malam", icon: "fish", name: "Pasta gandum + Udang saus aglio olio + Tumis brokoli + Caesar salad mini", price: "Rp 52.000", tags: [{ cls: "tag-e", label: "±560 kkal" }, { cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.290", post: "kkal" }, { pre: "Protein", strong: "±89g", post: "" }, { pre: "Omega-3/DHA", strong: "✓", post: "" }],
                        label: "Total:", price: "Rp 180.000"
                    }
                },
                {
                    dayName: "Kamis – Minggu", budgetRp: "~Rp 195rb", budgetLbl: "Rata-rata",
                    meals: [
                        { time: "07.00 Sarapan Artisan", icon: "bento", name: "Rotasi: smoothie bowl acai, avocado toast sourdough, shakshuka telur, overnight oats premium", price: "Rp 45–55rb", tags: [{ cls: "tag-p", label: "Prot ✓" }] },
                        { time: "10.00 Selingan Pagi", icon: "milk", name: "Cold-press juice atau latte hangat + Snack premium: date bites, chia pudding, yogurt parfait", price: "Rp 25–35rb", tags: [{ cls: "tag-fe", label: "Fe ✓" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "12.00 Makan Siang", icon: "utensils", name: "Protein premium: salmon, wagyu, udang, scallop, ayam kampung organik + 2 sayuran premium", price: "Rp 65–90rb", tags: [{ cls: "tag-om", label: "DHA ✓" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "15.00 Selingan Sore", icon: "fruit", name: "Mixed berry + yogurt Yunani / chia pudding / buah tropis premium", price: "Rp 25–35rb", tags: [{ cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "18.00 Makan Malam", icon: "soup", name: "Protein hewani pilihan + pasta/nasi merah + sup krim atau salad premium", price: "Rp 50–65rb", tags: [{ cls: "tag-p", label: "Prot ✓" }, { cls: "tag-e", label: "±550 kkal" }] }
                    ],
                    total: {
                        stats: [{ pre: "Target Energi", strong: "±2.050–2.100", post: "kkal" }, { pre: "Protein", strong: "≥85g", post: "" }, { pre: "Budget / Hari", strong: "Rp 150–250rb", post: "" }],
                        label: "Rata-rata:", price: "~Rp 190.000"
                    }
                }
            ]
        },
        t2: {
            note: "Trimester 2 — Kalori & protein lebih tinggi. Fokus DHA, kalsium, dan zat besi premium.",
            days: [
                {
                    dayName: "Senin", budgetRp: "Rp 210.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "Sarapan", icon: "soup", name: "Smoothie bowl: dragon fruit + mangga + coconut flakes + granola + madu manuka", price: "Rp 55.000", tags: [{ cls: "tag-e", label: "±520 kkal" }, { cls: "tag-p", label: "Antioksidan ✓" }] },
                        { time: "Selingan", icon: "milk", name: "Protein shake susu full cream + Kurma medjool + Almond panggang", price: "Rp 35.000", tags: [{ cls: "tag-e", label: "±380 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "Siang", icon: "meat", name: "Nasi koshihikari + Wagyu beef strip (150g) + Tumis jamur + Edamame + Sup krim", price: "Rp 95.000", tags: [{ cls: "tag-e", label: "±720 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "Selingan", icon: "fruit", name: "Parfait: Greek yogurt + granola + stroberi + blueberry + madu", price: "Rp 32.000", tags: [{ cls: "tag-e", label: "±290 kkal" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "Malam", icon: "fish", name: "Nasi + Salmon sashimi-grade panggang miso + Asparagus + Salad wakame", price: "Rp 72.000", tags: [{ cls: "tag-e", label: "±580 kkal" }, { cls: "tag-om", label: "DHA tinggi ✓" }, { cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.490", post: "kkal" }, { pre: "Protein", strong: "±102g", post: "" }, { pre: "DHA Optimal", strong: "✓", post: "" }],
                        label: "Total:", price: "Rp 210.000"
                    }
                },
                {
                    dayName: "Selasa–Minggu", budgetRp: "~Rp 200rb", budgetLbl: "Rata-rata",
                    meals: [
                        { time: "Sarapan", icon: "egg", name: "Rotasi mewah: shakshuka, eggs Benedict, smoothie bowl, avocado salmon toast, crepe", price: "Rp 50–60rb", tags: [{ cls: "tag-p", label: "Prot ✓" }] },
                        { time: "Selingan", icon: "milk", name: "Protein shake / latte premium + Date bites / chia pudding / yogurt cup", price: "Rp 30–40rb", tags: [{ cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "Siang", icon: "meat", name: "Protein super: wagyu, lobster, scallop, salmon, ayam organik + sayuran artisan", price: "Rp 80–100rb", tags: [{ cls: "tag-om", label: "DHA ✓" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "Selingan", icon: "fruit", name: "Buah premium + yogurt Yunani / smoothie / parfait artisan", price: "Rp 28–35rb", tags: [{ cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "Malam", icon: "utensils", name: "Fine dining at home: protein pilihan + 2 sayuran + sup / risotto / pasta premium", price: "Rp 60–80rb", tags: [{ cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Target Energi", strong: "±2.350–2.500", post: "kkal" }, { pre: "Protein", strong: "≥95g", post: "" }, { pre: "Budget / Hari", strong: "Rp 180–250rb", post: "" }],
                        label: "Rata-rata:", price: "~Rp 200.000"
                    }
                }
            ]
        },
        t3: {
            note: "Trimester 3 — DHA maksimal untuk perkembangan otak bayi. Porsi dibagi 5–6 kali agar nyaman.",
            days: [
                {
                    dayName: "Senin", budgetRp: "Rp 220.000", budgetLbl: "Total Hari",
                    meals: [
                        { time: "Sarapan", icon: "egg", name: "Smoked salmon on sourdough + Cream cheese + Telur poached + Jus cold-press hijau", price: "Rp 65.000", tags: [{ cls: "tag-e", label: "±560 kkal" }, { cls: "tag-om", label: "DHA ✓" }, { cls: "tag-p", label: "Prot ✓" }] },
                        { time: "Selingan", icon: "soup", name: "Chia pudding coconut milk + Mango cubes + Granola artisan + Spirulina sprinkle", price: "Rp 35.000", tags: [{ cls: "tag-e", label: "±320 kkal" }, { cls: "tag-om", label: "Omega ✓" }] },
                        { time: "Siang", icon: "fish", name: "Nasi merah + Lobster / udang jumbo saus mentega + Tumis asparagus + Salad nicoise", price: "Rp 90.000", tags: [{ cls: "tag-e", label: "±640 kkal" }, { cls: "tag-p", label: "Prot ✓" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "Selingan", icon: "snack", name: "Yogurt Yunani + Dark choco 85% + Walnut + Blueberry", price: "Rp 35.000", tags: [{ cls: "tag-e", label: "±280 kkal" }, { cls: "tag-om", label: "Omega-3 ✓" }, { cls: "tag-ca", label: "Ca ✓" }] },
                        { time: "Malam", icon: "fish", name: "Nasi + Salmon sashimi-grade teriyaki + Edamame + Sup tofu wakame + Acar timun", price: "Rp 75.000", tags: [{ cls: "tag-e", label: "±540 kkal" }, { cls: "tag-om", label: "DHA tinggi ✓" }, { cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Energi", strong: "±2.340", post: "kkal" }, { pre: "Protein", strong: "±98g", post: "" }, { pre: "DHA / Omega-3", strong: "✓ Maksimal", post: "" }],
                        label: "Total:", price: "Rp 220.000"
                    }
                },
                {
                    dayName: "Selasa–Minggu", budgetRp: "~Rp 195rb", budgetLbl: "Rata-rata",
                    meals: [
                        { time: "Sarapan", icon: "bento", name: "Smoked salmon toast / smoothie bowl / shakshuka / overnight oats premium + susu organik", price: "Rp 55–70rb", tags: [{ cls: "tag-om", label: "DHA ✓" }] },
                        { time: "Selingan Pagi", icon: "milk", name: "Chia pudding / walnut milk / protein shake + Buah beri premium", price: "Rp 28–38rb", tags: [{ cls: "tag-om", label: "Omega ✓" }] },
                        { time: "Makan Siang", icon: "fish", name: "Protein super: lobster, udang jumbo, wagyu, salmon grade-A, scallop + sayuran artisan", price: "Rp 75–95rb", tags: [{ cls: "tag-p", label: "Prot ✓" }, { cls: "tag-fe", label: "Fe ✓" }] },
                        { time: "Selingan Sore", icon: "snack", name: "Dark chocolate + walnut + yogurt Yunani — sumber omega-3 & kalsium terbaik", price: "Rp 30–40rb", tags: [{ cls: "tag-ca", label: "Ca ✓" }, { cls: "tag-om", label: "Omega ✓" }] },
                        { time: "Makan Malam", icon: "fish", name: "Salmon / tuna / udang + nasi merah / pasta gandum + sayuran + sup hangat", price: "Rp 65–80rb", tags: [{ cls: "tag-om", label: "DHA ✓" }, { cls: "tag-p", label: "Prot ✓" }] }
                    ],
                    total: {
                        stats: [{ pre: "Target Energi", strong: "±2.350", post: "kkal" }, { pre: "Protein", strong: "≥90g", post: "" }, { pre: "Budget / Hari", strong: "Rp 150–250rb", post: "" }],
                        label: "Rata-rata:", price: "~Rp 195.000"
                    }
                }
            ]
        }
    }
};