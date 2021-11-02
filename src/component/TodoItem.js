import { useDispatch } from "react-redux";
import '../style/TodoItem.css'

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const text = (todo.done) ? <del>{todo.text}</del> : todo.text

    const updateStatus = () => {
        dispatch({ type: 'updateTodo', payload: todo.id })
    }

    const deleteRow = () => {
        dispatch({ type: 'deleteTodo', payload: todo.id })
    }

    return (
        <div className='box'>
            <span onClick={updateStatus}>{text}</span>
            <span className='delete' onClick={deleteRow}>X</span>
        </div>
    )
}

export default TodoItem;