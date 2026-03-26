"use client";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-purple-900 to-pink-900 text-white overflow-hidden">
      <Navbar />

      {/* HERO */}
      <div className="pt-32 text-center px-6">
        <h1 className="text-5xl font-bold bg-linear-to-r from-pink-400 via-yellow-300 to-purple-400 text-transparent bg-clip-text animate-pulse">
          About Our Luxury Paint Store 🎨
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg opacity-80">
          We create premium paints that transform your walls into art. 
          High-quality, long-lasting and luxury colors designed for modern homes.
        </p>
      </div>

      {/* GLASS CARDS */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-105 transition duration-300 shadow-xl">
          <h2 className="text-xl font-semibold">🎨 Premium Quality</h2>
          <p className="mt-3 opacity-80">
            Our paints are made with top quality materials for smooth and rich finish.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-105 transition duration-300 shadow-xl">
          <h2 className="text-xl font-semibold">🌈 100+ Colors</h2>
          <p className="mt-3 opacity-80">
            Choose from a wide range of vibrant and elegant colors.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-105 transition duration-300 shadow-xl">
          <h2 className="text-xl font-semibold">⭐ 5 Star Ratings</h2>
          <p className="mt-3 opacity-80">
            Trusted by thousands of happy customers.
          </p>
        </div>

      </div>

      {/* STATS SECTION */}
      <div className="mt-20 flex flex-wrap justify-center gap-10 text-center">
        
        <div>
          <h1 className="text-4xl font-bold text-pink-400">500+</h1>
          <p className="opacity-70">Happy Clients</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-yellow-300">120+</h1>
          <p className="opacity-70">Paint Shades</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-purple-400">10+</h1>
          <p className="opacity-70">Years Experience</p>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-20 text-center pb-20">
        <button className="px-8 py-4 rounded-full bg-linear-to-r from-pink-500 via-yellow-400 to-purple-500 hover:scale-110 transition duration-300 shadow-lg">
          Explore Premium Collection 🚀
        </button>
      </div>
    </div>
  );
}