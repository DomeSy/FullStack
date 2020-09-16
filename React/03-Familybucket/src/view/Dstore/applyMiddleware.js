import { compose } from "redux";

// 手写applyMiddleware
export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {

    const store = createStore(reducer)
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      // 这种写法是将dispath传给，但这种方式只适用于一个中间件的形式，原因是多个中间件都会使用dispatch，这样写会相互干扰其他中间件的dispatch，所以要用下面的方式
      // dispatch, 

      // 这里的dispatch需要在包一层,dispath要接收一个参数action，所以用箭头函数的方式这样写，这样就可以避免中间件相互干扰的问题
      dispatch: action => dispatch(action)
    }

    // 所传入的中间件不止一个是个数组，所以需要将每个中间件赋上getState和dispatch
    // 每个中间件是一个函数，多个中间件就是一个数组，所以遍历让他们获得每个对应的值
    const DMiddleware = middlewares.map( middleware => middleware(midApi))

    // compose相当于是组件复合，DMiddleware是将dispatch增加了回调函数的形式，(store.dispatch)是将原有的dispatch接收对象的形式加以整合，使新的dispatch具有原有的功能并增加回调函数的形式
    dispatch = compose(...DMiddleware)(store.dispatch)

    // 返回store，同时将dispatch加强
    return {
      ...store,
      dispatch
    }
  }
}
