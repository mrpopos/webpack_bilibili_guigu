/**
 * 
 * webpack 配置文件，指示webpack加载loader工作
 * 
 * webpeck使用commonJS模块化语法 [ 构建工具基于nodeJS运行，默认使用commonJS模块化语法，module.exports | require ]
 */

// reslove方法是nodeJS中path模块中，用于拼接路径的方法
const { resolve } = require('path')

module.exports = {
  // webpack打包起点
  entry: './src/index.js',
  output: {
    // 输出的文件名
    filename: 'build.js',
    // 输出路径
    path: resolve(__dirname, 'build') //__dirname 是nodeJS中的变量，它代表当前文件所在的目录
  },
  loader: {},
}
