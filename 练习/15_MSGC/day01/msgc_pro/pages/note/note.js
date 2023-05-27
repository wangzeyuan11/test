$(function(){
     let nowPage = 1
    function getData(p){


    var url = `https://serverms.xin88.top/note?page=${p}`
    
    $.get(url,data=>{
        console.log(data);
        $('.note-content').html(
        data.data.map(value=>{
            const {cover,favorite,name,title,head_icon} = value

            return `<li>
                <div>
                <img src="./assets/img/note/${cover}" alt="">
                <p>${title}</p>
                <div>
                    <div>
                    <img src="./assets/img/note/${head_icon}" alt="">
                    <span>${name}</span>
                    </div>
                    <span>${favorite}</span>
                </div>
            </div>
        </li>`
        })
        )
        const {page,pageCount} = data
        nowPage = page
        
    })
}
    getData(1)
    $(window).on('scroll', function () {
        const top = $(window).scrollTop() //滚动距离
    
        const dom_h = $(document).height() //内容高
        const win_h = $(window).height() //窗口高
        const offset_bottom = dom_h - win_h
    
        // console.log(top, offset_bottom);
        // 因为滚动有小数点的偏差, 用等号比较太严格
        // 所以: 把触底距离 - 10像素, 然后用 大于方式判断
        // 为了提升用户体验, 可以让触底操作更早一些触发, 让用户感觉不到加载操作
        if (top > offset_bottom - 150) {
          // alert("触底!!  请求下一页数据!")
    
          getData(nowPage + 1)
        }
      })
})