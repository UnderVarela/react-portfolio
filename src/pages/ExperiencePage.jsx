import { CustomInput, CustomButton } from '../components'
import { addDocument } from '../helpers/cloud-firestore'
export function ExperiencePage () {
  const handleSubmit = async e => {
    e.preventDefault() // Paramos envío de formulario
    const { target } = e
    const formData = new FormData(target)
    const data = Object.fromEntries(formData.entries())
    if (formData.get('is_certificado_profesionalidad')) data.is_certificado_profesionalidad = true
    else Object.defineProperty(data, 'is_certificado_profesionalidad', { value: false })
    console.log(data)
    await addDocument('prueba', data)
    // A partir de aquí lo que queramos: cargar un array, login, guardar en BBDD
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-start gap-2'>
      <legend>Experiencia laboral</legend>
      <div>
        <CustomInput
          textLabel='Código'
          name='code'
        />
      </div>
      <div>
        <CustomInput
          textLabel='Título'
          name='title'
          required
        />
      </div>
      <div>
        <CustomInput
          textLabel='Cargo'
          name='jobTitle'
        />
      </div>
      <div>
        <label><input type='checkbox' name='is_certificado_profesionalidad' /> Tiene certificado de profesionalidad</label>
      </div>
      <div>
        <CustomInput
          textLabel='Lugar'
          name='place'
        />
      </div>
      <div>
        <CustomInput
          textLabel='Provincia'
          name='province'
        />
      </div>
      <div>
        <CustomInput
          textLabel='Descripción'
          name='comments'
        />
      </div>
      <CustomButton>Enviar</CustomButton>
    </form>
  )
}
