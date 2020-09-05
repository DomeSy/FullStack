import React, { Component } from 'react'
import { ThemeContext } from '../../Context';
import UserPage from './UserPage';

class HomePage extends Component {
  // static 相当于直接挂载在类上，等价于以下写法
  // static contextType = ThemeContext;

  constructor(props){
    super(props);
  }
  render() {
    // props接收
    // const { themeColor } = this.props.theme;

    const { themeColor } = this.context;
    console.log(this, 'this')
    return (
      <div>
        {/* <h3 className={themeColor}>HomePage</h3> */}
        <h3 className={themeColor}>HomePage</h3>

        <UserPage />
      </div>
    )
  }
}

HomePage.contextType = ThemeContext

export default HomePage