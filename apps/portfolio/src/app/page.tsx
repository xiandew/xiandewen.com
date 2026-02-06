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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

            {/* Project Card 0 - Pareidolia - Full Width */}
            <Link href="/project/pareidolia" className="group block col-span-1 md:col-span-2 lg:col-span-6">
              <div className="relative bg-white dark:bg-gray-900 rounded-lg sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-[28rem] sm:h-auto sm:aspect-[2/1] lg:aspect-[2.5/1]">

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-purple-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors"></div>

                {/* Title at Top */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-20 pointer-events-none">
                  <div className="text-left">
                    <h3 className="font-bold text-xl sm:text-3xl text-gray-900 dark:text-white mb-1 tracking-tight group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">Pareidolia</h3>
                    <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium mb-3">AI Sketch Enhancement Tool</p>
                    {/* Badge */}
                    <div className="inline-flex sm:hidden items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                      <span className="text-[10px] font-bold text-gray-900 dark:text-gray-100 tracking-wide uppercase">New</span>
                    </div>
                  </div>
                </div>

                {/* Badge (Desktop) */}
                <div className="hidden sm:flex absolute top-8 right-8 z-30">
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white tracking-wide uppercase">New</span>
                  </div>
                </div>

                {/* CSS Art: Pareidolia - Browser Window */}
                <div className="absolute inset-x-0 bottom-0 top-36 sm:top-[25%] lg:top-[30%] w-full flex justify-center px-4 sm:px-12 md:px-24">
                  {/* Mobile Art: Simplified Process Flow */}
                  <div className="sm:hidden w-full h-full flex flex-col items-center justify-center -mt-4">
                    <div className="relative flex flex-col items-center gap-6">
                      <div className="flex items-center gap-4">
                        {/* Input */}
                        <div className="size-24 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center justify-center border border-gray-100 dark:border-gray-700 relative group">
                          <span className="absolute -top-6 text-[10px] font-mono text-gray-400">INPUT</span>
                          <svg className="size-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          </svg>
                        </div>
                        {/* Arrow */}
                        <div className="text-fuchsia-500 flex flex-col items-center gap-1">
                          <span className="h-1 w-8 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent rounded-full animate-pulse"></span>
                        </div>
                        {/* Output */}
                        <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-2xl shadow-xl shadow-fuchsia-500/20 flex items-center justify-center text-white relative">
                          <span className="absolute -top-6 text-[10px] font-mono text-fuchsia-600 dark:text-fuchsia-400 font-bold">RESULT</span>
                          <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                          <div className="absolute -right-2 -bottom-2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-xs">✨</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex w-full h-[120%] bg-white dark:bg-gray-950 rounded-t-xl border-2 border-gray-200 dark:border-gray-800 flex-col overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    {/* Window Header */}
                    <div className="h-8 border-b border-gray-100 dark:border-gray-800 flex items-center px-4 gap-2 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                      <div className="ml-4 w-32 h-2 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
                    </div>
                    {/* App UI - Processing Flow */}
                    <div className="flex-1 flex overflow-hidden bg-white dark:bg-gray-950 relative">
                      {/* Sidebar - Mini Tools (Hidden on super small screens) */}
                      <div className="w-14 border-r border-gray-100 dark:border-gray-800 flex flex-col items-center py-3 gap-3 bg-gray-50/50 dark:bg-gray-900/50 z-10">
                        <div className="w-8 h-8 rounded-lg bg-fuchsia-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-fuchsia-500/20">AI</div>
                        <div className="w-6 h-px bg-gray-200 dark:bg-gray-700 my-1"></div>
                        {/* Tool Icons */}
                        <div className="flex flex-col gap-2">
                          <div className="w-8 h-8 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                            <div className="w-3 h-3 border-2 border-gray-400 dark:border-gray-500 rounded-full"></div>
                          </div>
                          <div className="w-8 h-8 rounded-md hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 flex items-center justify-center transition-colors">
                            <div className="w-3 h-3 border border-gray-400 dark:border-gray-500 rounded-sm transform rotate-45"></div>
                          </div>
                        </div>
                      </div>

                      {/* Main Canvas Area */}
                      <div className="flex-1 flex flex-col relative w-full">
                        {/* Top Control Bar */}
                        <div className="h-10 border-b border-gray-100 dark:border-gray-800 flex items-center px-4 justify-between bg-white dark:bg-gray-900/80 z-10">
                          <div className="flex gap-2">
                            <div className="px-1.5 py-0.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/20 text-[9px] font-medium text-fuchsia-600 dark:text-fuchsia-300 border border-fuchsia-100 dark:border-fuchsia-800/50">House</div>
                            <div className="px-2 py-0.5 rounded-full bg-gray-50 dark:bg-gray-800 text-[9px] font-medium text-gray-500 border border-gray-100 dark:border-gray-700">Dragon</div>
                          </div>
                          <div className="h-5 px-2 rounded bg-fuchsia-600 text-white text-[9px] font-bold flex items-center shadow-md shadow-fuchsia-500/20">
                            GENERATE
                          </div>
                        </div>

                        {/* Workspace */}
                        <div className="flex-1 relative bg-gray-50/30 dark:bg-black/20 flex flex-col items-center justify-center p-2">
                          {/* Dot Grid Background */}
                          <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

                          {/* Transformation Visuals */}
                          <div className="relative flex items-center justify-center gap-2 sm:gap-6 z-10 w-full h-full pb-8 sm:pb-16 scale-90 sm:scale-100">

                            {/* Left: Input Sketch */}
                            <div className="group/sketch relative w-20 h-20 sm:w-32 sm:h-32 md:size-48 bg-white dark:bg-gray-900 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 shadow-sm flex items-center justify-center">
                              <div className="absolute top-1.5 left-2 text-[6px] sm:text-[8px] text-gray-400 font-mono tracking-wider">INPUT</div>
                              <svg className="w-10 h-10 sm:w-16 sm:h-16 md:size-24 text-gray-400 dark:text-gray-500 stroke-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 21h18M5 21V7l8-4 8 4v14" /> {/* Simple House Lineart */}
                              </svg>
                            </div>

                            {/* Middle: Processing Arrows */}
                            <div className="flex flex-col items-center gap-1 opacity-80 shrink-0">
                              <div className="flex space-x-0.5">
                                <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-fuchsia-400 animate-[bounce_1s_infinite_0ms]"></span>
                                <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-fuchsia-500 animate-[bounce_1s_infinite_200ms]"></span>
                                <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-fuchsia-600 animate-[bounce_1s_infinite_400ms]"></span>
                              </div>
                            </div>

                            {/* Right: AI Output */}
                            <div className="group/result relative w-20 h-20 sm:w-32 sm:h-32 md:size-48 bg-white dark:bg-gray-900 rounded-xl border border-fuchsia-200 dark:border-fuchsia-900 shadow-xl shadow-fuchsia-500/15 flex items-center justify-center overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50/50 to-purple-50/50 dark:from-fuchsia-900/20 dark:to-purple-900/20"></div>
                              <div className="absolute top-1.5 left-2 text-[6px] sm:text-[8px] text-fuchsia-600 dark:text-fuchsia-400 font-mono tracking-wider font-bold">RESULT</div>

                              <svg className="w-10 h-10 sm:w-16 sm:h-16 md:size-28 text-fuchsia-600 dark:text-fuchsia-400 drop-shadow-sm transform transition-transform duration-500 group-hover/result:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 21h18M5 21V7l8-4 8 4v14" className="fill-fuchsia-100 dark:fill-fuchsia-900/30" />
                                <path d="M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" className="fill-white dark:fill-gray-900" />
                              </svg>

                              {/* Sparkle */}
                              <div className="absolute top-2 right-2 text-amber-400 animate-pulse">
                                <svg className="w-2 h-2 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-6 5 2 7-6-5-6 5 2-7-6-5h7z" /></svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Removed (Moved to top) */}
              </div>
            </Link>

            {/* Project Card 1 - Booking Ledger - Spans 2 cols (Small) */}
            <Link href="/project/booking-ledger" className="group block col-span-1 md:col-span-2 lg:col-span-2">
              <div className="relative bg-white dark:bg-gray-900 rounded-lg sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-[28rem] sm:h-auto sm:aspect-[16/9] lg:aspect-auto lg:h-full">

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors"></div>

                {/* Title at Top */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-20 pointer-events-none">
                  <div className="text-left">
                    <h3 className="font-bold text-xl sm:text-3xl text-gray-900 dark:text-white mb-1 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Booking Ledger</h3>
                    <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium mb-3">Enterprise SaaS Platform</p>
                    {/* Badge */}
                    <div className="inline-flex sm:hidden items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      <span className="text-[10px] font-bold text-gray-900 dark:text-gray-100 tracking-wide uppercase">Live Beta</span>
                    </div>
                  </div>
                </div>

                {/* Badge (Desktop) */}
                <div className="hidden sm:flex absolute top-8 right-8 z-30">
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white tracking-wide uppercase">Live Beta</span>
                  </div>
                </div>

                {/* CSS Art: Mobile/App Interface - Abstract Stacking Cards */}
                <div className="absolute inset-x-0 bottom-0 top-36 sm:top-1/4 flex items-center justify-center pointer-events-none">
                  <div className="relative w-full h-full sm:max-w-[280px] sm:scale-100 origin-bottom transition-transform">
                    {/* Mobile Art: Simplified Abstract Cards */}
                    <div className="sm:hidden w-full h-full flex flex-col items-center justify-center -mt-8">

                      {/* Main Abstract Card */}
                      <div className="w-[70%] aspect-[3/4] bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 flex flex-col gap-3 relative overflow-hidden">
                        {/* Abstract Header */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50"></div>
                          <div className="h-2 w-16 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                        </div>

                        {/* Abstract Rows */}
                        <div className="flex-1 space-y-2">
                          <div className="h-8 w-full bg-gray-50 dark:bg-gray-900/30 rounded-lg"></div>
                          <div className="h-8 w-full bg-gray-50 dark:bg-gray-900/30 rounded-lg opacity-60"></div>
                          <div className="h-8 w-full bg-gray-50 dark:bg-gray-900/30 rounded-lg opacity-30"></div>
                        </div>

                        {/* Action Button Abstract */}
                        <div className="h-8 w-full bg-indigo-500 rounded-lg mt-auto"></div>
                      </div>
                    </div>

                    {/* Desktop Art: Background List Card */}
                    <div className="hidden sm:block absolute top-0 left-8 right-0 bottom-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 opacity-60 transform rotate-6 transition-transform duration-500 group-hover:rotate-12 group-hover:translate-x-4">
                      <div className="p-4 space-y-3">
                        <div className="h-2 w-1/3 bg-gray-200 dark:bg-gray-600 rounded"></div>
                        <div className="space-y-2">
                          {[1, 2, 3].map(i => <div key={i} className="h-8 w-full bg-gray-50 dark:bg-gray-700/50 rounded-lg"></div>)}
                        </div>
                      </div>
                    </div>

                    {/* Desktop Art: Foreground Detail Card */}
                    <div className="hidden sm:block absolute top-8 left-0 right-8 bottom-0 bg-white dark:bg-gray-900 rounded-2xl border-2 border-indigo-50 dark:border-indigo-900/30 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3 overflow-hidden">
                      {/* Card Header */}
                      <div className="h-16 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                        <div>
                          <div className="w-24 h-2.5 bg-gray-200 dark:bg-gray-700 rounded mb-1.5"></div>
                          <div className="w-16 h-2 bg-gray-100 dark:bg-gray-800 rounded"></div>
                        </div>
                      </div>
                      {/* Card Body */}
                      <div className="p-4 space-y-4">
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/50">
                          <div className="flex justify-between mb-2">
                            <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="w-8 h-2 bg-green-100 dark:bg-green-900 rounded"></div>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700/50 rounded mb-1"></div>
                          <div className="w-2/3 h-1.5 bg-gray-100 dark:bg-gray-700/50 rounded"></div>
                        </div>
                        <div className="flex justify-end">
                          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Removed (Moved to top) */}
              </div>
            </Link>

            {/* Project Card 2 - Booking SaaS - Spans 4 cols (Big) */}
            <Link href="/project/booking-saas" className="group block col-span-1 md:col-span-2 lg:col-span-4">
              <div className="relative bg-white dark:bg-gray-900 rounded-lg sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-[28rem] sm:h-auto sm:aspect-[16/9]">

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors"></div>

                {/* Title at Top */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-20 pointer-events-none">
                  <div className="text-left">
                    <h3 className="font-bold text-xl sm:text-3xl text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Booking SaaS</h3>
                    <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium mb-3">Multi-tenant Architecture</p>
                    {/* Badge */}
                    <div className="inline-flex sm:hidden items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span className="text-[10px] font-bold text-gray-900 dark:text-gray-100 tracking-wide uppercase">In Development</span>
                    </div>
                  </div>
                </div>

                {/* Badge (Desktop) */}
                <div className="hidden sm:flex absolute top-8 right-8 z-30">
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white tracking-wide uppercase">In Development</span>
                  </div>
                </div>

                {/* CSS Art: Booking SaaS Dashboard - Abstract */}
                <div className="absolute inset-0 flex justify-center pt-36 sm:pt-32 px-6 sm:px-12 pointer-events-none">
                  <div className="w-full h-full bg-white dark:bg-gray-950 rounded-t-xl border-2 border-b-0 border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden shadow-2xl transition-transform duration-500 group-hover:translate-y-2">
                    {/* Mobile Art: Taller Abstract Schedule */}
                    <div className="sm:hidden flex-1 p-5 flex flex-col gap-4 bg-white/50 dark:bg-black/20">
                      {/* Day Header */}
                      <div className="flex items-center justify-between border-b pb-4 border-gray-100 dark:border-gray-800">
                        <div>
                          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-600 rounded-md mb-2"></div>
                          <div className="h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded-md"></div>
                        </div>
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center border border-emerald-200 dark:border-emerald-800" />
                      </div>
                      {/* Event List - Pure Blocks */}
                      <div className="space-y-4 overflow-hidden relative">
                        {/* Fade at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-10"></div>

                        {/* Item 1 */}
                        <div className="flex gap-4 items-center bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                          <div className="w-1.5 h-10 rounded-full bg-blue-500"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full"></div>
                          </div>
                        </div>
                        {/* Item 2 */}
                        <div className="flex gap-4 items-center bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm opacity-90">
                          <div className="w-1.5 h-10 rounded-full bg-purple-500"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <div className="h-3 w-2/3 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
                          </div>
                        </div>
                        {/* Item 3 */}
                        <div className="flex gap-4 items-center bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm opacity-80">
                          <div className="w-1.5 h-10 rounded-full bg-orange-400"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-3 w-1/4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <div className="h-3 w-3/4 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
                          </div>
                        </div>
                        {/* Item 4 */}
                        <div className="flex gap-4 items-center bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm opacity-50 blur-[1px]">
                          <div className="w-1.5 h-10 rounded-full bg-gray-300"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Art: Full Calendar */}
                    <div className="hidden sm:flex flex-1 flex-col">
                      {/* Top Bar with Tenant Switcher */}
                      <div className="h-12 border-b border-gray-100 dark:border-gray-800 flex items-center px-4 justify-between bg-white dark:bg-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-emerald-500"></div>
                          <div className="w-24 h-2 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
                        </div>
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-white dark:border-gray-900"></div>
                          <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-white dark:border-gray-900"></div>
                        </div>
                      </div>

                      <div className="flex-1 flex bg-gray-50/50 dark:bg-black/20">
                        {/* Calendar/Scheduler Content - Week View */}
                        <div className="flex-1 flex flex-col pt-2 relative">
                          {/* Header Row (Days) */}
                          <div className="grid grid-cols-5 border-b border-gray-200 dark:border-gray-800 pb-2 px-2">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                              <div key={day} className="text-center">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{day}</div>
                              </div>
                            ))}
                          </div>

                          {/* Time Grid */}
                          <div className="flex-1 relative overflow-hidden text-[10px]">
                            {/* Events Grid */}
                            <div className="absolute inset-0 grid grid-cols-5 px-2 py-2 gap-px">
                              {/* Col 1 */}
                              <div className="relative border-r border-gray-100 dark:border-gray-800/50 last:border-0 p-1">
                                <div className="absolute top-4 left-1 right-1 h-12 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded px-1.5 py-1 flex flex-col justify-center gap-1 group/event hover:scale-[1.02] transition-transform shadow-sm">
                                  <div className="w-8 h-1 bg-blue-300 dark:bg-blue-600 rounded-full"></div>
                                  <div className="w-12 h-1 bg-blue-200 dark:bg-blue-700/50 rounded-full"></div>
                                </div>
                                <div className="absolute top-20 left-1 right-1 h-8 bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 rounded px-1.5 py-1 flex flex-col justify-center gap-1 group/event hover:scale-[1.02] transition-transform shadow-sm">
                                  <div className="w-6 h-1 bg-purple-300 dark:bg-purple-600 rounded-full"></div>
                                </div>
                              </div>
                              {/* Col 2 */}
                              <div className="relative border-r border-gray-100 dark:border-gray-800/50 last:border-0 p-1">
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-50/50 dark:bg-white/5 mx-1 my-2 rounded flex flex-col items-center justify-center gap-1 border border-dashed border-gray-200 dark:border-gray-700">
                                  <span className="text-[8px] font-bold text-gray-400 rotate-90 whitespace-nowrap">NO SLOTS</span>
                                </div>
                              </div>
                              {/* Col 3 */}
                              <div className="relative border-r border-gray-100 dark:border-gray-800/50 last:border-0 p-1">
                                <div className="absolute top-10 left-1 right-1 h-16 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 rounded px-1.5 py-1 flex flex-col justify-center gap-1 group/event hover:scale-[1.02] transition-transform shadow-sm">
                                  <div className="w-8 h-1 bg-emerald-300 dark:bg-emerald-600 rounded-full"></div>
                                  <div className="w-full h-8 bg-emerald-100/50 dark:bg-emerald-800/30 rounded"></div>
                                </div>
                              </div>
                              {/* Col 4 */}
                              <div className="relative border-r border-gray-100 dark:border-gray-800/50 last:border-0 p-1">
                                <div className="absolute top-2 left-1 right-1 h-10 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded px-1.5 py-1 flex flex-col justify-center gap-1 group/event hover:scale-[1.02] transition-transform shadow-sm">
                                  <div className="w-6 h-1 bg-indigo-300 dark:bg-indigo-600 rounded-full"></div>
                                </div>
                                <div className="absolute top-16 left-1 right-1 h-14 bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800 rounded px-1.5 py-1 flex flex-col justify-center gap-1 group/event hover:scale-[1.02] transition-transform shadow-sm">
                                  <div className="w-8 h-1 bg-amber-300 dark:bg-amber-600 rounded-full"></div>
                                  <div className="w-10 h-1 bg-amber-200 dark:bg-amber-700/50 rounded-full"></div>
                                </div>
                              </div>
                              {/* Col 5 */}
                              <div className="relative p-1">
                                <div className="absolute top-6 left-1 right-1 h-20 bg-pink-50 dark:bg-pink-900/30 border border-pink-100 dark:border-pink-800 rounded px-1.5 py-1 flex flex-col justify-center gap-1 group/event hover:scale-[1.02] transition-transform shadow-sm opacity-80">
                                  <div className="w-6 h-1 bg-pink-300 dark:bg-pink-600 rounded-full"></div>
                                  <div className="w-full h-full bg-pink-100/50 dark:bg-pink-800/30 rounded mt-1"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Removed */}
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/xiandewen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
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
