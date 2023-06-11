import { useState } from 'react'
import { Home, Authentication } from './components'
function PortfolioApp () {
  const [state, setState] = useState({
    isLogin: false,
    user: null
  })

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
