"use client"

import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const workSection = document.getElementById("work")
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", "#work")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#E0E7FF] dark:selection:bg-indigo-900">
      <main className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12 sm:py-20">
        
        {/* Header / Nav */}
        <header className="flex flex-row justify-between items-center mb-16 sm:mb-24 sticky top-0 z-50 bg-background/80 backdrop-blur-md py-4 -mx-6 px-6 md:-mx-12 md:px-12">
          <div className="flex items-center gap-2">
             <span className="font-bold text-lg">Paul (Xiande) Wen</span>
          </div>
          <nav>
            <ul className="flex gap-4 sm:gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <a 
                  href="#work" 
                  onClick={scrollToWork}
                  className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://xiandew.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mb-24 sm:mb-32 pt-12 sm:pt-20">
          <h1 className="text-5xl sm:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            Hi. I'm Paul.<br />
            <span className="text-gray-300 dark:text-gray-600">A Senior Engineer.</span>
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-gray-800 dark:text-gray-200 leading-snug max-w-2xl">
            I build production-grade applications that scale.
            Focusing on clean architecture, performance, and user-centric engineering.
          </p>
        </section>

        {/* Projects / Work Section */}
        <section id="work" className="mb-32">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-10 ml-2">
            In Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            
            {/* Project Card 1 - Booking Ledger - Spans 2 cols (Small) */}
            <Link href="/project/booking-ledger" className="group block col-span-1 md:col-span-2 lg:col-span-2">
              <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 dark:border-white/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 aspect-[16/10] md:aspect-[16/9] lg:aspect-auto lg:h-full">
                 {/* Placeholder for project image/gradient */}
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors flex flex-col justify-end p-10">
                    <div className="mb-auto">
                        <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-50 dark:ring-white/10 mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                        </div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-3xl text-gray-900 dark:text-white mb-2 tracking-tight">Booking Ledger</h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Enterprise SaaS Platform</p>
                    </div>
                 </div>
                 {/* Floating Label */}
                 <div className="absolute top-8 right-8">
                   <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-white/10 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                     <span className="text-xs font-bold text-gray-900 dark:text-white tracking-wide uppercase">Live Beta</span>
                   </div>
                 </div>
              </div>
            </Link>

             {/* Project Card 2 - Booking SaaS - Spans 4 cols (Big) */}
             <Link href="/project/booking-saas" className="group block col-span-1 md:col-span-2 lg:col-span-4">
              <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 dark:border-white/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 aspect-[16/10] md:aspect-[16/9]">
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors flex flex-col justify-end p-10">
                    <div className="mb-auto">
                        <span className="block text-6xl">🌱</span>
                    </div>
                    <div className="text-left">
                       <h3 className="font-bold text-3xl text-gray-900 dark:text-white mb-2 tracking-tight">Booking SaaS</h3>
                       <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Multi-tenant Architecture</p>
                    </div>
                 </div>
                 <div className="absolute top-8 right-8">
                   <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-white/10 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                     <span className="text-xs font-bold text-gray-900 dark:text-white tracking-wide uppercase">In Development</span>
                   </div>
                 </div>
              </div>
            </Link>

          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-gray-200 dark:border-white/10 pt-12 pb-20">
           <div className="flex flex-wrap gap-4 mb-16">
             <a 
               href="mailto:hello@xiandewen.com" 
               className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium transition-colors"
             >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               <span>Email</span>
             </a>

             <a 
               href="https://github.com/xiandew" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium transition-colors"
             >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
               <span>GitHub</span>
             </a>

             <a 
               href="https://linkedin.com/in/xiandewen" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium transition-colors"
             >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               <span>LinkedIn</span>
             </a>

             <a 
               href="https://xiandew.github.io" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium transition-colors"
             >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               <span>About</span>
             </a>
           </div>
        </section>

      </main>
    </div>
  )
}
