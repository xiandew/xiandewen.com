// Firebase helper - fill in your config values and enable Firestore in the project
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBArXLKDKXAFm9ZwRdZAzQISw9N3MLpM8s",
  authDomain: "xr-customer-treatments.firebaseapp.com",
  projectId: "xr-customer-treatments",
  storageBucket: "xr-customer-treatments.firebasestorage.app",
  messagingSenderId: "133660412526",
  appId: "1:133660412526:web:d62090bd2845050a92347f",
  measurementId: "G-M6GFV694VW"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const colRef = collection(db, 'treatments')

// Auth functions
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error) {
    console.error('Error signing in with Google:', error)
    throw error
  }
}

export async function logOut() {
  try {
    await signOut(auth)
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
}

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback)
}

export function getCurrentUser() {
  return auth.currentUser
}

export async function addTreatment(data) {
  const user = getCurrentUser()
  const docRef = await addDoc(colRef, {
    ...data,
    userId: user?.uid,
    userEmail: user?.email,
    createdAt: new Date().toISOString()
  })
  return docRef.id
}

export async function updateTreatment(id, data) {
  const d = doc(db, 'treatments', id)
  await updateDoc(d, { ...data, updatedAt: new Date().toISOString() })
}

export async function deleteTreatment(id) {
  const d = doc(db, 'treatments', id)
  // Soft delete: mark as deleted with timestamp
  await updateDoc(d, { 
    deletedAt: new Date().toISOString(),
    deletedBy: getCurrentUser()?.email
  })
}

export async function getTreatments() {
  const snap = await getDocs(colRef)
  const list = []
  snap.forEach(docSnap => {
    const data = docSnap.data()
    // Only include non-deleted records
    if (!data.deletedAt) {
      list.push({ id: docSnap.id, ...data })
    }
  })
  return list
}

export { db, auth }
