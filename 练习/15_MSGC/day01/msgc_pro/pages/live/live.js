$(function(){

    function getData(p){

    var url = `https://douyu.xin88.top/api/room/list?page=${p}&;type=ms`

    $.get(url,data=>{
        console.log(data);
        $('.live-content').html(
            data.data.list.map(value=>{
                const {roomSrc,nickname,roomName,hn}= value

                return ` <li>
                <div>
                    <img src="${roomSrc}" alt="">
                        <p class="hn">${hn}</p>
                        <p class="nickname">${nickname}</p>
                </div>
                <p>${roomName}</p>
            </li>`
            })
        )
        const {nowPage,pageCount} = data.data
        let start = nowPage-2
        let end = nowPage+2
        if(start<1){
            start=1
            end = start+4
        }
        if(end>pageCount){
            end=pageCount
            start = end-4
        }
        $('.live>.pages>ul').empty()
        for(let i = start;i<=end;i++){
            $('.live>.pages>ul').append(
                `<li class="${nowPage==i ? 'active':''}">${i}</li>`
            )
        }
        if(nowPage==1){
            $('.live>.pages>.prev').hide()
        }else{
            $('.live>.pages>.prev').show()
        }
        if(nowPage==pageCount){
            $('.live>.pages>.next').hide()
        }else{
            $('.live>.pages>.next').show()
        }
        $(window).scrollTop(0)
    })
}
    getData(1)
    $('.live>.pages').on('click','li',function(){
        const p = $(this).text()
        getData(p)
    })
    $('.live>.pages>.next').click(function(){
        const p = $('.live>.pages>ul>li.active').text()*1
        getData(p+1)
    })
    $('.live>.pages>.prev').click(function(){
        const p = $('.live>.pages>ul>li.active').text()*1
        getData(p-1)
    })
})