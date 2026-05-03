"use client";

import { useState } from "react";

export default function SignupForm() {
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
      <div className="bg-forest/10 p-8 text-center border-2 border-burgundy">
        <h3 className="text-2xl font-serif text-burgundy mb-2">Welcome to the Trace.</h3>
        <p className="text-sepia">You're on the list. We'll notify you when the first drop is ready.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label className="block text-sm uppercase tracking-tighter text-burgundy font-bold mb-2">Email Address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full bg-parchment border-b-2 border-sepia p-3 focus:outline-none focus:border-burgundy text-sepia"
        />
      </div>
      <div>
        <label className="block text-sm uppercase tracking-tighter text-burgundy font-bold mb-2">Roast Preference</label>
        <select
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
          className="w-full bg-parchment border-b-2 border-sepia p-3 focus:outline-none focus:border-burgundy text-sepia appearance-none"
        >
          <option>Light & Floral</option>
          <option>Balanced</option>
          <option>Dark & Nutty</option>
          <option>Surprise Me</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-burgundy text-parchment p-4 font-bold uppercase tracking-widest hover:bg-navy transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Join the Waitlist"}
      </button>
      {status === "error" && (
        <p className="text-red-700 text-center text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}