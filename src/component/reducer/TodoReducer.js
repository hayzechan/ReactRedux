const initState = { todoList: [] };
const TodoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'addTodo':
            return { todoList: [...state.todoList, action.payload] }

        case 'updateTodo':
            const newTodoList = state.todoList.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item;
            })
            return { todoList: newTodoList }

        case 'deleteTodo':
            const filteredList = state.todoList.filter(item => {
                return item.id !== action.payload
            })
            return { todoList: filteredList }

        case 'initTodo':
            return { todoList: action.payload }    
        default:
            return state;
    }
}
export default TodoReducer;
