import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomersTable from '../components/CustomersTable'
import UserProfile from '../components/UserProfile'
import { getTreatments } from '../firebase'
import { useLoading } from '../contexts/LoadingContext'

export default function HomePage() {
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const { showLoading, hideLoading } = useLoading()

  useEffect(() => {
    fetchItems()
  }, [])

  async function fetchItems() {
    try {
      showLoading()
      const list = await getTreatments()
      setItems(list)
    } catch (error) {
      console.error('Failed to fetch treatments:', error)
      // Don't show alert for permission errors - user will be redirected to login
      if (error.code !== 'permission-denied') {
        alert('Failed to load treatments')
      }
    } finally {
      hideLoading()
    }
  }

  function handleView(item) {
    navigate('/view', { state: { item, viewMode: true } })
  }

  function handleEdit(item) {
    navigate('/edit', { state: { item } })
  }

  function handleAddNew() {
    navigate('/new')
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 px-3 sm:px-6 pt-6 pb-24">
        <div className="max-w-6xl mx-auto sm:bg-white sm:shadow rounded p-4 sm:p-6">
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

          <CustomersTable items={items} onView={handleView} onEdit={handleEdit} />
        </div>
      </div>
      <UserProfile />
    </>
  )
}
