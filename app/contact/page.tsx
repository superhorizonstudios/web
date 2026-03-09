import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-arkBg">
      <Navbar />

      <section className="pt-32 pb-16 px-4 bg-arkGraphite border-b border-white/5 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-4">
          Contact <span className="text-arkSilver">HQ</span>
        </h1>
        <p className="text-arkSilver max-w-2xl mx-auto">
          Engage with ARK support, engineering queries, or business operations.
        </p>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="bg-[#0a0a0a] border border-white/10 p-8 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-arkSilver uppercase tracking-widest">Identification</label>
                <input type="text" className="w-full bg-arkBg border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-arkRed transition-colors" placeholder="NAME" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-arkSilver uppercase tracking-widest">Comms Link</label>
                <input type="email" className="w-full bg-arkBg border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-arkRed transition-colors" placeholder="EMAIL" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-arkSilver uppercase tracking-widest">Protocol Type</label>
              <select className="w-full bg-arkBg border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-arkRed transition-colors appearance-none">
                <option>Technical Support</option>
                <option>Hardware Replacement</option>
                <option>Partnerships</option>
                <option>Press & Media</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-arkSilver uppercase tracking-widest">Transmission Payload</label>
              <textarea rows={6} className="w-full bg-arkBg border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-arkRed transition-colors resize-none" placeholder="ENTER MESSAGE"></textarea>
            </div>
            
            <button type="button" className="w-full bg-arkRed hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors">
              Initialize Transmission
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
