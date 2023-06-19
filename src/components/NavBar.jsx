import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
export const Navbar = ({ navTitle = 'Portafolio' }) => {
  return (
    <nav className='flex justify-between w-screen p-4 bg-gray-800'>
      <div className='flex items-center flex-shrink-0 mr-6 text-white'>
        <span className='text-xl font-semibold tracking-tight'>{navTitle}</span>
      </div>
      <div className='flex items-center'>
        {/* Add your navbar links here */}
        <NavLink
          to='/'
          className={({ isActive, isPending }) => `mr-4 ${isActive ? 'text-blue-200' : 'text-white'} hover:text-gray-400`}
        >
          Home
        </NavLink>
        <NavLink
          to='/login'
          className={({ isActive, isPending }) => `mr-4 ${isActive ? 'text-blue-200' : 'text-white'} hover:text-gray-400`}
        >
          Login
        </NavLink>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  navTitle: PropTypes.string
}
