'use server'

import firebaseDatabase from '@/utils/firebase'
import {
  ref,
  push,
  set,
  update as firebaseUpdate,
  remove as firebaseRemove,
  get,
  child,
} from 'firebase/database'

export const create = async (formData: FormData) => {
  // Create a new post reference with an auto-generated id
  const todosRef = ref(firebaseDatabase, 'todos')
  const newTodoRef = push(todosRef)

  await set(newTodoRef, {
    todoStatus: 'pending',
    content: formData.get('content') as string,
  })
}

export const read = async () => {
  const todos = await get(child(ref(firebaseDatabase), 'todos'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let todos: any[] = []

        Object.keys(snapshot.val()).forEach((key) => {
          let todo = snapshot.val()[key]
          todo['id'] = key

          todos.push(todo)
        })

        return todos
      } else {
        return []
      }
    })
    .catch((error) => {
      console.error(error)

      return []
    })

  return todos
}

export const update = async (
  id: string,
  content: string,
  status: string,
  completedAt: Date | null,
) => {
  const todosRef = ref(firebaseDatabase, 'todos/' + id)

  const updates = {
    content: content,
    todoStatus: status,
    completedAt: completedAt,
  }

  await firebaseUpdate(todosRef, updates)
}

export const remove = async (id: string) => {
  const todosRef = ref(firebaseDatabase, 'todos/' + id)

  await firebaseRemove(todosRef)
}
