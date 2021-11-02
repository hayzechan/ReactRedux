import { v4 as uuidv4 } from 'uuid'

const initState = { todoList: [] };
const TodoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'addTodo':
            const todo = { id: uuidv4(), text: action.payload, done: false }
            return { todoList: [...state.todoList, todo] }

        case 'updateTodo':
            const newTodoList = state.todoList.map(item => {
                if (item.id === action.payload) {
                    return { ...item, done: !item.done }
                }
                return item;
            })
            return { todoList: newTodoList }
        case 'deleteTodo':
            const filteredList = state.todoList.filter(item => {
                return item.id !== action.payload
            })
            return { todoList: filteredList }
        default:
            return state;
    }
}

export default TodoReducer;