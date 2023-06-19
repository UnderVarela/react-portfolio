import { CustomButton } from '../components'
import { auth } from '../helpers/firebase'
import { useCloudFirestore } from '../hooks/useCloudFirestore'
import { useUser } from '../hooks/useUser'

export function HomePage () {
  const { _signOut, email } = useUser(auth)
  const { docs } = useCloudFirestore('workexperiences')
  const handleClick = () => {
    _signOut()
  }
  return (
    <div className='container p-4 mx-auto'>
      <h1 className='mb-4 text-3xl font-bold text-center'>Mi portafolio</h1>
      {email && <p className='mb-8 text-lg text-center'>Bienvenido {email} <CustomButton onClick={handleClick}>Cerrar sesión</CustomButton></p>}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {
          docs?.map(item => (
            <div key={item.idDoc} className='p-4 bg-white rounded-lg shadow-md'>
              <h2 className='mb-2 text-xl font-bold'>{item.titulo}</h2>
              <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac consequat mi.</p>
            </div>
          ))
        }
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
