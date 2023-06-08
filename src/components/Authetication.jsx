import { useForm } from '../hooks/useForm'
import { CustomInput } from './CustomInput'

export function Authetication ({ ...props }) {
  const { email, password, handleChange } = useForm({ email: '', password: '' })
  const handleSubmit = e => {
    e.preventDefault()
    console.log(email, password)
  }
  return (
    <form onSubmit={handleSubmit} {...props}>
      <ul className='grid gap-2'>
        <li>
          <CustomInput
            textLabel='Correo electrónico'
            placeholder='xurxo@webferrol.com'
            type='email'
            name='email'
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <CustomInput
            textLabel='Contraseña'
            type='password'
            name='password'
            onChange={handleChange}
            required
          />
        </li>
        <li className='text-right'>
          <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'>
            Acceso
          </button>
        </li>
      </ul>
    </form>
  )
}
