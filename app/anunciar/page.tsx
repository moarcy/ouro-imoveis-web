"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, MessageSquare, TrendingUp, ShieldCheck, Users } from "lucide-react";

export default function AnunciarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-navy-primary">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" // Professional partner looking photo
            alt="Proprietários Grupo Ouro"
            fill
            className="object-cover object-top brightness-75 scale-x-[-1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-primary via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="text-gold-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block animate-slide-up">
              Seu Imóvel em Boas Mãos
            </span>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-8 tracking-tight animate-slide-up">
              Anuncie com Quem <br />
              <span className="text-gradient-gold">Valoriza</span> Seu Patrimônio
            </h1>
            <p className="text-lg text-white/80 mb-10 font-light leading-relaxed animate-slide-up">
              Na Ouro Imóveis, não apenas listamos propriedades; nós contamos histórias de sucesso. Unimos tecnologia de ponta, marketing de alto impacto e atendimento personalizado para garantir que seu imóvel seja vendido pelo valor que ele realmente merece.
            </p>
            <button className="bg-gold-primary hover:bg-gold-dark text-navy-primary px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3">
              <MessageSquare size={20} />
              Quero Anunciar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Why Ouro Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-navy-primary mb-6">
              Por que escolher a Ouro Imóveis?
            </h2>
            <div className="w-24 h-1 bg-gold-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gold-primary/10 rounded-2xl flex items-center justify-center text-gold-dark mb-8 group-hover:bg-gold-primary group-hover:text-white transition-colors">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy-primary mb-4">Marketing de Alto Impacto</h3>
              <p className="text-navy-light/70 leading-relaxed font-light">
                Utilizamos as ferramentas digitais mais avançadas e fotografia profissional para destacar cada detalhe do seu imóvel para o público certo.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gold-primary/10 rounded-2xl flex items-center justify-center text-gold-dark mb-8 group-hover:bg-gold-primary group-hover:text-white transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy-primary mb-4">Segurança Jurídica Total</h3>
              <p className="text-navy-light/70 leading-relaxed font-light">
                Nossa equipe jurídica cuida de toda a burocracia, garantindo que a transação seja 100% segura tanto para o vendedor quanto para o comprador.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gold-primary/10 rounded-2xl flex items-center justify-center text-gold-dark mb-8 group-hover:bg-gold-primary group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy-primary mb-4">Carteira Gerenciada</h3>
              <p className="text-navy-light/70 leading-relaxed font-light">
                Possuímos uma rede exclusiva de investidores e compradores qualificados, acelerando o processo de venda do seu imóvel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-gradient px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-8">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-xl text-white/70 mb-12 font-light">
            Não deixe seu patrimônio nas mãos de amadores. Junte-se à excelência do Grupo Ouro.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-gold-primary hover:bg-gold-dark text-navy-primary px-12 py-5 rounded-full text-lg font-bold transition-all shadow-xl">
              Falar com Especialista
            </button>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <CheckCircle2 size={16} className="text-gold-primary" />
              Avaliação Profissional Gratuita
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
