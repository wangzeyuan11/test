
$(function(){
    var url = "https://serverms.xin88.top/index";
    $.get(url,data=>{
        console.log(data);
        $('.hot-video>ul').html(
            data.hot_video.map(value=>{
                const {vname,mp4} = value
                return `<li>
                <video src="./assets/video/${mp4}" preload="metadata"></video>
                <i></i>
                <b>${vname}</b>
            </li>`
            })
        )
        $('.hot-search>div').html(
            data.today_hot.map(value=>{
                const {name,emphasize} = value
                return `
                    <a href="?p=search&kw=${name}" class="${emphasize ? 'active' : ''}" >${name}</a>`
            })
        )
    })

    $('.hot-video>ul').on('click','li',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').siblings().removeClass('noactive')
            $(this).children('video').trigger('pause')
        }else if ($(this).hasClass('noactive')){
            $(this).addClass('active').removeClass('noactive')
            $(this).siblings().addClass('noactive').removeClass('active')
            $(this).children('video').trigger('play')
            $(this).siblings().children('video').trigger('pause')
        }else{
        $(this).addClass('active').siblings().addClass('noactive')
        $(this).children('video').trigger('play')
        }

        // console.log(this);
    })
    
})