"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") { // Free access logic representation
      try {
        await fetch("/api/admin/login", { method: "POST" });
        router.push("/admin/dashboard");
      } catch (err) { }
    } else {
      alert("Invalid Clearance Code");
    }
  };

  return (
    <div className="min-h-screen bg-arkBg flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-8 left-8 text-2xl font-display font-bold tracking-widest text-white hover:text-arkRed transition-colors">
        ARK
      </Link>
      
      <div className="w-full max-w-md bg-[#0a0a0a] border border-arkRed/20 p-8 shadow-[0_0_30px_rgba(225,6,0,0.05)] text-center">
        <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-arkRed/10 text-arkRed mb-6">
          <Lock size={24} />
        </div>
        <h1 className="text-2xl font-display font-bold text-white uppercase tracking-widest mb-2">Central Node</h1>
        <p className="text-xs text-arkSilver font-semibold tracking-widest uppercase mb-8">Restricted Access Protocol</p>
        
        <form onSubmit={handleLogin} className="space-y-6 text-left">
          <div className="space-y-2">
            <label className="text-xs font-bold text-arkSilver uppercase tracking-widest">Clearance Code</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-arkBg border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-arkRed transition-colors text-center tracking-widest font-mono" 
              placeholder="••••••••" 
            />
          </div>
          
          <button type="submit" className="w-full bg-transparent border border-arkRed text-arkRed hover:bg-arkRed hover:text-white font-bold uppercase tracking-widest text-sm px-8 py-3 transition-colors">
            Decrypt & Enter
          </button>
        </form>
        <p className="mt-6 text-[10px] text-arkSilver/50 uppercase tracking-widest">For Demo: use admin123</p>
      </div>
    </div>
  );
}
