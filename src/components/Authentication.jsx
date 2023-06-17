import { useRef } from 'react'
import { useForm } from '../hooks/useForm'
import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import PropTypes from 'prop-types'
import AlertError from './AlertError'

export function Authentication ({ onAuthentication, isLoading, error, ...props }) {
  const { email, password, handleChange } = useForm({ email: '', password: '' })
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
    onAuthentication({ email, password })
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
        {error && <li><AlertError>{error}</AlertError></li>}
      </ul>
    </form>
  )
}

Authentication.propTypes = {
  onAuthentication: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string
}
