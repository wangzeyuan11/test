//准备就绪的写法：
$(function(){
    var url = 'https://serverms.xin88.top/video?page=1'

    $.get(url,data=>{
        console.log('菜谱数据：',data);

        $('.menu-content').html(
            data.data.map(value=>{
                const {duration,pic,title,views} = value
                return `<li>
                <div>
                    <img src="./assets/img/video/${pic}" alt="">
                    <div>
                        <span>${views}次播放</span>
                        <span>${duration}</span>
                    </div>
                </div>
                <p>${title}</p>
            </li>`
            })
        )
    })
})