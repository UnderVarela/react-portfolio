import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { UserContext } from '../context/UserContext'

export function PrivateRoute ({ children }) {
  const { uid } = useContext(UserContext)
  if (!uid) return <Navigate to='/login' />
  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.any
}
