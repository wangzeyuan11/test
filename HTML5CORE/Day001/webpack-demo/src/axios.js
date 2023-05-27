// 自定义的模块
// 封装一个发送请求的
module.exports = {
  get(url) {
    return fetch(url)
  }
}