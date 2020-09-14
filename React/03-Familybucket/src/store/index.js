// import { createStore } from 'redux'
import { createStore } from '../view/Dstore/index'

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
const store = createStore(counterReducer)

export default store