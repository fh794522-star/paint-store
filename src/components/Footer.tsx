"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react'; // Agar lucide-react install hai

const Footer = () => {
  return (
    <footer className="relative mt-auto border-t border-white/20 bg-black/40 backdrop-blur-3xl pt-16 pb-8 z-10 overflow-hidden">
      
      {/* Decorative Glow Background */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
        
        {/* Column 1: Brand Identity */}
        <div className="space-y-4">
          <h3 className="text-3xl font-black tracking-tighter bg-linear-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
            PAINT STORE 🎨
          </h3>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Bringing colors to your dreams with premium, eco-friendly, and high-gloss finishes. Luxury for every wall.
          </p>
          <div className="flex gap-4 pt-2">
            <div className="p-2 rounded-full bg-white/10 hover:bg-pink-500 transition-all cursor-pointer border border-white/10">
              <Facebook size={18} />
            </div>
            <div className="p-2 rounded-full bg-white/10 hover:bg-purple-500 transition-all cursor-pointer border border-white/10">
              <Instagram size={18} />
            </div>
            <div className="p-2 rounded-full bg-white/10 hover:bg-blue-400 transition-all cursor-pointer border border-white/10">
              <Twitter size={18} />
            </div>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div>
          <h4 className="font-bold mb-6 text-lg relative inline-block">
            Quick Links
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-pink-500 rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-white/80 text-sm font-medium">
            <li><Link href="/" className="hover:text-pink-400 transition-colors">Home Gallery</Link></li>
            <li><Link href="/products" className="hover:text-pink-400 transition-colors">Premium Colors</Link></li>
            <li><Link href="/about" className="hover:text-pink-400 transition-colors">Our Heritage</Link></li>
            <li><Link href="/contact" className="hover:text-pink-400 transition-colors">Consult an Expert</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Care */}
        <div>
          <h4 className="font-bold mb-6 text-lg relative inline-block">
            Support
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-yellow-400 rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-white/80 text-sm font-medium">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Shipping Info</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Refund Policy</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Color Guide</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="font-bold mb-6 text-lg relative inline-block">
            Visit Us
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-400 rounded-full"></span>
          </h4>
          <div className="space-y-4 text-sm text-white/80">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-pink-400 shrink-0" />
              <span>,Bhawana,<br />Punjab, Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-yellow-400" />
              <span>+92 320 5386165</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <span>fh79457223@gmail.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/40 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Alishba Fatima. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-white/30 uppercase tracking-widest font-bold">
            <span>Next.js 15</span>
            <span>Tailwind CSS</span>
            <span>Vercel Deployed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;