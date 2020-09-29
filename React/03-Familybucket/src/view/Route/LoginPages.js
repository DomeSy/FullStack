import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../action/user.js';

@connect(({user}) => ({isLogin: user.isLogin}),{
  login
})
class LoginPages extends Component {
  constructor(...props) {
    super(...props)
    this.state={
      name: ""
    }
  }

  nameChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const { isLogin, location, dispatch, login } = this.props;
    // console.log(location,'location')
    console.log(this.props,'登录')
    if(isLogin){
      const { from = '/' } = location.state || {}
      return <Redirect to={from}/>
    }

    const { name } = this.state

    return (
      <div>
         我是LoginPages
        <input value={name} onChange={this.nameChange}/>
        {/* <button onClick={() => {
          dispatch({type: "LOGIN_SUCCESS"})
        }}>login</button> */}
        <button onClick={() => login({name})}>login</button>
      </div>
    )
  }
}
export default LoginPages
