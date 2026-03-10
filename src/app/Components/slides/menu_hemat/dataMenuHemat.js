export const dataHemat = {
    stats: {
        daily: "Rp 42rb",
        total: "Rp 296rb",
        meals: "5x",
        cal: "≥2.000"
    },
    principles: [
        { title: "Protein Nabati Dulu", desc: "Tempe & tahu jauh lebih murah dari ayam/daging tapi sama bergizi. Jadikan andalan tiap hari!", icon: "bean" },
        { title: "Ikan Lokal Pilihan", desc: "Ikan kembung & pindang lebih murah dari salmon tapi tinggi omega-3 & zat besi. Cocok banget!", icon: "fish" },
        { title: "Sayuran Musiman", desc: "Bayam, kangkung, daun kelor — murah, mudah dapat, dan kaya zat besi serta folat untuk bumil.", icon: "leaf" },
        { title: "Belanja di Pasar Tradisional", desc: "Harga di pasar bisa 30-50% lebih murah dari supermarket. Beli pagi hari untuk kesegaran terbaik!", icon: "shop" }
    ],
    days: [
        {
            day: "Senin",
            tagline: "Hari pertama, semangat penuh!",
            budget: "Rp 47.000",
            meals: [
                { time: "07.00", typeMeal: "Sarapan", type: "egg", menu: "Nasi + Tempe Goreng + Oseng Kangkung + Penyet Ikan Togek Asap", detail: "Nasi 150g · Tempe goreng 2 ptg · Oseng kangkung · Ikan togek asap (leatherjacket fish) dipenyetkan — khas & lezat!", price: "Rp 15.000", giziMini: "~480 kkal · 18g P" },
                { time: "10.00", typeMeal: "Selingan", type: "fruit", menu: "Pisang Ambon + Air Putih", detail: "1 buah pisang ambon ukuran sedang", price: "Rp 1.500", giziMini: "~100 kkal" },
                { time: "12.00", typeMeal: "Siang", type: "bean", menu: "Nasi + Sayur Asam + Tempe Goreng + Pepes Ikan Indo/Teri", detail: "Nasi 150g · Sayur asam segar · Tempe goreng 2 ptg · Pepes ikan indo/teri — kaya zat besi!", price: "Rp 15.000", giziMini: "~530 kkal · 20g P" },
                { time: "15.00", typeMeal: "Selingan", type: "snack", menu: "Ubi Rebus + Air Putih", detail: "Ubi jalar merah 1 buah kecil (~100g)", price: "Rp 1.500", giziMini: "~90 kkal" },
                { time: "18.00", typeMeal: "Malam", type: "fish", menu: "Nasi + Ikan Kembung Goreng + Tumis Bayam", detail: "Nasi 150g · Ikan kembung 1 ekor · Bayam · Bumbu goreng", price: "Rp 13.000", giziMini: "~560 kkal · 22g P · 2mg Fe" }
            ],
            totalRow: {
                left: "Total Senin + Beras (3 porsi)",
                chips: [
                    { type: "kal", label: "~2.100 kkal" },
                    { type: "prot", label: "~65g Protein" },
                    { type: "fe", label: "~9mg Fe" }
                ],
                right: "= Rp 47.000"
            }
        },
        {
            day: "Selasa",
            tagline: "Hari protein nabati! Tempe & tahu juara",
            budget: "Rp 33.000",
            meals: [
                { time: "07.00", typeMeal: "Sarapan", type: "bean", menu: "Nasi + Tahu Goreng + Oseng Kacang Panjang", detail: "Nasi 150g · Tahu 2 ptg besar · Oseng kacang panjang · Minyak & bawang", price: "Rp 8.000", giziMini: "~470 kkal · 14g P" },
                { time: "10.00", typeMeal: "Selingan", type: "fruit", menu: "Pepaya Potong + Air Putih", detail: "Pepaya 1 potong sedang (~150g) — kaya folat & vitamin C!", price: "Rp 2.000", giziMini: "~65 kkal · vit C tinggi" },
                { time: "12.00", typeMeal: "Siang", type: "fish", menu: "Nasi + Asem-Asem Pindang + Wortel", detail: "Nasi 150g · Asem-asem pindang kuah segar · Wortel 1 btg — asam segar menyehatkan!", price: "Rp 12.000", giziMini: "~530 kkal · 20g P · 2mg Fe" },
                { time: "15.00", typeMeal: "Selingan", type: "fruit", menu: "Pisang Rebus + Air Putih", detail: "1 buah pisang kepok direbus — lebih mengenyangkan!", price: "Rp 1.000", giziMini: "~90 kkal" },
                { time: "18.00", typeMeal: "Malam", type: "egg", menu: "Nasi + Tumis Tauge Tempe + Telor Dadar", detail: "Nasi 150g · Tumis tauge + tempe · Telor dadar 1 btr — simpel, bergizi, mengenyangkan!", price: "Rp 10.000", giziMini: "~580 kkal · 24g P" }
            ],
            totalRow: {
                left: "Total Selasa + Beras (3 porsi)",
                chips: [
                    { type: "kal", label: "~2.050 kkal" },
                    { type: "prot", label: "~63g Protein" },
                    { type: "fe", label: "~8mg Fe" }
                ],
                right: "= Rp 33.000"
            }
        },
        {
            day: "Rabu",
            tagline: "Hari ikan — omega-3 untuk si kecil!",
            budget: "Rp 36.500",
            meals: [
                { time: "07.00", typeMeal: "Sarapan", type: "soup", menu: "Bubur Nasi + Telur + Pisang", detail: "Bubur dari beras 75g · Telur rebus 1 btr · Pisang 1 bh · Garam & kaldu", price: "Rp 6.000", giziMini: "~400 kkal · 14g P" },
                { time: "10.00", typeMeal: "Selingan", type: "snack", menu: "Kacang Tanah Rebus + Air Putih", detail: "Kacang tanah rebus segenggam (~30g) — protein & folat tinggi!", price: "Rp 2.000", giziMini: "~108 kkal · 5g P" },
                { time: "12.00", typeMeal: "Siang", type: "fish", menu: "Nasi + Ikan Lele Goreng + Sayur Bening Bayam", detail: "Nasi 150g · Ikan lele 1 ekor kecil · Bayam & jagung manis", price: "Rp 7.000", giziMini: "~560 kkal · 22g P · 3mg Fe" },
                { time: "15.00", typeMeal: "Selingan", type: "snack", menu: "Singkong Rebus + Gula Aren Sedikit", detail: "Singkong 1 potong sedang (~100g) · Sumber energi alami", price: "Rp 1.500", giziMini: "~130 kkal" },
                { time: "18.00", typeMeal: "Malam", type: "soup", menu: "Nasi + Sup Tahu dan Puyuh dan Oyong", detail: "Nasi 150g · Tahu 2 ptg · Telur puyuh · Oyong · Wortel · Daun bawang — hangat dan bergizi!", price: "Rp 14.000", giziMini: "~540 kkal · 20g P" }
            ],
            totalRow: {
                left: "Total Rabu + Beras (3 porsi)",
                chips: [
                    { type: "kal", label: "~2.050 kkal" },
                    { type: "prot", label: "~63g Protein" },
                    { type: "fe", label: "~9mg Fe" }
                ],
                right: "= Rp 36.500"
            }
        },
        {
            day: "Kamis",
            tagline: "Hari sayuran hijau — zat besi melimpah!",
            budget: "Rp 47.500",
            meals: [
                { time: "07.00", typeMeal: "Sarapan", type: "egg", menu: "Nasi + Telur Bumbu Bali + Bening Kelor", detail: "Nasi 150g · Telur 2 btr bumbu bali pedas manis · Sayur bening kelor segar — super food bumil!", price: "Rp 10.000", giziMini: "~480 kkal · 18g P · 4mg Fe" },
                { time: "10.00", typeMeal: "Selingan", type: "fruit", menu: "Jeruk Manis + Air Putih", detail: "1 buah jeruk manis — vitamin C tinggi bantu serap zat besi!", price: "Rp 2.000", giziMini: "~45 kkal · vit C 75mg" },
                { time: "12.00", typeMeal: "Siang", type: "fish", menu: "Nasi + Tempe Bacem + Sayur Asem + Pepes Ikan Ekor Kuning", detail: "Nasi 150g · Tempe bacem 2 ptg · Sayur asem · Pepes ikan ekor kuning bumbu rempah", price: "Rp 20.000", giziMini: "~530 kkal · 18g P" },
                { time: "15.00", typeMeal: "Selingan", type: "snack", menu: "Pisang + Kacang Rebus", detail: "Pisang 1 bh + kacang rebus segenggam — kombinasi sempurna!", price: "Rp 2.500", giziMini: "~207 kkal · 6g P" },
                { time: "18.00", typeMeal: "Malam", type: "egg", menu: "Nasi + Puyuh Kecap + Kangkung", detail: "Nasi 150g · Telur puyuh kecap manis · Tumis kangkung bawang putih — gurih dan lezat!", price: "Rp 13.000", giziMini: "~540 kkal · 22g P · 3mg Fe" }
            ],
            totalRow: {
                left: "Total Kamis + Beras (3 porsi)",
                chips: [
                    { type: "kal", label: "~2.150 kkal" },
                    { type: "prot", label: "~68g Protein" },
                    { type: "fe", label: "~11mg Fe" }
                ],
                right: "= Rp 47.500"
            }
        },
        {
            day: "Jumat",
            tagline: "Hari paling hemat! Budget ketat tapi gizi tetap top",
            budget: "Rp 39.000",
            meals: [
                { time: "07.00", typeMeal: "Sarapan", type: "egg", menu: "Nasi Goreng Sederhana + Tempe + Telur", detail: "Nasi sisa 150g · Tempe goreng · Telur orak-arik · Kecap & bumbu", price: "Rp 9.000", giziMini: "~490 kkal · 16g P" },
                { time: "10.00", typeMeal: "Selingan", type: "snack", menu: "Ubi Rebus + Air Putih", detail: "Ubi jalar kuning rebus 1 bh — manis alami, tidak perlu gula!", price: "Rp 1.500", giziMini: "~90 kkal" },
                { time: "12.00", typeMeal: "Siang", type: "soup", menu: "Nasi + Semur Tahu, Wortel dan Puyuh", detail: "Nasi 150g · Semur tahu + wortel + telur puyuh kecap — kuah cokelat manis gurih!", price: "Rp 12.000", giziMini: "~540 kkal · 20g P · 3mg Fe" },
                { time: "15.00", typeMeal: "Selingan", type: "fruit", menu: "Pisang + Air Putih", detail: "1 buah pisang ambon atau pisang raja", price: "Rp 1.500", giziMini: "~100 kkal" },
                { time: "18.00", typeMeal: "Malam", type: "fish", menu: "Nasi + Acar Kuning + Ikan Mujair", detail: "Nasi 150g · Acar kuning wortel timun · Ikan mujair bumbu kuning — segar dan menggugah selera!", price: "Rp 15.000", giziMini: "~510 kkal · 20g P · 2mg Fe" }
            ],
            totalRow: {
                left: "Total Jumat + Beras (3 porsi)",
                chips: [
                    { type: "kal", label: "~2.050 kkal" },
                    { type: "prot", label: "~62g Protein" },
                    { type: "fe", label: "~9mg Fe" }
                ],
                right: "= Rp 39.000"
            }
        },
        {
            day: "Sabtu",
            tagline: "Hari belanja pasar! Stok mingguan dimulai",
            budget: "Rp 47.000",
            meals: [
                { time: "07.00", typeMeal: "Sarapan", type: "soup", menu: "Mi Kuning Godok, Sawi, Telur, Tauge", detail: "Mi kuning 1 bungkus · Sawi hijau · Telur 1 btr · Tauge · Bumbu bawang — sarapan mengenyangkan!", price: "Rp 10.000", giziMini: "~420 kkal · 16g P" },
                { time: "10.00", typeMeal: "Selingan", type: "fruit", menu: "Jeruk + Kacang Rebus", detail: "Jeruk 1 bh + kacang rebus sedikit — vitamin C bantu serap zat besi!", price: "Rp 3.500", giziMini: "~153 kkal · 5g P" },
                { time: "12.00", typeMeal: "Siang", type: "bean", menu: "Nasi + Tempe Tahu + Lodeh + Pindang Goreng", detail: "Nasi 150g · Tempe 2 ptg · Tahu 1 ptg · Sayur lodeh (labu siam, kacang panjang, santan encer) · Pindang goreng", price: "Rp 17.000", giziMini: "~560 kkal · 20g P" },
                { time: "15.00", typeMeal: "Selingan", type: "fruit", menu: "Pisang Rebus + Air Putih", detail: "Pisang kepok rebus 1-2 bh — lebih mengenyangkan dari pisang biasa", price: "Rp 1.500", giziMini: "~120 kkal" },
                { time: "18.00", typeMeal: "Malam", type: "fish", menu: "Nasi + Bayam + Penyetan Ikan Lele", detail: "Nasi 150g · Sayur bayam bening · Ikan lele digoreng & dipenyetkan sambal — mantap!", price: "Rp 15.000", giziMini: "~560 kkal · 22g P · 4mg Fe" }
            ],
            totalRow: {
                left: "Total Sabtu + Beras (3 porsi)",
                chips: [
                    { type: "kal", label: "~2.100 kkal" },
                    { type: "prot", label: "~65g Protein" },
                    { type: "fe", label: "~10mg Fe" }
                ],
                right: "= Rp 47.000"
            }
        },
        {
            day: "Minggu",
            tagline: "Hari spesial! Menu paling variatif akhir pekan",
            budget: "Rp 47.500",
            meals: [
                { time: "07.00", typeMeal: "Sarapan", type: "egg", menu: "Nasi Goreng Jawa", detail: "Nasi 150g · Bumbu nasi goreng Jawa (kecap, bawang, cabe) · Telur · Kol — weekend spesial!", price: "Rp 10.000", giziMini: "~490 kkal · 15g P · 3mg Fe" },
                { time: "10.00", typeMeal: "Selingan", type: "fruit", menu: "Buah Campuran (Pepaya + Pisang)", detail: "Pepaya 1 potong + pisang 1 bh — vitamin C & kalium untuk bumil!", price: "Rp 3.500", giziMini: "~160 kkal · vit C tinggi" },
                { time: "12.00", typeMeal: "Siang", type: "fish", menu: "Nasi + Bening Kelor + Rica Lele", detail: "Nasi 150g · Sayur bening kelor segar · Rica-rica ikan lele pedas gurih — kombinasi juara!", price: "Rp 17.000", giziMini: "~570 kkal · 24g P · 2mg Fe" },
                { time: "15.00", typeMeal: "Selingan", type: "snack", menu: "Kacang Rebus + Air Kelapa Muda", detail: "Kacang rebus segenggam + air kelapa muda — menyegarkan & bergizi!", price: "Rp 4.000", giziMini: "~150 kkal · 5g P" },
                { time: "18.00", typeMeal: "Malam", type: "bean", menu: "Nasi + Oseng Tempe Puyuh, Buncis", detail: "Nasi 150g · Oseng tempe + telur puyuh + buncis bumbu kecap — penutup minggu bergizi!", price: "Rp 13.000", giziMini: "~530 kkal · 22g P · 4mg Fe" }
            ],
            totalRow: {
                left: "Total Minggu + Beras (3 porsi)",
                chips: [
                    { type: "kal", label: "~2.200 kkal" },
                    { type: "prot", label: "~68g Protein" },
                    { type: "fe", label: "~11mg Fe" }
                ],
                right: "= Rp 47.500"
            }
        }
    ],
    weeklySummary: {
        cards: [
            { label: "Total pengeluaran 7 hari", value: "Rp 296.500" },
            { label: "Rata-rata per hari", value: "Rp 42.357" },
            { label: "Rata-rata per waktu makan", value: "Rp 8.471" },
            { label: "Rata-rata kkal/hari", value: "~2.100" }
        ],
        breakdown: [
            { day: "Senin", menu: "Penyet togek asap + pepes ikan teri", gizi: "~2.020 kkal · 60g P", budget: "Rp 47.000" },
            { day: "Selasa", menu: "Asem-asem pindang + tauge tempe", gizi: "~2.035 kkal · 62g P", budget: "Rp 33.000" },
            { day: "Rabu", menu: "Ikan lele + sup tahu puyuh oyong", gizi: "~2.038 kkal · 62g P", budget: "Rp 36.500" },
            { day: "Kamis", menu: "Telur bumbu bali + pepes ikan ekor kuning", gizi: "~2.102 kkal · 65g P", budget: "Rp 47.500" },
            { day: "Jumat", menu: "Semur tahu puyuh + acar kuning mujair", gizi: "~2.030 kkal · 58g P", budget: "Rp 39.000" },
            { day: "Sabtu", menu: "Mi kuning godok + lodeh pindang goreng", gizi: "~2.013 kkal · 63g P", budget: "Rp 46.000" },
            { day: "Minggu", menu: "Nasi goreng Jawa + rica lele + bening kelor", gizi: "~2.200 kkal · 66g P", budget: "Rp 47.500" }
        ],
        total: {
            dayText: "7 hari penuh", gizi: "~2.100 kkal/hr", budget: "Rp 296.500"
        }
    },
    tips: [
        { title: "Pilih Ikan Lokal", text: "Ikan kembung Rp 3.000–5.000/ekor, ikan lele Rp 4.000–6.000/ekor, ikan pindang Rp 2.000–3.000/ptg — lebih murah dari ayam tapi protein & omega-3 tinggi!", icon: "fish" },
        { title: "Tempe & Tahu = Raja Protein Murah", text: "Tempe Rp 1.000–1.500/ptg, tahu Rp 500–1.000/ptg. Beli di pasar pagi hari untuk harga terbaik. 100g tempe setara protein dengan 1 butir telur!", icon: "bean" },
        { title: "Daun Kelor — Super Food Gratis!", text: "Daun kelor sering bisa dipetik di sekitar rumah atau dibeli Rp 500–1.000/ikat. Kandungan zat besi 25x lebih tinggi dari bayam!", icon: "leaf" },
        { title: "Belanja Sekali Seminggu", text: "Belanja semua bahan di pasar tradisional tiap Sabtu pagi. Beli beras 5kg, sayuran seminggu, dan lauk beku — lebih hemat 20-30% dari beli harian.", icon: "cart" },
        { title: "Buah Musiman Lebih Murah", text: "Pisang kepok Rp 1.000/bh, pepaya Rp 2.000–3.000/potong, jambu biji Rp 2.000/bh — lebih murah dari jeruk tapi kandungan vitaminnya tidak kalah!", icon: "fruit" },
        { title: "Tablet Fe Gratis di Puskesmas!", text: "Ibu hamil berhak mendapatkan tablet tambah darah (Fe) GRATIS dari Puskesmas atau Bidan Desa. Minta saat ANC — tidak perlu beli di apotek!", icon: "pill" }
    ]
};