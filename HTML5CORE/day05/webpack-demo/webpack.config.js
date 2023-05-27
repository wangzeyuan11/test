//固定名称 用于对webpack工具增加个性化配置
//webpack.config.js

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //配置项都是固定的:https://webpack.docschina.org/configuration/

    //入口：代表以哪个文件作为主文件进行打包
  entry: './src/index.js',
  //出口：打包后的内容存储在哪里
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),  
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
  //告知开发服务器 首页index.html文件在哪里
  devServer: {
    static: './dist',
  },
  //rule：规则
  module: {
    rules: [
      {
        test: /\.css$/i, //正则验证：以.css结尾的 忽略大小写
        use: ["style-loader", "css-loader",'sass-loader',],
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};