// 设置地址
const locatUrl = 'http://42.228.55.199:8080/jmportal/interfaces/driver/dtxxQuery.do'
// const locatUrl = 'https://xcx-izz.zhengzhou.gov.cn/jmportal/interfaces/driver/dtxxQuery.do'


// 接口请求
export function getAppRequest(params, datas){

  /*
    params: 传入的参数
    datas:
      path: 完整的路径
      url： 路径名
      type: 请求方式
      loading: 是否加入加载框
  */
  return new Promise((res, req) => {

    let url = '';
    let type =  '';
    let loading = '';

    if(datas){
      type = datas.type || "GET";
      if(datas.path){
        url = datas.path;
      }else{
        let datasUrl = datas.url || ''
        url = `${locatUrl}${datasUrl}`;
      }
      if(datas.loading == false){
        loading = datas.loading
      }else{
        loading = datas.true
      }
    }else{
      type = "GET";
      url = `${locatUrl}`;
      loading = true;
    }
    if(loading){
      AlipayJSBridge.call('showLoading');
    }
    AlipayJSBridge.call('getAppRequest',{
      url,
      type,
      params
    },function (data) {
      if(loading){
        AlipayJSBridge.call('hideLoading');
      }
      res(data);
    })
  })
}

// 判断是否登录并且获得用户信息
export function getAppUserInfo(){
  return new Promise((res, req) => {
    AlipayJSBridge.call('login',function(data){
      // 判断是否登陆成功
      if(data.result == 'true' || data.result == true){
        AlipayJSBridge.call('getAppUserInfo',function (result) {
          res(result)
        });
      }else{
        AlipayJSBridge.call('popWindow');
      }
    });
  })
}

// 警告框
export function getAppAlert(msg, msg1){
  let title = msg1 || '提示';
  let msgs = msg || '网络异常，请稍后重试'
  AlipayJSBridge.call('alert', {
    title,
    message: msgs,
    button: '确定'
  }, function (e) {
  });
}
