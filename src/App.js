import { createStore } from 'redux';
import './App.css';
import TodoList from './component/TodoList';
import { Provider } from 'react-redux';
import TodoReducer from './component/reducer/TodoReducer';

function App() {

  //installing redux...............
  const store = createStore(TodoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
