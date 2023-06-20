import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export function HomePage () {
  const { email } = useContext(UserContext)
  const { docs } = useLoaderData()

  return (
    <div className='container p-4 mx-auto'>
      <h1 className='mb-4 text-3xl font-bold text-center'>Mi portafolio</h1>
      {email && <p className='mb-8 text-lg text-center'>Bienvenido {email} </p>}
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
