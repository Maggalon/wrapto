"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-brand-dark/92 backdrop-blur-[12px] border-b border-brand-steel" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-extrabold text-[22px] text-text-primary tracking-tight">
          Wrapto
        </Link>
        <button className={`
          flex items-center gap-2 px-5 py-2.5 rounded-[10px] font-body text-[15px] md:text-base font-semibold tracking-[0.02em] leading-none transition-all duration-300 ease-in-out
          ${scrolled 
            ? "bg-accent-gold text-white hover:bg-accent-gold-hover hover:-translate-y-[2px] shadow-[0_4px_20px_rgba(255,158,0,0.25)] hover:shadow-[0_8px_32px_rgba(255,158,0,0.35)]" 
            : "bg-transparent border-[1.5px] border-accent-gold text-accent-gold hover:bg-accent-gold/10"}
        `}>
          Оставить заявку
        </button>
      </div>
    </header>
  );
}
