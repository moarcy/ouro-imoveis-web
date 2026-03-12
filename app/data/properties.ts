export interface Property {
  id: number;
  slug: string;
  title: string;
  location: string;
  city: "Jacobina" | "Petrolina";
  state: "BA" | "PE";
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  cars: number;
  area: string;
  image: string;
  images: string[];
  description: string;
  type: "Comprar" | "Alugar";
  propertyType: "Apartamento" | "Casa" | "Ponto comercial" | "Terreno" | "Sala Comercial";
  document: "Escritura" | "Recibo";
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: 1,
    slug: "mansao-contemporanea-itaitu",
    title: "Mansão Contemporânea em Itaitu",
    location: "Itaitu, Jacobina - BA",
    city: "Jacobina",
    state: "BA",
    price: "R$ 1.850.000,00",
    priceValue: 1850000,
    beds: 4,
    baths: 3,
    cars: 4,
    area: "450m²",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257592-4871e5f4769d?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "Uma obra-prima da arquitetura moderna em Itaitu. Esta mansão oferece o equilíbrio perfeito entre luxo e natureza, com amplos vãos livres e acabamento em alto padrão.",
    type: "Comprar",
    propertyType: "Casa",
    document: "Escritura",
    featured: true
  },
  {
    id: 2,
    slug: "apartamento-vista-panoramica",
    title: "Apartamento Vista Panorâmica",
    location: "Centro, Jacobina - BA",
    city: "Jacobina",
    state: "BA",
    price: "R$ 750.000,00",
    priceValue: 750000,
    beds: 3,
    baths: 2,
    cars: 2,
    area: "125m²",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
    ],
    description: "Viva no coração de Jacobina com uma vista de tirar o fôlego. Apartamento moderno, iluminado e planejado para quem busca conforto e praticidade urbana.",
    type: "Comprar",
    propertyType: "Apartamento",
    document: "Escritura",
    featured: true
  },
  {
    id: 3,
    slug: "chacara-recanto-do-ouro",
    title: "Chácara Recanto do Ouro",
    location: "Bananeira, Jacobina - BA",
    city: "Jacobina",
    state: "BA",
    price: "R$ 1.200.000,00",
    priceValue: 1200000,
    beds: 5,
    baths: 4,
    cars: 6,
    area: "2500m²",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2069&auto=format&fit=crop",
    ],
    description: "Seu refúgio particular. Ampla área verde, pomar e uma casa sede aconchegante. Ideal para fins de semana em família ou eventos exclusivos.",
    type: "Comprar",
    propertyType: "Casa",
    document: "Recibo",
    featured: true
  },
  {
    id: 4,
    slug: "ponto-comercial-estrategico",
    title: "Ponto Comercial Estratégico",
    location: "Centro, Petrolina - PE",
    city: "Petrolina",
    state: "PE",
    price: "R$ 5.000,00 /mês",
    priceValue: 5000,
    beds: 0,
    baths: 2,
    cars: 0,
    area: "150m²",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    ],
    description: "Localização imbatível para o seu negócio no centro de Petrolina. Grande fluxo de pedestres e vitrine ampla.",
    type: "Alugar",
    propertyType: "Ponto comercial",
    document: "Escritura"
  },
  {
    id: 5,
    slug: "terreno-loteamento-ouro",
    title: "Terreno em Condomínio Fechado",
    location: "Loteamento Ouro, Jacobina - BA",
    city: "Jacobina",
    state: "BA",
    price: "R$ 180.000,00",
    priceValue: 180000,
    beds: 0,
    baths: 0,
    cars: 0,
    area: "360m²",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
    ],
    description: "Oportunidade de construir sua casa dos sonhos em um dos melhores loteamentos de Jacobina. Segurança e tranquilidade garantidas.",
    type: "Comprar",
    propertyType: "Terreno",
    document: "Escritura"
  },
  {
    id: 6,
    slug: "sala-comercial-luxury",
    title: "Sala Comercial Luxury",
    location: "Edifício Ouro, Petrolina - PE",
    city: "Petrolina",
    state: "PE",
    price: "R$ 2.500,00 /mês",
    priceValue: 2500,
    beds: 0,
    baths: 1,
    cars: 1,
    area: "45m²",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    ],
    description: "Sala comercial pronta para uso, com acabamento refinado. Perfeita para profissionais liberais que buscam status e conforto.",
    type: "Alugar",
    propertyType: "Sala Comercial",
    document: "Escritura"
  },
  {
    id: 7,
    slug: "casa-de-campo-petrolina",
    title: "Casa de Campo em Petrolina",
    location: "Zona Norte, Petrolina - PE",
    city: "Petrolina",
    state: "PE",
    price: "R$ 450.000,00",
    priceValue: 450000,
    beds: 3,
    baths: 2,
    cars: 3,
    area: "800m²",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2013&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2013&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472233314990-64548c17991a?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "Tranquilidade e espaço em Petrolina. Casa de campo ampla com área externa generosa, ideal para lazer e descanso.",
    type: "Comprar",
    propertyType: "Casa",
    document: "Recibo"
  },
  {
    id: 8,
    slug: "apartamento-moderno-centro",
    title: "Apartamento Moderno Centro",
    location: "Centro, Petrolina - PE",
    city: "Petrolina",
    state: "PE",
    price: "R$ 1.200,00 /mês",
    priceValue: 1200,
    beds: 2,
    baths: 1,
    cars: 1,
    area: "65m²",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop",
    ],
    description: "Compacto e funcional. Apartamento recém reformado no centro de Petrolina, próximo a tudo o que você precisa.",
    type: "Alugar",
    propertyType: "Apartamento",
    document: "Escritura"
  },
  {
    id: 9,
    slug: "casa-espacosa-jacobina",
    title: "Casa Espaçosa com Piscina",
    location: "Jacobina II, Jacobina - BA",
    city: "Jacobina",
    state: "BA",
    price: "R$ 650.000,00",
    priceValue: 650000,
    beds: 3,
    baths: 2,
    cars: 2,
    area: "300m²",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "Excelente residência em Jacobina II com área de lazer completa. Piscina e churrasqueira para seus melhores momentos.",
    type: "Comprar",
    propertyType: "Casa",
    document: "Recibo"
  },
  {
    id: 10,
    slug: "terreno-industrial-amplo",
    title: "Terreno Industrial Amplo",
    location: "BR-324, Jacobina - BA",
    city: "Jacobina",
    state: "BA",
    price: "R$ 2.500.000,00",
    priceValue: 2500000,
    beds: 0,
    baths: 0,
    cars: 0,
    area: "10.000m²",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
    ],
    description: "Terreno estratégico na BR-324, topografia plana e fácil acesso para carretas. Ideal para centros de distribuição.",
    type: "Comprar",
    propertyType: "Terreno",
    document: "Escritura"
  },
  {
    id: 11,
    slug: "sala-edificio-ouro-2",
    title: "Sala no Edifício Ouro II",
    location: "Centro, Jacobina - BA",
    city: "Jacobina",
    state: "BA",
    price: "R$ 1.800,00 /mês",
    priceValue: 1800,
    beds: 0,
    baths: 1,
    cars: 1,
    area: "35m²",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "Sua empresa no melhor endereço comercial de Jacobina. Sala moderna com vista privilegiada para o centro.",
    type: "Alugar",
    propertyType: "Sala Comercial",
    document: "Escritura"
  }
];
