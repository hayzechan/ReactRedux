import TodoGroup from "./TodoGroup";
import '../style/TodoList.css'
import TodoGenerator from "./TodoGenerator";
import { useEffect } from "react";
import apis from "../apis/apis";
import { useDispatch } from "react-redux";

const TodoList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        apis.get('/todos')
            .then(response => dispatch({ type: 'initTodo', payload: response.data }));
    })

    return (
        <div className='todo'>
            <h2>Todo List</h2>
            <TodoGenerator />
            <TodoGroup />
        </div>
    )
}

export default TodoList;