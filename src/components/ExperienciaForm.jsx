import PropTypes from 'prop-types'
import { CustomInput } from './CustomInput'

export function ExperienciaForm ({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    // console.log(formDataObj)
    onSubmit(formDataObj)
  }
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <CustomInput
            textLabel='Título'
            required
            name='titulo'
          />
        </li>
      </ul>
    </form>
  )
}

ExperienciaForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
