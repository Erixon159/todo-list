import { NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/todos', request.url))
}

export default middleware

// This configuration will redirect any /todo call to /todos
export const config = {
  matcher: ['/todo'],
}
