
import { LoginService } from "../Routes/login"

// export const login = userInfo => ({type: 'LOGIN_SUCCESS', payload: userInfo})
export const login = userInfo => dispatch => {
  LoginService.login(userInfo).then(res => {
    dispatch({type: 'LOGIN_SUCCESS', payload: res})
  })
}

// export function loginPromise(dispatch, userInfo) {
//   LoginService.login(userInfo).then(res => {
//     dispatch({type: 'LOGIN_SUCCESS', payload: res})
//   })
// }