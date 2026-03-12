"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Júlio Oliveira",
    role: "CEO & Fundador",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Lucas Oliveira",
    role: "Diretor Executivo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Kissia Valois",
    role: "Corretora Especialista",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Matheus Sampaio",
    role: "Marketing & Estratégia",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
  }
];

export default function TimePage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-white px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-gold-dark font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Nossa Liderança
          </span>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-navy-primary mb-8 tracking-tight">
            Conheça o Time <br />
            <span className="text-gradient-gold">Ouro Imóveis</span>
          </h1>
          <p className="text-lg text-navy-light/70 font-light leading-relaxed">
            Unimos anos de experiência de mercado a uma visão inovadora para oferecer a melhor consultoria imobiliária da região. Profissionais comprometidos com seu sonho e seu investimento.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl mb-8 shadow-2xl bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-navy-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold-primary hover:text-navy-primary transition-all">
                    <Instagram size={20} />
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold-primary hover:text-navy-primary transition-all">
                    <Linkedin size={20} />
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold-primary hover:text-navy-primary transition-all">
                    <Mail size={20} />
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-navy-primary mb-1 group-hover:text-gold-dark transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold-dark font-medium uppercase text-xs tracking-widest">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
