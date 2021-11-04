import { useDispatch } from "react-redux";
import apis from "../apis/apis";
import '../style/TodoItem.css';
import EditTodo from "./EditTodo";
import { CloseOutlined } from '@ant-design/icons';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const text = (todo.done) ? <del>{todo.text}</del> : todo.text

    //Try to refactor
    const updateStatus = () => {
        apis.put(`/todos/${todo.id}`, { done: !todo.done })
            .then(reponse => dispatch({ type: 'updateTodo', payload: reponse.data }))
    }
    const deleteRow = () => {
        apis.delete(`/todos/${todo.id}`)
            .then(response => dispatch({ type: 'deleteTodo', payload: todo.id }));
    }

    return (
        <div className='box'>
            <span onClick={updateStatus}>{text}</span>
            <span className='delete' onClick={deleteRow}>
                <CloseOutlined />
            </span>
            <EditTodo todo={todo} />
        </div>
    )
}
export default TodoItem;