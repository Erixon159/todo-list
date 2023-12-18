import Todo, { TodoType } from './Todo'

interface TodoListModel {
  todos: TodoType[]
}

const TodoList = ({ todos }: TodoListModel) => {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
    >
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

export default TodoList
