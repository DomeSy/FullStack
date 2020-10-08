import React, {useMemo} from 'react'

export default function MemoButton({ name, children }) {

  // const otherName = (name) => {
  //   console.log('otherName')
  //   return name + '改变name的方法'
  // }

  function changeName(name){
    console.log('11')
    return name + '改变name的方法'
  }

  // 只要此时发生了子组件的时候，otherName就回执行，这样增加了渲染，这是需要使用useMemo方法
  // const otherName = changeName(name)

  // 第一个是回调函数，第二个是要改变的值，也就是说，只有name改变的时候才会渲染changeName这个函数
  const otherName = useMemo(() => changeName(name), [name])

  return (
    <>
     <div>{otherName}</div>  
     <div>{children}</div>  
    </>
  )
}
