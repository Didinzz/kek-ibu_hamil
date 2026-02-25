"use client";
import { ShieldCheck, CheckCircle2, XCircle } from "lucide-react";

export default function TipsMenu() {
    return (
        <section className="bg-linear-to-br from-[#1A202C] to-[#2A5C43] py-20 px-6 lg:px-12 text-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <ShieldCheck size={40} className="mx-auto text-[#D4AF37] mb-4" strokeWidth={1.5} />
                    <h2 className="font-serif text-[32px] md:text-[40px] mb-2">Tips Gizi Harian</h2>
                    <p className="text-white/60 text-[15px] font-light">Panduan agar terhindar dari KEK selama masa kehamilan.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* DOs */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-4xl">
                        <h3 className="flex items-center gap-2 text-[#4caf79] font-bold uppercase tracking-widest text-[13px] mb-6">
                            <CheckCircle2 size={18} /> Yang Dianjurkan
                        </h3>
                        <ul className="space-y-4">
                            <li className="text-[14px] text-white/80 font-light border-b border-white/10 pb-4">Makan 3x sehari + 2x selingan — pola teratur membantu penyerapan gizi optimal.</li>
                            <li className="text-[14px] text-white/80 font-light border-b border-white/10 pb-4">Minum air putih 8–10 gelas/hari untuk mencegah dehidrasi.</li>
                            <li className="text-[14px] text-white/80 font-light border-b border-white/10 pb-4">Konsumsi tablet Fe setiap malam + air jeruk agar lebih mudah diserap.</li>
                            <li className="text-[14px] text-white/80 font-light border-b border-white/10 pb-4">Perbanyak sayuran hijau gelap: bayam, kangkung, daun kelor (kaya folat & Fe).</li>
                            <li className="text-[14px] text-white/80 font-light border-b border-white/10 pb-4">Variasikan protein hewani & nabati setiap hari.</li>
                            <li className="text-[14px] text-white/80 font-light">Trimester 1: makan porsi kecil tapi sering untuk mengatasi mual.</li>
                        </ul>
                    </div>

                    {/* DONTs */}
                    <div className="bg-rose-950/20 border border-rose-900/30 p-8 rounded-4xl">
                        <h3 className="flex items-center gap-2 text-[#fc8181] font-bold uppercase tracking-widest text-[13px] mb-6">
                            <XCircle size={18} /> Yang Dihindari
                        </h3>
                        <ul className="space-y-4">
                            <li className="text-[14px] text-white/80 font-light border-b border-white/5 pb-4">Makanan mentah/setengah matang — risiko bakteri Listeria berbahaya bagi janin.</li>
                            <li className="text-[14px] text-white/80 font-light border-b border-white/5 pb-4">Ikan tinggi merkuri (hiu, tuna sirip biru, king mackerel).</li>
                            <li className="text-[14px] text-white/80 font-light border-b border-white/5 pb-4">Kafein berlebih — maksimal 200mg/hari (sekitar 1 cangkir kopi kecil).</li>
                            <li className="text-[14px] text-white/80 font-light border-b border-white/5 pb-4">Junk food & minuman manis berlebih — risiko diabetes gestasional.</li>
                            <li className="text-[14px] text-white/80 font-light border-b border-white/5 pb-4">Makanan terlalu pedas & berminyak — memicu heartburn dan mual.</li>
                            <li className="text-[14px] text-white/80 font-light">Alkohol dalam bentuk apapun — sangat berbahaya untuk perkembangan janin.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}