import TodoItem from "./TodoItem"
import { useSelector } from "react-redux"

const TodoGroup = () => {
    const todos = useSelector(state => state.todoList)

    return (
        <div>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    )
}
export default TodoGroup;