"use client";

import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-white px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20 px-4">
           <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-navy-primary mb-6">
             Fale <span className="text-gradient-gold">Conosco</span>
           </h1>
           <p className="text-lg text-navy-light/60 font-light max-w-2xl mx-auto">
             Seja para comprar, vender ou investir, nossa equipe está pronta para oferecer o melhor atendimento personalizado da região.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div className="space-y-12">
              <div className="flex gap-6">
                 <div className="w-14 h-14 bg-gold-primary/10 rounded-2xl flex items-center justify-center text-gold-dark shrink-0">
                    <Phone size={24} />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-navy-primary mb-2">Telefone</h4>
                    <p className="text-navy-light/60">(74) 9999-9999</p>
                 </div>
              </div>
              <div className="flex gap-6">
                 <div className="w-14 h-14 bg-gold-primary/10 rounded-2xl flex items-center justify-center text-gold-dark shrink-0">
                    <Mail size={24} />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-navy-primary mb-2">E-mail</h4>
                    <p className="text-navy-light/60">contato@ouroimoveis.com.br</p>
                 </div>
              </div>
              <div className="flex gap-6">
                 <div className="w-14 h-14 bg-gold-primary/10 rounded-2xl flex items-center justify-center text-gold-dark shrink-0">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-navy-primary mb-2">Endereço</h4>
                    <p className="text-navy-light/60">Jacobina, Bahia - Brasil</p>
                 </div>
              </div>
           </div>

           <div className="bg-navy-primary p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <form className="space-y-6 relative z-10">
                 <div>
                    <input type="text" placeholder="Seu Nome Completo" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors" />
                 </div>
                 <div>
                    <input type="email" placeholder="Seu E-mail" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors" />
                 </div>
                 <div>
                    <textarea rows={4} placeholder="Como podemos ajudar?" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors resize-none"></textarea>
                 </div>
                 <button className="w-full bg-gold-primary hover:bg-gold-dark text-navy-primary py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                    <Send size={18} />
                    Enviar Mensagem
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
}
