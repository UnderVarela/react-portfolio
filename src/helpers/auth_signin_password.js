// eslint-disable-next-line no-unused-vars
import { app } from './firebase'
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(app)

async function _signInWithEmailAndPassword (auth, email = 'info@webferrol.com', password = 'Tq0xuxvBMs') {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const { user } = userCredential
    return user
  } catch (error) {
    const { code, message } = error
    return { code, message }
  }
}

async function _signOut (auth) {
  try {
    await signOut(auth)
  } catch (error) {
    const { code, message } = error
    return { code, message }
  }
}

async function _onAuthStateChanged (auth) {
  // -> Resuesta positiva(resolve), negativa(reject) <- //
  return await new Promise((resolve, reject) => {
    // -> Observador que vigilia para que se cierre automatico la sesion pasado un tiempo o cuando salga de la sesion/cierra pestaña <- //
    const unsuscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // console.log(user)
          // this.user = { email: user.email, uid: user.uid };
          // return user
        } else {
          // return null
        }
        resolve(user)
      },
      (e) => reject(e)
    )
    unsuscribe()
  })
}

export {
  _onAuthStateChanged,
  _signInWithEmailAndPassword,
  _signOut,
  auth
}
