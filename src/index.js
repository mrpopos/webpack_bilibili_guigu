// 开发环境
// webpack ./src/index.js -o ./build --mode=development

// 生产环境
// webpack ./src/index.js -o ./build --mode=production

// 上述测试说明，webpack可以打包js、json模块

import info from './index.json'
// import './index.css'

console.log(info)

const myFunc = () => {
  console.log('test')
}

myFunc()
