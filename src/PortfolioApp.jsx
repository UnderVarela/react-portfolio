import { useState } from 'react'
import { Home, Authetication } from './components'
import { auth, _signInWithEmailAndPassword, _signOut } from './helpers/auth_signin_password'

function PortfolioApp () {
  _signInWithEmailAndPassword(auth).then()
  _signOut(auth).then()
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      {
      isLogin
        ? <Home />
        : <Authetication className='w-1/2 p-5 border rounded shadow-xl min-w-max' />
      }
    </>
  )
}

export default PortfolioApp
