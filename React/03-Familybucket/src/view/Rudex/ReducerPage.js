import React from 'react'

export default function ReducerPage() {

  const array1 = [1, 2, 3, 4];
  // accumulator: 上一次计算的值， currentValue相当于遍历的值
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // 1 + 2 + 3 + 4 => 10
  console.log(array1.reduce(reducer));

  // 5 + 1 + 2 + 3 + 4 => 15
  console.log(array1.reduce(reducer, 5));

  return (
    <div>
      ReducerPage
    </div>
  )
}

function f1(arg) {
  console.log('f1' , arg)
  return arg
}

function f2(arg) {
  console.log('f2' , arg)
  return arg
}

function f3(arg) {
  console.log('f3' , arg)
  return arg
}

// 要求同时执行f1, f2, f3 三个函数
// 方法1
// f1('omg')
// f2('omg')
// f3('omg')

// 方法2：聚合, 缺点：不利于维护
// f1(f2(f3('omg')))

// 方法三
// compose的返回值是一个函数
function compose(...funce) {
  if (funce.length === 0){
    return arg => arg;
  }

  if(funce.length === 1){
    return funce[0];
  }

  // return funce.reduce((a, b) => (...args) => a(b(...args)))
  // 以上写法等价 于
  return funce.reduce((a, b) => {
    return (...args) => {
      return a(b(...args))
    }
  })
}

// 参数值可以为 0 或 多个
let res = compose(f1, f2, f3)("omg");

//传入0个 
// let res = compose()("omg");

// 传入一个
// let res = compose(f1)("omg");
console.log(res, 'res')