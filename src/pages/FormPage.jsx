import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import TreatmentForm from '../components/TreatmentForm'
import { addTreatment, updateTreatment, deleteTreatment } from '../firebase'

export default function FormPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const editingItem = location.state?.item

  async function handleSave(data) {
    if (editingItem) {
      await updateTreatment(editingItem.id, data)
    } else {
      await addTreatment(data)
    }
    navigate('/')
  }

  function handleCancel() {
    navigate('/')
  }

  async function handleDelete() {
    if (editingItem) {
      try {
        await deleteTreatment(editingItem.id)
        navigate('/')
      } catch (error) {
        alert('Failed to delete customer')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white shadow rounded p-4 sm:p-6">
        <div className="mb-6 sm:mb-8">
          <button
            type="button"
            onClick={handleCancel}
            className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-900"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to List
          </button>
        </div>

        <TreatmentForm
          initialData={editingItem}
          onCancel={handleCancel}
          onSave={handleSave}
          onDelete={editingItem ? handleDelete : undefined}
        />
      </div>
    </div>
  )
}
