import { useEffect, useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'

const initivalValue = JSON.parse(import.meta.env.VITE_INITIAL_VALUE_USER)

export function useUser (auth) {
  const [user, setUser] = useState(initivalValue)

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
    // -> Resuesta positiva(resolve), negativa(reject) <- //
    try {
      const user = await new Promise((resolve, reject) => {
        // -> Observador que vigilia para que se cierre automatico la sesion pasado un tiempo o cuando salga de la sesion/cierra pestaña <- //
        onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
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
  }, [])

  return {
    _signInWithEmailAndPassword,
    _signOut,
    error: user.error,
    isLoading: user.isLoading,
    user: user.user
  }
}
