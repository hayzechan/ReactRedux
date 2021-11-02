import TodoGroup from "./TodoGroup";
import '../style/TodoList.css'
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
    return (
        <div className='todo'>
            <h2>Todo List</h2>
            <TodoGroup />
            <TodoGenerator />
        </div>
    )
}

export default TodoList;