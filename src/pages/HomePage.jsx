import { useLoaderData } from 'react-router-dom'
import { CustomButton } from '../components'
import { auth } from '../helpers/firebase'
// import { useCloudFirestore } from '../hooks/useCloudFirestore'
import { useUser } from '../hooks/useUser'

export function HomePage () {
  const { _signOut, email } = useUser(auth)
  // const { docs } = useCloudFirestore('workexperiences')
  const { docs } = useLoaderData()
  const handleClick = () => {
    _signOut()
  }

  return (
    <div className='container p-4 mx-auto'>
      <h1 className='mb-4 text-3xl font-bold text-center'>Mi portafolio</h1>
      {email && <p className='mb-8 text-lg text-center'>Bienvenido {email} <CustomButton onClick={handleClick}>Cerrar sesión</CustomButton></p>}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {
          docs?.map(({ idDoc, code, comments }) => (
            <div key={idDoc} className='p-4 bg-white rounded-lg shadow-md'>
              <h2 className='mb-2 text-xl font-bold'>{code}</h2>
              <section className='text-gray-700' dangerouslySetInnerHTML={{ __html: `${comments}` }} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
