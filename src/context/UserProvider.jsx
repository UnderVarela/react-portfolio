import PropTypes from 'prop-types'
import { UserContext } from './UserContext'
import { useUser } from '../hooks/useUser'
import { auth } from '../helpers/firebase'
export function UserProvider ({ children }) {
  const {
    _signInWithEmailAndPassword,
    _signOut,
    error,
    isLoading,
    email,
    uid
  } = useUser(auth)
  return (
    <UserContext.Provider value={{
      _signInWithEmailAndPassword,
      _signOut,
      error,
      isLoading,
      email,
      uid
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.any
}
