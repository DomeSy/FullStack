import React, { useState, useEffect } from 'react'
import FruiteList from './FruiteList';
import FruiteAdd from './FruiteAdd';

const Context = React.createContext();
const { Provider } = Context;

function Hook() {
  // useState 会返回一个数组，里面有状态以及维护状态的函数
  // 第一个参数是接收的是初始值
  const [fruit, setFruit] = useState("")
  const [fruits, setFruits] = useState(["草莓", "香蕉"])

  // 副作用,
  // 会接收两个参数，第一个为本身的函数，
  // 第二个是参数是依赖，通过依赖而触发，多个值时为数组，为空数组时，只触发一次
  // 如下面的，只有fruite发生改变才会触发函数
  useEffect(() => {
    // 清除副作用  类似于ajax之类的请求
    const timer = setTimeout(() => {
      setFruits(["草莓2", "香蕉2"])
    }, 1000);
    // console.log('useEffect')

    // 类组件中，有willUnmount函数清楚定时器
    // 在didmount 执行了一次 useEffect 返回副作用，然后再组件鞋子在时，执行了一次，返回的函数，才会再走里面的逻辑

    return () => {
      clearTimeout(timer);
    }
  },[])

  return (
    <>
      <Provider value = {{ fruits, setFruits}}>
        <div>
          {fruit === '' ? "请选择你喜欢的水果" : `你选择的水果是${fruit}`}
        </div>
        {/* <FruiteAdd  onAdd={(fruitName) => {
          // Hooks是直接覆盖，不能合并
          // 接收一个回调事件，拿到水果的名称进行增加
          setFruits([...fruits, fruitName])
        }}/> */}
        <FruiteAdd Context={Context}/>
        <FruiteList fruits={fruits} setFruit={setFruit}/>
      </Provider>
    </>
  )

}

export default Hook;
