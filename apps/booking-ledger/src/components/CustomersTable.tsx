"use client"

import type { Treatment } from "@/lib/firebase"

interface CustomersTableProps {
  items: Treatment[]
  onView: (item: Treatment) => void
  onEdit: (item: Treatment) => void
}

export default function CustomersTable({ items, onView, onEdit }: CustomersTableProps) {
  if (!items || items.length === 0)
    return <div className="text-center text-gray-500 py-8">No records yet.</div>

  // Sort items by fullName alphabetically (case-insensitive)
  const sortedItems = [...items].sort((a, b) => {
    const nameA = (a.fullName || "").toLowerCase()
    const nameB = (b.fullName || "").toLowerCase()
    return nameA.localeCompare(nameB)
  })

  return (
    <>
      {/* Mobile Card View */}
      <div className="mt-6 sm:hidden space-y-4">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onView(item)}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 truncate">{item.fullName}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.contact}</p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onEdit(item)
                }}
                className="ml-3 text-indigo-600 hover:text-indigo-900 text-sm font-medium whitespace-nowrap"
              >
                Edit
              </button>
            </div>
            <div className="text-xs text-gray-500">
              <span className="font-medium">Created by:</span> {item.userEmail || "N/A"}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="relative min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Full Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Contact
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Created By
                  </th>
                  <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedItems.map((item) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => onView(item)}
                  >
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      {item.fullName}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                      {item.contact}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                      {item.userEmail || "N/A"}
                    </td>
                    <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          onEdit(item)
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {item.fullName}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
