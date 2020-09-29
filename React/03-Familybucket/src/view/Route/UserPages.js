import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(({user}) => ({user}))
class UserPages extends Component {
  render() {
    console.log("UserPage", this.props);
    const { user } = this.props
    const { userInfo } =user;
    return (
      <div>
        <h3>UserPages</h3>
        <p>id: {userInfo.id}</p>
        <p>name: {userInfo.name}</p>
        <p>score: {userInfo.score}</p>
      </div>
    )
  }
}

export default UserPages
