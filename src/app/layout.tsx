import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 1. Footer import karein

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alishba Fatima | Portfolio",
  description: "Modern Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // h-full yahan zaroori hai layout ko stretch karne ke liye
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <Navbar />
        
        {/* 2. 'flex-grow' footer ko niche dhakel dega agar content kam ho */}
        <main className="grow">
          {children}
        </main>

        <Footer /> {/* 3. Footer ko yahan place karein */}
      </body>
    </html>
  );
}