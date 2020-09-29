import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// Redux 管理数据
// react-redux 传递数据（context），建立了React组件与redux 数据store之间的链接（connect),也可以使用hook方法访问数据和 dispatch方法
// react-router 管理路由，强化了React中一切皆组件的思想