import Todo, { TodoType } from './Todo'

interface TodoListModel {
  todos: TodoType[]
}

const TodoList = ({ todos }: TodoListModel) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
