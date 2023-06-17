import PropTypes from 'prop-types'

function AlertError ({ children }) {
  return (
    <div className='p-4 text-white bg-red-500 rounded-md'>
      {children}
    </div>
  )
}

AlertError.propTypes = {
  children: PropTypes.any.isRequired
}

export default AlertError
