// eslint-disable-next-line no-unused-vars
import { app } from './firebase'
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'

export const auth = getAuth()

export async function _signInWithEmailAndPassword (auth, email = 'info@webferrol.com', password = 'Tq0xuxvBMs') {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const { user } = userCredential
    return user
  } catch (error) {
    const { code, message } = error
    return { code, message }
  }
}

export async function _signOut (auth) {
  try {
    await signOut(auth)
  } catch (error) {
    const { code, message } = error
    return { code, message }
  }
}
