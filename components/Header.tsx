"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const isTransparentPath = pathname === "/" || pathname === "/anunciar";
  const showSolidBg = isScrolled || !isTransparentPath;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Imóveis", href: "/imoveis" },
    { name: "Anunciar", href: "/anunciar" },
    { name: "Grupo Ouro", href: "#" },
    { name: "Ouro Motors", href: "#" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 px-6 md:px-12",
          showSolidBg 
            ? "bg-navy-primary/90 backdrop-blur-md py-4 shadow-lg" 
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-[70]">
            <div className="w-10 h-10 bg-gold-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold-primary/20 shadow-lg">
              <span className="text-navy-primary font-bold text-xl">O</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tighter uppercase">
              Ouro <span className="text-gold-primary font-light">Imóveis</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-gold-primary transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contato"
              className="bg-gold-primary hover:bg-gold-dark text-navy-primary px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-gold-primary/20"
            >
              <Phone size={16} />
              Fale Conosco
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 relative z-[70] transition-transform active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={32} className="text-gold-primary" /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Modern Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[55] md:hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop blur/darken */}
        <div className="absolute inset-0 bg-navy-primary/95 backdrop-blur-xl" />
        
        {/* Menu Content */}
        <div className={cn(
          "relative h-full flex flex-col justify-center items-center p-8 transition-transform duration-500 ease-out",
          isMobileMenuOpen ? "translate-y-0" : "translate-y-8"
        )}>
          <nav className="flex flex-col items-center gap-8 w-full max-w-xs">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-white text-3xl font-serif font-light hover:text-gold-primary transition-all tracking-tight",
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="/contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "bg-gold-primary text-navy-primary w-full py-5 rounded-2xl text-center text-lg font-bold mt-8 shadow-xl shadow-gold-primary/10 transition-all",
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${navLinks.length * 100}ms` }}
            >
              Fale Conosco
            </Link>
          </nav>

          {/* Social Links / Contact Info */}
          <div className={cn(
            "mt-20 flex flex-col items-center gap-6 text-white/40 transition-all duration-700 delay-500",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}>
            <div className="flex gap-8">
              <span className="text-xs font-bold uppercase tracking-widest hover:text-gold-primary cursor-pointer">Instagram</span>
              <span className="text-xs font-bold uppercase tracking-widest hover:text-gold-primary cursor-pointer">Facebook</span>
              <span className="text-xs font-bold uppercase tracking-widest hover:text-gold-primary cursor-pointer">WhatsApp</span>
            </div>
            <p className="text-[10px] font-medium tracking-widest uppercase">© 2024 Grupo Ouro • Imobiliária</p>
          </div>
        </div>
      </div>
    </>
  );
}
