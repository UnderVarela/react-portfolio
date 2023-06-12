import PropTypes from 'prop-types'
import { useState } from 'react'
export function TodoItem ({ item, onDelete }) {
  const { id, task, checked } = item
  const [checkedValue, setCheckedValue] = useState(checked)

  const textClass = checkedValue ? 'text-gray-400 line-through' : 'text-black'

  const handleChange = ({ target }) => {
    console.log(target.checked)
    setCheckedValue(target.checked)
  }

  const handleClick = () => {
    onDelete(id)
  }
  
  return (
    <li className='p-2 rounded-lg'>
      <div className='flex flex-row justify-between align-middle'>
        <div className='p-2'>
          <input
            type='checkbox'
            className='w-6 h-6'
            onChange={handleChange}
            value={checkedValue}
          />
        </div>
        <div className='p-2'>
          <p className={`${textClass}`}>{task}</p>
        </div>
        <button
          disabled={!checkedValue}
          onClick={handleClick}
          className='flex p-2 text-red-500 border-2 border-red-500 rounded-lg'
        >
          <svg className='w-6 h-6 text-red-500' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>  <circle cx='12' cy='12' r='10' />  <line x1='15' y1='9' x2='9' y2='15' />  <line x1='9' y1='9' x2='15' y2='15' /></svg>
          <span>Eliminar</span>
        </button>
      </div>
      <hr className='mt-2' />
    </li>
  )
}

TodoItem.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func
}
