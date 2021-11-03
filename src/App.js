import { createStore } from 'redux';
import './App.css';
import TodoList from './component/TodoList';
import Help from './component/Help';
import { Provider } from 'react-redux';
import TodoReducer from './component/reducer/TodoReducer';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoDone from './component/TodoDone';

function App() {

  const store = createStore(TodoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return (
    <div className="App">
      <Provider store={store}>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/help'>Help</Link>
          <Link className='link' to='/done'>Done</Link>
          <Switch>
            <Route path='/' excat component={TodoList} />
            <Route path='/help' exact component={Help} />
            <Route path='/done' exact component={TodoDone} />
          </Switch>
      </Provider>
    </div>

  );
}

export default App;
