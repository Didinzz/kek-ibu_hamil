"use client";
import { motion } from "framer-motion";

export default function PenyebabDampakMateri() {
    const penyebab = [
        { icon: "🍽️", title: "Asupan Gizi Kurang", desc: "Konsumsi makanan tidak memenuhi kebutuhan energi dan protein harian." },
        { icon: "🤢", title: "Mual & Muntah Hebat", desc: "Mempersulit asupan makanan masuk pada trimester pertama." },
        { icon: "🔄", title: "Jarak Kehamilan Dekat", desc: "Jarak < 2 tahun tubuh belum pulih mengumpulkan cadangan gizi." },
    ];

    const bahaya = [
        { icon: "😮‍💨", title: "Sangat Pucat & Lemas", desc: "Tanda anemia berat" },
        { icon: "⚖️", title: "BB Tidak Naik", desc: "Lebih dari 2 bulan kehamilan" },
        { icon: "👶", title: "Gerak Janin Berkurang", desc: "Tanda bahaya pada janin" },
    ];

    return (
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto space-y-32">

            {/* --- PENYEBAB --- */}
            <div>
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Faktor Risiko</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1A202C] mt-4">Penyebab Utama</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {penyebab.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-100 hover:-translate-y-2 transition-transform border border-slate-50">
                            <div className="w-14 h-14 bg-[#FAF3E0] rounded-2xl flex items-center justify-center text-2xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold text-[#1A202C] mb-3">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- TANDA BAHAYA (Dark Maroon Section) --- */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="bg-[#7F1D1D] rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl">

                {/* Aksen pattern estetik */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>

                <div className="text-center mb-12 relative z-10">
                    <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Waspada!</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Tanda Bahaya Medis</h2>
                    <p className="text-red-200 mt-4 max-w-xl mx-auto">Segera kunjungi faskes terdekat jika ibu hamil mengalami tanda-tanda berikut.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    {bahaya.map((item, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center hover:bg-white/20 transition-colors">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-red-200">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

        </section>
    );
}