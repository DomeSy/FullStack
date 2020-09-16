// 手写compose
export default function compose(...funce) {
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