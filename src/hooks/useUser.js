import { useState } from 'react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export function useUser (auth, email, password) {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [isloading, setIsloading] = useState(false)

  const _signInWithEmailAndPassword = async (email, password) => {
    try {
      setIsloading(true)
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const { user } = userCredential
      // Signed in
      setError(null)
      setUser(user)
    } catch (setError) {
    } finally {
      setIsloading(false)
    }
  }

  const _signOut = () => {
    setIsloading(true)
    signOut(auth).then(() => {
      setError(null)
      setUser(null)
    })
      .catch(setError)
      .finally(() => setIsloading(false))
  }

  return {
    _signInWithEmailAndPassword,
    _signOut,
    error,
    isloading,
    user
  }
}
