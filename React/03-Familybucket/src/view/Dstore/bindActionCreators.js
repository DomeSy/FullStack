// 手写bindActionCreators，作用将每个方法赋值上dispatch
// 接收两个参数，第一个接收的一个对象，整个方法，第二个dispatch方法
export default function bindActionCreators(creates, dispatch){
  let obj = {}

  // 遍历每个对象
  for(let key in creates){
    obj[key] = bindActionCreator(creates[key], dispatch)
  }

  return obj
}

function bindActionCreator(creator, dispatch) {
  return (...args) => {
    return dispatch(creator(...args))
  }
}