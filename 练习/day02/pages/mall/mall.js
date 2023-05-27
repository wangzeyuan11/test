$(function(){
    var url = 'https://serverms.xin88.top/mall?page=1'

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
    })
})