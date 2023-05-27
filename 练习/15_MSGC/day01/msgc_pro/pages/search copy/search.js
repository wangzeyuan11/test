$(function(){

    $('.search>.sort').on('click','li',function(){
        $(this).addClass('active').siblings().removeClass('active')
        getData(1)
    })

    function getData(p){
    //读取地址栏中的kw属性的值，通过url传递给服务器，获取对应的结果
    const kw = new URLSearchParams(location.search).get('kw')

    const type = $('.search>.sort>li.active').data('type')

    var url = `https://serverms.xin88.top/mall/search?type=${type}&page=${p}&kw=${kw}`
    $.get(url,data=>{
        
        console.log(data);
        $('.search-content').html(
            data.data.map(value=>{
                const {pic,name,price,sale_count} = value

                //高亮 把标题中的搜索关键词找出来，变为红色
                //思路:
                // 1.从字符串中找到关键词 如果是英文 则忽略大小写
                // 2.替换成<span style="color:red;">关键词</span>
                const reg = new RegExp(kw,'gi')
                const name_re = name.replace(reg,`<span style="color:red;">${kw}</span>`)

                return `<li>
                <img src="./assets/img/mall/${pic}" alt="">
                <div>
                    <p>${name_re}</p>
                    <b>￥${price}</b>
                    <span>销量:${sale_count}</span>
                </div>
            </li>`
            })
        )

        const {page,pageCount} = data
        let start = page-2
        let end = page+2
        if(start<1){
            start = 1
            end = start+4
        }
        if(end>pageCount){
            end = pageCount
            //如果页数很少，少于四页，则起始值最小是1
            start =Math.max(end-4,1) 
        }
        $('.search>.pages>ul').empty()
        for(let i = start;i<=end;i++){
            $('.search>.pages>ul').append(
                `<li class="${page==i?'active':''}">${i}</li>`
            )
        }
        // if(page==start){
        //     $('.search>.pages>.prev').hide()
        // }else{
        //     $('.search>.pages>.prev').show()
        // }
        // if(page==pageCount){
        //     $('.search>.pages>.next').hide()
        // }else{
        //     $('.search>.pages>.next').show()
        // }
        if(page==1){
            $('.search>.pages>.prev').prop('disabled',true)
        }else{
            $('.search>.pages>.prev').prop('disabled',false)
        }
        if(page==pageCount){
            $('.search>.pages>.next').prop('disabled',true)
        }else{
            $('.search>.pages>.next').prop('disabled',false)
        }
        $(window).scrollTop(0)
        //按钮不可用
        //利用prop方法，修改按钮的disabled属性，true代表不可用，false代表可用

    })
}
    getData(1)
    $('.search>.pages').on('click','li',function(){
        const p = $(this).text()
        getData(p)
    })
    $('.search>.pages>.next').click(function(){
        const p = $('.search>.pages>ul>li.active').text()*1
        getData(p+1)
    })
    $('.search>.pages>.prev').click(function(){
        const p = $('.search>.pages>ul>li.active').text()*1
        getData(p-1)
    })
})