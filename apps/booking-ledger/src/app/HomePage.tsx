"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import CustomersTable from "@/components/CustomersTable"
import UserProfile from "@/components/UserProfile"
import { getTreatments, type Treatment, IS_DEMO_MODE, getUserTreatmentCount, getCurrentUser } from "@/lib/firebase"
import { useLoading } from "@/contexts/LoadingContext"

export default function HomePage() {
  const [items, setItems] = useState<Treatment[]>([])
  const [userRecordCount, setUserRecordCount] = useState(0)
  const router = useRouter()
  const { showLoading, hideLoading } = useLoading()

  useEffect(() => {
    fetchItems()
    if (IS_DEMO_MODE) {
      checkUserRecordCount()
    }
  }, [])

  async function fetchItems() {
    try {
      showLoading()
      const list = await getTreatments()
      setItems(list)
    } catch (error: any) {
      console.error("Failed to fetch treatments:", error)
      // Don't show alert for permission errors - user will be redirected to login
      if (error.code !== "permission-denied") {
        alert("Failed to load treatments")
      }
    } finally {
      hideLoading()
    }
  }

  async function checkUserRecordCount() {
    const user = getCurrentUser()
    if (user) {
      const count = await getUserTreatmentCount(user.uid)
      setUserRecordCount(count)
    }
  }

  function handleView(item: Treatment) {
    router.push(`/view?id=${item.id}`)
  }

  function handleEdit(item: Treatment) {
    router.push(`/edit?id=${item.id}`)
  }

  function handleAddNew() {
    if (IS_DEMO_MODE && userRecordCount >= 1) {
      alert("Demo limit reached: You can only create one record in demo mode. This limitation exists to keep the demo clean and accessible for everyone.")
      return
    }
    router.push("/new")
  }

  return (
    <>
      {IS_DEMO_MODE && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-amber-800">
                <strong className="font-semibold">Demo Mode:</strong> You can create one record to try out the app. This is a public demo environment.
                {userRecordCount >= 1 && " You have reached the demo limit."}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-gray-50 px-3 sm:px-6 pt-6 pb-24">
        <div className="max-w-6xl mx-auto sm:bg-white sm:shadow rounded p-4 sm:p-6">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold text-gray-900">
                Customer Treatments Management
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all customer treatments including their details and pricing.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                onClick={handleAddNew}
                className="w-full sm:w-auto rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add New
              </button>
            </div>
          </div>

          <CustomersTable items={items} onView={handleView} onEdit={handleEdit} />
        </div>
      </div>
      <UserProfile />
    </>
  )
}
