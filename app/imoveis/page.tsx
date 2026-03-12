"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, Bed, Bath, Square, Car, ChevronDown, Filter, X, RotateCcw } from "lucide-react";
import { properties, type Property } from "../data/properties";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function PropertyCatalog() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState({
    search: "",
    type: "Todos",
    propertyType: "Todos",
    city: "Todos",
    state: "Todos",
    document: "Todos",
    beds: 0,
    baths: 0,
    cars: 0,
  });

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const type = searchParams.get("type");
    const propertyType = searchParams.get("propertyType");
    const city = searchParams.get("city");
    const state = searchParams.get("state");
    const document = searchParams.get("document");

    if (type || propertyType || city || state || document) {
      setFilter(prev => ({
        ...prev,
        type: type || "Todos",
        propertyType: propertyType || "Todos",
        city: city || "Todos",
        state: state || "Todos",
        document: document || "Todos",
      }));
    }
  }, [searchParams]);

  const clearFilters = () => {
    setFilter({
      search: "",
      type: "Todos",
      propertyType: "Todos",
      city: "Todos",
      state: "Todos",
      document: "Todos",
      beds: 0,
      baths: 0,
      cars: 0,
    });
  };

  const filteredProperties = properties.filter(p => {
    const matchesType = filter.type === "Todos" || p.type === filter.type;
    const matchesPropType = filter.propertyType === "Todos" || p.propertyType === filter.propertyType;
    const matchesCity = filter.city === "Todos" || p.city === filter.city;
    const matchesState = filter.state === "Todos" || p.state === filter.state;
    const matchesDoc = filter.document === "Todos" || p.document === filter.document;
    const matchesBeds = filter.beds === 0 || p.beds >= filter.beds;
    const matchesBaths = filter.baths === 0 || p.baths >= filter.baths;
    const matchesCars = filter.cars === 0 || p.cars >= filter.cars;

    return matchesType && matchesPropType && matchesCity && 
           matchesState && matchesDoc && matchesBeds && matchesBaths && matchesCars;
  });

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-navy-primary mb-4 text-center md:text-left">
            Catálogo de <span className="text-gradient-gold">Imóveis</span>
          </h1>
          <p className="text-navy-light/60 text-lg md:text-xl font-light text-center md:text-left">
            Explore nossa curadoria de imóveis exclusivos em Jacobina, Petrolina e região.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Primary Filters - Always Visible */}
          <div className="bg-white p-6 md:p-8 rounded-[40px] shadow-sm border border-gray-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6 items-end">
             {/* Contrato */}
             <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gold-dark uppercase tracking-widest pl-1">Contrato</label>
                <select 
                  className="w-full p-3 bg-gray-50/50 rounded-2xl border-transparent focus:border-gold-primary focus:ring-0 transition-all text-navy-primary font-bold text-sm cursor-pointer appearance-none"
                  value={filter.type}
                  onChange={(e) => setFilter({...filter, type: e.target.value})}
                >
                  {["Todos", "Comprar", "Alugar"].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>

              {/* Tipo */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gold-dark uppercase tracking-widest pl-1">Imóvel</label>
                <select 
                  className="w-full p-3 bg-gray-50/50 rounded-2xl border-transparent focus:border-gold-primary focus:ring-0 transition-all text-navy-primary font-bold text-sm cursor-pointer appearance-none"
                  value={filter.propertyType}
                  onChange={(e) => setFilter({...filter, propertyType: e.target.value})}
                >
                  {["Todos", "Apartamento", "Casa", "Ponto comercial", "Terreno", "Sala Comercial"].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>

              {/* Cidade */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gold-dark uppercase tracking-widest pl-1">Cidade</label>
                <select 
                  className="w-full p-3 bg-gray-50/50 rounded-2xl border-transparent focus:border-gold-primary focus:ring-0 transition-all text-navy-primary font-bold text-sm cursor-pointer appearance-none"
                  value={filter.city}
                  onChange={(e) => setFilter({...filter, city: e.target.value})}
                >
                  {["Todos", "Jacobina", "Petrolina"].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>

              {/* Estado */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gold-dark uppercase tracking-widest pl-1">Estado</label>
                <select 
                  className="w-full p-3 bg-gray-50/50 rounded-2xl border-transparent focus:border-gold-primary focus:ring-0 transition-all text-navy-primary font-bold text-sm cursor-pointer appearance-none"
                  value={filter.state}
                  onChange={(e) => setFilter({...filter, state: e.target.value})}
                >
                  {["Todos", "BA", "PE"].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>

              {/* Documento */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gold-dark uppercase tracking-widest pl-1">Documento</label>
                <select 
                  className="w-full p-3 bg-gray-50/50 rounded-2xl border-transparent focus:border-gold-primary focus:ring-0 transition-all text-navy-primary font-bold text-sm cursor-pointer appearance-none"
                  value={filter.document}
                  onChange={(e) => setFilter({...filter, document: e.target.value})}
                >
                  {["Todos", "Escritura", "Recibo"].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl font-bold transition-all text-sm",
                    showFilters ? "bg-gold-primary text-navy-primary" : "bg-navy-primary text-white hover:bg-navy-light"
                  )}
                >
                  {showFilters ? <X size={16} /> : <Filter size={16} />}
                  {showFilters ? "Extras" : "Mais"}
                </button>
              </div>

              <div className="flex">
                <button 
                  onClick={clearFilters}
                  className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl font-bold text-navy-light/40 hover:text-navy-primary transition-all text-[10px] uppercase tracking-widest"
                >
                  <RotateCcw size={14} />
                  Limpar
                </button>
              </div>
          </div>

          {/* Advanced Filters Panel (Optional Numeric Filters) */}
          {showFilters && (
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
              {/* Quartos */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-gold-dark uppercase tracking-widest">Quartos (Mín.)</label>
                <div className="flex gap-2">
                  {[0, 2, 3, 4].map(n => (
                    <button 
                      key={n}
                      onClick={() => setFilter({...filter, beds: n})}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-xs font-bold transition-all border",
                        filter.beds === n ? "bg-navy-primary text-white border-navy-primary" : "bg-white text-navy-primary border-gray-100 hover:border-gold-primary"
                      )}
                    >
                      {n === 0 ? "Qualquer" : n + "+"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Banheiros */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-gold-dark uppercase tracking-widest">Banheiros (Mín.)</label>
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map(n => (
                    <button 
                      key={n}
                      onClick={() => setFilter({...filter, baths: n})}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-xs font-bold transition-all border",
                        filter.baths === n ? "bg-navy-primary text-white border-navy-primary" : "bg-white text-navy-primary border-gray-100 hover:border-gold-primary"
                      )}
                    >
                      {n === 0 ? "Qualquer" : n + "+"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Garagem */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-gold-dark uppercase tracking-widest">Garagem (Mín.)</label>
                <div className="flex gap-2">
                  {[0, 1, 2, 4].map(n => (
                    <button 
                      key={n}
                      onClick={() => setFilter({...filter, cars: n})}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-xs font-bold transition-all border",
                        filter.cars === n ? "bg-navy-primary text-white border-navy-primary" : "bg-white text-navy-primary border-gray-100 hover:border-gold-primary"
                      )}
                    >
                      {n === 0 ? "Qualquer" : n + "+"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-8 px-2">
          <p className="text-navy-primary font-medium">
            Mostrando <span className="font-bold text-gradient-gold">{filteredProperties.length}</span> imóveis exclusivos
          </p>
          <div className="flex items-center gap-2 text-sm text-navy-light/60">
            Ordenar por: 
            <button className="font-bold text-navy-primary flex items-center gap-1 group">
              Novidades
              <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {filteredProperties.map((imovel) => (
              <Link 
                href={`/imoveis/${imovel.slug}`} 
                key={imovel.id} 
                className="group cursor-pointer bg-white rounded-[40px] p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-6 bg-gray-100">
                    <Image
                       src={imovel.image}
                       alt={imovel.title}
                       fill
                       className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-5 left-5 bg-navy-primary/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-gold-primary uppercase tracking-tighter shadow-lg">
                       {imovel.type}
                    </div>
                 </div>
                 <div className="px-4 pb-4">
                    <h3 className="text-xl font-bold text-navy-primary mb-2 group-hover:text-gold-dark transition-colors line-clamp-1">{imovel.title}</h3>
                    
                    <div className="flex items-center gap-3 text-navy-light/60 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{imovel.location}</span>
                      </div>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="font-bold text-navy-primary">{imovel.price}</span>
                    </div>

                    <div className="grid grid-cols-4 gap-0 mb-6 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/50">
                       <div className="flex flex-col items-center justify-center p-3 gap-1 hover:bg-white transition-colors">
                          <Bed size={16} className="text-gold-dark" />
                          <span className="text-[10px] text-navy-primary font-bold">{imovel.beds} Qts</span>
                       </div>
                       <div className="flex flex-col items-center justify-center p-3 gap-1 border-l border-gray-100 hover:bg-white transition-colors">
                          <Bath size={16} className="text-gold-dark" />
                          <span className="text-[10px] text-navy-primary font-bold">{imovel.baths} Ban</span>
                       </div>
                       <div className="flex flex-col items-center justify-center p-3 gap-1 border-l border-gray-100 hover:bg-white transition-colors">
                          <Car size={16} className="text-gold-dark" />
                          <span className="text-[10px] text-navy-primary font-bold">{imovel.cars} Vag</span>
                       </div>
                       <div className="flex flex-col items-center justify-center p-3 gap-1 border-l border-gray-100 hover:bg-white transition-colors">
                          <Square size={16} className="text-gold-dark" />
                          <span className="text-[10px] text-navy-primary font-bold">{imovel.area}</span>
                       </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-gray-400 uppercase font-bold">Doc:</span>
                        <span className="text-[10px] text-navy-primary font-bold uppercase">{imovel.document}</span>
                      </div>
                      <button className="text-gold-dark font-bold text-sm hover:underline">Ver Detalhes</button>
                    </div>
                 </div>
              </Link>
           ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="py-24 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-gray-300" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-navy-primary mb-2">Nenhum imóvel encontrado</h3>
            <p className="text-navy-light/60">Tente ajustar seus filtros para encontrar o que procura.</p>
            <button 
              onClick={clearFilters}
              className="mt-8 text-gold-dark font-bold hover:underline"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ImoveisPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando catálogo...</div>}>
      <PropertyCatalog />
    </Suspense>
  );
}
