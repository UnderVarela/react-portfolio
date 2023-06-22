import { useNavigate } from 'react-router-dom'
import { ExperienciaForm } from '../components/ExperienciaForm'
import { addDocument } from '../helpers/cloud-firestore'

export function ExperiencePage () {
  const navigate = useNavigate()
  const addExperience = (data) => {
    addDocument('experiencias', data)
    navigate('/')
  }
  return (
    <>
      <h1>Experiencia laboral</h1>
      <ExperienciaForm onSubmit={addExperience} />
    </>
  )
}
