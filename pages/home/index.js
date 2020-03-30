Page({
  app: getApp(), // 微信全局对象
  her_request: getApp().her_request, // 请求方法
  globalData: getApp().globalData, // 微信全局变量

  data: {

  },

  // --监听页面加载
  onLoad: function (options) {
    const self = this
    // 如果页面需要登录token，使用此方法
    self.app.logined().then(res => {
      // 页面开始逻辑写该处
      self.getData()
    })
  },

  // --监听页面初次渲染完成
  onReady: function () {

  },

  // --监听页面显示
  onShow: function () {

  },

  // --监听页面隐藏
  onHide: function () {

  },

  // --监听页面卸载
  onUnload: function () {

  },

  // --监听用户下拉动作
  onPullDownRefresh: function () {

  },

  // --页面上拉触底事件的处理函数
  onReachBottom: function () {

  },

  // --用户点击右上角分享
  onShareAppMessage: function () {

  },

  getData: function () {
    const self = this
    self.her_request.get({
      url: '/classroom/page',
      params: {
        pageSize: 10,
        pageNumber: 1
      }
    }).then((res) => {
      
    })
  }
})