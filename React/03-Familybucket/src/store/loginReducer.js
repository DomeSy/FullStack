const userInit = {
  isLogin: false, //是否登录
  userInfo: { //基本信息
    id: null,
    name: '',
    score: 0
  },
  loading: false, //loading框
  err: {        //错误信息
    msg: ""
  }
}

// 定义用户基本信息修改信息
export const loginReducer = (state = {...userInit}, {type, payload}) => {
  switch (type) {
    case "REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return { ...state, isLogin: true, loading: false, userInfo: {...payload}};
    case "LOGIN_FAILURE":
      return { ...state, ...userInit, ...payload };
    case "LOGOUT_SUCCESS":
      return { ...state, isLogin: false, loading: false };   
    default:
      return state
  }
}