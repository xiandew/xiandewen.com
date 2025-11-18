import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import TreatmentForm from '../components/TreatmentForm'
import { addTreatment, updateTreatment, deleteTreatment } from '../firebase'
import { useLoading } from '../contexts/LoadingContext'

export default function FormPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const editingItem = location.state?.item
  const { showLoading, hideLoading } = useLoading()

  async function handleSave(data) {
    try {
      showLoading()
      if (editingItem) {
        await updateTreatment(editingItem.id, data)
      } else {
        await addTreatment(data)
      }
      navigate('/')
    } catch (error) {
      console.error('Failed to save treatment:', error)
      alert('Failed to save treatment')
    } finally {
      hideLoading()
    }
  }

  function handleCancel() {
    navigate('/')
  }

  async function handleDelete() {
    if (editingItem) {
      try {
        showLoading()
        await deleteTreatment(editingItem.id)
        navigate('/')
      } catch (error) {
        console.error('Failed to delete customer:', error)
        alert('Failed to delete customer')
      } finally {
        hideLoading()
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      <div className="max-w-6xl mx-auto sm:bg-white sm:shadow rounded p-4 sm:p-6">
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
