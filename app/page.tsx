import SignupForm from "./components/SignupForm";
import { Coffee, Globe, ShieldCheck, MapPin, BookOpen, Package, Search, ChevronRight } from "lucide-react";

async function getRoasters() {
  const res = await fetch("https://app.baget.ai/api/public/databases/49212929-3fe1-426e-9c75-77d677ea640e/rows", {
    next: { revalidate: 3600 }
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.rows || [];
}

async function getSignupCount() {
  const res = await fetch("https://app.baget.ai/api/public/databases/5b22f2da-58f7-45af-a34c-700e5dab4373/count", {
    next: { revalidate: 60 }
  });
  if (!res.ok) return 0;
  const json = await res.json();
  return json.count || 0;
}

const FEATURED_ROASTERS = [
  {
    name: "Onyx Coffee Lab",
    origin: "Arkansas, USA",
    notes: "Stone fruit, earl grey, honey",
    image: "https://firebasestorage.googleapis.com/v0/b/brand-guardian-assets/o/a-minimalist-professional-logo-for-origi.png?alt=media"
  },
  {
    name: "Akha Ama",
    origin: "Chiang Mai, Thailand",
    notes: "Dark chocolate, toasted hazelnut, star anise",
    image: "https://firebasestorage.googleapis.com/v0/b/brand-guardian-assets/o/close-up-editorial-shot-of-a-coffee-bag-.png?alt=media"
  },
  {
    name: "Azahar Coffee",
    origin: "Bogotá, Colombia",
    notes: "Red currant, brown sugar, orange zest",
    image: "https://firebasestorage.googleapis.com/v0/b/brand-guardian-assets/o/premium-3d-product-mockup-of-the-origin-.png?alt=media"
  }
];

export default async function Home() {
  const roasters = await getRoasters();
  const signupCount = await getSignupCount();

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-parchment/80 backdrop-blur-md border-b border-sepia/10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-burgundy flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-parchment rotate-45" />
            </div>
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-burgundy">ORIGIN TRACE</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-sepia">
            <a href="#how-it-works" className="hover:text-burgundy transition-colors">Process</a>
            <a href="#featured" className="hover:text-burgundy transition-colors">Partners</a>
            <a href="#journal" className="hover:text-burgundy transition-colors">Journal</a>
            <a href="#join" className="group flex items-center gap-2 text-burgundy border-b border-burgundy/30 pb-1">
              Join Waitlist <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <a href="#join" className="md:hidden text-[10px] uppercase tracking-widest font-bold text-burgundy">Join</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-burgundy/5 border border-burgundy/10 text-burgundy text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <span className="w-2 h-2 bg-burgundy animate-pulse" /> Limited Q3 Launch Slots
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-burgundy leading-[0.9] mb-8 tracking-tighter">
              Coffee you can <span className="italic">trace</span> to the picker's wage.
            </h1>
            <p className="text-xl md:text-2xl text-sepia/80 mb-12 max-w-xl leading-relaxed font-serif italic">
              Be first to taste the world's best small-batch coffee. Directly from the source, delivered at peak flavor.
            </p>
            
            <div className="flex items-center gap-6 mb-8 p-4 bg-navy/5 border-l-4 border-burgundy">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-parchment bg-sepia/20 flex items-center justify-center text-[10px] text-parchment font-bold">
                    {i === 4 ? "+" : <Coffee size={14} />}
                  </div>
                ))}
              </div>
              <div>
                <span className="text-burgundy font-bold text-xl block leading-none">{842 + signupCount}</span>
                <span className="text-sepia/50 text-[10px] uppercase tracking-widest font-bold">Connoisseurs on the trace</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <SignupForm variant="hero" />
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 aspect-[4/5] bg-burgundy shadow-2xl p-4 md:p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="text-parchment/40 text-[10px] uppercase tracking-[0.3em] font-bold vertical-text">
                  BATCH NO. 001 / PRE-ORDER
                </div>
                <div className="w-16 h-16 border border-parchment/20 flex items-center justify-center">
                  <Globe className="text-parchment/30" size={32} />
                </div>
              </div>
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/brand-guardian-assets/o/premium-3d-product-mockup-of-the-origin-.png?alt=media" 
                alt="Origin Trace Box" 
                className="w-full object-contain -my-8 drop-shadow-2xl"
              />
              <div className="border-t border-parchment/20 pt-6">
                <div className="text-[10px] uppercase tracking-widest text-parchment/60 mb-2">Current Region</div>
                <div className="text-2xl font-serif text-parchment italic">Antioquia, Colombia</div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-12 -right-12 w-full h-full border-2 border-burgundy/10 -z-0" />
          </div>

          <div className="lg:hidden w-full">
            <SignupForm variant="hero" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-navy text-parchment">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-20 italic">Freshness Without Compromise</h2>
          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[1px] bg-parchment/10" />
            
            <div className="flex flex-col items-center gap-6 relative">
              <div className="w-24 h-24 bg-burgundy border-4 border-navy rounded-full flex items-center justify-center z-10">
                <Search size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif">1. Curated Selection</h3>
                <p className="text-parchment/60 text-sm leading-relaxed max-w-xs mx-auto">
                  Our experts source rare microlots (84+ SCA score) from independent global artisans.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 relative">
              <div className="w-24 h-24 bg-burgundy border-4 border-navy rounded-full flex items-center justify-center z-10">
                <Package size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif">2. Directly Delivered</h3>
                <p className="text-parchment/60 text-sm leading-relaxed max-w-xs mx-auto">
                  Roasted at origin and shipped to your door within 72 hours via express courier.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 relative">
              <div className="w-24 h-24 bg-burgundy border-4 border-navy rounded-full flex items-center justify-center z-10">
                <MapPin size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif">3. Trace the Story</h3>
                <p className="text-parchment/60 text-sm leading-relaxed max-w-xs mx-auto">
                  Scan the "Trace Feed" to see the picker's wage, the farmer's face, and exact roast data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Roasters Section */}
      <section id="featured" className="py-32 bg-parchment">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="text-burgundy text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The World Tour Partners</div>
              <h2 className="text-5xl md:text-7xl font-serif text-burgundy tracking-tighter">Artisans of the Trace.</h2>
            </div>
            <p className="text-sepia/70 text-lg md:text-right max-w-sm italic">
              We partner with roasters who double as social enterprises, keeping value where it belongs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-burgundy/10">
            {FEATURED_ROASTERS.map((roaster, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-white border-burgundy/10 md:border-r last:border-r-0">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={roaster.image} 
                    alt={roaster.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-burgundy/40 transition-colors" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-burgundy text-[10px] font-bold uppercase tracking-widest mb-4">
                    <MapPin size={12} />
                    {roaster.origin}
                  </div>
                  <h3 className="text-3xl font-serif text-burgundy mb-4">{roaster.name}</h3>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {roaster.notes.split(", ").map(note => (
                        <span key={note} className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 bg-burgundy/5 text-burgundy/70">
                          {note}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-sepia/60 leading-relaxed">
                      Sourced direct from local cooperatives with verified labor standards.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section id="journal" className="py-24 bg-sepia/5 border-y border-sepia/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-burgundy mb-4">The Connoisseur's Journal</h2>
            <p className="text-sepia/70 max-w-xl mx-auto italic">Deep dives into the science, ethics, and craft of specialty coffee.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-parchment p-8 border border-burgundy/20 hover:shadow-2xl transition-all group">
              <div className="text-burgundy/30 text-xs font-bold mb-4 uppercase tracking-widest">Article 01</div>
              <h3 className="text-xl font-serif text-burgundy mb-4 group-hover:italic transition-all">Direct Trade vs Fair Trade: The Truth</h3>
              <p className="text-sm text-sepia/80 mb-8 leading-relaxed">Why we built a ladder, not just a safety net, for global coffee farmers.</p>
              <a href="/guides/ethical-sourcing.md" className="text-burgundy font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                Read Narrative <ChevronRight size={14} />
              </a>
            </div>
            <div className="bg-parchment p-8 border border-burgundy/20 hover:shadow-2xl transition-all group">
              <div className="text-burgundy/30 text-xs font-bold mb-4 uppercase tracking-widest">Article 02</div>
              <h3 className="text-xl font-serif text-burgundy mb-4 group-hover:italic transition-all">The Science of 72-Hour Freshness</h3>
              <p className="text-sm text-sepia/80 mb-8 leading-relaxed">Degassing, oxidation, and the chemical window of peak aromatics.</p>
              <a href="/guides/freshness-gap.md" className="text-burgundy font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                Read Technical <ChevronRight size={14} />
              </a>
            </div>
            <div className="bg-parchment p-8 border border-burgundy/20 hover:shadow-2xl transition-all group">
              <div className="text-burgundy/30 text-xs font-bold mb-4 uppercase tracking-widest">Article 03</div>
              <h3 className="text-xl font-serif text-burgundy mb-4 group-hover:italic transition-all">Navigating the World's Microlots</h3>
              <p className="text-sm text-sepia/80 mb-8 leading-relaxed">How to decode SCA scores, processing methods, and regional terroir.</p>
              <a href="/guides/microlot-guide.md" className="text-burgundy font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                Read Guide <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Section (Full List) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-serif text-burgundy mb-2">The Global Collective</h2>
          <p className="text-sm text-sepia/60">Our growing network of 15+ independent roasting partners.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roasters.map((r: any) => (
            <div key={r.id} className="p-6 border border-sepia/10 hover:bg-white hover:border-burgundy/30 transition-all">
              <div className="text-[9px] uppercase tracking-widest font-bold text-burgundy/50 mb-2">{r.data.region}</div>
              <h3 className="text-lg font-serif text-burgundy">{r.data.name}</h3>
              <div className="mt-2 text-[8px] uppercase tracking-widest font-bold text-navy bg-navy/5 px-2 py-1 inline-block">
                {r.data.ethical_focus}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="join" className="bg-burgundy py-32 relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1 border border-parchment/20 text-parchment/80 text-[10px] font-bold uppercase tracking-[0.4em] mb-12">
            Priority Enrollment Open
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-parchment mb-8 tracking-tighter">Secure your place.</h2>
          <p className="text-parchment/70 mb-16 text-xl max-w-xl mx-auto font-serif italic">
            Founding memberships are limited to 1,000 connoisseurs. Join the trace for priority access to our Q3 launch.
          </p>
          <div className="bg-parchment p-2 md:p-12 shadow-2xl inline-block w-full max-w-2xl">
            <SignupForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 max-w-7xl mx-auto border-t border-sepia/10 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3 grayscale opacity-60">
          <div className="w-8 h-8 bg-burgundy flex items-center justify-center">
            <div className="w-4 h-4 border border-parchment rotate-45" />
          </div>
          <span className="text-lg font-serif font-bold tracking-tighter text-burgundy">ORIGIN TRACE</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-sepia/60">
          <a href="#" className="hover:text-burgundy transition-colors">Privacy</a>
          <a href="#" className="hover:text-burgundy transition-colors">Terms</a>
          <a href="#" className="hover:text-burgundy transition-colors">Shipping</a>
          <a href="mailto:hello@origintrace.com" className="hover:text-burgundy transition-colors">Support</a>
        </div>

        <div className="text-sepia/40 text-[9px] uppercase tracking-[0.3em] font-bold">
          &copy; 2026 Origin Trace. Roasted at Origin.
        </div>
      </footer>
    </main>
  );
}
