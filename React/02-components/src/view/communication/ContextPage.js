import React, { Component } from 'react'
import HomePage from './HomePage';
import { ThemeProvider } from '../../Context';

export default class ConetxtPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'red'
      }
    }
  }
  render() {
    const { theme } = this.state;
    return (
      <div>
        <h3>ConetextPage</h3>
        {/* props */}
        {/* <HomePage theme={theme} /> */}
        
        <ThemeProvider value={theme}>
          <HomePage />
        </ThemeProvider>

      </div>
    )
  }
}


// 如何使用context
// 1> 创建一个context对象： React.createContxt
// 2> Provider提供着， 接收一个value value就是我们要传递的参数
// 3> 子组件如何接收： 三种方式（Consumer、 ContextType（类组件中）、useContext(只能用在函数组件或者自定义Hook)）