import { useState } from "react";
import { useDispatch } from "react-redux";
import apis from "../apis/apis";
import 'antd/dist/antd.css';
import { Button } from 'antd';

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const addTodo = () => {
        apis.post('/todos', {text: text, done: false})
            .then(response => dispatch({ type: 'addTodo', payload: text }));
    }
    return (
        <div>
            <input onChange={event => setText(event.target.value)} defaultValue={text} />
            <Button type = "primary" onClick={addTodo}> ADD </Button>
        </div>
    )
}
export default TodoGenerator;