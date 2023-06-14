import { useRef, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import { auth, _signInWithEmailAndPassword } from '../helpers/auth_signin_password'
import PropTypes from 'prop-types'

export function Authentication ({ onAuthentication, ...props }) {
  const { email, password, handleChange } = useForm({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
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
    setIsLoading(true)
    _signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log('data', user)
        const { uid } = user ?? {}
        console.log('uid', uid)
        if (!uid) throw new Error('No no no')
        onAuthentication(user)
      })
      .catch(err => { console.table(err); setError(err.message) })
      .finally(() => { setIsLoading(false) })
  }
  return (
    <form onSubmit={handleSubmit} {...props}>
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
      </ul>
      {error}
    </form>
  )
}

Authentication.propTypes = {
  onAuthentication: PropTypes.func
}
