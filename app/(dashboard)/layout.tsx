import React from 'react'
import NewTodoForm from '@/components/NewTodoForm'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
