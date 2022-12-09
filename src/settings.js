// 是否开发模式

module.exports = {

  // 是否开发模式
  isDevMode: process.env.NODE_ENV !== 'production',

  // 项目名称
  projectName: '居乐律师',

  // 服务网址
  apiBaseUrl: this.isDevMode ? 'http://localhost:20330' : 'http://localhost:20330',

  // 项目端口
  port: 20331,

  // 是否显示设置
  showSettings: false,

  // 是否显示侧边栏LOGO
  sidebarLogo: false,

  // 是否头部跟随
  fixedHeader: false,

  // 是否显示标签
  tagsView: true,

  // 错误日志在什么环境下显示
  errorLog: 'development', // 数组形式也可：['development','production']

  // cryptojs
  cryptojsConfig: {
    secret: 'eyJfaWRfIjoiYWJib3R0IiwiZXhwIjoxNjM3NTg2MTcxLCJpYXQiOjE2Mzc0OTk3NzF9'
  },

  // result
  resultConfig: {
    successCode: 200, // 成功号码
    errorCode: -1, // 错误号码
    tokenCode: -2 // 令牌失效号码
  }
}

