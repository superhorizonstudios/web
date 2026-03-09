import prisma from "@/lib/db";
import Link from "next/link";
import { Activity, Shield, Users } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const visitors = await prisma.visitorLog.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const adminSessions = await prisma.adminSession.findMany({
    orderBy: { loginTime: "desc" },
    take: 20,
  });

  // Calculate unique visitors
  const uniqueVisitorIps = new Set(visitors.map(v => v.ip)).size;

  return (
    <div className="min-h-screen bg-arkBg text-white p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12 pb-6 border-b border-white/10">
          <div>
            <h1 className="text-3xl font-display font-bold uppercase tracking-widest text-white flex items-center gap-3">
              <Shield className="text-arkRed" /> ARK Admin
            </h1>
            <p className="text-arkSilver text-sm uppercase tracking-widest mt-2">Central Node Status: Online</p>
          </div>
          <Link href="/" className="px-6 py-2 border border-white/20 hover:border-arkRed hover:bg-arkRed transition-colors text-xs font-bold uppercase tracking-widest">
            Back to Site
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-arkGraphite border-l-2 border-arkRed p-6 relative overflow-hidden group">
             <div className="absolute right-0 top-0 w-32 h-32 bg-arkRed/5 rounded-full blur-2xl group-hover:bg-arkRed/10 transition-colors"></div>
             <p className="text-arkSilver text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><Activity size={14} /> Total Hits</p>
             <p className="text-4xl font-display font-bold">{visitors.length}</p>
          </div>
          <div className="bg-arkGraphite border-l-2 border-arkSilver p-6 relative overflow-hidden">
             <p className="text-arkSilver text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><Users size={14} /> Unique Nodes</p>
             <p className="text-4xl font-display font-bold">{uniqueVisitorIps}</p>
          </div>
          <div className="bg-arkGraphite border-l-2 border-arkSilver p-6 relative overflow-hidden">
             <p className="text-arkSilver text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><Shield size={14} /> Admin Auth Events</p>
             <p className="text-4xl font-display font-bold">{adminSessions.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visitor Logs */}
          <section className="bg-arkGraphite border border-white/10 rounded-sm">
            <div className="p-4 border-b border-white/10 bg-black/20">
              <h2 className="text-sm font-bold uppercase tracking-widest text-arkSilver">Visitor Signal Intercepts</h2>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-xs text-arkSilver uppercase tracking-widest">
                    <th className="p-4 border-b border-white/10">IP Address</th>
                    <th className="p-4 border-b border-white/10">Path</th>
                    <th className="p-4 border-b border-white/10">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {visitors.length === 0 ? (
                    <tr><td colSpan={3} className="p-4 text-center text-arkSilver">No signals intercepted yet.</td></tr>
                  ) : (
                    visitors.map((log) => (
                      <tr key={log.id} className="hover:bg-white/5 border-b border-white/5 last:border-0">
                        <td className="p-4 font-mono text-arkRed">{log.ip}</td>
                        <td className="p-4 text-gray-400">{log.path}</td>
                        <td className="p-4 text-gray-500">{new Date(log.createdAt).toLocaleString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Admin Logins */}
          <section className="bg-arkGraphite border border-white/10 rounded-sm">
            <div className="p-4 border-b border-white/10 bg-black/20">
              <h2 className="text-sm font-bold uppercase tracking-widest text-arkSilver">Admin Access Logs</h2>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-xs text-arkSilver uppercase tracking-widest">
                    <th className="p-4 border-b border-white/10">IP Address</th>
                    <th className="p-4 border-b border-white/10">Login Time</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {adminSessions.length === 0 ? (
                    <tr><td colSpan={2} className="p-4 text-center text-arkSilver">No admin access recorded.</td></tr>
                  ) : (
                    adminSessions.map((session) => (
                      <tr key={session.id} className="hover:bg-white/5 border-b border-white/5 last:border-0">
                        <td className="p-4 font-mono text-white">{session.ip}</td>
                        <td className="p-4 text-gray-500">{new Date(session.loginTime).toLocaleString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
