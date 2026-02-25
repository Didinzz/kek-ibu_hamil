"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Beranda from "./Components/slides/Beranda";
import MateriKEK from "./Components/slides/MateriKEK";
import MenuMingguan from "./Components/slides/MenuMingguan";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState("beranda");

  const renderSlide = () => {
    switch (activeSlide) {
      case "beranda":
        return <Beranda key="beranda" setActiveSlide={setActiveSlide} />;
      case "materi_kek":
        return <MateriKEK key="materi" />
      case "menu_mingguan":
        return <MenuMingguan key="menu" />;
      default:
        return (
          <div key="other" className="flex min-h-screen items-center justify-center text-3xl font-light text-slate-400">
            {activeSlide.replace('_', ' ').toUpperCase()}
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen w-full bg-white flex flex-col font-sans text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 relative">

      {/* Navbar Minimalis yang Melayang */}
      <Navbar activeSlide={activeSlide} setActiveSlide={setActiveSlide} />

      {/* Area Konten Utama */}
      <div className="w-full relative">
        <AnimatePresence mode="wait">
          {renderSlide()}
        </AnimatePresence>
      </div>
    </main>
  );
}