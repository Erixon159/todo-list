import { read as firebaseRead } from '@/utils/firebase/actions'
import { read as prismaRead } from '@/utils/prisma/actions'
import { NextResponse } from 'next/server'

export const GET = async () => {
  let todos = []

  if (process.env.USE_FIREBASE === 'true') {
    todos = await firebaseRead()
  } else {
    todos = await prismaRead()
  }

  return NextResponse.json({ todos: todos })
}
