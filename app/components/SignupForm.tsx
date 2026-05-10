"use client";

import { useState } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";

export default function SignupForm({ variant = "default" }: { variant?: "default" | "hero" }) {
  const [email, setEmail] = useState("");
  const [preference, setPreference] = useState("Balanced");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://app.baget.ai/api/public/databases/5b22f2da-58f7-45af-a34c-700e5dab4373/rows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            email,
            roast_preference: preference,
            signup_date: new Date().toISOString().split("T")[0],
          },
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-forest/5 p-8 text-center border-2 border-burgundy flex flex-col items-center animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="text-burgundy mb-4 w-12 h-12" />
        <h3 className="text-2xl font-serif text-burgundy mb-2">Welcome to the Trace.</h3>
        <p className="text-sepia font-medium">You're on the list. We'll notify you when the first drop is ready.</p>
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`${isHero ? "bg-white/40 backdrop-blur-sm p-6 md:p-8 border border-burgundy/20 shadow-2xl" : "space-y-6"} max-w-lg mx-auto w-full`}
    >
      <div className={isHero ? "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" : "space-y-4 mb-6"}>
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest text-burgundy font-bold mb-1 opacity-70">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-parchment/50 border-b border-sepia/30 p-3 focus:outline-none focus:border-burgundy text-sepia placeholder:text-sepia/30 transition-colors"
          />
        </div>
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest text-burgundy font-bold mb-1 opacity-70">Preference</label>
          <select
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            className="w-full bg-parchment/50 border-b border-sepia/30 p-3 focus:outline-none focus:border-burgundy text-sepia appearance-none cursor-pointer transition-colors"
          >
            <option>Light & Floral</option>
            <option>Balanced</option>
            <option>Dark & Nutty</option>
            <option>Surprise Me</option>
          </select>
          <div className="absolute right-3 bottom-3 pointer-events-none opacity-40">
            <ChevronRight size={16} className="rotate-90" />
          </div>
        </div>
      </div>
      
      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative w-full overflow-hidden bg-burgundy text-parchment p-4 font-bold uppercase tracking-[0.2em] transition-all hover:bg-navy disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <span className="relative z-10">{status === "loading" ? "Securing Place..." : "Join the Waitlist"}</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="mt-4 text-[10px] text-sepia/40 uppercase tracking-widest text-center">
        Limit: 1,000 slots for Q3 launch. No spam, ever.
      </p>

      {status === "error" && (
        <p className="mt-4 text-red-700 text-center text-xs font-bold bg-red-50 p-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
