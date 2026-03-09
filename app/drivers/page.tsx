import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CinematicSection } from "@/components/ui/CinematicSection";

export default function DriversPage() {
  return (
    <div className="min-h-screen bg-arkBg">
      <Navbar />

      <section className="pt-32 pb-16 px-4 bg-arkGraphite border-b border-white/5 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-4">
          Software <span className="text-arkRed">Ecosystem</span>
        </h1>
        <p className="text-arkSilver max-w-2xl mx-auto">
          One unified hub for absolute control. Connect your devices, tune your macros, and push your hardware to the bleeding edge.
        </p>
      </section>

      <CinematicSection className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle grid pattern for tech feel */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-4">ARK Control Hub Engine</h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Download the latest drivers to ensure your hardware maintains zero latency and maximum stability. The ARK Control Hub replaces cluttered, individual device software with a single, aggressive, and highly optimized command center.
              </p>
              
              <div className="space-y-4">
                <button className="w-full md:w-auto bg-arkRed hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors border border-arkRed">
                  Download For Windows (64-bit)
                </button>
                <div className="flex items-center gap-4 text-xs text-arkSilver font-semibold tracking-widest uppercase">
                  <span>Version 1.0.4</span>
                  <span>|</span>
                  <span>Size 145 MB</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 aspect-square border-2 border-arkRed/20 bg-black flex items-center justify-center shadow-[0_0_50px_rgba(225,6,0,0.1)]">
               <div className="w-16 h-16 border-t-2 border-r-2 border-arkRed rotate-45 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
           <div className="p-8 border border-white/5 bg-arkGraphite">
              <h3 className="text-white font-bold uppercase tracking-widest mb-2">Cloud Synced Profiles</h3>
              <p className="text-sm text-gray-400">Settings backed up universally. Log into any ARK device worldwide and your exact polling, DPI, and lighting states load instantly.</p>
           </div>
           <div className="p-8 border border-white/5 bg-arkGraphite">
              <h3 className="text-white font-bold uppercase tracking-widest mb-2">Firmware Matrix</h3>
              <p className="text-sm text-gray-400">Automatic, silent updates ensuring your hardware algorithm is utilizing our most recent structural polling research.</p>
           </div>
        </div>
      </CinematicSection>

      <Footer />
    </div>
  );
}
