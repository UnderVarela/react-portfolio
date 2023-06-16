import { CustomButton } from './components/CustomButton'
import { auth } from './helpers/firebase'
import { useUser } from './hooks/useUser'



function PortfolioApp2 () {
  const { user, error, _signInWithEmailAndPassword, _signOut, isloading } = useUser(auth)
  const { email } = user || false
  const { message } = error || false
  const handleClick = () => {
    _signInWithEmailAndPassword('info@webferrol.com', 'Tq0xuxvBMs')
  }
  return (
    <div>
      {email} {message}

      {
        !user
          ? <CustomButton isLoading={isloading} onClick={handleClick}>Acceso</CustomButton>
          : <CustomButton isLoading={isloading} onClick={() => _signOut()}>Cerrar sesión</CustomButton>
      }
    </div>

  )
}

export default PortfolioApp2
