import { useRef } from 'react'
import PropTypes from 'prop-types'
import { CustomButton } from '../CustomButton'
import { CustomInput } from '../CustomInput'
import { useForm } from '../../hooks/useForm'

export function AddTodo ({ onAddTodo }) {
  const { taskValue, handleChange } = useForm({ taskValue: '' })
  const taskRef = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    const text = taskValue.trim()
    if (!text.length) taskRef.current.select()
    onAddTodo(text)
  }
  return (
    <form className='flex mt-4' onSubmit={handleSubmit}>
      <CustomInput
        ref={taskRef}
        placeholder='Introduce tu tarea'
        className='text-black border-b-2 border-gray-500 w-80'
        name='taskValue'
        value={taskValue}
        onChange={handleChange}
      />
      <CustomButton
        className='flex p-2 ml-2 text-green-500 border-2 border-green-500 rounded-lg hover:text-white hover:bg-green-500'
      >
        <svg className='w-6 h-6' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>  <path stroke='none' d='M0 0h24v24H0z' />  <circle cx='12' cy='12' r='9' />  <line x1='9' y1='12' x2='15' y2='12' />  <line x1='12' y1='9' x2='12' y2='15' /></svg>
        <span>Añadir</span>
      </CustomButton>
    </form>
  )
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func
}
