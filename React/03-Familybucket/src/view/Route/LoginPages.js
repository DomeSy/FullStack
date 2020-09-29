import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

@ connect(({user}) => ({isLogin: user.isLogin}))
class LoginPages extends Component {

  render() {
    const { isLogin, location, dispatch } = this.props;
    // console.log(location,'location')
    console.log(this.props,'登录')
    if(isLogin){
      const { from = '/' } = location.state || {}
      return <Redirect to={from}/>
    }

    return (
      <div>
        我是LoginPages
        <button onClick={() => {
          dispatch({type: "LOGIN_SUCCESS"})
        }}>login</button>
      </div>
    )
  }
}
export default LoginPages
