'use client'

import { newTodo } from '@/utils/actions'
import { useState } from 'react'

const NewTodoForm = () => {
  const [todoName, setTodoName] = useState('')

  return (
    <form
      action={(form) => {
        newTodo(form)
        setTodoName('')
      }}
    >
      <div className="flex flex-row justify-center md:gap-x-12">
        <div>
          <input
            value={todoName}
            onChange={(event) => setTodoName(event.target.value)}
            name="content"
            type="text"
            autoComplete="todo"
            placeholder="Todo description"
            className="block w-72 px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base sm:leading-6"
          />
        </div>
        <div>
          <button
            type="submit"
            className="rounded-md border border-transparent bg-indigo-600 px-8 py-1.5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create new Todo
          </button>
        </div>
      </div>
    </form>
  )
}

export default NewTodoForm
