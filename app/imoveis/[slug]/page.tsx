"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  MapPin, Bed, Bath, Square, Car, ChevronLeft, 
  MessageCircle, Phone, Share2, CheckCircle2, ChevronRight 
} from "lucide-react";
import { properties, type Property } from "../../data/properties";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function PropertyDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<Property | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const slug = params.slug as string;
    const found = properties.find(p => p.slug === slug);
    if (found) {
      setProperty(found);
    } else {
      router.push("/imoveis");
    }
  }, [params.slug, router]);

  if (!property) return null;

  const relatedProperties = properties
    .filter(p => p.id !== property.id && p.city === property.city)
    .slice(0, 3);

  const whatsappMessage = `Olá! Vi o imóvel "${property.title}" no seu site e gostaria de mais informações. ID: ${property.id}`;
  const whatsappUrl = `https://wa.me/5574988000000?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header / Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-navy-primary font-bold hover:text-gold-dark transition-colors"
          >
            <ChevronLeft size={20} />
            Voltar
          </button>
          <div className="flex items-center gap-4">
            <button className="p-3 rounded-full hover:bg-gray-100 transition-colors text-navy-primary">
              <Share2 size={20} />
            </button>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-primary hover:bg-gold-dark text-navy-primary px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg"
            >
              <MessageCircle size={20} />
              Quero Conversar
            </a>
          </div>
        </div>
      </div>

      <main className="flex-1 pt-24 lg:pt-32 pb-24 px-6 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-8 lg:gap-12">
            
            {/* Gallery Section */}
            <div className="lg:col-span-8 flex flex-col gap-4 lg:gap-6 order-1">
              <div className="relative aspect-[4/3] lg:aspect-[16/10] bg-gray-100 rounded-[28px] lg:rounded-[40px] overflow-hidden group shadow-xl my-4 lg:my-0">
                <Image 
                  src={property.images[activeImage] || property.image} 
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Badge superimposed on image */}
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-navy-primary/80 backdrop-blur-md text-gold-primary px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest z-10 shadow-lg">
                  {property.type} • {property.propertyType}
                </div>
                
                {property.images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setActiveImage(prev => prev === 0 ? property.images.length - 1 : prev - 1)}
                      className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-navy-primary shadow-lg hover:bg-gold-primary transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={() => setActiveImage(prev => prev === property.images.length - 1 ? 0 : prev + 1)}
                      className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-navy-primary shadow-lg hover:bg-gold-primary transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {property.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                  {property.images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={cn(
                        "relative w-24 md:w-32 aspect-square rounded-2xl overflow-hidden flex-shrink-0 transition-all border-2",
                        activeImage === idx ? "border-gold-primary scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                      )}
                    >
                      <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sticky Sidebar Info */}
            <div className="lg:col-span-4 lg:row-span-2 lg:sticky lg:top-36 h-fit flex flex-col gap-6 lg:gap-8 order-2 lg:order-2">
              <div className="bg-white p-6 lg:p-10 rounded-[32px] lg:rounded-[40px] shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative">
                  <h1 className="text-2xl lg:text-4xl font-serif font-bold text-navy-primary mb-2 lg:mb-4 leading-tight">
                    {property.title}
                  </h1>
                  
                  <div className="flex items-center gap-2 text-sm lg:text-base text-navy-light/60 mb-6 lg:mb-8 border-b border-gray-100 pb-6 lg:pb-8">
                    <MapPin size={18} className="text-gold-dark" />
                    <span className="font-medium">{property.location}</span>
                  </div>

                  <div className="flex flex-col gap-1 lg:gap-2 mb-6 lg:mb-10">
                    <span className="text-[10px] lg:text-xs text-gray-400 uppercase font-bold tracking-widest">Valor do Investimento</span>
                    <span className="text-2xl lg:text-4xl font-serif font-bold text-navy-primary tracking-tight">
                      {property.price}
                    </span>
                  </div>

                  {/* Core Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 lg:gap-4 mb-8 lg:mb-10">
                    <div className="bg-gray-50 p-3 lg:p-5 rounded-2xl lg:rounded-3xl flex flex-col gap-1 lg:gap-2 items-center text-center">
                      <Bed className="text-gold-dark size-5 lg:size-6" />
                      <div>
                        <div className="text-[9px] lg:text-[10px] text-gray-400 font-bold uppercase">Quartos</div>
                        <div className="text-navy-primary font-black text-sm lg:text-base">{property.beds}</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 lg:p-5 rounded-2xl lg:rounded-3xl flex flex-col gap-1 lg:gap-2 items-center text-center">
                      <Bath className="text-gold-dark size-5 lg:size-6" />
                      <div>
                        <div className="text-[9px] lg:text-[10px] text-gray-400 font-bold uppercase">Banheiros</div>
                        <div className="text-navy-primary font-black text-sm lg:text-base">{property.baths}</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 lg:p-5 rounded-2xl lg:rounded-3xl flex flex-col gap-1 lg:gap-2 items-center text-center">
                      <Car className="text-gold-dark size-5 lg:size-6" />
                      <div>
                        <div className="text-[9px] lg:text-[10px] text-gray-400 font-bold uppercase">Garagem</div>
                        <div className="text-navy-primary font-black text-sm lg:text-base">{property.cars}</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 lg:p-5 rounded-2xl lg:rounded-3xl flex flex-col gap-1 lg:gap-2 items-center text-center">
                      <Square className="text-gold-dark size-5 lg:size-6" />
                      <div>
                        <div className="text-[9px] lg:text-[10px] text-gray-400 font-bold uppercase">Área. T.</div>
                        <div className="text-navy-primary font-black text-sm lg:text-base">{property.area}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:gap-4">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-navy-primary hover:bg-navy-light text-white py-4 lg:py-5 rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-2 lg:gap-3 transition-all shadow-xl hover:-translate-y-1 text-sm lg:text-base"
                    >
                      <MessageCircle size={20} className="lg:size-6" />
                      Agendar Visita via WhatsApp
                    </a>
                    <button className="w-full border-2 border-navy-primary/10 text-navy-primary py-4 lg:py-5 rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-2 lg:gap-3 hover:bg-gray-50 transition-all text-sm lg:text-base">
                      <Phone size={18} className="lg:size-5" />
                      Ligar para Corretor
                    </button>
                  </div>
                </div>
              </div>

              {/* Document Banner */}
              <div className="bg-navy-primary p-6 lg:p-8 rounded-[32px] lg:rounded-[40px] text-white flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-white/50 font-bold uppercase mb-1">Status Documental</div>
                  <div className="text-lg font-bold text-gold-primary tracking-tight">{property.document}</div>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-gold-primary" size={24} />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-8 order-3 lg:order-3 mt-4 lg:mt-0 flex flex-col gap-6 lg:gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-navy-primary mb-4 lg:mb-6">Descrição do Imóvel</h2>
                <div className="prose prose-navy max-w-none text-navy-light/80 leading-relaxed text-base lg:text-lg italic">
                  "{property.description}"
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-gray-50 p-6 lg:p-8 rounded-[32px] lg:rounded-[40px] border border-gray-100">
                  <h3 className="font-bold text-navy-primary mb-4 lg:mb-6 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-gold-dark" />
                    Destaques do Imóvel
                  </h3>
                  <ul className="grid grid-cols-1 gap-4">
                    {["Acabamento Premium", "Localização Privilegiada", "Documentação OK", "Pronto para morar"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-navy-light font-medium text-sm">
                        <div className="w-2 h-2 bg-gold-primary rounded-full shadow-sm" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Related Properties */}
          {relatedProperties.length > 0 && (
            <div className="mt-32">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-primary">
                  Imóveis Relacionados em <span className="text-gradient-gold">{property.city}</span>
                </h2>
                <Link href="/imoveis" className="text-gold-dark font-bold hover:underline text-sm uppercase tracking-widest">
                  Ver Coleção Completa
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {relatedProperties.map((p) => (
                  <Link 
                    href={`/imoveis/${p.slug}`} 
                    key={p.id} 
                    className="group bg-white rounded-[40px] p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden mb-6">
                      <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="px-2">
                       <h3 className="font-bold text-navy-primary mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{p.title}</h3>
                       <div className="flex items-center justify-between">
                          <span className="text-xs text-navy-light/60">{p.location}</span>
                          <span className="text-sm font-bold text-navy-primary">{p.price}</span>
                       </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
