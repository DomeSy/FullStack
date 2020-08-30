// 在打包时webpack首先会在根路径去找webpack.config.js文件，如果有则按当前文件配置，否则按自己的文件配置

const path = require("path")

// webpack配置就是对象
module.exports = {
  entry: "./src/index.js",  //定义入口
  output: {  //输出路径
    path: path.resolve(__dirname, "./dist"),  //输出路径，必须是绝对路径，
    filename: 'main.js' //输出文件路径
  },
  mode: "development",  // 打包模式，是生产模式还是开发模式
  module: {  //模块解析，解析ccs模块等
    rules: [ //匹配规则
      // 当 webpack 遇到不认识的模块，需要使用正确的loader来处理
      {
        test: /\.css$/,   //正则匹配，制定匹配的规则
        use: ["style-loader", "css-loader"]    //使用
      }
    ]
  },
  // plugins: [   // 插件扩展配置

  // ]   
}