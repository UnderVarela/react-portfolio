import { useState } from 'react'
import { Home, Authetication } from './components'

function PortfolioApp () {
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
