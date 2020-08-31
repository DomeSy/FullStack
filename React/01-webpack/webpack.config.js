// 在打包时webpack首先会在根路径去找webpack.config.js文件，如果有则按当前文件配置，否则按自己的文件配置

const path = require("path")

// 引入插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      {
        // 图片
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          // loader可以配置参数
          options:{
            name: '[name]_[hash:9].[ext]',   //输出的名称，使用占位符，[name]:传进去图片的名称 [hash]:哈希值 [ext]:打包的文件格式如png，gif, [hash:6]:保留6位随机数
            outputPath: "images/",      //输出的文件位置
            limit: 2048  //小于2048才会转化成base64
          }
        }
      },
      {
        // 字体
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: {
          loader: "url-loader"
        }
      },
      // 当 webpack 遇到不认识的模块，需要使用正确的loader来处理
      {
        test: /\.css$/,   //正则匹配，制定匹配的规则
        use: [MiniCssExtractPlugin.loader, "css-loader",{
          loader: "postcss-loader",
          options: {
            plugins:[
              require("autoprefixer")({ 
                overrideBrowserslist: ["last 2 versions", ">1%"]
              })
            ]
          }
        }]    //使用
      },
      {
        test: /\.less$/,
        // 顺序，以此从后面解析
        use: [MiniCssExtractPlugin.loader, "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins:[
                require("autoprefixer")({ 
                  overrideBrowserslist: ["last 2 versions", ">1%"]
                })
              ]
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins: [   // 插件扩展配置
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: "Domesy",  //名称
      filename: "index.html", //名称
      template: "./src/index.html",  //以什么作为模板
      inject: "head" //脚本在哪引入
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
}