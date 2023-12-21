'use server'

import db from '@/utils/prisma'
import {
  create as prismaCreate,
  read as prismaRead,
  update as prismaUpdate,
  remove as prismaDelete,
} from '@/utils/prisma/actions'
import {
  create as firebaseCreate,
  read as firebaseRead,
  update as firebaseUpdate,
  remove as firebaseDelete,
} from '@/utils/firebase/actions'
import { revalidatePath } from 'next/cache'

export const newTodo = async (formData: FormData) => {
  if (process.env.USE_FIREBASE === 'true') {
    firebaseCreate(formData)
  } else {
    prismaCreate(formData)
  }

  revalidatePath('/todos')
}

export const fetchTodos = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000))

  if (process.env.USE_FIREBASE === 'true') {
    return firebaseRead()
  } else {
    return prismaRead()
  }
}

export const setTodoStatus = async (
  id: string,
  content: string,
  status: string,
) => {
  let completedAt = null

  if (status === 'completed') {
    completedAt = new Date()
  }

  if (process.env.USE_FIREBASE === 'true') {
    firebaseUpdate(id, content, status, completedAt)
  } else {
    prismaUpdate(id, status, completedAt)
  }

  revalidatePath('/todos')
}

export const deleteTodo = async (id: string) => {
  if (process.env.USE_FIREBASE === 'true') {
    firebaseDelete(id)
  } else {
    prismaDelete(id)
  }

  revalidatePath('/todos')
}
