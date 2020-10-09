import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from '../Route/HomePage';
import LoginPages from '../Route/LoginPages';
import _404Pages from '../Route/_404Pages';
import UserPages from '../Route/UserPages';
import PrivateRoute from './PrivateRoute';


export default function Routes() {
  return (
    <div>
      <Router>
        {/* <Link to='/'>首页</Link>
        <br />
        <Link to='/user'>用户中心</Link>
        <br />
        <Link to='/login'>登录</Link>
        <br /> */}


        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route path='/user' component={UserPages} /> */}
          <Route path='/login' component={LoginPages} />
          <PrivateRoute path="/user" component={UserPages}  />
          <Route  component={_404Pages} />
        </Switch>
      </Router>
    </div>
  )
}
