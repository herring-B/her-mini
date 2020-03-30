/*
  名称：her框架(微信小程序)请求方法
  作者：herringB
  时间：2020/03/16
*/
import { SWITCHPARAMS } from './switch.js'
const her_request = {}

// 默认配置
const options = {
  baseUrl: 'http://classroom.shihezai.com', // 请求地址，例如www.baidu.com
  header: { // 头文件，如属性名与调用入参header中的某属性相同，则会被调用入参对应的属性值覆盖 
    'content-type': 'json'
  },
  url: '', // 请求的地址链接，例如/user/getInfo
  params: {}, // 与URL拼接的参数，json结构，会自动解析为jsonString
  data: {}, // 请求body中的参数，json结构
  dataType: 'json', // 返回的数据类型
  responseType: '', // 相应的数据类型
  timeout: 50000, // 接口超时时间，单位为毫秒
}

her_request.get = (customOptions) => requestAll(customOptions, 'GET')
her_request.post = (customOptions) => requestAll(customOptions, 'POST')

function requestAll (customOptions, requestType) {
  if (!customOptions || JSON.stringify(customOptions) === '{}') return false
  wx.showLoading({title: '加载中'})
  let RO = {...options, ...customOptions, header: {...options.header, ...options.customOptions}}
  return new Promise((resolve, reject) => {
    wx.request({
      url: RO.baseUrl + SWITCHPARAMS(RO.url, RO.params),
      method: requestType || 'GET',
      header: RO.header || {},
      data: RO.data || {},
      dataType: RO.dataType || options.dataType,
      responseType: RO.responseType || '',
      timeout: RO.timeout || options.timeout,
      success (res) {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      },
      fail (err) {
        reject(err)
      },
      complete () {
        wx.hideLoading()
      },
    })
  })
}

export default her_request