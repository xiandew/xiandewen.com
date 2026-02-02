import Link from "next/link"

export default function BookingSaaSPage() {
  return (
    <div className="min-h-screen bg-[#Fdfbf7] text-[#333333] font-sans selection:bg-[#E0E7FF]">
        {/* Header / Nav */}
       <header className="flex flex-row justify-between items-center mb-16 sm:mb-24 sticky top-0 z-50 bg-[#Fdfbf7]/80 backdrop-blur-md py-4 px-6 md:px-12">
          <div className="flex items-center gap-2">
             <Link href="/" className="font-bold text-lg hover:text-blue-600 transition-colors">Paul (Xiande) Wen</Link>
          </div>
          <nav>
            <ul className="flex gap-4 sm:gap-6 text-sm font-medium text-gray-500">
              <li>
                <Link href="/#work" className="hover:text-black transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">
                  Portfolio
                </Link>
              </li>
              <li>
                <a href="https://xiandew.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>

      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-20">
        
        {/* Title Section */}
        <div className="mb-12">
           <Link href="/#work" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-black mb-6 transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Work
          </Link>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-gray-900 mb-6">
            OpenBooking
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed">
            Enterprise-grade appointment booking platform with multi-tenant architecture.
          </p>
        </div>

        {/* Hero Image / Block */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] aspect-video w-full mb-16 flex items-center justify-center border border-gray-100 shadow-sm">
             <div className="text-center">
                 <span className="block text-8xl mb-4">🌱</span>
             </div>
        </div>

         {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Main Column */}
            <div className="md:col-span-2 space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        A comprehensive SaaS booking platform that enables businesses to manage appointments,
                        services, and customer relationships. Built with a modern tech stack featuring Next.js,
                        Better Auth, and Material-UI, deployed on Cloudflare Workers for global performance.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                    <ul className="space-y-3 text-gray-600">
                         {[
                            "Multi-tenant architecture supporting multiple businesses",
                            "Public booking pages for customer self-scheduling",
                            "Drag-and-drop calendar interface",
                            "Service catalog with pricing and duration management",
                            "Customer relationship management (CRM)",
                            "Real-time availability checking",
                            "Email notifications and reminders",
                            "Business analytics and reporting",
                            "Timezone-aware scheduling",
                            "Mobile-responsive design"
                         ].map((feature, i) => (
                            <li key={i} className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                         ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Architecture Highlights</h2>
                     <ul className="space-y-3 text-gray-600">
                         {[
                            "Monorepo structure with frontend and backend separation",
                            "Edge-first deployment on Cloudflare's global network",
                            "Database-per-tenant isolation for security",
                            "Modern authentication with Better Auth",
                            "Optimistic UI updates for instant feedback",
                            "Server-side rendering for SEO and performance"
                         ].map((feature, i) => (
                            <li key={i} className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-amber-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                <span>{feature}</span>
                            </li>
                         ))}
                    </ul>
                </section>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-8">
                 <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Next.js 15", "React 18", "TypeScript", "Better Auth", 
                            "Material-UI", "Turso (LibSQL)", "Cloudflare Workers", "Turborepo"
                        ].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
                                {tech}
                            </span>
                        ))}
                    </div>
                 </div>

                 <div className="pt-6 border-t border-gray-200">
                    <a
                      href="https://openbooking.xiandewen.com/business/test-business-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-6 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-transform hover:scale-[1.02]"
                    >
                      View Live Demo
                    </a>
                 </div>
            </div>

        </div>

      </div>
    </div>
  )
}
