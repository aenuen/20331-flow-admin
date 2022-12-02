module.exports = {
  title: '居乐律师', // 项目名称
  port: 20331, // 项目端口
  showSettings: false, // 是否显示 showSettings
  tagsView: true, // 是否使用 tagsView
  fixedHeader: false, // 是否启用 fixedHeader
  sidebarLogo: false, // 是否使用 sidebarLog
  errorLog: 'development', // 使用errorLog的模式(可使用数组,如:['development','production'])
  cryptoJsSecretKey: 'SecretKey', // CryptoJs加密Key
  isDevMode: process.env.NODE_ENV === 'development',
  apiBaseUrl: this.isDevMode ? 'http://localhost:20330' : 'http://localhost:20330'
}
