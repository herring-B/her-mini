const getCode = function () {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        resolve(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

const login = function () {
  wx.showLoading({ title: '加载中' })
  return new Promise((resolve, reject) => {
    getCode().then(res => {
      setTimeout(function () {
        resolve(res)
        wx.hideLoading()
      }, 500)
    }).catch(err => {
      reject(err)
      wx.hideLoading()
    })
  })
}

export default login