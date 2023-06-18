import { useRef } from 'react'
import { CustomInput, CustomButton, AlertError } from '../components'
import { useUser } from '../hooks/useUser'
import { useForm } from '../hooks/useForm'
import { auth } from '../helpers/firebase'
import { Navigate } from 'react-router'

export function Login () {
  const { email, password, handleChange } = useForm({ email: '', password: '' })
  const { _signInWithEmailAndPassword, error, isLoading, user } = useUser(auth)
  const { message = '' } = error || false
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const handleSubmit = e => {
    e.preventDefault()
    if (!email.length) {
      emailRef.current.focus()
      return
    }
    if (!password.length) {
      passwordRef.current.focus()
      return
    }
    _signInWithEmailAndPassword(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul className='grid gap-2'>
        <li>
          <CustomInput
            ref={emailRef}
            textLabel='Correo electrónico'
            placeholder='xurxo@webferrol.com'
            type='email'
            name='email'
            onChange={handleChange}
          />
        </li>
        <li>
          <CustomInput
            ref={passwordRef}
            textLabel='Contraseña'
            type='password'
            name='password'
            onChange={handleChange}
          />
        </li>
        <li className='text-right'>
          <CustomButton isLoading={isLoading}>
            Acceso
          </CustomButton>
        </li>
        {message && <li><AlertError>{message}</AlertError></li>}
      </ul>
      {user && <Navigate to='/' />}
    </form>
  )
}
