// 处理 params 参数转换拼接, 接受一个url和一个json格式的params，返回拼接完成的url
const SWITCHPARAMS = function (url, params) {
  if (!url || typeof url !== 'string') return ''
  if (!params || typeof params !== 'object' || JSON.stringify(params) === '{}') return url || ''
  let paramsStr = ''
  for (let key in params) {
    paramsStr += key + '=' + params[key] + '&'
  }
  paramsStr = (!!paramsStr && paramsStr[paramsStr.length - 1] === '&') ? paramsStr.slice(0, paramsStr.length - 1) : paramsStr
  if (url.indexOf('?') > -1) {
    if (url.indexOf('&') > -1) {
      return url[url.length - 1] === '&' ? (url + paramsStr) : (url + '&' + paramsStr)
    } else {
      return url + '&' + paramsStr
    }
  } else {
    return url + '?' + paramsStr
  }
}

export {
  SWITCHPARAMS
}