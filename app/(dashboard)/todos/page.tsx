import TodoList from '@/components/TodoList'
import { fetchTodos } from '@/utils/actions'

const TodosPage = async () => {
  const todos = await fetchTodos()

  if (todos.length) {
    return (
      <div className="my-10">
        <TodoList todos={todos} />
      </div>
    )
  } else {
    return (
      <div className="my-10">
        <p>No todos yet...</p>
      </div>
    )
  }
}

export default TodosPage
