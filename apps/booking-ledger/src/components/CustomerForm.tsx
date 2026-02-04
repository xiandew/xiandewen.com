"use client"

import React, { useEffect, useState } from "react"
import type { Treatment, TreatmentRow } from "@/lib/firebase"

interface CustomerFormProps {
  initialData?: Treatment
  onSave: (data: Omit<Treatment, "id">) => void
  onCancel: () => void
  onDelete?: () => void
  viewMode?: boolean
}

export default function CustomerForm({
  initialData,
  onSave,
  onCancel,
  onDelete,
  viewMode = false,
}: CustomerFormProps) {
  const [fullName, setFullName] = useState("")
  const [contact, setContact] = useState("")
  const [rows, setRows] = useState<TreatmentRow[]>([])
  const [showModal, setShowModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [modalData, setModalData] = useState<TreatmentRow>({
    treatment: "",
    chargedPrice: "",
    quotePrice: "",
    note: "",
  })

  useEffect(() => {
    if (initialData) {
      setFullName(initialData.fullName || "")
      setContact(initialData.contact || "")
      setRows(initialData.rows || [])
    }
  }, [initialData])

  function openAddModal() {
    setEditingIndex(null)
    setModalData({ treatment: "", chargedPrice: "", quotePrice: "", note: "" })
    setShowModal(true)
  }

  function openEditModal(index: number) {
    setEditingIndex(index)
    setModalData({ ...rows[index] })
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
    setEditingIndex(null)
    setModalData({ treatment: "", chargedPrice: "", quotePrice: "", note: "" })
  }

  function saveModalData() {
    if (editingIndex !== null) {
      setRows((r) => r.map((row, i) => (i === editingIndex ? { ...modalData } : row)))
    } else {
      // Add timestamp when creating new treatment record
      setRows((r) => [...r, { ...modalData, createdAt: new Date().toISOString() }])
    }
    closeModal()
  }

  function removeRow(index: number) {
    // Soft delete: mark treatment as deleted
    setRows((r) =>
      r.map((row, i) => (i === index ? { ...row, deletedAt: new Date().toISOString() } : row)),
    )
  }

  // Filter out deleted treatments for display, but keep them in data
  const activeRows = rows.filter((row) => !row.deletedAt)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // basic validation
    if (!fullName.trim()) return alert("Full Name required")
    onSave({ fullName, contact, rows })
  }

  function handleDeleteClick() {
    setShowDeleteConfirm(true)
  }

  function handleDeleteConfirm() {
    setShowDeleteConfirm(false)
    if (onDelete) {
      onDelete()
    }
  }

  function handleDeleteCancel() {
    setShowDeleteConfirm(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div>
          <h2 className="text-base/7 font-semibold text-gray-900">
            {viewMode
              ? "Customer Treatment Details"
              : initialData
                ? "Edit Customer Treatment"
                : "Add New Customer Treatment"}
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            {viewMode
              ? "View the customer details and treatments information."
              : "Enter the customer details and treatments information below."}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:gap-y-8 sm:grid-cols-6">
            <div className="col-span-1 sm:col-span-3">
              <label htmlFor="fullName" className="block text-sm/6 font-medium text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={viewMode}
                  className={`block w-full rounded-md px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 ${
                    viewMode
                      ? "bg-gray-100 cursor-not-allowed"
                      : "bg-gray-50 hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-600"
                  }`}
                />
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3">
              <label htmlFor="contact" className="block text-sm/6 font-medium text-gray-900">
                Contact
              </label>
              <div className="mt-2">
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  disabled={viewMode}
                  className={`block w-full rounded-md px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 ${
                    viewMode
                      ? "bg-gray-100 cursor-not-allowed"
                      : "bg-gray-50 hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-600"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900/10 py-12">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">Treatments</h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                {viewMode
                  ? "List of all treatments provided to the customer."
                  : "Add all treatments provided to the customer."}
              </p>
            </div>
            {!viewMode && (
              <button
                type="button"
                onClick={openAddModal}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 whitespace-nowrap"
              >
                Add Treatment
              </button>
            )}
          </div>

          {/* Mobile Card View */}
          <div className="mt-4 sm:hidden space-y-3">
            {activeRows.length === 0 ? (
              <div className="border border-gray-200 rounded-lg p-4 bg-white text-gray-500">
                No treatments added yet.
              </div>
            ) : (
              activeRows.map((row, idx) => {
                const originalIndex = rows.indexOf(row)
                return (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-gray-500">Treatment:</span>
                        <p className="text-sm font-medium text-gray-900">{row.treatment}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-xs font-medium text-gray-500">Quote:</span>
                          <p className="text-sm text-gray-900">{row.quotePrice}</p>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-gray-500">Charged:</span>
                          <p className="text-sm text-gray-900">{row.chargedPrice}</p>
                        </div>
                      </div>
                      {row.note && (
                        <div>
                          <span className="text-xs font-medium text-gray-500">Note:</span>
                          <p className="text-sm text-gray-700">{row.note}</p>
                        </div>
                      )}
                      {!viewMode && (
                        <div className="flex gap-2 pt-2 border-t border-gray-100">
                          <button
                            type="button"
                            onClick={() => openEditModal(originalIndex)}
                            className="flex-1 text-center px-3 py-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-900 bg-indigo-50 rounded-md"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => removeRow(originalIndex)}
                            className="flex-1 text-center px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-900 bg-red-50 rounded-md"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block mt-4">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-sm outline-1 outline-black/5 sm:rounded-lg">
                  <table className="relative min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Treatment
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Quote Price
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Charged Price
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Note
                        </th>
                        {!viewMode && (
                          <th scope="col" className="py-3.5 pr-4 pl-3 sm:pr-6">
                            <span className="sr-only">Actions</span>
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {activeRows.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-sm text-gray-500">
                            No treatments added yet.
                          </td>
                        </tr>
                      ) : (
                        activeRows.map((row, idx) => {
                          const originalIndex = rows.indexOf(row)
                          return (
                            <tr key={idx}>
                              <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                                {row.treatment}
                              </td>
                              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                                {row.quotePrice}
                              </td>
                              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                                {row.chargedPrice}
                              </td>
                              <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                                {row.note}
                              </td>
                              {!viewMode && (
                                <td className="py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6">
                                  <button
                                    type="button"
                                    onClick={() => openEditModal(originalIndex)}
                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => removeRow(originalIndex)}
                                    className="text-red-600 hover:text-red-900"
                                  >
                                    Remove
                                  </button>
                                </td>
                              )}
                            </tr>
                          )
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!viewMode && (
        <div className="border-t border-gray-900/10 pt-12 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-x-6">
          <div className="flex gap-3">
            {initialData && onDelete && (
              <button
                type="button"
                onClick={handleDeleteClick}
                className="w-full sm:w-auto text-center px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Delete Customer
              </button>
            )}
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-x-6">
            <button
              type="button"
              onClick={onCancel}
              className="hidden sm:block w-full sm:w-auto text-center px-3 py-2 text-sm/6 font-semibold text-gray-900 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {editingIndex !== null ? "Edit Treatment" : "Add Treatment"}
            </h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="modal-treatment" className="block text-sm/6 font-medium text-gray-900">
                  Treatment
                </label>
                <div className="mt-2">
                  <input
                    id="modal-treatment"
                    type="text"
                    value={modalData.treatment}
                    onChange={(e) => setModalData({ ...modalData, treatment: e.target.value })}
                    className="block w-full rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-quotePrice"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Quote Price
                </label>
                <div className="mt-2">
                  <input
                    id="modal-quotePrice"
                    type="text"
                    value={modalData.quotePrice}
                    onChange={(e) => setModalData({ ...modalData, quotePrice: e.target.value })}
                    className="block w-full rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-chargedPrice"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Charged Price
                </label>
                <div className="mt-2">
                  <input
                    id="modal-chargedPrice"
                    type="text"
                    value={modalData.chargedPrice}
                    onChange={(e) => setModalData({ ...modalData, chargedPrice: e.target.value })}
                    className="block w-full rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-note" className="block text-sm/6 font-medium text-gray-900">
                  Note
                </label>
                <div className="mt-2">
                  <textarea
                    id="modal-note"
                    rows={3}
                    value={modalData.note}
                    onChange={(e) => setModalData({ ...modalData, note: e.target.value })}
                    className="block w-full rounded-md bg-gray-50 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-x-6">
              <button
                type="button"
                onClick={closeModal}
                className="w-full sm:w-auto text-center px-3 py-2 text-sm/6 font-semibold text-gray-900 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveModalData}
                className="w-full sm:w-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {editingIndex !== null ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 max-w-md w-full">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Delete Customer</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Are you sure you want to delete <span className="font-semibold">{fullName}</span>?
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  This will mark the customer and all treatment records as deleted. The data will be
                  soft-deleted and can be recovered by administrators.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-x-3">
              <button
                type="button"
                onClick={handleDeleteCancel}
                className="w-full sm:w-auto text-center px-4 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md border border-gray-300 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="w-full sm:w-auto text-center px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
