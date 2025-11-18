import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TreatmentsTable from '../components/TreatmentsTable'
import { getTreatments, logOut, getCurrentUser } from '../firebase'

export default function HomePage() {
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const user = getCurrentUser()

  useEffect(() => {
    fetchItems()
  }, [])

  async function fetchItems() {
    const list = await getTreatments()
    setItems(list)
  }

  function handleEdit(item) {
    navigate('/edit', { state: { item } })
  }

  function handleAddNew() {
    navigate('/new')
  }

  async function handleSignOut() {
    try {
      await logOut()
      navigate('/login')
    } catch (error) {
      alert('Failed to sign out')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white shadow rounded p-4 sm:p-6">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">Customer Treatments Management</h1>
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

        <TreatmentsTable items={items} onEdit={handleEdit} />
      </div>
    </div>
  )
}
