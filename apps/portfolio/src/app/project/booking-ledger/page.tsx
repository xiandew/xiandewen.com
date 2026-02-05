import Link from "next/link"

export default function BookingLedgerPage() {
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
            Booking Ledger
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed">
            Customer treatment management system with Firebase integration.
          </p>
        </div>

        {/* Hero Image / Block */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-lg sm:rounded-3xl h-[28rem] sm:h-auto sm:aspect-video md:aspect-[2.4/1] w-full mb-16 flex items-center justify-center border border-gray-100 dark:border-white/10 relative overflow-hidden group">
             
             {/* Abstract Ledger Art */}
             <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Background Grid Elements */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-4 p-8 opacity-20">
                    {Array.from({length: 24}).map((_, i) => (
                        <div key={i} className="bg-indigo-200 dark:bg-indigo-900/30 rounded-lg"></div>
                    ))}
                </div>

                {/* Main UI Composition (Mobile) - Optimized Single Card */}
                <div className="flex sm:hidden z-10 w-full h-full items-center justify-center relative px-6">
                     
                     {/* Clean Central Card */}
                    <div className="w-full max-w-[320px] aspect-[3/4] bg-white dark:bg-gray-800 rounded-2xl border-2 border-indigo-100 dark:border-indigo-900/50 shadow-2xl flex flex-col overflow-hidden relative">
                         {/* Header */}
                         <div className="h-16 border-b border-gray-100 dark:border-gray-700 flex items-center px-6 gap-4 bg-gray-50/50 dark:bg-black/20">
                             <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 shadow-sm">
                                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                             </div>
                             <div>
                                 <div className="w-24 h-2.5 bg-gray-900 dark:bg-white rounded-full mb-1.5"></div>
                                 <div className="w-16 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                             </div>
                         </div>
                         
                         {/* Body */}
                         <div className="p-6 space-y-6 flex-1 bg-white dark:bg-gray-800">
                             {/* Status Row */}
                             <div className="flex items-center justify-between">
                                 <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                 <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-[10px] font-bold text-green-600 uppercase tracking-wider border border-green-200 dark:border-green-800">Completed</div>
                             </div>
                             
                             {/* Notes Block */}
                             <div className="space-y-3">
                                 <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                                 <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                                 <div className="w-2/3 h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                             </div>

                             {/* Divider */}
                             <div className="h-px w-full bg-gray-100 dark:bg-gray-700"></div>

                             {/* Metadata */}
                             <div className="space-y-4">
                                  <div className="flex gap-3">
                                       <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20"></div>
                                       <div className="flex-1 space-y-2 py-1">
                                           <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                                       </div>
                                  </div>
                                  <div className="flex gap-3">
                                       <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20"></div>
                                       <div className="flex-1 space-y-2 py-1">
                                           <div className="w-3/4 h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                                       </div>
                                  </div>
                             </div>
                         </div>

                         {/* Bottom Action */}
                         <div className="h-2 w-full bg-indigo-500"></div>
                    </div>
                </div>

                {/* Main UI Composition (Desktop) */}
                <div className="hidden sm:flex items-center gap-6 z-10 scale-90 md:scale-110 transition-transform duration-500">
                    
                    {/* The List View (Background Layer) */}
                    <div className="w-48 h-60 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl -rotate-6 translate-x-12 opacity-80 flex flex-col overflow-hidden">
                        <div className="h-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600"></div>
                         <div className="flex-1 p-3 space-y-2">
                             {[1,2,3,4,5].map(i => (
                                 <div key={i} className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-full"></div>
                             ))}
                         </div>
                    </div>

                    {/* The Detail Card (Foreground Focus) */}
                    <div className="w-56 h-72 bg-white dark:bg-gray-800 rounded-2xl border-2 border-indigo-100 dark:border-indigo-900/50 shadow-2xl shadow-indigo-200/50 dark:shadow-none flex flex-col overflow-hidden relative rotate-3 translate-x-[-12px] group-hover:rotate-0 group-hover:translate-y-[-8px] transition-all duration-500">
                         {/* Header */}
                         <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600">
                                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                             </div>
                             <div className="space-y-1">
                                 <div className="w-20 h-2 bg-gray-800 dark:bg-gray-200 rounded-full"></div>
                                 <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                             </div>
                         </div>
                         
                         {/* Body */}
                         <div className="p-4 space-y-4">
                             <div className="space-y-1">
                                 <div className="text-[10px] font-bold text-gray-400 uppercase">Treatment</div>
                                 <div className="w-full h-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full"></div>
                             </div>
                             <div className="space-y-1">
                                 <div className="text-[10px] font-bold text-gray-400 uppercase">Notes</div>
                                 <div className="w-full h-16 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2 flex flex-col gap-1">
                                     <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                                     <div className="w-3/4 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                                     <div className="w-5/6 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                                 </div>
                             </div>
                         </div>

                         {/* Action */}
                         <div className="mt-auto p-4">
                             <div className="w-full py-2 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                                 <div className="w-16 h-1.5 bg-white dark:bg-black rounded-full"></div>
                             </div>
                         </div>

                         {/* Decorative tick */}
                         <div className="absolute top-4 right-4 text-green-500">
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                         </div>
                    </div>
                </div>
             </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Main Column */}
            <div className="md:col-span-8 space-y-16">
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6 font-mono">01. The Problem</h2>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Spreadsheets weren't enough.</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        Managing customer treatments requires more than just rows and columns. It requires state, history, and relationship management. 
                        Booking Ledger was created to bridge the gap between simple spreadsheets and complex CRMs. It provides a structured, type-safe environment for logging treatments while maintaining the speed of data entry.
                    </p>
                </section>

                <section>
                     <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6 font-mono">02. Stack & Architecture</h2>
                     
                     {/* Tech Stack Visualization */}
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                         {/* Card 1 */}
                         <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center text-center gap-4">
                             <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                 <svg className="w-6 h-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                             </div>
                             <h4 className="font-bold text-gray-900 dark:text-white">Next.js 15</h4>
                             <p className="text-sm text-gray-500 leading-snug">Server Actions for mutations and React Server Components for data fetching.</p>
                         </div>
                         {/* Card 2 */}
                         <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center text-center gap-4">
                             <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
                             </div>
                             <h4 className="font-bold text-gray-900 dark:text-white">Firebase</h4>
                             <p className="text-sm text-gray-500 leading-snug">Firestore for NoSQL document storage and realtime listeners.</p>
                         </div>
                         {/* Card 3 */}
                         <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center text-center gap-4">
                             <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                                 <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                             </div>
                             <h4 className="font-bold text-gray-900 dark:text-white">Tailwind</h4>
                             <p className="text-sm text-gray-500 leading-snug">Utility-first styling for a completely custom, consistent design system.</p>
                         </div>
                     </div>
                </section>

                <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6 font-mono">03. Key Features</h2>
                    
                    {/* Feature Art: Live Data Stream */}
                    <div className="mb-8 bg-gray-900 rounded-lg sm:rounded-3xl p-8 relative overflow-hidden flex items-center justify-center min-h-[240px] group">
                        
                        {/* Background Grid - Data Plane */}
                        <div className="absolute inset-0 opacity-20 perspective-1000">
                           <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)_scale(2)] origin-top"></div>
                        </div>

                        {/* Central Hub - The Single Source of Truth */}
                        <div className="relative z-20 flex flex-col items-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.6)] animate-pulse relative">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                
                                {/* Orbital rings */}
                                <div className="absolute inset-0 border border-indigo-500/50 rounded-xl scale-125 animate-[spin_4s_linear_infinite]"></div>
                                <div className="absolute inset-0 border border-purple-500/30 rounded-xl scale-150 animate-[spin_6s_linear_infinite_reverse]"></div>
                            </div>
                            <div className="mt-4 text-[10px] font-mono font-bold text-indigo-400 tracking-widest uppercase bg-black/50 px-2 py-1 rounded border border-indigo-500/30">Firestore Live</div>
                        </div>

                        {/* Data Ingestion Stream (Left) */}
                        <div className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-20 items-center justify-end pr-8 overflow-hidden">
                             <div className="relative w-full h-0.5 bg-gradient-to-r from-transparent to-indigo-500/50">
                                 {/* Moving Packets */}
                                 <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80] animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                                 <div className="absolute top-1/2 -translate-y-1/2 right-12 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] opacity-80"></div>
                                 <div className="absolute top-1/2 -translate-y-1/2 right-24 w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc] opacity-60"></div>
                             </div>
                             <div className="absolute right-4 -top-6 text-[9px] font-mono text-gray-500">WRITE</div>
                        </div>

                        {/* Data Sync Stream (Right) */}
                        <div className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-20 items-center justify-start pl-8 overflow-hidden">
                             <div className="relative w-full h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent">
                                 {/* Moving Packets Out */}
                                 <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_#818cf8] animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]"></div>
                                 <div className="absolute top-1/2 -translate-y-1/2 left-16 w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-80"></div>
                             </div>
                             <div className="absolute left-4 -top-6 text-[9px] font-mono text-gray-500">SYNC</div>
                        </div>

                        {/* Mobile Stream (Vertical) */}
                         <div className="sm:hidden absolute inset-0 flex flex-col items-center justify-between p-4 opacity-50 pointer-events-none">
                             <div className="w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>
                         </div>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Customer management with treatment history",
                            "Real-time Firestore synchronization",
                            "Google Sign-In authentication",
                            "Soft delete & data integrity protection",
                            "Responsive Data Tables",
                            "Optimistic UI Updates"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <span className="mr-3 text-indigo-500 font-bold">/</span>
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
                                {["Next.js 15", "React 19", "TypeScript", "Firebase", "Tailwind"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-lg text-xs font-semibold text-gray-600 dark:text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                         </div>
                         
                         <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Repository</h3>
                             <a href="https://github.com/xiandew/xiandewen.com/tree/master/apps/booking-ledger" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" /></svg>
                                <span>apps/booking-ledger</span>
                             </a>
                         </div>

                         <div className="hidden sm:block pt-6 border-t border-gray-200 dark:border-white/10">
                            <a
                              href="https://booking-ledger-demo.xiandewen.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full px-6 py-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                            >
                              <span>View Live Demo</span>
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
              href="https://booking-ledger-demo.xiandewen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-bold shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
              <span>View Live Demo</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
      </div>
    </div>
  )
}
