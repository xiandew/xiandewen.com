import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Xiande Wen</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="#projects"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl mb-6">
              Full Stack Developer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Building modern web applications with Next.js, React, and cloud technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Booking Ledger Project */}
            <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                  Booking Ledger
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Customer treatment management system with Firebase integration. Track
                  appointments, treatments, and customer information.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
                    Firebase
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
                    TypeScript
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://booking-ledger.xiandewen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition"
                  >
                    Live Demo
                  </a>
                  <Link
                    href="/projects/booking-ledger"
                    className="flex-1 text-center px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-sm font-medium rounded-md transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Open Booking Project */}
            <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                  Open Booking
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Enterprise SaaS booking platform with multi-tenant architecture. Drag-and-drop scheduling, service management, and customer CRM.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
                    Material-UI
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
                    Turso
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://openbooking.xiandewen.com/business/test-business-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition"
                  >
                    Live Demo
                  </a>
                  <Link
                    href="/projects/booking-saas"
                    className="flex-1 text-center px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-sm font-medium rounded-md transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Placeholder for future projects */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden opacity-60">
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Coming Soon
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  More exciting projects are in development.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden opacity-60">
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Coming Soon
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  More exciting projects are in development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm a full-stack developer specializing in modern web technologies. I build scalable,
            performant applications using Next.js, React, and serverless architectures. My focus is
            on creating intuitive user experiences backed by robust, maintainable code.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/xiandewen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2026 Xiandewen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
