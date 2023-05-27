function wasteTime(n){
    return n < 3 ? 1 : wasteTime(n - 1) + wasteTime(n - 2)
}

var res = wasteTime(46)

console.log({res});
//发送消息:此操作会触发worker的onmessage事件
postMessage({res})