$(function(){

    function getData(p){


    var url = 'https://serverms.xin88.top/mall?page='+p

    $.get(url,data=>{
        console.log(data);
        $('.mall-content').html(
            data.data.map(value=>{
                const {pic,name,price,sale_count} = value


                return ` <li>
               
               <img src="./assets/img/mall/${pic}" alt="">
                
                <p>${name}</p>
                <div>               
                <b>${price}</b>
                <span>已售${sale_count}</span>
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
            start = end-4
        }

        $('.mall>.pages>ul').empty() //empty:清空子元素


        for(let i = start;i<=end;i++){
            $('.mall>.pages>ul').append(
                `<li class="${page==i ? 'active':''}">${i}</li>`
            )
        }

        if(page==1){
            $('.mall>.pages>.prev').hide()
        }else{
            $('.mall>.pages>.prev').show()
        }

        if(page==pageCount){
            $('.mall>.pages>.next').hide()
        }else{
            $('.mall>.pages>.next').show()
        }
    })
}
    getData(1)

    $('.mall>.pages').on('click','li',function(){
        const p = $(this).text()
        getData(p)
    })

    $('.mall>.pages>.next').click(function(){
        const p = $('.mall>.pages>ul>li.active').text()*1
        getData(p+1)
    })
    $('.mall>.pages>.prev').click(function(){
        const p = $('.mall>.pages>ul>li.active').text()*1
        getData(p-1)
    })
})