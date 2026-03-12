"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-primary text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center">
                <span className="text-navy-primary font-bold text-sm">O</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tighter uppercase">
                Ouro <span className="text-gold-primary font-light">Imóveis</span>
              </span>
            </Link>
            <p className="text-white/40 font-light leading-relaxed mb-8">
              Excelência em negócios imobiliários de alto padrão. Sua confiança é nosso maior patrimônio.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-primary hover:text-navy-primary transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-primary hover:text-navy-primary transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-primary hover:text-navy-primary transition-all">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-8 text-gold-primary">Navegação</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/imoveis" className="hover:text-white transition-colors">Imóveis</Link></li>
              <li><Link href="/anunciar" className="hover:text-white transition-colors">Anunciar</Link></li>
              <li><Link href="/time" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-8 text-gold-primary">Legal</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">CRECI-BA</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-8 text-gold-primary">Contato</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li className="flex items-center gap-3"><Phone size={16} className="text-gold-primary" /> (74) 9999-9999</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-gold-primary" /> contato@ouroimoveis.com.br</li>
              <li className="text-sm leading-relaxed mt-4 opacity-50">Jacobina, Bahia - Brasil</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/20 text-xs font-light tracking-widest uppercase">
          © {new Date().getFullYear()} Grupo Ouro Business Company. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
