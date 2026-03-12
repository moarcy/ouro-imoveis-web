"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Search, 
  ChevronDown, 
  MapPin, 
  Home, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Users,
  Quote
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import TypingEffect from "../components/TypingEffect";

import { properties, type Property } from "./data/properties";

// Variáveis de Animação Compartilhadas (Luxo Silencioso)
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const team = [
  {
    name: "Kissia Valois",
    role: "Corretora de Imóveis",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "Matheus Sampaio",
    role: "Marketing",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Júlio Oliveira",
    role: "CEO",
    image: "/JV.png"
  },
  {
    name: "Lucas Oliveira",
    role: "Diretor Comercial",
    image: "/LV.png"
  }
];

const testimonials = [
  {
    name: "Ricardo Mendes",
    text: "Encontrei a casa perfeita para minha família com um atendimento impecável. A segurança jurídica que a Ouro Imóveis oferece é o grande diferencial.",
    role: "Empresário"
  },
  {
    name: "Cláudia Souza",
    text: "Vendi meu imóvel em tempo recorde. Eles cuidaram de toda a documentação e marketing de forma extremamente profissional.",
    role: "Investidora"
  }
];

export default function HomePage() {
  const router = useRouter();
  const [filter, setFilter] = useState({
    type: "Comprar",
    propertyType: "Apartamento",
    city: "Jacobina",
    state: "BA",
    document: "Escritura"
  });

  const [filteredFeatured, setFilteredFeatured] = useState<Property[]>(
    properties.filter(p => p.featured)
  );

  const handleSearch = () => {
    const params = new URLSearchParams({
      type: filter.type,
      propertyType: filter.propertyType,
      city: filter.city,
      state: filter.state,
      document: filter.document
    });
    router.push(`/imoveis?${params.toString()}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[850px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Home"
            fill
            priority
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-primary/60 via-transparent to-navy-primary" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center pt-20">
          {/* Title Block - Rigid height to protect the filter's vertical position */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-[180px] md:h-[220px] flex flex-col items-center justify-center text-center mb-8"
          >
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight flex items-center justify-center gap-x-2 md:gap-x-4 whitespace-nowrap">
              <span>Encontre</span>
              <TypingEffect phrases={["a oportunidade", "a casa", "o apartamento"]} />
              <span>dos seus sonhos</span>
            </h1>
            <p className="text-sm md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Especialistas em Curadoria de Imóveis de Alto Padrão. Luxo, exclusividade e segurança jurídica em Jacobina e região.
            </p>
          </motion.div>

          {/* Luxury Property Filter - Expanded and rigid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-5xl"
          >
            <div className="glass-dark p-3 rounded-3xl md:rounded-full flex flex-col md:flex-row items-center gap-2 backdrop-blur-xl border-white/20 shadow-2xl relative">
              <div className="flex w-full md:w-[220px] p-1 shrink-0 bg-white/5 rounded-full">
                <button 
                  className={cn(
                    "flex-1 py-3 rounded-full text-xs font-bold transition-all",
                    filter.type === "Comprar" ? "bg-gold-primary text-navy-primary" : "text-white hover:bg-white/10"
                  )}
                  onClick={() => setFilter({ ...filter, type: "Comprar" })}
                >
                  Comprar
                </button>
                <button 
                  className={cn(
                    "flex-1 py-3 rounded-full text-xs font-bold transition-all",
                    filter.type === "Alugar" ? "bg-gold-primary text-navy-primary" : "text-white hover:bg-white/10"
                  )}
                  onClick={() => setFilter({ ...filter, type: "Alugar" })}
                >
                  Alugar
                </button>
              </div>

              <div className="w-px h-10 bg-white/20 hidden md:block shrink-0" />

              {/* Filter grid - Multi-columns on Desktop */}
              <div className="grid grid-cols-2 md:grid-cols-4 flex-1 w-full gap-4 px-4 py-4 md:py-0">
                {/* Tipo */}
                <div className="flex flex-col items-start gap-1 min-w-0 text-left relative group cursor-pointer">
                  <span className="text-[10px] text-gold-primary font-bold uppercase tracking-widest flex items-center gap-1">
                    Tipo
                  </span>
                  <select 
                    className="bg-transparent text-white font-medium text-sm w-full outline-none appearance-none cursor-pointer"
                    value={filter.propertyType}
                    onChange={(e) => setFilter({...filter, propertyType: e.target.value as any})}
                  >
                    {["Apartamento", "Casa", "Ponto comercial", "Terreno", "Sala Comercial"].map(t => (
                      <option key={t} value={t} className="bg-navy-primary text-white">{t}</option>
                    ))}
                  </select>
                </div>

                {/* Localização (Cidade) */}
                <div className="flex flex-col items-start gap-1 min-w-0 text-left relative group cursor-pointer">
                  <span className="text-[10px] text-gold-primary font-bold uppercase tracking-widest flex items-center gap-1">
                    Cidade
                  </span>
                  <select 
                    className="bg-transparent text-white font-medium text-sm w-full outline-none appearance-none cursor-pointer"
                    value={filter.city}
                    onChange={(e) => setFilter({...filter, city: e.target.value as any})}
                  >
                    {["Jacobina", "Petrolina"].map(c => (
                      <option key={c} value={c} className="bg-navy-primary text-white">{c}</option>
                    ))}
                  </select>
                </div>

                {/* Estado */}
                <div className="flex flex-col items-start gap-1 min-w-0 text-left relative group cursor-pointer">
                  <span className="text-[10px] text-gold-primary font-bold uppercase tracking-widest flex items-center gap-1">
                    Estado
                  </span>
                  <select 
                    className="bg-transparent text-white font-medium text-sm w-full outline-none appearance-none cursor-pointer"
                    value={filter.state}
                    onChange={(e) => setFilter({...filter, state: e.target.value as any})}
                  >
                    {["BA", "PE"].map(s => (
                      <option key={s} value={s} className="bg-navy-primary text-white">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Documento */}
                <div className="flex flex-col items-start gap-1 min-w-0 text-left relative group cursor-pointer">
                  <span className="text-[10px] text-gold-primary font-bold uppercase tracking-widest flex items-center gap-1">
                    Documento
                  </span>
                  <select 
                    className="bg-transparent text-white font-medium text-sm w-full outline-none appearance-none cursor-pointer"
                    value={filter.document}
                    onChange={(e) => setFilter({...filter, document: e.target.value as any})}
                  >
                    {["Escritura", "Recibo"].map(d => (
                      <option key={d} value={d} className="bg-navy-primary text-white">{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-1 shrink-0 w-full md:w-auto">
                <button 
                  onClick={handleSearch}
                  className="bg-gold-primary hover:bg-gold-dark text-navy-primary p-4 md:p-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl w-full md:w-auto flex items-center justify-center"
                >
                  <Search size={22} className="md:size-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="featured-properties" className="bg-gray-50/30 py-24 px-6 relative border-t border-gray-100">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <span className="text-gold-dark font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
                Seleção Exclusiva
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-primary">
                {filteredFeatured.length === properties.filter(p => p.featured).length ? "Imóveis em Destaque" : "Resultados da Busca"}
              </h2>
            </div>
            <Link href="/imoveis" className="text-navy-primary font-bold flex items-center gap-2 group border-b-2 border-gold-primary pb-1 hover:text-gold-dark transition-colors">
              Ver Todos os Imóveis
              <div className="w-8 h-px bg-gold-primary group-hover:w-12 transition-all" />
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {filteredFeatured.map((property) => (
              <motion.div variants={fadeUp} key={property.id}>
                <Link 
                  href={`/imoveis/${property.slug}`} 
                  className="group cursor-pointer bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-navy-primary/80 backdrop-blur-md text-gold-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                      {property.type}
                    </div>
                  </div>
                  <div className="px-2">
                    <h3 className="text-xl font-bold text-navy-primary mb-2 group-hover:text-gold-dark transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-3 text-navy-light/60 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{property.location}</span>
                      </div>
                      <span className="w-1 h-1 bg-gray-300 rounded-full hidden md:block" />
                      <span className="font-bold text-navy-primary">{property.price}</span>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-0 mb-8 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/50">
                      <div className="flex flex-col items-center justify-center p-3 gap-1 hover:bg-white transition-colors">
                        <Bed size={18} className="text-gold-dark" />
                        <span className="text-[10px] font-bold text-navy-primary whitespace-nowrap">{property.beds} Qts</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 gap-1 border-l border-gray-100 hover:bg-white transition-colors">
                        <Bath size={18} className="text-gold-dark" />
                        <span className="text-[10px] font-bold text-navy-primary whitespace-nowrap">{property.baths} Ban</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 gap-1 border-l border-gray-100 hover:bg-white transition-colors">
                        <Car size={18} className="text-gold-dark" />
                        <span className="text-[10px] font-bold text-navy-primary whitespace-nowrap">{property.cars} Vag</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 gap-1 border-l border-gray-100 hover:bg-white transition-colors">
                        <Square size={18} className="text-gold-dark" />
                        <span className="text-[10px] font-bold text-navy-primary whitespace-nowrap">{property.area}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Ouro Imoveis Section (Thinking about properties?) */}
      <section className="bg-white py-32 px-6 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-primary mb-4">
              Pensando em Imóveis? <span className="text-gradient-gold">Pense Ouro Imóveis!</span>
            </h2>
            <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-10"
          >
            {[
              { 
                icon: <Home size={28} className="text-navy-primary group-hover:text-gold-dark transition-colors duration-500" />, 
                title: "Curadoria Exclusiva", 
                desc: "Ampla seleção focada unicamente em imóveis de alto padrão que atendem aos nossos rigorosos critérios de qualidade."
              },
              { 
                icon: <Users size={28} className="text-navy-primary group-hover:text-gold-dark transition-colors duration-500" />, 
                title: "Atendimento Tailor-Made", 
                desc: "Consultoria personalizada e discreta com especialistas dedicados a entender e superar suas expectativas."
              },
              { 
                icon: <TrendingUp size={28} className="text-navy-primary group-hover:text-gold-dark transition-colors duration-500" />, 
                title: "Expertise Executiva", 
                desc: "Inteligência de mercado para investidores e compradores exigentes, garantindo as melhores negociações."
              },
              { 
                icon: <ShieldCheck size={28} className="text-navy-primary group-hover:text-gold-dark transition-colors duration-500" />, 
                title: "Segurança Jurídica", 
                desc: "Processos transparentes e auditados, oferecendo total tranquilidade em transações de alto valor."
              }
            ].map((item, idx) => (
              <motion.div variants={fadeUp} key={idx} className="bg-white group p-10 flex flex-col items-start border border-gray-100 hover:border-gold-primary/30 transition-all duration-500">
                <div className="mb-8 p-0 bg-transparent">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-navy-primary mb-4">{item.title}</h4>
                <p className="text-sm text-navy-light/70 font-light leading-loose">{item.desc}</p>
                <div className="w-8 h-px bg-gray-200 mt-8 group-hover:w-16 group-hover:bg-gold-primary transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50/50 py-32 px-6 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="text-gold-dark font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Conheça quem faz acontecer
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-primary">
              Time <span className="text-gradient-gold">Ouro Imóveis</span>
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {team.map((member, idx) => (
              <motion.div variants={fadeUp} key={idx} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] mb-6 shadow-xl transition-all duration-700">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-bold text-navy-primary mb-1 text-center">{member.name}</h4>
                <p className="text-sm text-gold-dark font-medium text-center">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-navy-primary py-24 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 text-[20rem] font-serif leading-none select-none">"</div>
        </div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gold-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gold-primary/10 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Quote className="text-gold-primary mx-auto mb-10 opacity-50" size={60} />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left"
          >
            {testimonials.map((t, idx) => (
              <motion.div variants={fadeUp} key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-sm">
                <p className="text-xl text-white/80 font-light italic mb-8 leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <h5 className="text-white font-bold text-lg">{t.name}</h5>
                  <p className="text-gold-primary text-sm uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
