// 手写logger，打印日志
export default function logger({dispatch, getState}) {
  return next => action => {
    console.log("+++++++++++++++++++++++++++++++++++")

    // prev state
    const prevState = getState();
    console.log("prev state", prevState)

    // 获取新值
    const returnValue = next(action)

    const nextState = getState();
    console.log("next state", nextState)

    console.log("+++++++++++++++++++++++++++++++++++")

    // 中间件必须又返回值
    return returnValue
  }
}