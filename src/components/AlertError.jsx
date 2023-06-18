import PropTypes from 'prop-types'

export function AlertError ({ children }) {
  return (
    <div className='p-4 text-white bg-red-500 rounded-md'>
      {children}
    </div>
  )
}

AlertError.propTypes = {
  children: PropTypes.any.isRequired
}
