import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// component要替换成大写，应为是组件的形式
export default connect(({user}) => ({isLogin: user.isLogin}))(
  function PrivateRoute({isLogin, path, component: Component, ...restProps}) {
  
    // 路由守卫，意思就是要在跳转的时候在路由前价格判断
    // 以登录位列，登录成功则直接跳转组件，没登录去登录页，并将此处作为一个要跳转的地址传递过去
    return <Route 
      {...restProps}
      render={
        (props) => isLogin ? 
        <Component {...props}/> 
        :
        <Redirect to={{
            pathname: '/login', 
            state: {
              from: props.location.pathname
            }
          }} 
        />} 
      /> 
  }
)
