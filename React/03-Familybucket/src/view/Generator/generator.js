import React from 'react'

export default function Generator() {
  return (
    <div>
      Generator
    </div>
  )
}

// function 与函数名多了个*
// 函数内部yield表达式，第一内部状态
// function* helloWorldGenerator(){
//   yield "hellow";
//   yield "world";
//   return "ending";
// }

// var hw = helloWorldGenerator();

// // 执行
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

// 惰性求值
let a = 0;
function* fun(){
  console.log(a,'--')
  let aa = yield (a = 1 + 1);
  return aa
}

console.log("fun0", a); // 0
let b = fun();
console.log("fun", b.next()); // 2
console.log("fun1", a); //但这里是2
