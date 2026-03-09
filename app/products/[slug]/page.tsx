"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const productName = params.slug.replace("-", " ").toUpperCase();

  return (
    <div className="min-h-screen bg-arkBg w-full overflow-hidden" ref={containerRef}>
      <Navbar />

      {/* Cinematic Introduction (Hero) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 bg-black flex items-center justify-center">
          <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] border-4 border-[#1a1a1a] rounded-full absolute mix-blend-screen opacity-50 blur-3xl shadow-[0_0_100px_#E10600]"></div>
        </motion.div>
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-display font-bold text-white uppercase tracking-widest mb-4"
          >
            {productName}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
            className="text-arkRed text-lg uppercase tracking-[0.3em] font-semibold"
          >
            Victory, Accelerated.
          </motion.p>
        </div>
      </section>

      {/* Design Philosophy & Internal Engineering */}
      <CinematicSection className="py-40 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wider">
              Calculated <span className="text-arkSilver">Excellence.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Every millimeter is engineered for speed. The aerospace-grade aluminum frame ensures rigidity under the most extreme conditions, while the internals boast a revolutionary zero-latency architecture.
            </p>
            <ul className="space-y-4 text-white uppercase font-semibold text-sm tracking-widest">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-arkRed rounded-full"></span> Sub-1ms Actuation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-arkRed rounded-full"></span> Aerospace Aluminum Core
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-arkRed rounded-full"></span> Zero-Latency Polling
              </li>
            </ul>
          </div>
          
          <div className="w-full aspect-[4/3] bg-arkGraphite border border-white/10 flex items-center justify-center relative shadow-2xl">
             <div className="w-2/3 h-2/3 border border-arkRed/20 rotate-12 transition-all hover:rotate-0 duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-arkRed/10 to-transparent"></div>
          </div>
        </div>
      </CinematicSection>

      {/* Extreme Scroll Experience: Materials and Build */}
      <section className="h-[150vh] bg-black relative flex items-center justify-center">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
           <CinematicSection className="text-center z-10 px-4">
              <h2 className="text-4xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-arkSilver/50 uppercase tracking-widest drop-shadow-lg mb-8">
                Uncompromising Build
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="p-8 border-l-2 border-arkRed/50 bg-arkGraphite/50 backdrop-blur-sm text-left">
                  <h3 className="text-xl text-white font-bold uppercase tracking-wider mb-2">PBT Doubleshot</h3>
                  <p className="text-gray-400 text-sm">Resists shine and ensures lifetime durability.</p>
                </div>
                <div className="p-8 border-l-2 border-arkRed/50 bg-arkGraphite/50 backdrop-blur-sm text-left">
                  <h3 className="text-xl text-white font-bold uppercase tracking-wider mb-2">Magnetic Wrist Rest</h3>
                  <p className="text-gray-400 text-sm">Ergonomics for endless tournaments.</p>
                </div>
                <div className="p-8 border-l-2 border-arkRed/50 bg-arkGraphite/50 backdrop-blur-sm text-left">
                  <h3 className="text-xl text-white font-bold uppercase tracking-wider mb-2">Tri-Mode Sync</h3>
                  <p className="text-gray-400 text-sm">Wireless fidelity rivaling wired speeds.</p>
                </div>
              </div>
           </CinematicSection>
        </div>
      </section>

      {/* Software Integration */}
      <CinematicSection className="py-32 px-4 bg-arkBg text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wider">
            Powered by ARK <span className="text-arkRed">Hub</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Seamlessly integrated into the overarching ARK software ecosystem. Synchronize hardware profiles to the cloud, configure intelligent macros, and adjust precise DPI tuning in real-time.
          </p>
          <div className="w-full aspect-video bg-arkGraphite border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] group-hover:-translate-x-full transition-transform duration-[2s]"></div>
            <p className="text-arkSilver uppercase font-bold tracking-widest text-xs">Software Dashboard Interface Simulation</p>
          </div>
        </div>
      </CinematicSection>

      <Footer />
    </div>
  );
}
