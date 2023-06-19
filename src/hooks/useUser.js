import { useEffect, useRef, useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'

const initivalValue = JSON.parse(import.meta.env.VITE_INITIAL_VALUE_USER)

export function useUser (auth) {
  const [user, setUser] = useState(initivalValue)
  const unsubscribe = useRef()

  async function _signInWithEmailAndPassword (email = 'info@webferrol.com', password = 'Tq0xuxvBMs') {
    const clone = structuredClone(initivalValue)
    clone.isLoading = true
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      clone.user = { uid: user.uid, email: user.email }
    } catch (error) {
      clone.error = error
    } finally {
      clone.isLoading = false
      setUser(clone)
    }
  }

  async function _signOut () {
    const clone = structuredClone(initivalValue)
    clone.isLoading = true
    try {
      await signOut(auth)
    } catch (error) {
      clone.error = error
    } finally {
      clone.isLoading = false
      setUser(clone)
    }
  }

  function _onAuthStateChanged () {
    unsubscribe.current = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const clone = structuredClone(initivalValue)
          clone.user = { uid: user.uid, email: user.email }
          // console.table(clone.user)
          setUser(clone)
        }
      }
    )
  }

  useEffect(() => {
    _onAuthStateChanged()
    return unsubscribe.current
  }, [])

  return {
    _signInWithEmailAndPassword,
    _signOut,
    error: user.error,
    isLoading: user.isLoading,
    // user: user.user,
    email: user.user.email,
    uid: user.user.uid
  }
}
