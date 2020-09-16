// 手写thunk,处理异步
export default function thunk({dispatch, getState}) {
  return next => action => {
    // 只需要判断dispatch传过来的是函数还是对象
    if(typeof action === 'function') {
      // 传入的对象，前面将action有两个参数，直接传入即可
      return action(dispatch, getState)
    }
    // 对象直接返回
    return next(action)
  }
}