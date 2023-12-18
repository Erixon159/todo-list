'use server'

import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const setTodoStatus = async (id: string, status: string) => {
  let completedAt = null

  if (status === 'completed') {
    completedAt = new Date()
  }

  await db.todo.update({
    where: { id },
    data: {
      todoStatus: status,
      completedAt: completedAt,
    },
  })

  revalidatePath('/todos')
}

export const fetchTodos = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000))

  return await db.todo.findMany({})
}

export const newTodo = async (formData: FormData) => {
  await db.todo.create({
    data: {
      content: formData.get('content') as string,
    },
  })

  revalidatePath('/todos')
}

export const deleteTodo = async (id: string) => {
  await db.todo.delete({
    where: { id },
  })

  revalidatePath('/todos')
}
