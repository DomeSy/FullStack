import { applyMiddleware, createStore, combineReducers } from 'redux'
// import  createStore, applyMiddleware, thunk, logger } from '../view/Dstore/index'

// 导入中间件
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

// 2>创建reducer, 接收两个参数，state初始值，action（type: 类型，payload: 带入的值）
export const counterReducer = (state = 0, { type, payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return state + payload
    case 'MINUS':
      return state - payload
    default:
      return state
  }
}

// 1>需要通过createStore创建一个store即可，接收的参数是一个reducer
// createStore接收的第二个组件是中间件，如果有多个中间件需要使用 applyMiddleware 来包裹
// applyMiddleware里有顺序关系，logger必须放在最后才行
// const store = createStore(counterReducer, applyMiddleware(thunk, promiseMiddleware, logger))
const store = createStore(combineReducers({count: counterReducer}), applyMiddleware(thunk, promiseMiddleware, logger))

export default store