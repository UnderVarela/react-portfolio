import { Home, Authentication } from './components'
import { useUser } from './hooks/useUser'
import { auth } from './helpers/firebase'
function PortfolioApp () {
  const { _signInWithEmailAndPassword, _signOut, error, isLoading, user } = useUser(auth)
  const { message = '' } = error || false

  const handleAuthentication = ({ email, password }) => {
    _signInWithEmailAndPassword(email, password)
  }

  const handleSignOut = () => {
    _signOut()
  }
  return (
    <>
      {
      user
        ? <Home onSignOut={handleSignOut} user={user} />
        : <Authentication isLoading={isLoading} error={message} onAuthentication={handleAuthentication} className='p-5 border rounded shadow-xl w-96' />
      }
    </>
  )
}

export default PortfolioApp
