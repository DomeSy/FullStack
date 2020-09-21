import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import _404Pages from './_404Pages';
import HomePage from './HomePage';
import UserPages from './UserPages';
import LoginPages from './LoginPages';

export default class RoutePage extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Link to="/">首页</Link>
          <br/>
          <Link to="/user">用户中心</Link>
          <br/>
          <Link to="/login">登录</Link>
          <br/>
          <Link to="/product/123">商品</Link>


          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={UserPages}/>
            <Route path="/login" component={LoginPages}/>
            <Route component={_404Pages} />
          </Switch>
        </Router>
      </div>
    )
  }
}
