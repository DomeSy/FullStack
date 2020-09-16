import React, { Component } from 'react'
import store from "../../store/index"

export default class ReduxPage extends Component {

  componentDidMount(){
    // 3>使用订阅功能store.subscribe，产生一个回调函数,
    this.unsubscribe = store.subscribe(() => {
      // this.forceUpdate()： 会导致组件跳过shouldComponentUpdate(),直接调用render()
      this.forceUpdate()
    })
  }

  componentWillUnmount(){
    // 4>取消订阅,有订阅必然会有取消订阅则只需要新定义unsubscribe是否存在，然后直接使用就行
    // 取消订阅在componentWillUnmount
    if(this.unsubscribe){
      this.unsubscribe();      
    }
  }

  add = () => {
    // dispatch: 两个参数，第一个是type值，第二个是所需带入的值, 此时值已经传入，但页面还未发生改变，原因是React不会自动刷新视图，因此需要订阅，只需在componentDidMount中使用subscribe即可
    store.dispatch({type: 'ADD', payload: 100})
  }

  asyncAdd = () => {
    // 这里写异步的时候要把setTimeout放在里面，当然放到外面也是可以，但如果要放到外面则需要将整个store传入，这样明显不可取，所以当异步调用的时候，应该把一步的函数放入store.dispatch,并且可以获得此时的方法
    // 当store.dispatch接收的参数是一个回调函数的时候，第一个是当前dispatch，第二个是当前的getState,getState是一个函数
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        console.log("getState", getState());
        dispatch({type: "ADD"})
      }, 1000)
    })
  }

  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        {/* 此处未做任何操作，getState() 拿到的是当前reducer的state，即初始值 */}
        <div>{store.getState()}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.asyncAdd}>asyncAdd</button>
      </div>
    )
  }
}
