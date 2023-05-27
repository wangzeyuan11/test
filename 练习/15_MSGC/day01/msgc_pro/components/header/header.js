$(function(){

    const kw =new URLSearchParams(location.search).get('kw')
    $('.header>.search>input').val(kw)

    $('.search>button').click(function(){
        //读取搜索框中的值，拼接到地址栏参数中
        //kw ->keyword
        const kw = $('.header>.search>input').val()

        //通过代码修改 location地址
        location.assign('?p=search&kw='+kw)
    })

    //在输入框中按回车按钮也能触发搜索操作
    $('.header>.search>input').on('keyup',function(e){
        console.log(e);
        if(e.keyCode == 13){
            $(this).next().click()
        }
    })
})