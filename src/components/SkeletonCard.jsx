import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function SkeletonCard () {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md'>
      <h2 className='mb-2 text-xl font-bold'>
        <Skeleton />
      </h2>
      <section className='text-gray-700'>
        <Skeleton count={5} />
      </section>
    </div>
  )
}
