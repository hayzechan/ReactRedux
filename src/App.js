import { createStore } from 'redux';
import './App.css';
import TodoList from './component/TodoList';
import Help from './component/Help';
import { Provider } from 'react-redux';
import TodoReducer from './component/reducer/TodoReducer';
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import TodoDone from './component/TodoDone';
import { Layout, Pagination, Menu } from 'antd';

function App() {

  const store = createStore(TodoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  const { Header, Content, Footer } = Layout;

  return (
    <div className="App">
      <Provider store={store}>
        <Layout className="layout">
          <Header style={{ position: 'fixed', width: '100%', height: '0%' }}>
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={['1']}>
              <Link className='link' to='/'>Home</Link>
              <Link className='link' to='help'>Help</Link>
              <Link className='link' to='done'>Done</Link>
            </Menu>
          </Header>

          <Content style={{ padding: '0 60px', marginTop: 64 }}>
            <Switch>
              <div className="site-layout-content" >
                <Route exact path='/' component={TodoList} />
                <Route path='/help' component={Help} />
                <Route path='/done' component={TodoDone} />
                <Redirect path='/'></Redirect>
              </div>
            </Switch>
          </Content>
          <Footer><Pagination defaultCurrent={1} total={50} pageSizeOptions='1' showLessItems /></Footer>
        </Layout>
      </Provider>
    </div >

  );
}

export default App;
