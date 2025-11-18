import React, { createContext, useContext, useState } from 'react'
import LoadingIndicator from '../components/LoadingIndicator'

const LoadingContext = createContext()

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)

  const showLoading = () => setIsLoading(true)
  const hideLoading = () => setIsLoading(false)

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children}
      <LoadingIndicator isLoading={isLoading} />
    </LoadingContext.Provider>
  )
}
