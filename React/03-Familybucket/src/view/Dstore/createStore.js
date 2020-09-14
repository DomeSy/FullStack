// createStore本质是一个对象,接收一个reducer
// 基本用了三个函数 getState, dispatch, subscribe
export default function createStore(reducer){
  let currentState = null
  let currentListeners = []

  function getState(){
    return currentState
  } 

  // 接收一个action
  function dispatch(action){
    currentState = reducer(currentState, action)
    // 使用遍历
    // 这里执行的是回调函数
    currentListeners.forEach(listener => listener())
  }

  // 订阅事件发生改变是在dispath后发生
  function subscribe(listener){
    currentListeners.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe
  };
} 