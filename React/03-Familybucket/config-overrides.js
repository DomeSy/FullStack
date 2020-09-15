
const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
  fixBabelImports("import", {
    // antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@primary-color': '#1DA57A'
    },
    localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
  }),
  addDecoratorsLegacy() //配置装饰器 
);
