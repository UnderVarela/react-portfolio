import { useEffect, useState } from 'react'
import { Home, Authentication } from './components'
import { auth, _onAuthStateChanged } from './helpers/auth_signin_password'
function PortfolioApp () {
  const [state, setState] = useState({
    isLogin: false,
    user: null
  })

  useEffect(() => {
    console.log('Portfolio')
    _onAuthStateChanged(auth).then(user => {
      console.log('usuario', user)
      if (user) {
        setState({
          isLogin: true,
          user
        })
      }
    })
  }, [])

  const { isLogin, user } = state

  const handleAuthentication = (user) => {
    console.log('Mi usuario', user)
    setState({
      isLogin: true,
      user
    })
  }

  const handleSignOut = (payload) => {
    setState(payload)
  }
  return (
    <>
      {
      isLogin
        ? <Home onSignOut={handleSignOut} user={user} />
        : <Authentication onAuthentication={handleAuthentication} className='p-5 border rounded shadow-xl w-96' />
      }
    </>
  )
}

export default PortfolioApp
