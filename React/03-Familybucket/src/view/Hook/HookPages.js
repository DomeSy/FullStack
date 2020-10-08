import React, { useReducer, useEffect, useLayoutEffect } from 'react'
import { counterReducer } from '../../store/index';

const init = (initArr) => initArr - 0

export default function HookPages() {

  // 第一个reduce，第二个是初始值，第三个参数（可选）:修改初始值的方法，接收第二个参数
  // 返回两个参数state，dispatch
  // []:是根据顺序有关，{},名字相关
  const [state, dispatch] = useReducer(counterReducer, "0", init);

  // 有延迟，异步
  useEffect(() => {
    console.log('useEffect', '001')
  }, [state])

  // 无延迟，同步
  useLayoutEffect(() => {
    console.log('useLayoutEffect', '002')
  }, [state])
  
  return (
    <div>
      <h1>userReducer</h1>
      <p>{state}</p>
      <button onClick={() => dispatch({type:"ADD", payload: 100}) }>add</button>
    </div>
  )
}
