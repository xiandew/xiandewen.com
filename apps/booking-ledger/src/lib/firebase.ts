// Firebase helper - fill in your config values and enable Firestore in the project
import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBArXLKDKXAFm9ZwRdZAzQISw9N3MLpM8s",
  authDomain: "xr-customer-treatments.firebaseapp.com",
  projectId: "xr-customer-treatments",
  storageBucket: "xr-customer-treatments.firebasestorage.app",
  messagingSenderId: "133660412526",
  appId: "1:133660412526:web:d62090bd2845050a92347f",
  measurementId: "G-M6GFV694VW",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const colRef = collection(db, "treatments")
const usersColRef = collection(db, "users")

// Types
export interface Treatment {
  id?: string
  fullName: string
  contact: string
  rows: TreatmentRow[]
  userId?: string
  userEmail?: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
  deletedBy?: string
}

export interface TreatmentRow {
  treatment: string
  chargedPrice: string
  quotePrice: string
  note: string
  createdAt?: string
  deletedAt?: string
}

// Auth functions
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user

    // Check if user is authorized
    const isAuthorized = await checkUserAuthorization(user.email!)

    if (!isAuthorized) {
      // Sign out immediately if not authorized
      await signOut(auth)
      const error = new Error(
        "Unauthorized: Your account is not authorized to access this application.",
      )
      ;(error as any).code = "auth/unauthorized"
      throw error
    }

    return user
  } catch (error: any) {
    // If already signed out or auth error, just rethrow
    if (error.code === "auth/unauthorized" || error.code === "auth/popup-closed-by-user") {
      throw error
    }
    console.error("Error signing in with Google:", error)
    throw error
  }
}

// Check if user's email is in the authorized users collection
export async function checkUserAuthorization(email: string) {
  try {
    // Check if document with email as ID exists
    const userDocRef = doc(db, "users", email)
    const userDoc = await getDoc(userDocRef)

    return userDoc.exists()
  } catch (error) {
    console.error("Error checking user authorization:", error)
    return false
  }
}

// Get all authorized users
export async function getAllAuthorizedUsers() {
  try {
    const snap = await getDocs(usersColRef)
    const users: any[] = []
    snap.forEach((docSnap) => {
      users.push({ id: docSnap.id, ...docSnap.data() })
    })
    return users
  } catch (error) {
    console.error("Error getting authorized users:", error)
    throw error
  }
}

export async function logOut() {
  try {
    await signOut(auth)
  } catch (error) {
    console.error("Error signing out:", error)
    throw error
  }
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Check if user is authorized before passing to callback
      const isAuthorized = await checkUserAuthorization(user.email!)
      if (!isAuthorized) {
        // Sign out silently if not authorized
        await signOut(auth)
        callback(null)
        return
      }
    }
    callback(user)
  })
}

export function getCurrentUser() {
  return auth.currentUser
}

export async function addTreatment(data: Omit<Treatment, "id">) {
  const user = getCurrentUser()
  const docRef = await addDoc(colRef, {
    ...data,
    userId: user?.uid,
    userEmail: user?.email,
    createdAt: new Date().toISOString(),
  })
  return docRef.id
}

export async function updateTreatment(id: string, data: Partial<Treatment>) {
  const d = doc(db, "treatments", id)
  await updateDoc(d, { ...data, updatedAt: new Date().toISOString() })
}

export async function deleteTreatment(id: string) {
  const d = doc(db, "treatments", id)
  // Soft delete: mark as deleted with timestamp
  await updateDoc(d, {
    deletedAt: new Date().toISOString(),
    deletedBy: getCurrentUser()?.email,
  })
}

export async function getTreatments() {
  const snap = await getDocs(colRef)
  const list: Treatment[] = []
  snap.forEach((docSnap) => {
    const data = docSnap.data()
    // Only include non-deleted records
    if (!data.deletedAt) {
      list.push({ id: docSnap.id, ...data } as Treatment)
    }
  })
  return list
}

export { db, auth }
