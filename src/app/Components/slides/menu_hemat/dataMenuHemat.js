export const dataHemat = {
    stats: {
        daily: "Rp 22rb",
        total: "Rp 154rb",
        meals: "5x",
        cal: "≥2.000"
    },
    principles: [
        { title: "Protein Nabati Dulu", desc: "Tempe & tahu jauh lebih murah dari daging tapi sama bergizi.", icon: "bean" },
        { title: "Ikan Lokal Pilihan", desc: "Ikan kembung & lele lebih murah dari salmon tapi tinggi omega-3.", icon: "fish" },
        { title: "Sayuran Musiman", desc: "Bayam & daun kelor murah, mudah didapat, kaya zat besi.", icon: "leaf" },
        { title: "Belanja di Pasar", desc: "Harga pasar tradisional bisa 30-50% lebih hemat dari supermarket.", icon: "shop" }
    ],
    days: [
        {
            day: "Senin", title: "Semangat Penuh!", budget: "Rp 21.500", totalKkal: "±2.150 kkal",
            meals: [
                {
                    time: "07.00 · Sarapan", menu: "Nasi + Tempe Goreng + Oseng Kangkung + Penyet Ikan Togek Asap", detail: "Ikan Togek Asap (Leatherjacket Fish) — ikan asap khas pesisir Tuban, kaya protein & omega-3", price: "Rp 5.500", type: "fish",
                    tags: [{ type: "kal", label: "±620 kkal" }, { type: "prot", label: "Protein ~35g" }, { type: "fe", label: "Fe ~6mg" }, { type: "om", label: "Omega-3 ✓" }, { type: "ca", label: "Ca ~80mg" }, { type: "serat", label: "Serat ~3g" }]
                },
                {
                    time: "10.00 · Selingan Pagi", menu: "Pisang Ambon + Susu Bumil 1 Gelas", detail: "Sumber kalium, folat, kalsium, dan vitamin D", price: "Rp 1.500", type: "fruit",
                    tags: [{ type: "kal", label: "±280 kkal" }, { type: "prot", label: "Protein ~8g" }, { type: "ca", label: "Ca ~300mg" }, { type: "vit", label: "Folat ✓" }]
                },
                {
                    time: "12.00 · Makan Siang", menu: "Nasi + Sayur Asam + Tempe Goreng + Pepes Ikan Indo/Teri", detail: "Teri sangat kaya kalsium & zat besi — pilihan terbaik untuk tulang bayi", price: "Rp 5.000", type: "fish",
                    tags: [{ type: "kal", label: "±580 kkal" }, { type: "prot", label: "Protein ~30g" }, { type: "fe", label: "Fe ~8mg" }, { type: "ca", label: "Ca ~280mg" }, { type: "serat", label: "Serat ~4g" }]
                },
                {
                    time: "15.00 · Selingan Sore", menu: "Pepaya Potong + Air Putih", detail: "Vitamin C meningkatkan penyerapan zat besi, serat melancarkan pencernaan", price: "Rp 1.500", type: "fruit",
                    tags: [{ type: "kal", label: "±90 kkal" }, { type: "vit", label: "Vit C ~60mg" }, { type: "serat", label: "Serat ~2g" }]
                },
                {
                    time: "18.00 · Makan Malam", menu: "Nasi + Tumis Bayam + Tahu Goreng + Sambal Tomat", detail: "Bayam kaya zat besi & folat; tahu sumber kalsium nabati", price: "Rp 8.000", type: "bean",
                    tags: [{ type: "kal", label: "±480 kkal" }, { type: "prot", label: "Protein ~18g" }, { type: "fe", label: "Fe ~5mg" }, { type: "ca", label: "Ca ~180mg" }]
                }
            ],
            summary: [
                { val: "2.050", unit: "kkal", lbl: "Energi Total", pct: "95% AKG ✓" },
                { val: "91", unit: "g", lbl: "Protein", pct: "128% AKG ✓✓" },
                { val: "19", unit: "mg", lbl: "Zat Besi", pct: "70% AKG — +TTD" },
                { val: "840", unit: "mg", lbl: "Kalsium", pct: "70% AKG ✓" },
                { val: "9", unit: "g", lbl: "Serat", pct: "Baik ✓" },
                { val: "✓", unit: "", lbl: "Omega-3", pct: "dari Ikan Togek" }
            ],
            note: "Konsumsi 1 tablet Tambah Darah (TTD) malam hari bersama air/jus jeruk (bukan teh/kopi) untuk memenuhi target Fe harian.",
            noteType: "alert"
        },
        {
            day: "Selasa", title: "Protein Nabati Juara!", budget: "Rp 20.000", totalKkal: "±2.100 kkal",
            meals: [
                {
                    time: "07.00 · Sarapan", menu: "Nasi + Tahu Goreng + Oseng Kacang Panjang", detail: "Kacang panjang kaya folat, vitamin K, dan serat; tahu sumber protein nabati lengkap", price: "Rp 4.500", type: "bean",
                    tags: [{ type: "kal", label: "±520 kkal" }, { type: "prot", label: "Protein ~22g" }, { type: "ca", label: "Ca ~150mg" }, { type: "vit", label: "Folat ✓" }, { type: "serat", label: "Serat ~5g" }]
                },
                {
                    time: "10.00 · Selingan Pagi", menu: "Jeruk Manis + Susu Bumil 1 Gelas", detail: "Vitamin C dari jeruk meningkatkan penyerapan zat besi dari makanan", price: "Rp 2.000", type: "fruit",
                    tags: [{ type: "kal", label: "±250 kkal" }, { type: "prot", label: "Protein ~8g" }, { type: "vit", label: "Vit C ~50mg" }, { type: "ca", label: "Ca ~300mg" }]
                },
                {
                    time: "12.00 · Makan Siang", menu: "Nasi + Asem-Asem Pindang + Wortel", detail: "Kuah asam-manis dari asam jawa; pindang ikan kaya protein, DHA, dan vitamin B12", price: "Rp 6.000", type: "fish",
                    tags: [{ type: "kal", label: "±540 kkal" }, { type: "prot", label: "Protein ~28g" }, { type: "fe", label: "Fe ~5mg" }, { type: "om", label: "DHA ✓" }, { type: "vit", label: "Vit A ✓ (Wortel)" }]
                },
                {
                    time: "15.00 · Selingan Sore", menu: "Pisang Raja + Air Putih", detail: "Kalium tinggi, mencegah kram kaki pada ibu hamil", price: "Rp 1.000", type: "fruit",
                    tags: [{ type: "kal", label: "±90 kkal" }, { type: "vit", label: "Kalium ✓" }, { type: "serat", label: "Serat ~2g" }]
                },
                {
                    time: "18.00 · Makan Malam", menu: "Nasi + Tumis Tauge Tempe + Telor Dadar", detail: "Tauge kaya vitamin C & folat; tempe mengandung isoflavon; telur sumber kolin untuk otak bayi", price: "Rp 6.500", type: "egg",
                    tags: [{ type: "kal", label: "±540 kkal" }, { type: "prot", label: "Protein ~24g" }, { type: "fe", label: "Fe ~5mg" }, { type: "vit", label: "Kolin ✓" }]
                }
            ],
            summary: [
                { val: "1.940", unit: "kkal", lbl: "Energi Total", pct: "90% AKG ✓" },
                { val: "82", unit: "g", lbl: "Protein", pct: "115% AKG ✓✓" },
                { val: "18", unit: "mg", lbl: "Zat Besi", pct: "67% AKG — +TTD" },
                { val: "780", unit: "mg", lbl: "Kalsium", pct: "65% AKG ✓" },
                { val: "DHA", unit: "", lbl: "Omega-3", pct: "dari Pindang ✓" },
                { val: "Folat", unit: "", lbl: "Vit B9", pct: "dari Kacang Panjang ✓" }
            ],
            note: "Asem-asem pindang mengandung asam organik yang membantu menyerap zat besi. Konsumsi bersama sayur hijau untuk hasil optimal.",
            noteType: "tip"
        },
        {
            day: "Rabu", title: "Hari Ikan Omega-3", budget: "Rp 22.000", totalKkal: "±2.080 kkal",
            meals: [
                {
                    time: "07.00 · Sarapan", menu: "Nasi + Telur Rebus + Oseng Kangkung Bawang Putih", detail: "Telur sumber kolin, protein lengkap; kangkung kaya zat besi & vitamin A", price: "Rp 4.500", type: "egg",
                    tags: [{ type: "kal", label: "±540 kkal" }, { type: "prot", label: "Protein ~24g" }, { type: "fe", label: "Fe ~6mg" }, { type: "vit", label: "Kolin ✓" }]
                },
                {
                    time: "10.00 · Selingan Pagi", menu: "Kurma 3 Biji + Susu Bumil 1 Gelas", detail: "Kurma kaya zat besi alami, serat, dan gula alami untuk energi stabil", price: "Rp 2.000", type: "snack",
                    tags: [{ type: "kal", label: "±290 kkal" }, { type: "fe", label: "Fe ~2mg" }, { type: "ca", label: "Ca ~300mg" }, { type: "serat", label: "Serat ~3g" }]
                },
                {
                    time: "12.00 · Makan Siang", menu: "Nasi + Ikan Kembung Goreng + Sayur Bening Bayam + Tempe Goreng", detail: "Ikan kembung kaya DHA; bayam sumber zat besi & folat terbaik", price: "Rp 7.000", type: "fish",
                    tags: [{ type: "kal", label: "±570 kkal" }, { type: "prot", label: "Protein ~30g" }, { type: "fe", label: "Fe ~7mg" }, { type: "om", label: "DHA ✓" }]
                },
                {
                    time: "15.00 · Selingan Sore", menu: "Pepaya Potong + Air Putih", detail: "Enzim papain membantu pencernaan; vitamin C tinggi", price: "Rp 1.500", type: "fruit",
                    tags: [{ type: "kal", label: "±80 kkal" }, { type: "vit", label: "Vit C ~60mg" }, { type: "serat", label: "Serat ~2g" }]
                },
                {
                    time: "18.00 · Makan Malam", menu: "Nasi + Sup Tahu, Puyuh, dan Oyong", detail: "Puyuh kaya protein & kalsium cangkang; oyong (gambas) rendah kalori kaya air & vitamin; tahu protein nabati", price: "Rp 7.000", type: "soup",
                    tags: [{ type: "kal", label: "±480 kkal" }, { type: "prot", label: "Protein ~28g" }, { type: "ca", label: "Ca ~180mg" }, { type: "vit", label: "Vit B12 ✓" }]
                }
            ],
            summary: [
                { val: "1.960", unit: "kkal", lbl: "Energi Total", pct: "91% AKG ✓" },
                { val: "82", unit: "g", lbl: "Protein", pct: "115% AKG ✓✓" },
                { val: "15", unit: "mg", lbl: "Zat Besi", pct: "56% AKG — +TTD" },
                { val: "820", unit: "mg", lbl: "Kalsium", pct: "68% AKG ✓" },
                { val: "DHA", unit: "", lbl: "Omega-3", pct: "dari Kembung ✓" },
                { val: "B12", unit: "", lbl: "Vitamin", pct: "dari Telur Puyuh ✓" }
            ],
            note: "Telur puyuh mengandung vitamin B12 dan selenium lebih tinggi per gram dibanding telur ayam — baik untuk perkembangan sistem saraf janin.",
            noteType: "tip"
        },
        {
            day: "Kamis", title: "Zat Besi Melimpah", budget: "Rp 22.500", totalKkal: "±2.200 kkal",
            meals: [
                {
                    time: "07.00 · Sarapan", menu: "Nasi + Telur Bumbu Bali + Bening Kelor", detail: "Daun kelor — superfood lokal dengan zat besi, kalsium & protein tertinggi di antara sayuran Indonesia", price: "Rp 6.000", type: "egg",
                    tags: [{ type: "kal", label: "±580 kkal" }, { type: "prot", label: "Protein ~26g" }, { type: "fe", label: "Fe ~9mg" }, { type: "ca", label: "Ca ~200mg" }, { type: "vit", label: "Vit A ✓" }]
                },
                {
                    time: "10.00 · Selingan Pagi", menu: "Pisang + Susu Bumil 1 Gelas", detail: "Kalium pisang + kalsium susu = kombinasi mencegah kram otot", price: "Rp 2.000", type: "fruit",
                    tags: [{ type: "kal", label: "±270 kkal" }, { type: "prot", label: "Protein ~8g" }, { type: "ca", label: "Ca ~300mg" }]
                },
                {
                    time: "12.00 · Makan Siang", menu: "Nasi + Tempe Bacem + Sayur Asem + Pepes Ikan Ekor Kuning", detail: "Ikan ekor kuning (yellowtail) kaya DHA & protein; sayur asem kaya vitamin C & antioksidan", price: "Rp 6.000", type: "fish",
                    tags: [{ type: "kal", label: "±620 kkal" }, { type: "prot", label: "Protein ~34g" }, { type: "fe", label: "Fe ~6mg" }, { type: "om", label: "DHA ✓" }, { type: "serat", label: "Serat ~5g" }]
                },
                {
                    time: "15.00 · Selingan Sore", menu: "Jeruk + Air Putih", detail: "Vitamin C memaksimalkan penyerapan zat besi dari sayur kelor pagi", price: "Rp 2.500", type: "fruit",
                    tags: [{ type: "kal", label: "±60 kkal" }, { type: "vit", label: "Vit C ~50mg" }]
                },
                {
                    time: "18.00 · Makan Malam", menu: "Nasi + Puyuh Kecap + Kangkung Tumis", detail: "Puyuh kecap kaya protein, zinc, dan vitamin B; kangkung sumber zat besi & folat", price: "Rp 6.000", type: "egg",
                    tags: [{ type: "kal", label: "±520 kkal" }, { type: "prot", label: "Protein ~28g" }, { type: "fe", label: "Fe ~6mg" }, { type: "vit", label: "Zinc ✓" }]
                }
            ],
            summary: [
                { val: "2.050", unit: "kkal", lbl: "Energi Total", pct: "95% AKG ✓" },
                { val: "96", unit: "g", lbl: "Protein", pct: "135% AKG ✓✓" },
                { val: "21", unit: "mg", lbl: "Zat Besi", pct: "78% AKG ✓ +TTD" },
                { val: "880", unit: "mg", lbl: "Kalsium", pct: "73% AKG ✓" },
                { val: "DHA", unit: "", lbl: "Omega-3", pct: "Ikan Ekor Kuning ✓" },
                { val: "⭐", unit: "", lbl: "Kelor = Superfood", pct: "Fe + Ca + Prot Tertinggi" }
            ],
            note: "Hari ini menu terbaik dalam seminggu! Bening kelor + pepes ikan ekor kuning = kombinasi Fe + DHA optimal untuk perkembangan otak janin.",
            noteType: "star"
        },
        {
            day: "Jumat", title: "Hemat Pangkal Sehat", budget: "Rp 19.500", totalKkal: "±2.120 kkal",
            meals: [
                {
                    time: "07.00 · Sarapan", menu: "Nasi + Tempe Goreng + Oseng Wortel Bawang", detail: "Wortel kaya betakaroten (provitamin A) untuk perkembangan mata dan kulit janin", price: "Rp 4.500", type: "bean",
                    tags: [{ type: "kal", label: "±530 kkal" }, { type: "prot", label: "Protein ~20g" }, { type: "vit", label: "Vit A ✓" }, { type: "serat", label: "Serat ~4g" }]
                },
                {
                    time: "10.00 · Selingan Pagi", menu: "Kurma 3 Biji + Susu Bumil 1 Gelas", detail: "Zat besi alami dari kurma + kalsium susu = pilihan selingan terbaik bumil", price: "Rp 1.500", type: "snack",
                    tags: [{ type: "kal", label: "±270 kkal" }, { type: "fe", label: "Fe ~2mg" }, { type: "ca", label: "Ca ~300mg" }]
                },
                {
                    time: "12.00 · Makan Siang", menu: "Nasi + Semur Tahu, Wortel, dan Puyuh", detail: "Semur gurih manis; puyuh + tahu = sumber protein ganda; wortel tambah vitamin A", price: "Rp 5.500", type: "soup",
                    tags: [{ type: "kal", label: "±560 kkal" }, { type: "prot", label: "Protein ~30g" }, { type: "ca", label: "Ca ~220mg" }, { type: "vit", label: "Vit A ✓" }]
                },
                {
                    time: "15.00 · Selingan Sore", menu: "Semangka Potong + Air Putih", detail: "Semangka kaya likopen (antioksidan), membantu hidrasi, mencegah preeklampsia", price: "Rp 1.500", type: "fruit",
                    tags: [{ type: "kal", label: "±80 kkal" }, { type: "vit", label: "Likopen ✓" }]
                },
                {
                    time: "18.00 · Makan Malam", menu: "Nasi + Acar Kuning + Ikan Mujair", detail: "Ikan mujair kaya protein & fosfor; kunyit dalam acar kuning bersifat antiinflamasi alami", price: "Rp 6.500", type: "fish",
                    tags: [{ type: "kal", label: "±530 kkal" }, { type: "prot", label: "Protein ~28g" }, { type: "fe", label: "Fe ~4mg" }, { type: "vit", label: "Kurkumin ✓" }]
                }
            ],
            summary: [
                { val: "1.970", unit: "kkal", lbl: "Energi Total", pct: "92% AKG ✓" },
                { val: "78", unit: "g", lbl: "Protein", pct: "110% AKG ✓✓" },
                { val: "13", unit: "mg", lbl: "Zat Besi", pct: "48% AKG — +TTD wajib" },
                { val: "890", unit: "mg", lbl: "Kalsium", pct: "74% AKG ✓" },
                { val: "Vit A", unit: "", lbl: "Beta-karoten", pct: "Wortel + Puyuh ✓" },
                { val: "✓", unit: "", lbl: "Antiinflamasi", pct: "Kunyit (Acar Kuning)" }
            ],
            note: "Fe makanan hari ini lebih rendah — pastikan konsumsi TTD malam hari. Mujair adalah ikan air tawar lokal yang ekonomis dan bergizi tinggi.",
            noteType: "alert"
        },
        {
            day: "Sabtu", title: "Belanja Pasar", budget: "Rp 23.500", totalKkal: "±2.180 kkal",
            meals: [
                {
                    time: "07.00 · Sarapan", menu: "Mi Kuning Godok + Sawi + Telur + Tauge", detail: "Mi kuning kaya karbohidrat energi; sawi kaya folat & vitamin K; telur sumber protein lengkap; tauge kaya vitamin C", price: "Rp 5.500", type: "soup",
                    tags: [{ type: "kal", label: "±490 kkal" }, { type: "prot", label: "Protein ~22g" }, { type: "fe", label: "Fe ~4mg" }, { type: "vit", label: "Folat ✓" }, { type: "serat", label: "Serat ~4g" }]
                },
                {
                    time: "10.00 · Selingan Pagi", menu: "Pisang + Susu Bumil 1 Gelas", detail: "Kalsium susu + kalium pisang untuk tulang dan otot ibu & bayi", price: "Rp 3.500", type: "fruit",
                    tags: [{ type: "kal", label: "±270 kkal" }, { type: "prot", label: "Protein ~8g" }, { type: "ca", label: "Ca ~300mg" }]
                },
                {
                    time: "12.00 · Makan Siang", menu: "Nasi + Tempe Tahu + Lodeh + Pindang Goreng", detail: "Lodeh sayur (labu, terong, buncis) kaya vitamin; pindang goreng tambah protein & DHA; tempe-tahu protein nabati ganda", price: "Rp 6.500", type: "fish",
                    tags: [{ type: "kal", label: "±600 kkal" }, { type: "prot", label: "Protein ~32g" }, { type: "fe", label: "Fe ~5mg" }, { type: "om", label: "DHA ✓" }, { type: "ca", label: "Ca ~200mg" }]
                },
                {
                    time: "15.00 · Selingan Sore", menu: "Jeruk + Air Putih", detail: "Vitamin C membantu penyerapan zat besi dari lodeh dan sayuran", price: "Rp 1.500", type: "fruit",
                    tags: [{ type: "kal", label: "±60 kkal" }, { type: "vit", label: "Vit C ~50mg" }]
                },
                {
                    time: "18.00 · Makan Malam", menu: "Nasi + Bayam Rebus + Penyetan Ikan Lele", detail: "Lele kaya protein, omega-3, dan vitamin D; bayam sumber zat besi non-heme terbaik; sambal penyetan tambah appetite", price: "Rp 6.500", type: "fish",
                    tags: [{ type: "kal", label: "±540 kkal" }, { type: "prot", label: "Protein ~30g" }, { type: "fe", label: "Fe ~7mg" }, { type: "om", label: "Omega-3 ✓" }]
                }
            ],
            summary: [
                { val: "1.960", unit: "kkal", lbl: "Energi Total", pct: "91% AKG ✓" },
                { val: "92", unit: "g", lbl: "Protein", pct: "130% AKG ✓✓" },
                { val: "16", unit: "mg", lbl: "Zat Besi", pct: "59% AKG — +TTD" },
                { val: "860", unit: "mg", lbl: "Kalsium", pct: "72% AKG ✓" },
                { val: "DHA", unit: "", lbl: "Omega-3", pct: "Lele + Pindang ✓" },
                { val: "Folat", unit: "", lbl: "Vitamin B9", pct: "dari Sawi + Bayam ✓" }
            ],
            note: "Mi kuning godok bisa diganti mi jagung atau bihun untuk variasi. Penyetan lele — ikan lokal Tuban yang sangat ekonomis dan kaya protein.",
            noteType: "tip"
        },
        {
            day: "Minggu", title: "Menu Spesial", budget: "Rp 25.000", totalKkal: "±2.150 kkal",
            meals: [
                {
                    time: "07.00 · Sarapan", menu: "Nasi Goreng Jawa", detail: "Nasi goreng bumbu kencur + kecap manis + telur + sayur — sarapan bergizi khas Jawa yang menghangatkan", price: "Rp 5.500", type: "egg",
                    tags: [{ type: "kal", label: "±530 kkal" }, { type: "prot", label: "Protein ~18g" }, { type: "fe", label: "Fe ~3mg" }, { type: "vit", label: "Kencur (anti-mual) ✓" }]
                },
                {
                    time: "10.00 · Selingan Pagi", menu: "Buah Pepaya + Susu Bumil 1 Gelas", detail: "Pepaya kaya vitamin C yang membantu penyerapan zat besi dari makanan", price: "Rp 3.500", type: "fruit",
                    tags: [{ type: "kal", label: "±280 kkal" }, { type: "prot", label: "Protein ~8g" }, { type: "vit", label: "Vit C ✓" }, { type: "ca", label: "Ca ~300mg" }]
                },
                {
                    time: "12.00 · Makan Siang", menu: "Nasi + Bening Kelor + Rica Lele", detail: "Kelor = superfood lokal Fe & Ca tertinggi; Rica lele pedas merangsang nafsu makan; protein lele sangat tinggi", price: "Rp 8.000", type: "fish",
                    tags: [{ type: "kal", label: "±570 kkal" }, { type: "prot", label: "Protein ~34g" }, { type: "fe", label: "Fe ~10mg" }, { type: "ca", label: "Ca ~240mg" }, { type: "om", label: "Omega-3 ✓" }]
                },
                {
                    time: "15.00 · Selingan Sore", menu: "Jeruk + Air Putih", detail: "Vitamin C dari jeruk memaksimalkan penyerapan zat besi dari kelor", price: "Rp 4.000", type: "fruit",
                    tags: [{ type: "kal", label: "±60 kkal" }, { type: "vit", label: "Vit C ~50mg" }]
                },
                {
                    time: "18.00 · Makan Malam", menu: "Nasi + Oseng Tempe Puyuh + Buncis", detail: "Oseng tempe-puyuh kaya protein ganda; buncis kaya folat, vitamin K, dan serat; penutup minggu bergizi", price: "Rp 4.000", type: "bean",
                    tags: [{ type: "kal", label: "±530 kkal" }, { type: "prot", label: "Protein ~28g" }, { type: "fe", label: "Fe ~5mg" }, { type: "vit", label: "Folat ✓" }, { type: "serat", label: "Serat ~5g" }]
                }
            ],
            summary: [
                { val: "1.970", unit: "kkal", lbl: "Energi Total", pct: "92% AKG ✓" },
                { val: "88", unit: "g", lbl: "Protein", pct: "124% AKG ✓✓" },
                { val: "18", unit: "mg", lbl: "Zat Besi", pct: "67% AKG — +TTD" },
                { val: "880", unit: "mg", lbl: "Kalsium", pct: "73% AKG ✓" },
                { val: "DHA", unit: "", lbl: "Omega-3", pct: "Rica Lele ✓" },
                { val: "⭐", unit: "", lbl: "Bening Kelor", pct: "Fe + Ca Tertinggi ✓✓" }
            ],
            note: "Bening kelor + rica lele = kombinasi andalan CERMAT! Kelor lokal Tuban mengandung zat besi 25× lebih tinggi dari bayam per gram kering.",
            noteType: "star"
        }
    ]
};