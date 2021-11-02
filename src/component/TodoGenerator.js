import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    // const inputText = (event) => {
    //     setText(event.target.value)
    //     defaultValue = {text};
    // }

    // const updateText = () => {
    //     dispatch({ type: 'addTodo', payload: text })
    // }

    return (
        <div>
            <input onChange={event => setText(event.target.value)} defaultValue={text} />
            <button onClick={() => dispatch({type: 'addTodo', payload: text})}> ADD </button>
        </div>
    )
}

export default TodoGenerator;