import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CinematicSection } from "@/components/ui/CinematicSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "core-k1",
    model: "CORE K1",
    tagline: "Sub-1ms Actuation Mechanical Perfection.",
    category: "Keyboards",
    image: "keyboard"
  },
  {
    id: "precision-m1",
    model: "PRECISION M1",
    tagline: "8000Hz Polling Rate Optical Sensor.",
    category: "Mice",
    image: "mouse"
  },
  {
    id: "genesis-pad",
    model: "GENESIS PAD",
    tagline: "Ultra-low friction CORDURA® fabric.",
    category: "Accessories",
    image: "pad"
  },
  {
    id: "audio-a1",
    model: "AUDIO A1",
    tagline: "Studio Grade Spatial Audio.",
    category: "Headsets",
    image: "audio"
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-arkBg">
      <Navbar />

      <section className="pt-32 pb-16 px-4 bg-arkGraphite border-b border-white/5 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-4">
          Hardware <span className="text-arkRed">Ecosystem</span>
        </h1>
        <p className="text-arkSilver max-w-2xl mx-auto">
          Every device engineered to completely eliminate the delay between thought and execution.
        </p>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <CinematicSection key={product.id}>
              <Link href={`/products/${product.id}`} className="group block relative w-full aspect-square bg-[#0a0a0a] border border-white/5 overflow-hidden transition-colors hover:border-arkRed">
                {/* Premium size squares pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10"></div>
                
                {/* Abstract Product Image Placement - Center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-0">
                  <div className="w-32 h-32 md:w-48 md:h-48 border border-arkSilver/10 rotate-45 group-hover:rotate-0 transition-transform duration-700 delay-100 animate-pulse bg-gradient-to-br from-arkRed/5 to-transparent shadow-2xl"></div>
                </div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex justify-between items-end">
                  <div>
                    <h2 className="text-xs font-semibold text-arkRed uppercase tracking-widest mb-1">{product.category}</h2>
                    <h3 className="text-2xl font-bold font-display text-white uppercase tracking-wider mb-2">{product.model}</h3>
                    <p className="text-xs text-arkSilver group-hover:text-gray-300 transition-colors uppercase tracking-widest">{product.tagline}</p>
                  </div>
                  <div className="text-arkGraphite group-hover:text-arkRed transition-colors duration-300 transform group-hover:translate-x-2">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </Link>
            </CinematicSection>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
