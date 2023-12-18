import React from 'react'
import NewTodoForm from '@/components/NewTodoForm'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center">
      <NewTodoForm />
      {children}
    </div>
  )
}

export default DashboardLayout
