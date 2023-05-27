//自定义脚本
//封装一个发送请求的
module.exports = {
    get(url){
        return fetch(url)
    }
}