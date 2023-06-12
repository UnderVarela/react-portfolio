import { useState } from 'react'
import { AddTodo } from './components/todos/AddTodo'
import { TodoList } from './components/todos/TodoList'

function TodoApp () {
  const [todos, setTodos] = useState([])

  const handleAddTodo = task => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        task,
        checked: false
      }
    ])
  }

  const handleDelete = idDelete => {
    setTodos(structuredClone(todos).filter(({ id }) => id !== idDelete))
  }
  return (
    <div className='w-full h-screen pt-8 bg-gray-100'>
      <div className='max-w-md p-3 mx-auto bg-white'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>ToDo App</h1>
          <AddTodo onAddTodo={handleAddTodo} />
        </div>
        <TodoList todos={todos} onDelete={handleDelete} />
      </div>
    </div>
  )
}

export default TodoApp
