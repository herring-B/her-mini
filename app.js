//app.js
import her_login from './her/utils/login.js'
import her_request from './her/utils/request.js'

App({
  logined: her_login, // 监测已登录，记录token
  her_request: her_request, // 请求方法
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null,
    token: '',
  },
})