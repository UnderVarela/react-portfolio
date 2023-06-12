import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'
export function TodoList ({ todos, onDelete }) {
  return (
    <div className='mt-8'>
      <ul>
        {
          todos?.map(todo => {
            const { id } = todo
            return (
              <TodoItem key={id} item={todo} onDelete={onDelete} />
            )
          })
        }
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func
}
