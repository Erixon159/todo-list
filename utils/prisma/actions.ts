'use server'

import prismaDatabase from '@/utils/prisma'

export const create = async (formData: FormData) => {
  await prismaDatabase.todo.create({
    data: {
      content: formData.get('content') as string,
    },
  })
}

export const read = async () => {
  return await prismaDatabase.todo.findMany({})
}

export const update = async (
  id: string,
  status: string,
  completedAt: Date | null,
) => {
  await prismaDatabase.todo.update({
    where: { id },
    data: {
      todoStatus: status,
      completedAt: completedAt,
    },
  })
}

export const remove = async (id: string) => {
  await prismaDatabase.todo.delete({
    where: { id },
  })
}
