import type { Metadata } from "next";
import { Tenor_Sans, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tenor",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  title: "Ouro Imóveis | Excelência em Negócios Imobiliários",
  description: "Encontre os melhores imóveis de luxo e oportunidades exclusivas com a Ouro Imóveis. Sua imobiliária de confiança em Jacobina e região.",
  keywords: ["imobiliária", "luxo", "Jacobina", "casa", "apartamento", "venda", "aluguel", "Ouro Imóveis"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${tenor.variable} ${bodoni.variable}`}>
      <body className="font-sans text-navy-primary antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
