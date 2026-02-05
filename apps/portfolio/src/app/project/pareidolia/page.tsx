import Link from "next/link"

export default function PareidoliaPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-fuchsia-100 dark:selection:bg-fuchsia-900">
            {/* Header / Nav */}
            <header className="flex flex-row justify-between items-center mb-16 sm:mb-24 sticky top-0 z-50 bg-background/80 backdrop-blur-md py-4 px-6 md:px-12">
                <div className="flex items-center gap-2">
                    <Link href="/" className="font-bold text-lg hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">Paul (Xiande) Wen</Link>
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
                        Pareidolia
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed">
                        Turn your rough sketches into refined art using AI.
                    </p>
                </div>

                {/* Hero Image / Block */}
                <div className="bg-gradient-to-br from-fuchsia-50 via-purple-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg sm:rounded-3xl h-[28rem] sm:h-auto sm:aspect-video md:aspect-[2.4/1] w-full mb-16 flex items-center justify-center border border-gray-100 dark:border-white/10 relative overflow-hidden group">
                    {/* CSS Art: Sketch to Image Concept - Mobile (Futuristic Interface) */}
                    <div className="flex sm:hidden flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
                        
                        {/* Background Detail */}
                        <div className="absolute inset-0 bg-transparent">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(232,121,249,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(232,121,249,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        </div>

                         {/* Interface Container */}
                         <div className="relative w-full max-w-[280px] bg-gray-900/5 dark:bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl p-4 flex flex-col gap-4 overflow-hidden group">
                            
                            {/* Scanning Beam */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent animate-[scan_3s_ease-in-out_infinite] opacity-50 z-20"></div>

                            {/* Top Bar */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-[10px] font-mono text-fuchsia-600 dark:text-fuchsia-400 font-bold tracking-wider">GEMINI_2.5_FLASH</div>
                            </div>

                            {/* Main Display - Split View */}
                            <div className="relative h-40 w-full bg-black/5 dark:bg-black/40 rounded-lg border border-black/5 dark:border-white/5 overflow-hidden flex">
                                
                                {/* Left: Wireframe / Input */}
                                <div className="w-1/2 h-full relative border-r border-fuchsia-500/20 bg-grid-white/[0.02]">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                         <svg className="w-12 h-12 text-gray-400 dark:text-gray-600 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                        </svg>
                                    </div>
                                    <div className="absolute top-2 left-2 text-[8px] font-mono text-gray-400">INPUT_RAW</div>
                                </div>

                                {/* Right: Rendered / Output */}
                                <div className="w-1/2 h-full relative overflow-hidden">
                                     {/* Vivid Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900 via-purple-900 to-indigo-900 opacity-80"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                         <div className="absolute w-16 h-16 bg-fuchsia-500/30 blur-xl rounded-full animate-pulse"></div>
                                         <svg className="w-12 h-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                        </svg>
                                    </div>
                                    <div className="absolute bottom-2 right-2 text-[8px] font-mono text-fuchsia-300 font-bold">RENDER_HQ</div>
                                </div>

                                {/* Slider / Transition Line */}
                                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-fuchsia-500 shadow-[0_0_10px_#d946ef] z-10 animate-[pulse_2s_infinite]">
                                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-fuchsia-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                                        <div className="w-0.5 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 dark:text-gray-400">
                                <div className="flex gap-2">
                                    <span>LATENCY: 48ms</span>
                                    <span className="text-emerald-500">READY</span>
                                </div>
                                <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="w-3/4 h-full bg-fuchsia-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CSS Art: Sketch to Image Concept - Desktop */}
                    <div className="hidden sm:flex items-center gap-8 md:gap-16 scale-75 md:scale-100 transition-transform duration-500">
                        {/* The "Sketch" */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 border-4 border-dashed border-gray-300 dark:border-gray-600 rounded-3xl flex items-center justify-center">
                            <div className="w-16 h-16 border-4 border-gray-300 dark:border-gray-600 rounded-full"></div>
                            <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-full border-dashed animate-spin-slow" style={{ animationDuration: '10s' }}></div>
                        </div>

                        {/* The Transformation Arrow */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs font-mono text-fuchsia-500 font-bold uppercase tracking-widest">Processing</span>
                            <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="w-1/2 h-full bg-fuchsia-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                            </div>
                        </div>

                        {/* The "Result" */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-fuchsia-500/20 flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-purple-600 opacity-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-500"></div>
                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div className="absolute top-1/2 right-2 w-1 h-1 bg-green-400 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Main Column */}
                    <div className="md:col-span-8 space-y-16">
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400 mb-6 font-mono">01. The Concept</h2>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">From ambiguity to clarity.</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                                Pareidolia is an exploration into generative interfaces. The goal wasn't just to wrap an AI model, but to create a tool that feels like a natural extension of the creative process.
                                By leveraging <strong className="text-gray-900 dark:text-white">Gemini 2.5 Flash Image</strong>, the application interprets high-velocity, low-fidelity user inputs (scribbles) and hallucinates detailed, stylistic variations in near real-time.
                            </p>
                            <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
                                <p className="font-mono text-sm text-gray-500 dark:text-gray-400">
                                    "The lag between thought and execution is where creativity often dies. Peridolia aims to close that gap by acting as a visual autocomplete."
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400 mb-6 font-mono">02. The Engine</h2>

                            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg sm:rounded-3xl p-8 md:p-10 mb-16 border border-indigo-100 dark:border-white/5">
                                {/* Decorative Background */}
                                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-white dark:bg-white/10 rounded-lg shadow-sm border border-black/5 dark:border-white/10">
                                            <span className="text-2xl">🧠</span>
                                        </div>
                                        <span className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">GEMINI 2.5 FLASH</span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                        Multimodal vision at the edge.
                                    </h3>

                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                                        This isn't just image generation; it's visual translation.
                                        We utilize <strong>Gemini 2.5 Flash</strong> not only for its speed but for its profound understanding of spatial intent.
                                        The model acts as a "creative co-pilot," interpreting the crude structural lines of a sketch and texturing them with high-fidelity details that respect the original perspective.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/40 dark:border-white/5">
                                            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                                                &lt; 500ms
                                            </div>
                                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Time to First Token
                                            </div>
                                        </div>
                                        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/40 dark:border-white/5">
                                            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                                                1M+
                                            </div>
                                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Context Window
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400 mb-6 font-mono">03. Infrastructure</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {/* Card 1: Vercel */}
                                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5 relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center mb-4 shadow-sm text-xl">
                                            ▲
                                        </div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Vercel Edge Functions</h4>
                                        <p className="text-sm text-gray-500">
                                            The application logic resides on Vercel's Edge Network, ensuring that the handshake between the user and the AI model occurs as close to the user as possible.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2: Firebase */}
                                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5 relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                                            🔥
                                        </div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Firebase</h4>
                                        <p className="text-sm text-gray-500">
                                            Real-time session management and history sync. Handles authentication, user quotas, and live updates across all devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400 mb-6 font-mono">04. User Interface</h2>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Distraction-free canvas.</h3>

                            {/* UI Mockup Art - CSS Only */}
                            <div className="w-full h-[16rem] sm:h-auto sm:aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden shadow-inner flex flex-col mb-8">

                                {/* Mobile Simplified Interface - Optimized Abstract City */}
                                <div className="flex sm:hidden flex-col bg-white dark:bg-gray-950 h-full w-full relative">
                                    {/* Header */}
                                    <div className="h-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex items-center px-6 justify-between shadow-sm z-10 sticky top-0">
                                         <div className="space-y-0.5">
                                            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Target Architecture</div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-gray-100">Cyberpunk Metropolis</div>
                                         </div>
                                         <div className="flex gap-1">
                                             <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                             <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                                             <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                         </div>
                                    </div>
                                    
                                    {/* Canvas Content */}
                                    <div className="flex-1 relative bg-gray-900 w-full overflow-hidden group">
                                          {/* Starry Night */}
                                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-gray-900 to-gray-900"></div>
                                          
                                          {/* Cityscape Container */}
                                          <div className="absolute bottom-0 inset-x-0 h-2/3 flex items-end justify-center px-4 gap-1 transform translate-y-2">
                                              
                                              {/* Left Group */}
                                              <div className="w-8 h-16 bg-fuchsia-900/40 border-t border-fuchsia-500/30 rounded-t-sm relative">
                                                 <div className="absolute top-2 left-1 right-1 h-0.5 bg-fuchsia-500/50"></div>
                                              </div>
                                              <div className="w-10 h-24 bg-purple-900/50 border-t border-purple-500/30 rounded-t-sm relative flex flex-col items-center pt-2 gap-1.5">
                                                  <div className="w-0.5 h-3 bg-fuchsia-400/50 -mt-5"></div> {/* Antenna */}
                                                  <div className="w-6 h-0.5 bg-purple-400/30"></div>
                                                  <div className="w-6 h-0.5 bg-purple-400/30"></div>
                                                  <div className="w-6 h-0.5 bg-purple-400/30"></div>
                                              </div>

                                              {/* Center Tower (Hero) */}
                                              <div className="w-16 h-36 bg-gradient-to-b from-indigo-800/60 to-purple-900/60 border-t border-l border-r border-indigo-400/30 rounded-t-lg relative flex flex-col items-center pt-4 backdrop-blur-sm z-10 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                                                   {/* Spire */}
                                                   <div className="absolute -top-6 w-0.5 h-6 bg-indigo-400/80 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                                                   <div className="absolute -top-1 w-1 h-1 bg-red-500 rounded-full animate-pulse shadow-[0_0_5px_red]"></div>

                                                   {/* Windows Grid */}
                                                   <div className="grid grid-cols-2 gap-x-2 gap-y-3 w-8">
                                                       <div className="h-1.5 w-full bg-indigo-300/80 shadow-[0_0_5px_rgba(165,180,252,0.8)]"></div>
                                                       <div className="h-1.5 w-full bg-indigo-300/40"></div>
                                                       <div className="h-1.5 w-full bg-indigo-300/40"></div>
                                                       <div className="h-1.5 w-full bg-indigo-300/80 shadow-[0_0_5px_rgba(165,180,252,0.8)]"></div>
                                                        <div className="h-1.5 w-full bg-indigo-300/60"></div>
                                                       <div className="h-1.5 w-full bg-indigo-300/40"></div>
                                                   </div>
                                              </div>

                                              {/* Right Group */}
                                              <div className="w-12 h-28 bg-blue-900/50 border-t border-blue-500/30 rounded-t-sm relative">
                                                   <div className="absolute top-3 right-2 w-1 h-1 bg-yellow-400/80 rounded-full shadow-[0_0_5px_yellow]"></div>
                                                   <div className="mt-4 mx-auto w-8 space-y-2">
                                                        <div className="h-px w-full bg-blue-400/20"></div>
                                                        <div className="h-px w-full bg-blue-400/20"></div>
                                                        <div className="h-px w-full bg-blue-400/20"></div>
                                                   </div>
                                              </div>
                                              <div className="w-8 h-12 bg-cyan-900/40 border-t border-cyan-500/30 rounded-t-sm"></div>
                                          </div>

                                          {/* Fog/Glow at bottom */}
                                           <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-fuchsia-900/60 via-purple-900/20 to-transparent"></div>

                                           {/* Controls Floating Bar (Simplified) */}
                                           <div className="absolute top-6 left-6 flex items-center justify-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg w-auto">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_lime]"></div>
                                                <span className="text-[9px] font-mono text-white/80 tracking-widest">RENDERING...</span>
                                           </div>
                                    </div>
                                </div>

                                {/* Desktop Fake Browser Toolbar */}
                                <div className="hidden sm:flex h-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 items-center px-4 gap-2 rounded-t-xl">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    <div className="ml-4 w-60 h-4 bg-gray-100 dark:bg-gray-700 rounded-full opacity-50"></div>
                                </div>

                                {/* App Interface (Desktop) */}
                                <div className="hidden sm:flex flex-1 relative rounded-b-xl overflow-hidden shadow-sm">
                                    {/* Toolbar */}
                                    <div className="w-14 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-4 gap-3 z-10">
                                        <div className="w-8 h-8 rounded-lg bg-fuchsia-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-fuchsia-500/20 mb-2">AI</div>
                                        <div className="w-6 h-px bg-gray-200 dark:bg-gray-700 mb-2"></div>
                                        <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-800 dark:text-white">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </div>
                                        <div className="w-8 h-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center text-gray-400 transition-colors">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                        </div>
                                    </div>

                                    {/* Canvas Area */}
                                    <div className="flex-1 bg-white dark:bg-gray-900 relative flex flex-col">
                                        {/* Top Control Bar */}
                                        <div className="h-12 border-b border-gray-100 dark:border-gray-800 flex items-center px-4 justify-between bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10">
                                            <div className="flex gap-2">
                                                <div className="px-3 py-1 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/20 text-[10px] font-medium text-fuchsia-600 dark:text-fuchsia-300 border border-fuchsia-100 dark:border-fuchsia-800/50">Prompt: Cyberpunk City</div>
                                            </div>
                                            <div className="h-6 px-3 rounded bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                                                Generate
                                            </div>
                                        </div>

                                        {/* Workspace */}
                                        <div className="flex-1 relative flex items-center justify-center bg-gray-50/30 dark:bg-black/20 p-8">
                                            {/* Dotted Grid Background */}
                                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                                            {/* Drawing Board */}
                                            <div className="w-full max-w-md aspect-video bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden group">
                                                {/* Sketch Lines - City Skyline */}
                                                <svg className="absolute inset-0 w-full h-full text-gray-400 dark:text-gray-600 p-6" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    {/* Back Layer */}
                                                    <path d="M20,110 L20,60 L40,60 L40,80 L60,80 L60,110" className="opacity-30" />
                                                    <path d="M140,110 L140,70 L160,70 L160,50 L180,50 L180,110" className="opacity-30" />

                                                    {/* Front Layer */}
                                                    <path d="M30,110 L30,50 L50,50 L50,110" />
                                                    <path d="M55,110 L55,30 L85,30 L85,110" />
                                                    <path d="M90,110 L90,60 L110,60 L110,110" />
                                                    <path d="M115,110 L115,20 L135,20 L135,110" />

                                                    {/* Details */}
                                                    <line x1="60" y1="35" x2="80" y2="35" className="opacity-50" />
                                                    <line x1="60" y1="40" x2="80" y2="40" className="opacity-50" />

                                                    {/* Moon */}
                                                    <circle cx="160" cy="25" r="8" />
                                                </svg>

                                                {/* Scanning Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-transparent h-1/4 w-full animate-[scan_3s_linear_infinite] border-b border-fuchsia-500/30"></div>

                                                {/* Result Overlay */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent"></div>
                                                    {/* Cyberpunk Glows */}
                                                    <div className="absolute bottom-10 left-[25%] w-12 h-32 bg-fuchsia-500/20 blur-xl"></div>
                                                    <div className="absolute bottom-10 right-[35%] w-8 h-40 bg-cyan-400/20 blur-xl"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Vector sketching tools",
                                    "Real-time AI generation",
                                    "Style presets",
                                    "History & versioning",
                                    "Mobile responsive canvas",
                                    "Export to SVG/PNG"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center p-3">
                                        <span className="mr-3 text-fuchsia-500 font-bold px-2 py-0.5 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded text-xs">OK</span>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="md:col-span-4 space-y-8">
                        <div className="sticky top-32">
                            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-6">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Next.js", "Vercel", "Gemini 2.5", "Tailwind CSS"].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-lg text-xs font-semibold text-gray-600 dark:text-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Repository</h3>
                                    <a href="https://github.com/xiandew/xiandewen.com/tree/master/apps/pareidolia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-fuchsia-600 transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" /></svg>
                                        <span>apps/pareidolia</span>
                                    </a>
                                </div>

                                <div className="hidden sm:block pt-6 border-t border-gray-200 dark:border-white/10">
                                    {/* Link to Vercel deployment */}
                                    <a
                                        href="https://pareidolia.xiandewen.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full px-6 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        <span>Launch Experiment</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
                href="https://pareidolia.xiandewen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-xl font-bold shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
                <span>Launch Experiment</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
        </div>
    </div>
    )
}
