$(function(){
    
    let nowPage = 1

    let loading = false

    function getData(p){
    if($('.nomore:visible').length==1){
        return
    }

    if(loading)return

    loading = true
    
    var url = 'https://serverms.xin88.top/mall?page='+p

    $.get(url,data=>{
        loading = false
        console.log(data);
        $('.mall-content').append(
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
        nowPage = page

        if(page==pageCount){
            $('.nomore').show()
            $('.loading').hide()
        }else{
            $('.nomore').hide()
            $('.loading').show()
        }
    })
}
    getData(1)

    $(window).on('scroll',function(){
        const top = $(window).scrollTop()
        console.log(top);
        const dom_h = $(document).height()
        const win_h = $(window).height()
        const offset_bottom = dom_h - win_h
        console.log(offset_bottom);
        if(top > offset_bottom-150){
            // alert('触底')

            getData(nowPage+1)
        }
    })
 
})