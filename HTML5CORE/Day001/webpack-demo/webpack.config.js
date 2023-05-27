// 固定名称,用于对 webpack工具增加个性化配置
// webpack.config.js

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 明确告知webpack 用哪种模式进行打包行为
  // development: 开发模式
  // production: 会自动做代码压缩, 并检测一些性能提升的点
  mode: "development",

  // 作用: 在打包时会在 dist 目录下自动新增 index.html 首页文件
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
  // 告知开发服务器, 首页 index.html 文件在哪里
  devServer: {
    static: './dist',
  },

  // 配置项都是固定的: https://webpack.docschina.org/configuration/

  // 入口: 代表以哪个文件作为主文件进行打包
  entry: './src/index.js',
  // 出口: 打包后的内容存储在哪里
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    // rule:规则
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,  // 正则验证: 以 .css 结尾的, 忽略大小写
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
    ],
  },
};