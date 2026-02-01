import Link from "next/link"

export default function BookingSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Open Booking
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade appointment booking platform with multi-tenant architecture
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Project Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A comprehensive SaaS booking platform that enables businesses to manage appointments,
            services, and customer relationships. Built with a modern tech stack featuring Next.js,
            Better Auth, and Material-UI, deployed on Cloudflare Workers for global performance.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            Key Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Multi-tenant architecture supporting multiple businesses</li>
            <li>Public booking pages for customer self-scheduling</li>
            <li>Drag-and-drop calendar interface for appointment management</li>
            <li>Service catalog with pricing and duration management</li>
            <li>Customer relationship management (CRM)</li>
            <li>Real-time availability checking</li>
            <li>Email notifications and reminders</li>
            <li>Business analytics and reporting</li>
            <li>Timezone-aware scheduling</li>
            <li>Mobile-responsive design</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-semibold">
              Next.js 15
            </span>
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-lg font-semibold">
              React 18
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg font-semibold">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-lg font-semibold">
              Better Auth
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg font-semibold">
              Material-UI
            </span>
            <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-lg font-semibold">
              Turso (LibSQL)
            </span>
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-lg font-semibold">
              Cloudflare Workers
            </span>
            <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-lg font-semibold">
              Turborepo
            </span>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            Architecture Highlights
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Monorepo structure with frontend and backend separation</li>
            <li>Edge-first deployment on Cloudflare&apos;s global network</li>
            <li>Database-per-tenant isolation for security</li>
            <li>Modern authentication with Better Auth</li>
            <li>Optimistic UI updates for instant feedback</li>
            <li>Server-side rendering for SEO and performance</li>
          </ul>

          <div className="mt-8 flex gap-4">
            <a
              href="https://openbooking.xiandewen.com/business/test-business-1"
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
