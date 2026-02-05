import Link from "next/link"

export default function BookingSaaSPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#E0E7FF] dark:selection:bg-indigo-900">
        {/* Header / Nav */}
       <header className="flex flex-row justify-between items-center mb-16 sm:mb-24 sticky top-0 z-50 bg-background/80 backdrop-blur-md py-4 px-6 md:px-12">
          <div className="flex items-center gap-2">
             <Link href="/" className="font-bold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Paul (Xiande) Wen</Link>
          </div>
          <nav>
            <ul className="flex gap-4 sm:gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/#work" className="hover:text-black dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                  Portfolio
                </Link>
              </li>
              <li>
                <a href="https://xiandew.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-36">
        
        {/* Title Section */}
        <div className="mb-12">
           <Link href="/#work" className="inline-flex items-center text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white mb-6 transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Work
          </Link>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-gray-900 dark:text-white mb-6">
            OpenBooking
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed">
            Enterprise-grade appointment booking platform with multi-tenant architecture.
          </p>
        </div>

        {/* Hero Image / Block */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-lg sm:rounded-3xl h-[28rem] sm:h-auto sm:aspect-video md:aspect-[2.4/1] w-full mb-16 flex items-center justify-center border border-gray-100 dark:border-white/10 relative overflow-hidden group">
             
             {/* Two-Tier Architecture Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
                 
                 {/* Mobile Optimized View (Vertical Stack) */}
                 <div className="flex sm:hidden flex-col items-center justify-center gap-6 relative z-10 w-full h-full px-6 py-8">
                     {/* Tier 1: Frontend */}
                     <div className="w-full max-w-[280px] bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900/30 p-5 flex items-center gap-4 shadow-xl shadow-blue-500/10 relative">
                         {/* Decorative glowing dot */}
                         <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                         
                         <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-xl border border-blue-100 dark:border-blue-800">
                             🖥️
                         </div>
                         <div>
                             <div className="text-base font-bold text-gray-900 dark:text-white">Frontend Tier</div>
                             <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">Next.js • Vercel Edge</div>
                         </div>
                     </div>

                     {/* Connection Pipe */}
                     <div className="flex flex-col items-center justify-center h-16 w-full relative">
                         <div className="absolute w-px h-full bg-gradient-to-b from-blue-200 via-gray-300 to-emerald-200 dark:from-blue-900 dark:via-gray-700 dark:to-emerald-900"></div>
                         <div className="z-10 bg-white dark:bg-gray-900 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">JSON API</div>
                         </div>
                     </div>

                     {/* Tier 2: Backend */}
                     <div className="w-full max-w-[280px] bg-white dark:bg-gray-800 rounded-xl border border-emerald-100 dark:border-emerald-900/30 p-5 flex items-center gap-4 shadow-xl shadow-emerald-500/10 relative">
                         <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-75"></div>
                         
                         <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-xl border border-emerald-100 dark:border-emerald-800">
                             ⚙️
                         </div>
                         <div>
                             <div className="text-base font-bold text-gray-900 dark:text-white">Backend Tier</div>
                             <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">Workers • D1 SQL</div>
                         </div>
                     </div>
                 </div>

                 {/* Desktop Optimized View (Horizontal Layout) */}
                 <div className="hidden sm:flex flex-row items-center gap-8 md:gap-24 relative z-10 w-full max-w-3xl px-8">
                     
                     {/* Tier 1: Frontend */}
                     <div className="flex-1 w-full relative group/tier1">
                         <div className="absolute -inset-4 bg-blue-100/50 dark:bg-blue-900/10 rounded-3xl blur-xl opacity-0 group-hover/tier1:opacity-100 transition-opacity"></div>
                         <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-blue-100 dark:border-blue-900/30 shadow-xl p-6 flex flex-col items-center gap-4">
                             <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-3xl shadow-sm border border-blue-100 dark:border-blue-800">
                                 🖥️
                             </div>
                             <div className="text-center">
                                 <h4 className="font-bold text-gray-900 dark:text-white">Frontend Tier</h4>
                                 <p className="text-xs text-gray-400 font-mono mt-1">Next.js 15 • Vercel</p>
                             </div>
                             {/* Floating UI Elements */}
                             <div className="absolute -top-6 -right-6 w-12 h-12 bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-100 dark:border-gray-600 flex items-center justify-center animate-bounce delay-100">
                                 <div className="w-3/4 h-3/4 rounded bg-gray-100 dark:bg-gray-600"></div>
                             </div>
                         </div>
                     </div>

                     {/* Connection Stream */}
                     <div className="flex flex-col items-center justify-center gap-2 text-gray-300 dark:text-gray-600 w-24">
                         <div className="flex gap-1 animate-pulse">
                             <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                             <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                             <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                         </div>
                         <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                         <span className="text-[10px] font-mono tracking-widest uppercase">JSON API</span>
                     </div>

                     {/* Tier 2: Backend */}
                     <div className="flex-1 w-full relative group/tier2">
                         <div className="absolute -inset-4 bg-emerald-100/50 dark:bg-emerald-900/10 rounded-3xl blur-xl opacity-0 group-hover/tier2:opacity-100 transition-opacity"></div>
                         <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 shadow-xl p-6 flex flex-col items-center gap-4">
                             <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-3xl shadow-sm border border-emerald-100 dark:border-emerald-800">
                                 ⚙️
                             </div>
                             <div className="text-center">
                                 <h4 className="font-bold text-gray-900 dark:text-white">Backend Tier</h4>
                                 <p className="text-xs text-gray-400 font-mono mt-1">Workers • D1 • Hono</p>
                             </div>
                             {/* Floating Server Elements */}
                             <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-900 dark:bg-black rounded-full shadow-lg border-2 border-emerald-400 flex items-center justify-center animate-spin-slow">
                                 <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                             </div>
                         </div>
                     </div>

                 </div>

                 {/* Background Grid */}
                 <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Main Column */}
            <div className="md:col-span-8 space-y-16">
                 <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-6 font-mono">01. The Platform</h2>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Two-Tier Architecture.</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        OpenBooking adopts a strict strict separation of concerns. A lightweight Next.js frontend consumes a dedicated backend API running on Cloudflare Workers. This separation allows for independent scaling, type-safe communication contracts, and a clean "Database-per-Tenant" isolation strategy at the API layer.
                    </p>
                </section>

                <section>
                     <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-6 font-mono">02. Architecture</h2>
                     
                     {/* Bento Grid Architecture */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                         <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-lg sm:rounded-3xl border border-gray-100 dark:border-white/5">
                             <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4 shadow-sm text-2xl">
                                 🎨
                             </div>
                             <h4 className="font-bold text-gray-900 dark:text-white mb-2">Frontend Tier</h4>
                             <p className="text-sm text-gray-500">
                                 Next.js 15 + React 19. A responsive, server-rendered UI acting as a pure consumer of the backend API.
                             </p>
                         </div>
                         <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-lg sm:rounded-3xl border border-gray-100 dark:border-white/5">
                             <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4 shadow-sm text-2xl">
                                ⚡
                             </div>
                             <h4 className="font-bold text-gray-900 dark:text-white mb-2">Backend Tier</h4>
                             <p className="text-sm text-gray-500">
                                 Cloudflare Workers + Hono. Provides a strongly typed, edge-deployed API layer that handles all business logic.
                             </p>
                         </div>
                         <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-lg sm:rounded-3xl border border-gray-100 dark:border-white/5">
                             <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4 shadow-sm text-2xl">
                                💾
                             </div>
                             <h4 className="font-bold text-gray-900 dark:text-white mb-2">Cloudflare D1</h4>
                             <p className="text-sm text-gray-500">
                                 High-performance, edge-first SQL database with extensive relational capabilities.
                             </p>
                         </div>
                         <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-lg sm:rounded-3xl border border-gray-100 dark:border-white/5">
                             <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4 shadow-sm text-2xl">
                                📦
                             </div>
                             <h4 className="font-bold text-gray-900 dark:text-white mb-2">Cloudflare R2</h4>
                             <p className="text-sm text-gray-500">
                                 S3-compatible object storage for managing business assets, images, and user uploads at the edge without egress fees.
                             </p>
                         </div>
                     </div>
                </section>

                <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-6 font-mono">03. User Experience</h2>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Scheduling made simple.</h3>

                    {/* CSS Art: Calendar & Scheduling */}
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg sm:rounded-3xl border border-gray-200 dark:border-gray-800 p-4 md:p-8 mb-8 overflow-hidden relative min-h-[400px] flex flex-col">
                        
                        {/* Fake App Window */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex-1 flex flex-col overflow-hidden">
                            {/* App Header */}
                            <div className="h-12 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between px-4 bg-white dark:bg-gray-800">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-xs">OB</div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-gray-900 dark:text-white">Acme Salon</span>
                                        <span className="text-[10px] text-gray-500">Dashboard</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-24 h-8 bg-gray-100 dark:bg-gray-700 rounded text-xs flex items-center justify-center text-gray-500">Search...</div>
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold">JS</div>
                                </div>
                            </div>
                            
                            <div className="flex-1 flex overflow-hidden">
                                {/* Sidebar */}
                                <div className="hidden sm:flex w-16 border-r border-gray-100 dark:border-gray-700 flex-col items-center py-4 gap-4 bg-gray-50/50 dark:bg-black/20">
                                    <div className="w-8 h-8 rounded-md bg-emerald-100 text-emerald-600 flex items-center justify-center">📅</div>
                                    <div className="w-8 h-8 rounded-md hover:bg-white dark:hover:bg-white/10 flex items-center justify-center text-gray-400">👥</div>
                                    <div className="w-8 h-8 rounded-md hover:bg-white dark:hover:bg-white/10 flex items-center justify-center text-gray-400">⚙️</div>
                                </div>

                                {/* Main Calendar */}
                                <div className="flex-1 p-4 relative overflow-hidden bg-white dark:bg-gray-800">
                                     {/* Calendar Header */}
                                     <div className="flex justify-between items-center mb-4">
                                         <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">February 2026</h4>
                                         <div className="hidden sm:flex gap-2">
                                             <span className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">Day</span>
                                             <span className="px-3 py-1 rounded bg-gray-900 text-white text-xs">Week</span>
                                             <span className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">Month</span>
                                         </div>
                                     </div>

                                     {/* Mobile Agenda View */}
                                     <div className="flex sm:hidden flex-col gap-3">
                                         <div className="flex gap-4 p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
                                             <div className="flex flex-col text-xs font-mono text-gray-500 dark:text-gray-400">
                                                 <span>10:00</span>
                                                 <span>11:00</span>
                                             </div>
                                             <div>
                                                 <div className="text-sm font-bold text-gray-900 dark:text-white">Haircut</div>
                                                 <div className="text-xs text-gray-500">Paul W.</div>
                                             </div>
                                         </div>
                                          <div className="flex gap-4 p-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-r-lg">
                                             <div className="flex flex-col text-xs font-mono text-gray-500 dark:text-gray-400">
                                                 <span>12:00</span>
                                                 <span>13:30</span>
                                             </div>
                                             <div>
                                                 <div className="text-sm font-bold text-gray-900 dark:text-white">Consultation</div>
                                                 <div className="text-xs text-gray-500">Internal</div>
                                             </div>
                                         </div>
                                         <div className="flex gap-4 p-3 border-l-4 border-gray-200 dark:border-gray-700 rounded-r-lg opacity-50">
                                              <div className="flex flex-col text-xs font-mono text-gray-500 dark:text-gray-400">
                                                 <span>14:00</span>
                                                 <span>14:45</span>
                                             </div>
                                             <div>
                                                 <div className="text-sm font-bold text-gray-900 dark:text-white">Blocked</div>
                                                
                                             </div>
                                         </div>
                                     </div>

                                     {/* Desktop Week Grid */}
                                     <div className="hidden sm:grid grid-cols-5 gap-px bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-full">
                                         {['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Fri 16'].map((day, i) => (
                                             <div key={day} className="bg-white dark:bg-gray-800 flex flex-col h-full relative group">
                                                 <div className="p-2 text-center text-[10px] font-bold text-gray-400 uppercase border-b border-gray-50 dark:border-gray-800">{day}</div>
                                                 <div className="flex-1 relative">
                                                     {/* Time Slots */}
                                                     {[9, 10, 11, 12, 13, 14, 15].map(time => (
                                                         <div key={time} className="h-10 border-b border-gray-50 dark:border-gray-800/50"></div>
                                                     ))}
                                                     
                                                     {/* Events */}
                                                     {i === 0 && (
                                                         <div className="absolute top-10 left-1 right-1 h-20 bg-blue-50 dark:bg-blue-900/40 border-l-2 border-blue-400 p-1">
                                                             <div className="text-[9px] font-bold text-blue-700 dark:text-blue-300">Haircut</div>
                                                             <div className="text-[8px] text-blue-500">10:00 - 11:00</div>
                                                         </div>
                                                     )}
                                                     {i === 2 && (
                                                         <div className="absolute top-30 left-1 right-1 h-30 bg-purple-50 dark:bg-purple-900/40 border-l-2 border-purple-400 p-1 shadow-sm transform hover:scale-[1.02] transition-transform">
                                                             <div className="text-[9px] font-bold text-purple-700 dark:text-purple-300">Consultation</div>
                                                             <div className="text-[8px] text-purple-500">12:00 - 1:30</div>
                                                         </div>
                                                     )}
                                                     {i === 4 && (
                                                         <div className="absolute top-5 left-1 right-1 bottom-5 bg-stripes-gray opacity-10 pointer-events-none"></div>
                                                     )}
                                                 </div>
                                             </div>
                                         ))}
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {[
                            "Multi-tenant architecture",
                            "Public booking pages",
                            "Drag-and-drop calendar",
                            "Services & Pricing catalog",
                            "CRM & Analytics",
                            "Timezone support"
                         ].map((feature, i) => (
                            <li key={i} className="flex items-center p-3">
                                <span className="mr-3 text-emerald-500 font-bold px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">OK</span>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                            </li>
                         ))}
                    </ul>
                </section>
            </div>

            {/* Sidebar Column */}
            <div className="md:col-span-4 space-y-8">
                 <div className="sticky top-32">
                     <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-8">
                         <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Next.js 15", "React 19", "Better Auth", 
                                    "MUI", "Cloudflare", "Turborepo"
                                ].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-lg text-xs font-semibold text-gray-600 dark:text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                         </div>
                         
                         {/* Repository hidden for private project */}

                         <div className="hidden sm:block pt-6 border-t border-gray-200 dark:border-white/10">
                            <a
                              href="https://openbooking.xiandewen.com/business/test-business-1"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full px-6 py-4 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                            >
                              <span>Launch Demo</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                         </div>
                     </div>
                 </div>
            </div>

        </div>

      </div>

      {/* Mobile Sticky Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 sm:hidden z-50 pb-8">
          <a
              href="https://openbooking.xiandewen.com/business/test-business-1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-4 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
              <span>Launch Demo</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
      </div>
    </div>
  )
}
