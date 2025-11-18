import React from 'react'

export default function LoadingIndicator({ isLoading }) {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white"></div>
        <p className="mt-4 text-white font-medium">Loading...</p>
      </div>
    </div>
  )
}
