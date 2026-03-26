"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative mt-auto border-t border-white/20 bg-black/40 backdrop-blur-3xl pt-16 pb-8 z-10 overflow-hidden text-white">
      
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <h3 className="text-3xl font-black tracking-tighter bg-linear-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent uppercase">
            PAINT STORE 🎨
          </h3>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Premium quality paints for interior and exterior dream projects. 
            Luxury for every wall.
          </p>
          <div className="flex gap-4 pt-2 font-bold text-xs tracking-widest text-white/50">
            <span className="hover:text-pink-400 cursor-pointer">FACEBOOK</span>
            <span className="hover:text-purple-400 cursor-pointer">INSTAGRAM</span>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="font-bold mb-6 text-lg relative inline-block">
            Quick Links
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-pink-500 rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-white/80 text-sm font-medium">
            <li><Link href="/" className="hover:text-pink-400 transition-colors">Home Gallery</Link></li>
            <li><Link href="/" className="hover:text-pink-400 transition-colors">Premium Colors</Link></li>
            <li><Link href="/" className="hover:text-pink-400 transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="font-bold mb-6 text-lg relative inline-block">
            Support
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-yellow-400 rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-white/80 text-sm font-medium">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Shipping Policy</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">FAQs</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div>
          <h4 className="font-bold mb-6 text-lg relative inline-block">
            Contact
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-400 rounded-full"></span>
          </h4>
          <div className="space-y-4 text-sm text-white/80">
            <p>📍 Bhawana, Punjab, Pakistan</p>
            <p>📞 +92 320 5386165</p>
            <p>📧 fh794522@gmail.com</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} ALISHBA FATIMA • DESIGNED WITH ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;