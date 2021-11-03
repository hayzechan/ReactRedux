import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"

const TodoDone = () => {
    const todos = useSelector(state => state.todoList)

    return (
        <div>
            <h1>Done Todo List</h1>
            {todos.filter(item => item.done).map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    )
}
export default TodoDone