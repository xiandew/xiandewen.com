export default function BookingLedgerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Booking Ledger
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Customer treatment management system with Firebase integration
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Project Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A comprehensive booking ledger application designed to help businesses manage customer
            treatments and appointments efficiently. Built with modern web technologies and deployed
            on Cloudflare Workers for optimal performance.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            Key Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Customer management with detailed treatment history</li>
            <li>Real-time data synchronization with Firebase Firestore</li>
            <li>Secure authentication with Google Sign-In</li>
            <li>Responsive design for desktop and mobile devices</li>
            <li>Treatment tracking with pricing and notes</li>
            <li>Soft delete functionality for data integrity</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-semibold">
              Next.js 15
            </span>
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-lg font-semibold">
              React 19
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg font-semibold">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-lg font-semibold">
              Firebase
            </span>
            <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-lg font-semibold">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-lg font-semibold">
              Cloudflare Workers
            </span>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://booking-ledger.xiandewen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              View Live Demo
            </a>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition"
            >
              ← Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
