import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import TreatmentForm from '../components/TreatmentForm'
import { addTreatment, updateTreatment, deleteTreatment } from '../firebase'
import { useLoading } from '../contexts/LoadingContext'

export default function FormPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const editingItem = location.state?.item
  const [viewMode, setViewMode] = useState(location.state?.viewMode || false)
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

  function handleEdit() {
    setViewMode(false)
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
        <div className="mb-6 sm:mb-8 flex justify-between items-center">
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
          
          {viewMode && (
            <button
              type="button"
              onClick={handleEdit}
              className="flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Edit
            </button>
          )}
        </div>

        <TreatmentForm
          initialData={editingItem}
          onCancel={handleCancel}
          onSave={handleSave}
          onDelete={editingItem ? handleDelete : undefined}
          viewMode={viewMode}
        />
      </div>
    </div>
  )
}
