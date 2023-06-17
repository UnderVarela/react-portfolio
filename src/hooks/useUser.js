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
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      clone.user = userCredential.user
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

  async function _onAuthStateChanged () {
    const clone = structuredClone(initivalValue)
    try {
      const user = await new Promise((resolve, reject) => {
        // Con un observador, te aseguras de que el objeto Auth no esté en un estado intermedio, como la inicialización, cuando obtengas el usuario actual.
        unsubscribe.current = onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              // console.log(`%cUser: ${JSON.stringify(user)}`, 'font-size: 1.4em;color: yellow; background-color: black')
              resolve(user)
            }
          },
          (e) => reject(e)
        )
      })
      clone.user = user
    } catch (error) {
      clone.error = error
    } finally {
      setUser(clone)
    }
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
    user: user.user
  }
}
