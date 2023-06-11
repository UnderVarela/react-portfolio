import PropTypes from 'prop-types'
import { CustomButton } from './CustomButton'
import { auth, _signOut } from '../helpers/auth_signin_password'
export function Home ({ user, onSignOut }) {
  const { email } = user
  const handleClick = () => {
    _signOut(auth).then(() => {
      onSignOut({
        isLogin: false,
        user: null
      })
    })
  }
  return (
    <div className='container p-4 mx-auto'>
      <h1 className='mb-4 text-3xl font-bold text-center'>Mi portafolio</h1>
      <p className='mb-8 text-lg text-center'>Bienvenido {email} <CustomButton onClick={handleClick}>Cerrar sesión</CustomButton></p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='p-4 bg-white rounded-lg shadow-md'>
          <h2 className='mb-2 text-xl font-bold'>Artículo 1</h2>
          <p className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quam ex! Assumenda quod explicabo, veniam rem nihil tempora incidunt perspiciatis facilis pariatur, voluptatum cum unde repudiandae commodi maxime impedit itaque.
          </p>
        </div>
        <div className='p-4 bg-white rounded-lg shadow-md'>
          <h2 className='mb-2 text-xl font-bold'>Artículo 2</h2>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac consequat mi.</p>
        </div>
        <div className='p-4 bg-white rounded-lg shadow-md'>
          <h2 className='mb-2 text-xl font-bold'>Artículo 3</h2>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac consequat mi.</p>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  user: PropTypes.object,
  onSignOut: PropTypes.func
}
