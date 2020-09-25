// redux-saga 是一个用于管理应用程序的副作用的库，类比于redux-thunk

// call:代表调用异步操作， put相当于dispatch， takeEvery是监听
import { call, put, takeEvery } from "redux-saga/effects";

// 工作时的login
function * loginHandle(props) {
  console.log(props)

}

// watch saga
function * mySaga(props) {
  yield takeEvery('login', loginHandle)
}
