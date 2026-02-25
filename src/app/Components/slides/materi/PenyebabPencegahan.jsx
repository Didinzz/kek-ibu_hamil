"use client";
import { motion } from "framer-motion";
import {
    Search, ShieldCheck,
    Utensils, BookOpen, Wallet, Thermometer, ShieldAlert, CalendarClock,
    Apple, Pill, Stethoscope, Users, Handshake, Droplet
} from "lucide-react"; // Import Ikon Modern

export default function PenyebabPencegahan({ type }) {
    const isPenyebab = type === "penyebab";

    // Data dengan Icon Lucide (Bukan Emoji)
    const dataPenyebab = [
        { icon: <Utensils size={26} strokeWidth={1.5} />, title: "Asupan Gizi Kurang", desc: "Konsumsi makanan sehari-hari tidak memenuhi kebutuhan energi dan protein selama kehamilan. Pola makan tidak bervariasi dan tidak bergizi seimbang menyebabkan LILA tetap rendah." },
        { icon: <BookOpen size={26} strokeWidth={1.5} />, title: "Kurangnya Pengetahuan Gizi", desc: "Tingkat pendidikan rendah berkorelasi dengan kurangnya pemahaman tentang kebutuhan gizi ibu hamil dan pentingnya pemantauan LILA secara rutin di Posyandu." },
        { icon: <Wallet size={26} strokeWidth={1.5} />, title: "Kondisi Ekonomi Terbatas", desc: "Keterbatasan pendapatan keluarga menyebabkan akses terhadap bahan makanan bergizi terbatas, sehingga asupan energi dan protein harian tidak tercukupi." },
        { icon: <Thermometer size={26} strokeWidth={1.5} />, title: "Gangguan Mual & Muntah", desc: "Mual dan muntah hebat terutama trimester pertama menyebabkan asupan makan sangat berkurang, sehingga cadangan energi tubuh menurun dan LILA bisa rendah." },
        { icon: <ShieldAlert size={26} strokeWidth={1.5} />, title: "Riwayat Penyakit Infeksi", desc: "Penyakit infeksi berulang meningkatkan kebutuhan energi sekaligus mengurangi nafsu makan. Kondisi ini mempercepat penurunan cadangan gizi tubuh ibu hamil." },
        { icon: <CalendarClock size={26} strokeWidth={1.5} />, title: "Jarak Kehamilan Terlalu Dekat", desc: "Jarak kehamilan <2 tahun tidak memberi waktu cukup bagi tubuh untuk memulihkan cadangan gizi, sehingga kondisi LILA rendah bisa terbawa ke kehamilan berikutnya." }
    ];

    const dataPencegahan = [
        { icon: <Apple size={26} strokeWidth={1.5} />, title: "Konsumsi Makanan Bergizi Seimbang", desc: "Penuhi kebutuhan energi +180–300 kkal/hari sesuai trimester. Variasikan menu dengan karbohidrat, protein hewani/nabati, sayuran hijau, dan buah setiap hari." },
        { icon: <Pill size={26} strokeWidth={1.5} />, title: "Rutin Konsumsi Tablet Tambah Darah", desc: "Minum tablet Fe minimal 90 tablet selama kehamilan. Konsumsi malam hari bersama air jeruk agar penyerapan lebih optimal dan tidak mual." },
        { icon: <Stethoscope size={26} strokeWidth={1.5} />, title: "Periksa Kehamilan Rutin + Ukur LILA", desc: "ANC minimal 6x selama kehamilan. Pastikan pengukuran LILA selalu dilakukan dan hasilnya dicatat di Buku KIA. Segera konsultasikan jika LILA <23,5 cm." },
        { icon: <Users size={26} strokeWidth={1.5} />, title: "Ikuti Kelas Ibu Hamil", desc: "Kelas ibu hamil memberikan edukasi gizi, tanda bahaya kehamilan, dan cara memenuhi kebutuhan makan sesuai trimester. Tersedia gratis di Puskesmas." },
        { icon: <Handshake size={26} strokeWidth={1.5} />, title: "Manfaatkan PMT dari Pemerintah", desc: "Ibu hamil berisiko KEK (LILA <23,5 cm) berhak mendapatkan Pemberian Makanan Tambahan (PMT) berupa biskuit protein tinggi secara gratis dari Puskesmas." },
        { icon: <Droplet size={26} strokeWidth={1.5} />, title: "Cukupi Kebutuhan Cairan Harian", desc: "Minum minimal 8–10 gelas air putih per hari. Cukupnya cairan mendukung sirkulasi nutrisi ke janin dan mencegah dehidrasi yang memperburuk kondisi gizi ibu." }
    ];

    const content = isPenyebab ? dataPenyebab : dataPencegahan;

    // Animasi Lambat Per-Item
    const fadeUpSlow = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // Animasi Kartu dengan perhitungan Delay otomatis dari Kiri ke Kanan
    const cardFadeUp = (index) => {
        // Jika Penyebab (3 kolom), delay akan berulang tiap 3 kartu. Jika Pencegahan (2 kolom), tiap 2 kartu.
        const cols = isPenyebab ? 3 : 2;
        const delay = (index % cols) * 0.15;
        return {
            hidden: { opacity: 0, y: 60 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.4, delay: delay, ease: [0.22, 1, 0.36, 1] }
            }
        };
    };

    return (
        <section id={type} className={`py-24 px-6 lg:px-12 ${isPenyebab ? 'bg-[#FAFAFA]' : 'bg-linear-to-br from-[#e6f4ec] to-[#f0faf5]'}`}>
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER --- */}
                {/* Menggunakan animasi terpisah untuk Header */}
                <motion.div
                    variants={fadeUpSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-2 text-[#2A5C43] text-[11px] font-bold tracking-[2px] uppercase mb-3">
                        {isPenyebab ? <><Search size={14} strokeWidth={2.5} /> Faktor Risiko</> : <><ShieldCheck size={14} strokeWidth={2.5} /> Cara Mencegah</>}
                    </div>

                    <h2 className="font-black text-[38px] leading-[1.2] text-[#1A202C] mb-3.5">
                        {isPenyebab ? "Penyebab " : "Pencegahan "}
                        <span className="text-[#D4AF37] font-serif italic font-normal">Risiko KEK</span>
                        {isPenyebab ? " pada Ibu Hamil" : " yang Bisa Dilakukan"}
                    </h2>

                    <div className="text-slate-500 text-[15px] max-w-145 leading-[1.7] mb-12">
                        {isPenyebab
                            ? "Berbagai faktor yang meningkatkan risiko ibu hamil mengalami Risiko KEK, baik dari dalam maupun luar diri ibu."
                            : "Pencegahan dimulai dari hal sederhana setiap hari. Semakin dini dilakukan, semakin baik hasilnya untuk ibu dan bayi."}
                    </div>
                </motion.div>

                {/* --- KARTU KONTEN --- */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${isPenyebab ? 'lg:grid-cols-3' : ''} gap-5`}>
                    {content.map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i} // Mengirim index ke variant untuk menghitung delay
                            variants={cardFadeUp(i)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }} // Margin lebih kecil agar kartu muncul tepat saat layarnya digeser
                            // Hover menggunakan warna hijau gelap (bukan emas lagi)
                            className={`bg-white rounded-[20px] p-7 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#2A5C43]/50 ${!isPenyebab ? 'flex gap-4 items-start' : ''}`}
                        >
                            {/* Warna ikon dikembalikan ke nuansa hijau */}
                            <div className={`w-14 h-14 rounded-2xl bg-[#2A5C43]/10 text-[#2A5C43] flex items-center justify-center shrink-0 ${isPenyebab ? 'mb-5' : ''}`}>
                                {item.icon}
                            </div>

                            <div>
                                <h3 className="text-[15px] font-bold text-[#1A202C] mb-2">{item.title}</h3>
                                <p className="text-[13px] text-slate-500 leading-[1.6] font-light">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}