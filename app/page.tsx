import SignupForm from "./components/SignupForm";
import { Coffee, Globe, ShieldCheck, MapPin, BookOpen } from "lucide-react";

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

export default async function Home() {
  const roasters = await getRoasters();
  const signupCount = await getSignupCount();

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="p-6 border-b border-sepia/20 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-burgundy rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-parchment rounded-full" />
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-burgundy">ORIGIN TRACE</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-bold text-sepia">
          <a href="#mission" className="hover:text-burgundy transition-colors">Mission</a>
          <a href="#roasters" className="hover:text-burgundy transition-colors">Roasters</a>
          <a href="#guides" className="hover:text-burgundy transition-colors">Guides</a>
          <a href="#join" className="hover:text-burgundy transition-colors">Join</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-burgundy/10 text-burgundy text-xs font-bold uppercase tracking-widest mb-6">
            Establishing the New Global Standard
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-burgundy leading-tight mb-8">
            Coffee you can <span className="italic">trace</span> to the picker's wage.
          </h1>
          <p className="text-xl text-sepia/80 mb-10 max-w-lg leading-relaxed">
            Directly from the source. Roasted at origin. Delivering curated microlots from independent global roasters to your door within 72 hours of roasting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#join" className="btn-primary text-center">Get Early Access</a>
            <div className="flex items-center gap-3 px-4">
              <span className="text-burgundy font-bold text-lg">{142 + signupCount}</span>
              <span className="text-sepia/60 text-sm uppercase tracking-widest">Connoisseurs waiting</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-navy/5 overflow-hidden border-2 border-burgundy p-2">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/brand-guardian-assets/o/premium-3d-product-mockup-of-the-origin-.png?alt=media" 
              alt="Origin Trace Subscription Box" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-24 bg-sepia/5 border-y border-sepia/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-serif text-burgundy mb-4">The Connoisseur's Journal</h2>
            <p className="text-sepia/70 max-w-xl mx-auto">Deep dives into the science, ethics, and craft of specialty coffee.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-parchment p-8 border border-burgundy/20 hover:shadow-xl transition-all">
              <h3 className="text-xl font-serif text-burgundy mb-4">The Truth About Sourcing</h3>
              <p className="text-sm text-sepia/80 mb-6">Why "Direct Trade" is the only path to radical transparency and farmer equity.</p>
              <a href="/guides/ethical-sourcing.md" className="text-burgundy font-bold uppercase text-xs tracking-widest hover:underline flex items-center gap-2">
                Read Guide <BookOpen size={14} />
              </a>
            </div>
            <div className="bg-parchment p-8 border border-burgundy/20 hover:shadow-xl transition-all">
              <h3 className="text-xl font-serif text-burgundy mb-4">The Science of Freshness</h3>
              <p className="text-sm text-sepia/80 mb-6">Understanding the "Freshness Gap" and why roasting at origin changes everything.</p>
              <a href="/guides/freshness-gap.md" className="text-burgundy font-bold uppercase text-xs tracking-widest hover:underline flex items-center gap-2">
                Read Guide <BookOpen size={14} />
              </a>
            </div>
            <div className="bg-parchment p-8 border border-burgundy/20 hover:shadow-xl transition-all">
              <h3 className="text-xl font-serif text-burgundy mb-4">Navigating Microlots</h3>
              <p className="text-sm text-sepia/80 mb-6">A guide to SCA scores, processing methods, and global flavor profiles.</p>
              <a href="/guides/microlot-guide.md" className="text-burgundy font-bold uppercase text-xs tracking-widest hover:underline flex items-center gap-2">
                Read Guide <BookOpen size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features section (keeping existing) */}
      <section id="mission" className="bg-navy text-parchment py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-16 text-center italic">The Origin-First Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 border border-parchment/30 flex items-center justify-center text-burgundy bg-parchment">
                <Coffee size={24} />
              </div>
              <h3 className="text-2xl font-serif">Roasted at Origin</h3>
              <p className="text-parchment/70 leading-relaxed">
                We eliminate the "Freshness Gap." Why roast in a warehouse 4,000 miles away? We roast where the beans are grown, retaining peak flavor and value.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 border border-parchment/30 flex items-center justify-center text-burgundy bg-parchment">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-serif">Radical Transparency</h3>
              <p className="text-parchment/70 leading-relaxed">
                Access the "Trace Feed" for every batch. See the exact FOB price paid to the farmer, the cupping score, and the name of the roaster.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 border border-parchment/30 flex items-center justify-center text-burgundy bg-parchment">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-serif">World Tour Selection</h3>
              <p className="text-parchment/70 leading-relaxed">
                Every month, a new region. From the Thai highlands to the Colombian Andes, discover microlots unavailable anywhere else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roaster Spotlight */}
      <section id="roasters" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-burgundy mb-4 uppercase tracking-tighter">The Independent Collective</h2>
          <p className="text-sepia/70 max-w-2xl">We partner with the world's most ethical artisans. These aren't just roasters; they are social enterprises changing the coffee landscape.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roasters.map((r: any) => (
            <div key={r.id} className="border-2 border-sepia/10 p-8 hover:border-burgundy transition-colors group">
              <div className="flex items-center gap-2 text-burgundy text-xs font-bold uppercase tracking-widest mb-4">
                <MapPin size={14} />
                {r.data.region}
              </div>
              <h3 className="text-2xl font-serif text-burgundy mb-4">{r.data.name}</h3>
              <p className="text-sm text-sepia/80 mb-6 leading-relaxed italic border-l-2 border-burgundy pl-4">
                "{r.data.description}"
              </p>
              <div className="text-[10px] uppercase tracking-widest font-bold text-navy bg-navy/5 px-2 py-1 inline-block">
                Focus: {r.data.ethical_focus}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist Call to Action */}
      <section id="join" className="bg-parchment border-y-2 border-burgundy py-24 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-serif text-burgundy mb-8">Secure your place in the 2026 World Tour</h2>
          <p className="text-sepia mb-12 text-lg">
            Our pilot is limited to 1,000 founding members. Join the waitlist for priority access to our Q3 launch.
          </p>
          <SignupForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-sepia/20 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sepia/60 text-xs uppercase tracking-widest font-bold">
          &copy; 2026 Origin Trace. All Rights Reserved.
        </div>
        <div className="flex gap-8 text-xs uppercase tracking-widest font-bold text-sepia">
          <a href="#" className="hover:text-burgundy">Privacy Policy</a>
          <a href="#" className="hover:text-burgundy">Terms of Service</a>
          <a href="mailto:hello@origintrace.com" className="hover:text-burgundy">Contact</a>
        </div>
      </footer>
    </main>
  );
}
