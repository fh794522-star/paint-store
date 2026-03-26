"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ye page refresh hone se rokta hai
    setLoading(true);
    setStatus("");

    // Form se data nikalna
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Apne banaye huye API route ko call karna
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("Success! Email sent to your inbox. ✅");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus(`Error: ${result.message || "Failed to send"} ❌`);
      }
    } catch (err) {
      setStatus("Network error! Check your API route. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-linear-to-r from-pink-200 via-purple-200 to-blue-200 flex flex-col items-center justify-start">
      <Navbar />

      {/* Background design */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute rounded-full bg-white/30 blur-xl w-20 h-20 top-10 left-20 animate-pulse"></span>
        <span className="absolute rounded-full bg-white/40 blur-2xl w-32 h-32 top-64 left-10 animate-pulse"></span>
      </div>

      {/* FORM: Note karein action aur method yahan se hata diye gaye hain */}
      <form
        onSubmit={sendEmail}
        className="relative z-10 mt-32 bg-white/70 backdrop-blur-md rounded-xl p-10 flex flex-col gap-6 shadow-lg w-full max-w-md border border-white/20"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Me</h2>

        <input type="text" name="name" placeholder="Name" className="p-3 rounded-lg border focus:ring-2 focus:ring-purple-400 bg-white/50" required />
        <input type="email" name="email" placeholder="Email" className="p-3 rounded-lg border focus:ring-2 focus:ring-purple-400 bg-white/50" required />
        <textarea name="message" placeholder="Your Message" className="p-3 rounded-lg border focus:ring-2 focus:ring-purple-400 bg-white/50 min-h-30" required />

        <button
          type="submit"
          disabled={loading}
          className="py-3 bg-linear-to-r from-pink-500 to-yellow-500 text-white rounded-lg font-bold hover:scale-105 transition active:scale-95 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className={`text-center font-medium mt-2 ${status.includes("Success") ? "text-green-600" : "text-red-600"}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}