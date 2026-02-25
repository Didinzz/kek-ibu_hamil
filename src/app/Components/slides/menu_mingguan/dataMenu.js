export const dataMenu = {
    t1: {
        title: "Trimester 1 — Target: ±2.030 kkal/hari | Fokus: folat, zat besi, atasi mual. Makan porsi kecil tapi sering.",
        color: "bg-[#F0FAF5] border-[#2A5C43]/30 text-[#2A5C43]",
        headerGrad: "bg-linear-to-r from-[#1A3A2A] to-[#2A5C43]",
        days: [
            {
                name: "Senin", kkal: "2.030", prot: "61g", fe: "26mg",
                meals: [
                    { time: "07.00 Sarapan", type: "egg", menu: "Nasi 150g + Telur rebus 1btr + Tumis bayam + Jeruk 1 buah", chips: [{ v: "450 kkal", c: "e" }, { v: "15g P", c: "p" }, { v: "4mg Fe", c: "f" }] },
                    { time: "10.00 Selingan Pagi", type: "milk", menu: "Biskuit gandum 3 keping + Susu bumil 1 gelas", chips: [{ v: "280 kkal", c: "e" }, { v: "10g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "bento", menu: "Nasi 150g + Tempe goreng 2 potong + Sayur sop + Pepaya 1 potong", chips: [{ v: "550 kkal", c: "e" }, { v: "18g P", c: "p" }, { v: "3mg Fe", c: "f" }] },
                    { time: "15.00 Selingan Sore", type: "fruit", menu: "Pisang 1 buah + Air putih", chips: [{ v: "100 kkal", c: "e" }] },
                    { time: "18.00 Makan Malam", type: "fish", menu: "Nasi 150g + Ikan kukus 1 ekor + Tumis kangkung", chips: [{ v: "480 kkal", c: "e" }, { v: "22g P", c: "p" }, { v: "3mg Fe", c: "f" }] }
                ]
            },
            {
                name: "Selasa", kkal: "2.030", prot: "62g", fe: "25mg",
                meals: [
                    { time: "07.00 Sarapan", type: "egg", menu: "Nasi 150g + Tahu goreng + Tumis kangkung + Susu bumil", chips: [{ v: "440 kkal", c: "e" }, { v: "14g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "fruit", menu: "Buah potong (mangga/pepaya) + Air putih", chips: [{ v: "80 kkal", c: "e" }] },
                    { time: "12.00 Makan Siang", type: "fish", menu: "Nasi 150g + Ikan pepes + Sayur lodeh + Jeruk", chips: [{ v: "550 kkal", c: "e" }, { v: "20g P", c: "p" }, { v: "2mg Fe", c: "f" }] },
                    { time: "15.00 Selingan Sore", type: "tea", menu: "Biskuit 3 keping + Teh hangat", chips: [{ v: "120 kkal", c: "e" }] },
                    { time: "18.00 Makan Malam", type: "soup", menu: "Nasi 150g + Telur balado + Tumis buncis + Tahu", chips: [{ v: "480 kkal", c: "e" }, { v: "18g P", c: "p" }] }
                ]
            },
            {
                name: "Rabu", kkal: "2.030", prot: "60g", fe: "24mg",
                meals: [
                    { time: "07.00 Sarapan", type: "soup", menu: "Oatmeal + Susu bumil + Pisang", chips: [{ v: "420 kkal", c: "e" }, { v: "12g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "bread", menu: "Roti gandum 2 lembar + Telur rebus", chips: [{ v: "280 kkal", c: "e" }, { v: "12g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "bean", menu: "Nasi 150g + Tempe bacem + Tumis bayam + Jeruk", chips: [{ v: "540 kkal", c: "e" }, { v: "18g P", c: "p" }, { v: "4mg Fe", c: "f" }] },
                    { time: "15.00 Selingan Sore", type: "snack", menu: "Ubi rebus + Air putih", chips: [{ v: "100 kkal", c: "e" }] },
                    { time: "18.00 Makan Malam", type: "soup", menu: "Nasi 150g + Sup ayam + Tahu + Sayuran", chips: [{ v: "470 kkal", c: "e" }, { v: "18g P", c: "p" }] }
                ]
            },
            {
                name: "Kamis", kkal: "2.030", prot: "61g", fe: "25mg",
                meals: [
                    { time: "07.00 Sarapan", type: "fish", menu: "Nasi 150g + Ikan goreng + Tumis kangkung + Susu", chips: [{ v: "460 kkal", c: "e" }, { v: "16g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "fruit", menu: "Jeruk 1 buah + Biskuit gandum", chips: [{ v: "120 kkal", c: "e" }] },
                    { time: "12.00 Makan Siang", type: "meat", menu: "Nasi 150g + Ayam rebus + Sayur bening + Pepaya", chips: [{ v: "540 kkal", c: "e" }, { v: "20g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "fruit", menu: "Pisang + Air kelapa muda", chips: [{ v: "140 kkal", c: "e" }] },
                    { time: "18.00 Makan Malam", type: "bean", menu: "Nasi 150g + Tempe + Tahu + Tumis wortel", chips: [{ v: "460 kkal", c: "e" }, { v: "17g P", c: "p" }] }
                ]
            },
            {
                name: "Jumat", kkal: "2.030", prot: "60g", fe: "24mg",
                meals: [
                    { time: "07.00 Sarapan", type: "bean", menu: "Nasi 150g + Tempe goreng + Tumis bayam + Susu", chips: [{ v: "450 kkal", c: "e" }, { v: "16g P", c: "p" }, { v: "4mg Fe", c: "f" }] },
                    { time: "10.00 Selingan Pagi", type: "fruit", menu: "Buah potong + Air putih", chips: [{ v: "80 kkal", c: "e" }] },
                    { time: "12.00 Makan Siang", type: "fish", menu: "Nasi 150g + Ikan pindang + Sayur sop + Jeruk", chips: [{ v: "530 kkal", c: "e" }, { v: "18g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "tea", menu: "Biskuit gandum + Teh hangat", chips: [{ v: "120 kkal", c: "e" }] },
                    { time: "18.00 Makan Malam", type: "egg", menu: "Nasi 150g + Telur rebus + Tahu + Tumis kangkung", chips: [{ v: "450 kkal", c: "e" }, { v: "16g P", c: "p" }] }
                ]
            },
            {
                name: "Sabtu", kkal: "2.030", prot: "62g", fe: "25mg",
                meals: [
                    { time: "07.00 Sarapan", type: "bread", menu: "Roti gandum 2 lembar + Telur rebus + Susu bumil", chips: [{ v: "420 kkal", c: "e" }, { v: "16g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "fruit", menu: "Pisang + Kacang rebus", chips: [{ v: "207 kkal", c: "e" }, { v: "6g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "soup", menu: "Nasi 150g + Tempe + Ayam rebus + Sayur sop", chips: [{ v: "540 kkal", c: "e" }, { v: "24g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "fruit", menu: "Buah potong + Air putih", chips: [{ v: "80 kkal", c: "e" }] },
                    { time: "18.00 Makan Malam", type: "fish", menu: "Nasi 150g + Ikan kukus + Tumis kangkung + Tahu", chips: [{ v: "460 kkal", c: "e" }, { v: "20g P", c: "p" }] }
                ]
            },
            {
                name: "Minggu", kkal: "2.030", prot: "61g", fe: "25mg",
                meals: [
                    { time: "07.00 Sarapan", type: "egg", menu: "Nasi goreng bumil + Telur + Sayuran + Susu bumil", chips: [{ v: "480 kkal", c: "e" }, { v: "16g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "snack", menu: "Ubi rebus + Air putih", chips: [{ v: "100 kkal", c: "e" }] },
                    { time: "12.00 Makan Siang", type: "fish", menu: "Nasi 150g + Ikan pepes + Sayur asem + Semangka", chips: [{ v: "530 kkal", c: "e" }, { v: "18g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "fruit", menu: "Pisang + Biskuit", chips: [{ v: "200 kkal", c: "e" }] },
                    { time: "18.00 Makan Malam", type: "soup", menu: "Nasi 150g + Sup ayam + Tempe + Tahu", chips: [{ v: "460 kkal", c: "e" }, { v: "17g P", c: "p" }] }
                ]
            }
        ]
    },
    t2: {
        title: "Trimester 2 — Target: ±2.350 kkal/hari | Fokus: protein, kalsium, zat besi. Nafsu makan mulai membaik.",
        color: "bg-[#F0FAF5] border-[#2A5C43]/30 text-[#2A5C43]",
        headerGrad: "bg-linear-to-r from-[#1A3A2A] to-[#2A5C43]",
        days: [
            {
                name: "Senin", kkal: "2.350", prot: "80g", fe: "29mg",
                meals: [
                    { time: "07.00 Sarapan", type: "egg", menu: "Nasi 200g + Telur dadar + Tumis brokoli + Susu bumil 1 gls", chips: [{ v: "580 kkal", c: "e" }, { v: "28g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "bread", menu: "Roti gandum 2 lbr + Keju 1 ptg", chips: [{ v: "278 kkal", c: "e" }, { v: "13g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "meat", menu: "Nasi 200g + Ayam rebus + Sayur bening bayam + Semangka", chips: [{ v: "560 kkal", c: "e" }, { v: "20g P", c: "p" }, { v: "4mg Fe", c: "f" }] },
                    { time: "15.00 Selingan Sore", type: "milk", menu: "Yogurt 1 cup + Buah potong", chips: [{ v: "160 kkal", c: "e" }, { v: "5g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "fish", menu: "Nasi 200g + Ikan lele + Tumis tauge + Tahu", chips: [{ v: "590 kkal", c: "e" }, { v: "25g P", c: "p" }, { v: "3mg Fe", c: "f" }] }
                ]
            },
            {
                name: "Selasa", kkal: "2.350", prot: "81g", fe: "28mg",
                meals: [
                    { time: "07.00 Sarapan", type: "meat", menu: "Nasi 200g + Rendang daging + Tumis kacang panjang + Susu", chips: [{ v: "620 kkal", c: "e" }, { v: "30g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "snack", menu: "Pisang 1 buah + Kacang tanah segenggam", chips: [{ v: "207 kkal", c: "e" }, { v: "6g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "fish", menu: "Nasi 200g + Ikan goreng + Sayur asem + Semangka", chips: [{ v: "560 kkal", c: "e" }, { v: "22g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "bread", menu: "Roti gandum + Selai kacang", chips: [{ v: "200 kkal", c: "e" }, { v: "6g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "soup", menu: "Nasi 200g + Sup ayam + Tempe + Tahu", chips: [{ v: "580 kkal", c: "e" }, { v: "26g P", c: "p" }] }
                ]
            },
            {
                name: "Rabu", kkal: "2.350", prot: "79g", fe: "27mg",
                meals: [
                    { time: "07.00 Sarapan", type: "fish", menu: "Nasi 200g + Ikan goreng + Tumis wortel + Susu bumil", chips: [{ v: "580 kkal", c: "e" }, { v: "26g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "snack", menu: "Ubi rebus + Susu bumil", chips: [{ v: "278 kkal", c: "e" }, { v: "8g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "meat", menu: "Nasi 200g + Daging rebus + Sayur sop + Semangka", chips: [{ v: "580 kkal", c: "e" }, { v: "24g P", c: "p" }, { v: "3mg Fe", c: "f" }] },
                    { time: "15.00 Selingan Sore", type: "fruit", menu: "Pisang + Kacang rebus", chips: [{ v: "207 kkal", c: "e" }, { v: "6g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "bean", menu: "Nasi 200g + Tempe goreng + Tahu + Tumis kangkung", chips: [{ v: "530 kkal", c: "e" }, { v: "22g P", c: "p" }] }
                ]
            },
            {
                name: "Kamis", kkal: "2.350", prot: "80g", fe: "29mg",
                meals: [
                    { time: "07.00 Sarapan", type: "egg", menu: "Nasi 200g + Telur mata sapi + Tumis brokoli + Susu", chips: [{ v: "560 kkal", c: "e" }, { v: "24g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "fruit", menu: "Buah potong + Yogurt", chips: [{ v: "160 kkal", c: "e" }, { v: "4g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "fish", menu: "Nasi 200g + Ikan bakar + Sayur asem + Semangka", chips: [{ v: "560 kkal", c: "e" }, { v: "24g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "snack", menu: "Ubi rebus + Susu bumil", chips: [{ v: "278 kkal", c: "e" }, { v: "8g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "meat", menu: "Nasi 200g + Sup daging + Tempe + Sayuran", chips: [{ v: "590 kkal", c: "e" }, { v: "28g P", c: "p" }, { v: "3mg Fe", c: "f" }] }
                ]
            },
            {
                name: "Jumat", kkal: "2.350", prot: "81g", fe: "30mg",
                meals: [
                    { time: "07.00 Sarapan", type: "meat", menu: "Nasi 200g + Hati ayam + Tumis wortel + Susu bumil", chips: [{ v: "580 kkal", c: "e" }, { v: "28g P", c: "p" }, { v: "5mg Fe", c: "f" }] },
                    { time: "10.00 Selingan Pagi", type: "bread", menu: "Roti gandum + Susu bumil", chips: [{ v: "350 kkal", c: "e" }, { v: "13g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "fish", menu: "Nasi 200g + Ikan goreng + Sayur bening + Semangka", chips: [{ v: "540 kkal", c: "e" }, { v: "22g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "snack", menu: "Kacang rebus + Buah", chips: [{ v: "190 kkal", c: "e" }, { v: "6g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "soup", menu: "Nasi 200g + Tempe + Tahu + Sup sayuran", chips: [{ v: "500 kkal", c: "e" }, { v: "20g P", c: "p" }] }
                ]
            },
            {
                name: "Sabtu", kkal: "2.350", prot: "80g", fe: "28mg",
                meals: [
                    { time: "07.00 Sarapan", type: "egg", menu: "Nasi 200g + Telur rebus + Tumis brokoli + Susu", chips: [{ v: "560 kkal", c: "e" }, { v: "24g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "fruit", menu: "Buah potong + Yogurt", chips: [{ v: "160 kkal", c: "e" }, { v: "4g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "meat", menu: "Nasi 200g + Rendang + Sayur bening bayam + Pepaya", chips: [{ v: "600 kkal", c: "e" }, { v: "28g P", c: "p" }, { v: "4mg Fe", c: "f" }] },
                    { time: "15.00 Selingan Sore", type: "milk", menu: "Biskuit + Susu bumil", chips: [{ v: "280 kkal", c: "e" }, { v: "8g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "fish", menu: "Nasi 200g + Ikan goreng + Sup sayuran", chips: [{ v: "550 kkal", c: "e" }, { v: "22g P", c: "p" }] }
                ]
            },
            {
                name: "Minggu", kkal: "2.350", prot: "82g", fe: "30mg",
                meals: [
                    { time: "07.00 Sarapan", type: "meat", menu: "Nasi 200g + Ayam rebus + Tumis bayam + Susu bumil", chips: [{ v: "580 kkal", c: "e" }, { v: "28g P", c: "p" }, { v: "4mg Fe", c: "f" }] },
                    { time: "10.00 Selingan Pagi", type: "bread", menu: "Roti + Keju + Susu bumil", chips: [{ v: "370 kkal", c: "e" }, { v: "14g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "fish", menu: "Nasi 200g + Ikan bakar + Sayur sop + Pepaya", chips: [{ v: "550 kkal", c: "e" }, { v: "22g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "fruit", menu: "Buah potong + Kacang rebus", chips: [{ v: "190 kkal", c: "e" }, { v: "6g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "meat", menu: "Nasi 200g + Hati ayam + Tumis kangkung + Tahu", chips: [{ v: "570 kkal", c: "e" }, { v: "28g P", c: "p" }, { v: "5mg Fe", c: "f" }] }
                ]
            }
        ]
    },
    t3: {
        title: "Trimester 3 — Target: ±2.350 kkal/hari | Fokus: serat, zat besi, persiapan persalinan. Hindari makan berlebihan sekaligus.",
        color: "bg-[#F0FAF5] border-[#2A5C43]/30 text-[#2A5C43]",
        headerGrad: "bg-linear-to-r from-[#1A3A2A] to-[#2A5C43]",
        days: [
            {
                name: "Senin", kkal: "2.350", prot: "90g", fe: "35mg",
                meals: [
                    { time: "07.00 Sarapan", type: "meat", menu: "Nasi 200g + Hati ayam + Tumis wortel + Jeruk 1 buah", chips: [{ v: "550 kkal", c: "e" }, { v: "25g P", c: "p" }, { v: "5mg Fe", c: "f" }] },
                    { time: "10.00 Selingan Pagi", type: "snack", menu: "Kacang rebus + Susu bumil 1 gelas", chips: [{ v: "303 kkal", c: "e" }, { v: "13g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "fish", menu: "Nasi 200g + Ikan kembung + Sayur asem + Pepaya", chips: [{ v: "560 kkal", c: "e" }, { v: "24g P", c: "p" }, { v: "2mg Fe", c: "f" }] },
                    { time: "15.00 Selingan Sore", type: "bread", menu: "Roti 2 lembar + Susu bumil 1 gelas", chips: [{ v: "348 kkal", c: "e" }, { v: "14g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "soup", menu: "Nasi 200g + Tempe + Tahu + Sup sayuran", chips: [{ v: "490 kkal", c: "e" }, { v: "20g P", c: "p" }, { v: "4mg Fe", c: "f" }] }
                ]
            },
            {
                name: "Selasa", kkal: "2.350", prot: "91g", fe: "36mg",
                meals: [
                    { time: "07.00 Sarapan", type: "egg", menu: "Nasi 200g + Telur rebus 2 btr + Tumis bayam + Susu bumil", chips: [{ v: "560 kkal", c: "e" }, { v: "27g P", c: "p" }, { v: "5mg Fe", c: "f" }] },
                    { time: "10.00 Selingan Pagi", type: "snack", menu: "Buah potong + Kacang rebus", chips: [{ v: "190 kkal", c: "e" }, { v: "6g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "meat", menu: "Nasi 200g + Hati sapi + Sayur bening + Pepaya", chips: [{ v: "560 kkal", c: "e" }, { v: "28g P", c: "p" }, { v: "5mg Fe", c: "f" }] },
                    { time: "15.00 Selingan Sore", type: "milk", menu: "Yogurt + Buah potong", chips: [{ v: "160 kkal", c: "e" }, { v: "5g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "fish", menu: "Nasi 200g + Ikan kukus + Sup sayuran", chips: [{ v: "500 kkal", c: "e" }, { v: "24g P", c: "p" }] }
                ]
            },
            {
                name: "Rabu", kkal: "2.350", prot: "88g", fe: "34mg",
                meals: [
                    { time: "07.00 Sarapan", type: "soup", menu: "Bubur ayam + Telur + Sayuran + Susu bumil", chips: [{ v: "550 kkal", c: "e" }, { v: "24g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "bread", menu: "Roti gandum + Susu bumil", chips: [{ v: "350 kkal", c: "e" }, { v: "13g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "meat", menu: "Nasi 200g + Ayam panggang + Tumis bayam + Jeruk", chips: [{ v: "560 kkal", c: "e" }, { v: "28g P", c: "p" }, { v: "4mg Fe", c: "f" }] },
                    { time: "15.00 Selingan Sore", type: "snack", menu: "Kacang rebus + Air putih", chips: [{ v: "108 kkal", c: "e" }, { v: "5g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "fish", menu: "Nasi 200g + Ikan pepes + Sup sayuran", chips: [{ v: "490 kkal", c: "e" }, { v: "22g P", c: "p" }] }
                ]
            },
            {
                name: "Kamis", kkal: "2.350", prot: "92g", fe: "36mg",
                meals: [
                    { time: "07.00 Sarapan", type: "meat", menu: "Nasi 200g + Rendang + Tumis buncis + Susu bumil", chips: [{ v: "620 kkal", c: "e" }, { v: "30g P", c: "p" }] },
                    { time: "10.00 Selingan Pagi", type: "fruit", menu: "Pisang + Kacang rebus", chips: [{ v: "207 kkal", c: "e" }, { v: "6g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "meat", menu: "Nasi 200g + Hati ayam + Sayur lodeh + Pepaya", chips: [{ v: "550 kkal", c: "e" }, { v: "28g P", c: "p" }, { v: "5mg Fe", c: "f" }] },
                    { time: "15.00 Selingan Sore", type: "bread", menu: "Roti + Susu bumil", chips: [{ v: "348 kkal", c: "e" }, { v: "13g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "fish", menu: "Nasi 200g + Ikan goreng + Tumis kangkung", chips: [{ v: "490 kkal", c: "e" }, { v: "22g P", c: "p" }] }
                ]
            },
            {
                name: "Jumat", kkal: "2.350", prot: "89g", fe: "35mg",
                meals: [
                    { time: "07.00 Sarapan", type: "egg", menu: "Nasi 200g + Telur dadar + Tumis bayam + Susu bumil", chips: [{ v: "550 kkal", c: "e" }, { v: "25g P", c: "p" }, { v: "4mg Fe", c: "f" }] },
                    { time: "10.00 Selingan Pagi", type: "snack", menu: "Ubi rebus + Susu bumil", chips: [{ v: "278 kkal", c: "e" }, { v: "8g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "fish", menu: "Nasi 200g + Ikan bakar + Sayur asem + Pepaya", chips: [{ v: "550 kkal", c: "e" }, { v: "24g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "milk", menu: "Yogurt + Buah potong", chips: [{ v: "160 kkal", c: "e" }, { v: "5g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "meat", menu: "Nasi 200g + Ayam kukus + Sup sayuran", chips: [{ v: "490 kkal", c: "e" }, { v: "22g P", c: "p" }] }
                ]
            },
            {
                name: "Sabtu", kkal: "2.350", prot: "82g", fe: "30mg",
                meals: [
                    { time: "07.00 Sarapan", type: "meat", menu: "Nasi 200g + Hati sapi + Tumis wortel + Susu bumil", chips: [{ v: "580 kkal", c: "e" }, { v: "28g P", c: "p" }, { v: "5mg Fe", c: "f" }] },
                    { time: "10.00 Selingan Pagi", type: "snack", menu: "Kacang rebus + Buah potong", chips: [{ v: "190 kkal", c: "e" }, { v: "6g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "meat", menu: "Nasi 200g + Ayam panggang + Sayur lodeh + Jeruk", chips: [{ v: "560 kkal", c: "e" }, { v: "28g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "bread", menu: "Roti + Susu bumil", chips: [{ v: "348 kkal", c: "e" }, { v: "13g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "bean", menu: "Nasi 200g + Tempe + Tahu + Tumis bayam", chips: [{ v: "480 kkal", c: "e" }, { v: "20g P", c: "p" }, { v: "4mg Fe", c: "f" }] }
                ]
            },
            {
                name: "Minggu", kkal: "2.350", prot: "90g", fe: "36mg",
                meals: [
                    { time: "07.00 Sarapan", type: "egg", menu: "Nasi 200g + Telur rebus + Tumis bayam + Susu bumil", chips: [{ v: "550 kkal", c: "e" }, { v: "25g P", c: "p" }, { v: "4mg Fe", c: "f" }] },
                    { time: "10.00 Selingan Pagi", type: "milk", menu: "Buah potong + Yogurt", chips: [{ v: "160 kkal", c: "e" }, { v: "5g P", c: "p" }] },
                    { time: "12.00 Makan Siang", type: "fish", menu: "Nasi 200g + Ikan kembung + Sayur asem + Semangka", chips: [{ v: "550 kkal", c: "e" }, { v: "24g P", c: "p" }] },
                    { time: "15.00 Selingan Sore", type: "snack", menu: "Kacang rebus + Susu bumil", chips: [{ v: "303 kkal", c: "e" }, { v: "13g P", c: "p" }] },
                    { time: "18.00 Makan Malam", type: "meat", menu: "Nasi 200g + Ayam kukus + Sup sayuran", chips: [{ v: "490 kkal", c: "e" }, { v: "22g P", c: "p" }] }
                ]
            }
        ]
    }
};