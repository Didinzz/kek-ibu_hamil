import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

// 1. Font untuk Judul & Elemen Tegas (Elegan, Modern, Mewah)
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// 2. Font untuk Paragraf & Teks Panjang (Sangat mudah dibaca, Bersih)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cermat - Cegah KEK Ibu Hamil",
  description: "Website pendamping gizi untuk ibu hamil mencegah Kekurangan Energi Kronis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${jakarta.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}