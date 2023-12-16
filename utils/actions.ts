'use server'

import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
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
