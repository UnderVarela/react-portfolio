import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/NavBar'

export function MainTemplate () {
  return (
    <>
      <Navbar />
      <main className='flex-1 p-4'>
        <Outlet />
      </main>
      <footer className='flex justify-between w-screen p-2 text-white bg-gray-800'>Xurxo</footer>
    </>
  )
}
