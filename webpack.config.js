/**
 * 
 * webpack 打包html资源
 * 上一章节：打包css/less/sass类型文件，需要下载loader，然后配置loader
 * 而打包html文件，需要下载插件html-webpack-plugin，引用并配置
 * 
 * webpack 打包图片资源
 */

// 引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {resolve} = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        /**
         * 在webpack4版本中，处理图片使用url-loader file-loader，其作用是利用es6的木块话语法解析图片路径
         */
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator:{
          filename:'img/[name].[hash:10][ext]',
          publicPath:'./'
        }
      },
      {
        /**
         * html-loader用于处理html文件中的image资源，作用是使用commonJS语法将图片模块引入到js中
         */
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: 'webpack打包图片资源'
    })
  ],
  mode: 'development',
  /** 
   * sevServer不属于5大核心配置，它的作用是修改文件之后进行自动打包，打开并刷新浏览器
   */
  devServer: {
    // 设置运行项目的目录
    static: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  }
}
