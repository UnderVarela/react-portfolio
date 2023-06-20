import { useContext } from 'react'
import { Navbar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export function MainTemplate () {
  const { _signOut, uid } = useContext(UserContext)
  return (
    <>
      <Navbar onSignOut={_signOut} cod={uid} />
      <main className='flex-1 p-4'>
        <Outlet />
      </main>
      <footer className='flex justify-between w-screen p-2 text-white bg-gray-800'>Xurxo</footer>
    </>
  )
}
