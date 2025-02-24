import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steel Am Construction",
  description:
    "Projektovanje svih vrsta čeličnih konstrukcija, statički proračuni, detalji konstrukcija , 3d modelovanje, Izvođenje čeličnih konstrukcija proizvodnja i montaža. Trenutno smo zastupljeni na projektima u Srbiji, Hrvatskoj i Sloveniji",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  keywords: ["", ""],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
