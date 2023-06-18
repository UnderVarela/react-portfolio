import { CustomButton } from '../components'
import { auth } from '../helpers/firebase'
import { useUser } from '../hooks/useUser'

export function HomePage () {
  const { _signOut, user } = useUser(auth)
  const { email } = user || false
  const handleClick = () => {
    _signOut()
  }
  return (
    <div className='container p-4 mx-auto'>
      <h1 className='mb-4 text-3xl font-bold text-center'>Mi portafolio</h1>
      {email && <p className='mb-8 text-lg text-center'>Bienvenido {email} <CustomButton onClick={handleClick}>Cerrar sesión</CustomButton></p>}
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
