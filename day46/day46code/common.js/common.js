//需求：
//get(地址,回调函数)
//callback:回调;简写：cb
function get(url,cb){ 
    var xhr = new XMLHttpRequest()
    xhr.open('get',url)
    xhr.onload = function(){
        var data = JSON.parse(xhr.response)

        cb(data)//传递到回调函数红
    }
    xhr.send()
}