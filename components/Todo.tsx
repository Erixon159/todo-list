'use client'

import { deleteTodo } from '@/utils/actions'
import { useState, useTransition } from 'react'
import TodoStatus from './TodoStatus'

interface TodoModel {
  todo: TodoType
  key: string
}

export interface TodoType {
  id: string
  content: string
  todoStatus: string
  completedAt: Date | null
  createdAt: Date
}

const Todo = ({ todo }: TodoModel) => {
  const [, startTransition] = useTransition()
  const [todoStatus, setTodoStatus] = useState(todo.todoStatus)

  return (
    <li className="flex justify-between gap-x-6 py-5 px-5">
      <div className="flex flex-col justify-center">
        <p
          className={`text-base ${
            todoStatus === 'completed' ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.content}
        </p>
      </div>
      <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <TodoStatus todo={todo} change={setTodoStatus} />
        <button
          className="rounded-md border border-transparent bg-red-500 px-8 py-1.5 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          onClick={(event) => {
            event.stopPropagation()
            startTransition(() => deleteTodo(todo.id))
          }}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Todo
