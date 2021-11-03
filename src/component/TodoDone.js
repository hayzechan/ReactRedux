import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"

const TodoDone = () => {
    const todos = useSelector(state => state.todoList)

    return (
        <div>
            {todos.filter(item => todos.done).map(todo => <TodoItem key={todo.id} todo={todo.done} />)}
        </div>
    )
    }
export default TodoDone