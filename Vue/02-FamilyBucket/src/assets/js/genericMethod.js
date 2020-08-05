
// 链接地址 第一个为获取的参数对象， 第二个为地址，默认是当前地址
export function getUrlParam(id, path) {
  let url = "";
  if(path){
    url = path
  }else{
    url = location.href
  }
  url = url + "";
  regstr = "/(\\?|\\&)" + id + "=([^\\&]+)/";
  reg = eval(regstr); //eval可以将 regstr字符串转换为 正则表达式
  result = url.match(reg); //匹配的结果是：result[0]=?sid=22 result[1]=sid result[2]=22。所以下面我们返回result[2]
  if (result && result[2]) {
    return result[2];
  }
}

//验证手机号是否合法
export function validatePhone(phoneNumber) {
  if (!(/^1[3456789]\d{9}$/.test(phoneNumber))) {
      return false;
  } else {
      return true;
  }
}

//验证密码是否合法(6-18位字母和数字)
export function validateUpwd(password) {
  if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(password))) {
      return false;
  } else {
      return true;
  }
}

//验证邮箱是否合法
export function validateEmail(email) {
  let emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (emailReg.test(email)) {
      return true;
  } else {
      return false;
  }
}

//验证银行卡号
export function validateCardCode(CardCode) {
  let pattern = /^([1-9]{1})(\d{14}|\d{18})$/;
  if (pattern.test(CardCode)) {
      return true;
  } else {
      return false;
  }
}

// 验证身份证号
export function validateCardNo(idcard) {
  let pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (pattern.test(idcard)) {
      return true;
  } else {
      return false;
  }
}

// 获取随机数
export function getNum(number){
  let chars = ['0','1','2','3','4','5','6','7','8','9'];
  let nums = "";
  for(let i = 0;i < number;i++){
    let id = parseInt(Math.random()*10);
    nums += chars[id];
  }
  return nums;
}

export function getDate(type, show){
  let dd = new Date();
  let option = {};
  let isShow = 0;
  if(type){
    option = {
      year: type.year || '',
      mounth: type.mounth || '',
      day: type.day || '',
    }
  }else{
    option = {
      year: '-',
      mounth: '-',
      day:  '',
    }
  }
  if(show){
    isShow = show
  }
  let y = dd.getFullYear();
  let m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  let result = ''
  if(isShow == 0){
    result = `${y}${option.year}${m}${option.mounth}${d}${option.day}`
  }else if(isShow == 1){
    result = `${m}${option.mounth}${d}${option.day}`
  }else if(isShow == 2){
    result = `${d}${option.day}`
  }
  return result;
}

/*
  获取JS日期后几天的时间
  date为获取的日期 格式为 2020-06-22
  day: 几天的日期, 正数为后几天， 负数为前几天
  type： 显示年月日的字样
  show: Numebr 默认为0 显示年月日 1 显示 月 日 2：显示 日
*/
export function getDateTime(date, day, type, show){
  let dd = new Date(date);
  let option = {};
  let isShow = 0;
  if(type){
    option = {
      year: type.year || '',
      mounth: type.mounth || '',
      day: type.day || '',
    }
  }else{
    option = {
      year: '',
      mounth: '',
      day:  '',
    }
  }
  if(show){
    isShow = show
  }
  day = Number(day)
  dd.setDate(dd.getDate() + day);
  let y = dd.getFullYear();
  let m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  let result = ''
  if(isShow == 0){
    result = `${y}${option.year}${m}${option.mounth}${d}${option.day}`
  }else if(isShow == 1){
    result = `${m}${option.mounth}${d}${option.day}`
  }else if(isShow == 2){
    result = `${d}${option.day}`
  }
  return result;
}

// 一位数变两位数
export function number(n){
  if(n<10){
    return '0'+n;
  }else{
    return n;
  }
}

// 判断是否偶数 是的话返回true,否则的话为false
export function IsOdd(num){
  return num%2 ==0 ? true : false
}
