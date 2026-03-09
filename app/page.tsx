import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CinematicSection } from "@/components/ui/CinematicSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-arkBg selection:bg-arkRed selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic dark environment with subtle light movement */}
        <div className="absolute inset-0 bg-black z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-arkBg/50 to-arkBg z-10"></div>
          {/* Subtle slow moving gradient orb */}
          <div className="absolute top-[20%] left-[30%] w-96 h-96 bg-arkSilver/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[30%] w-[500px] h-[500px] bg-arkRed/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-widest text-white mb-6 drop-shadow-2xl">
            Precision<br />
            <span className="text-arkSilver">Engineered.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-sans tracking-wide max-w-2xl mx-auto">
            Where instinct converges with reality. Eliminating the delay between thought and execution.
          </p>
        </div>
      </section>

      {/* Brand Philosophy */}
      <CinematicSection className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-arkBg to-arkGraphite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-arkRed tracking-[0.2em] uppercase mb-4">Philosophy</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Instinct, Speed, <br /> and Absolute Power.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                ARK is a premium global performance technology company. We do not just build peripherals. We build a performance and computing ecosystem designed to empower competitive gamers, esports players, and creative professionals alike.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Aggression in form, perfection in function. Every input translates instantly into output, giving you total dominance in your domain.
              </p>
            </div>
            <div className="relative h-[500px] w-full bg-black/40 border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl">
              {/* Abstract technology visualization */}
              <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-arkRed to-transparent absolute"></div>
              <div className="h-1/2 w-[1px] bg-gradient-to-b from-transparent via-arkSilver to-transparent absolute"></div>
            </div>
          </div>
        </div>
      </CinematicSection>

      {/* Engineering Focus & Research */}
      <CinematicSection className="py-32 bg-black border-y border-white/5 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-sm font-semibold text-arkRed tracking-[0.2em] uppercase mb-4">Engineering</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">
            Future-Proof Architecture.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-arkGraphite inset-0 p-8 border border-white/10 text-left hover:border-arkSilver/30 transition-colors">
              <div className="w-12 h-12 border-2 border-arkRed flex items-center justify-center mb-6">
                <span className="text-white font-bold">01</span>
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Zero Latency Focus</h4>
              <p className="text-gray-400">Custom sensors, high-polling rates, and sub-1ms actuation mechanical engineering for the ultimate edge in battle.</p>
            </div>
            
            <div className="bg-arkGraphite inset-0 p-8 border border-white/10 text-left hover:border-arkSilver/30 transition-colors">
              <div className="w-12 h-12 border-2 border-arkRed flex items-center justify-center mb-6">
                <span className="text-white font-bold">02</span>
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Premium Materials</h4>
              <p className="text-gray-400">Aerospace-grade aluminum frames, double-shot PBT surfacing, and precision-machined elements that endure extreme use.</p>
            </div>
            
            <div className="bg-arkGraphite inset-0 p-8 border border-white/10 text-left hover:border-arkSilver/30 transition-colors">
              <div className="w-12 h-12 border-2 border-arkRed flex items-center justify-center mb-6">
                <span className="text-white font-bold">03</span>
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4">ARK Labs Research</h4>
              <p className="text-gray-400">Constantly testing boundaries. From conceptual cooling systems to future laptops, our labs dictate tomorrow's standards.</p>
            </div>
          </div>
        </div>
      </CinematicSection>

      {/* Product Categories (Not Specific Products) */}
      <CinematicSection className="py-32 bg-arkBg px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-semibold text-arkSilver tracking-[0.2em] uppercase mb-4">Ecosystem Overview</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">
            Enter The ARK Ecosystem
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Link href="/products" className="group relative w-full md:w-1/3 aspect-square bg-arkGraphite overflow-hidden border border-white/5 flex flex-col justify-end p-8 transition-transform hover:-translate-y-2 duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors z-0" />
              <div className="relative z-20 text-left">
                <h4 className="text-2xl font-bold text-white uppercase tracking-widest mb-2">Peripherals</h4>
                <p className="text-gray-400 text-sm mb-4">Keyboards. Mice. Audio.</p>
                <span className="inline-flex items-center text-arkRed font-bold text-xs tracking-widest group-hover:text-white transition-colors">
                  EXPLORE <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </Link>
            
            <Link href="/drivers" className="group relative w-full md:w-1/3 aspect-square bg-arkGraphite overflow-hidden border border-white/5 flex flex-col justify-end p-8 transition-transform hover:-translate-y-2 duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors z-0" />
              <div className="relative z-20 text-left">
                <h4 className="text-2xl font-bold text-white uppercase tracking-widest mb-2">Software</h4>
                <p className="text-gray-400 text-sm mb-4">Control Hub & Drivers</p>
                <span className="inline-flex items-center text-arkRed font-bold text-xs tracking-widest group-hover:text-white transition-colors">
                  EXPLORE <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </CinematicSection>

      <Footer />
    </div>
  );
}
