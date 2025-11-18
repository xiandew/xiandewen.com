import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import LoginPage from './pages/LoginPage'
import { onAuthChange } from './firebase'
import { LoadingProvider } from './contexts/LoadingContext'

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthChange((currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <LoadingProvider>
      <BrowserRouter basename="/customer-treatments-management">
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
          <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" replace />} />
          <Route path="/new" element={user ? <FormPage /> : <Navigate to="/login" replace />} />
          <Route path="/view" element={user ? <FormPage /> : <Navigate to="/login" replace />} />
          <Route path="/edit" element={user ? <FormPage /> : <Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  )
}
