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
import { Layout, Breadcrumb,Pagination } from 'antd';

function App() {

  const store = createStore(TodoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  const { Content, Footer } = Layout;

  return (
    <div className="App">
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>

          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link className='link' to='/'>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link className='link' to='help'>Help</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link className='link' to='done'>Done</Link>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Provider store={store}>
            <Switch>
              <div className="site-layout-content" >
                <Route exact path='/' component={TodoList} />
                <Route path='/help' component={Help} />
                <Route path='/done' component={TodoDone} />
              </div>
            </Switch>
          </Provider>

        </Content>
        <Footer><Pagination defaultCurrent={1} total={50} pageSizeOptions='1' showLessItems='true' /></Footer>
      </Layout>
    </div >

  );
}

export default App;
