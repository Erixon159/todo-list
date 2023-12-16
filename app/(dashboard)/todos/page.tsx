import TodoList from '@/components/TodoList'
import { fetchTodos } from '@/utils/actions'

const TodosPage = async () => {
  const todos = await fetchTodos()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
