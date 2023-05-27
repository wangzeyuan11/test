$(function(){
    var url = 'https://douyu.xin88.top/api/room/list?page=1&;type=ms'

    $.get(url,data=>{
        console.log(data);
        $('.live-content').html(
           data.data.list.map(value=>{
            const {roomSrc,nickname,roomName,hn} = value
            return `<li>
            <div>
                <img src="${roomSrc}" alt="">
                    <p class="hn">${hn}</p>
                    <p class="nickname">${nickname}</p>
            </div>
            <p>${roomName}</p>
        </li>`
           })
        )
    })
})