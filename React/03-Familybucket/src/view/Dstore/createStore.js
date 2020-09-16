// createStore本质是一个对象,接收一个reducer
// 基本用了三个函数 getState, dispatch, subscribe
export default function createStore(reducer){
  let currentState; 
  let currentListeners = []

  function getState(){
    return currentState
  } 

  // 接收一个action
  function dispatch(action){
    console.log(action)
    currentState = reducer(currentState, action)
    console.log(currentState)

    // 使用遍历
    // 这里执行的是回调函数
    currentListeners.forEach(listener => listener())
  }

  // 订阅事件发生改变是在dispath后发生
  function subscribe(listener){
    currentListeners.push(listener)
    // 返回取消订阅的函数
    return () => {
      const index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1)
    }
  }

  // 还未获得初始值，此时只需要手动执行一遍dispatch即可,附上初始值
  dispatch({ type: 'ADDS' });

  return {
    getState,
    dispatch,
    subscribe
  };
} 