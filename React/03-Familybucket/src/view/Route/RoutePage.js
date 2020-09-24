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
          {/* Link跳转 Route匹配 */}
          <Link to="/">首页</Link>
          <br/>
          <Link to="/user">用户中心</Link>
          <br/>
          <Link to="/login">登录</Link>
          <br/>
          <Link to="/product/123">商品</Link>


          <Switch>
            {/* <Route exact path="/" children={children} component={HomePage} /> */}
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={UserPages} />
            <Route path="/login" component={LoginPages} />
            {/* 动态路由会将所匹配的参数通过props传递给组件 */}
            <Route path="/product/:id" component={Product} />
            {/* 当Route不写path路径时， */}
            <Route component={_404Pages} />
          </Switch>
        </Router>
      </div>
    )
  }
}

// 动态路由
function Product(props){
  console.log('Produce-prop', props)
  const { params, url } = props.match
  const { id } = props.match.params;
  return (
    <div>
      <h1>Produce</h1>
      <p>id: {id}</p>
      {/* 路由嵌套 */}
      <Link to={url + '/detail'}>详情</Link>
      <Route path={url + '/detail' } component={Detail} />
    </div>
  )
}

function Detail(){
  return (
    <div>
      <h1>
        商品详情页
      </h1>
    </div>
  )
}

// class Product extends Component{
//   render(){
//     console.log(this.props)
//     return (
//       <div>
//         Produce
//       </div>
//     )
//   }
// }


function children(props) {
  console.log("children props", props)
  return <div>children</div>
}

function render(props) {
  console.log("render props", props)
  return <div>render</div>
}
