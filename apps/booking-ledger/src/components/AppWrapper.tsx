"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { onAuthChange, type User } from "@/lib/firebase"
import { LoadingProvider } from "@/contexts/LoadingContext"
import LoadingIndicator from "@/components/LoadingIndicator"

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const unsubscribe = onAuthChange((currentUser) => {
      setUser(currentUser)
      setLoading(false)

      // Redirect logic
      if (!currentUser && pathname !== "/login") {
        router.push("/login")
      } else if (currentUser && pathname === "/login") {
        router.push("/")
      }
    })

    return () => unsubscribe()
  }, [router, pathname])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <LoadingProvider>
      <LoadingIndicator />
      {children}
    </LoadingProvider>
  )
}
