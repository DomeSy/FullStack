import React, { Component } from 'react'
import store from "../../store/index"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// connect有两个参数
// 第一个参数mapStateToProps,接收一个state(就是总的state集合)，返回一个state（拿去需要的state）
// 第二个参数mapDispatchToProps，接收的参数可以是一个对象，也可是一个函数
@connect(
  // (state) => ({count: state.count})
  ({count}) => ({count}),
  // 对象
  // {
    // add: () => ({
    //   type: "ADD"
    // })
  // }

  // 函数
  (dispatch) => {
    // const add = () => dispatch({type: "ADD"})
    // const minus = () => dispatch({type: "MINUS"})

    // 当有多个dipatch操作时，这么做明显麻烦了，所以可以使用bindActionCreators
    let creators = {
      add: () => ({ type: "ADD" }),
      minus: () => ({type: "MINUS"})
    }

    // bindActionCreators，作用将dispatch付给creators里的每一项
    creators = bindActionCreators(creators, dispatch);

    // return { dispatch, add, minus }
    return { dispatch, ...creators }
  }
)
class ReactReduxPage extends Component {

  asyncAdd = () => {
    this.props.dispatch((dispatch, getState) => {
      setTimeout(() => {
        console.log("getState", getState());
        dispatch({type: "ADD"})
      }, 1000)
    })
  }

  render() {
    const { count, add, minus } = this.props
    console.log(this.props, '--')
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <div>{count}</div>
        <button onClick={add}>add</button>
        <button onClick={this.asyncAdd}>asyncAdd</button>
        <button onClick={minus}>minus</button>
      </div>
    )
  }
}

// 等价于上述的装饰器写法
// ReactReduxPage = connect(
//   (state) => ({count: state})
// )(ReactReduxPage)

export default ReactReduxPage