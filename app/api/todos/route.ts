import db from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const todos = await db.todo.findMany({})

  return NextResponse.json({ todos: todos })
}

export const POST = async (request: Request) => {
  const data = await request.json()
  const todo = await db.todo.create({
    data,
  })

  return NextResponse.json({ todo: todo })
}
