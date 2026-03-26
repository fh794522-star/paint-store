"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import Image from "next/image";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Humne images ki jagah 'color' property add kar di hai
  const products = [
    { 
      name: "Royal Crimson", 
      tag: "Best Seller", 
      color: "bg-linear-to-br from-red-600 to-rose-900", 
      rating: 5,
      price: "$45.00"
    },
    { 
      name: "Oceanic Mist", 
      tag: "New", 
      color: "bg-linear-to-br from-blue-400 to-cyan-700", 
      rating: 4,
      price: "$38.00"
    },
    { 
      name: "Desert Gold", 
      tag: "Premium", 
      color: "bg-linear-to-br from-yellow-400 to-amber-700", 
      rating: 5,
      price: "$55.00"
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-rose-400 via-fuchsia-500 to-amber-300 flex flex-col">
      
      {/* --- Hydration Safe Glitter Overlay --- */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(60)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white/40 blur-[2px] animate-pulse"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            ></span>
          ))}
        </div>
      )}

      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-20 text-center px-6 z-10 grow">
        <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
          <span className="bg-linear-to-r from-white via-pink-100 to-yellow-100 bg-clip-text text-transparent leading-tight">
            Vibrant Spaces 🎨
          </span>
        </h1>
        <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Premium paints, textures, and finishes curated for modern luxury.
        </p>
        <button className="mt-10 px-10 py-4 rounded-full bg-white text-fuchsia-600 font-bold text-lg shadow-xl hover:scale-110 transition-all cursor-pointer">
          View Catalog
        </button>
      </section>

      {/* --- Products grid (No Unsplash) --- */}
      <section className="py-20 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((prod, i) => (
            <div key={i} className="group bg-white/20 backdrop-blur-3xl border border-white/30 rounded-4xl p-8 shadow-2xl overflow-hidden transition-all duration-300 hover:border-white/50">
               
               {/* Product "Paint Bucket" Placeholder using Gradients */}
               <div className={`relative h-56 w-full rounded-2xl mb-6 flex items-center justify-center shadow-inner ${prod.color} group-hover:scale-105 transition-transform duration-500`}>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20">
                    <span className="text-4xl">🪣</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-md px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-white">
                    {prod.tag}
                  </div>
               </div>

               <div className="flex justify-between items-end px-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{prod.name}</h3>
                    <p className="text-yellow-300 mt-1">{"★".repeat(prod.rating)}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-white/60 uppercase font-bold tracking-tighter">Starting from</span>
                    <span className="text-2xl font-black text-white">{prod.price}</span>
                  </div>
               </div>
               
               <button className="mt-8 w-full py-4 rounded-2xl bg-white text-fuchsia-600 font-bold hover:bg-fuchsia-50 transition-all shadow-lg hover:shadow-white/20">
                  Select Color
               </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- Improved VIP Footer --- */}
      <footer className="relative border-t border-white/20 bg-black/40 backdrop-blur-3xl pt-16 pb-8 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
          
          <div className="col-span-1">
            <h3 className="text-2xl font-black bg-linear-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              PAINT STORE
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium quality paints for interior and exterior dream projects. 
              Bring your walls to life with our exclusive color palette.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg underline decoration-pink-500 underline-offset-8">Links</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="hover:text-pink-400 cursor-pointer transition-colors">Shop All</li>
              <li className="hover:text-pink-400 cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-pink-400 cursor-pointer transition-colors">Locations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg underline decoration-yellow-400 underline-offset-8">Support</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">Shipping Policy</li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">Returns</li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">FAQs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <p className="text-sm text-white/70 mb-4 italic"> Punjab, Pakistan</p>
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-all cursor-pointer">FB</div>
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500 transition-all cursor-pointer">IG</div>
            </div>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} ALISHBA FATIMA • BHAWANA
          </p>
        </div>
      </footer>
    </div>
  );
}