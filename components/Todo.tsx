'use client'

import { completeTodo } from '@/utils/actions'
import { useTransition } from 'react'

interface TodoModel {
  todo: TodoType
  key: string
}

export interface TodoType {
  id: string
  content: string
  completed: boolean
}

const Todo = ({ todo }: TodoModel) => {
  const [, startTransition] = useTransition()
  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? 'line-through text-gray-400' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  )
}

export default Todo
