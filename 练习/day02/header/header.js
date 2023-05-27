$(function () {
  // 保持输入框的值, 不要因为刷新而丢失
  const kw = new URLSearchParams(location.search).get('kw')
  $('.header>.search>input').val(kw) // 输入框.value = kw


  $('.search>button').click(function () {
    // 读取搜索框中的值, 拼接到地址栏参数中
    // kw ->  keyword 关键词
    const kw = $('.header>.search>input').val() //读取 value 

    // 通过代码修改 location 地址
    location.assign('?p=search&kw=' + kw)
  })

  // 在输入框中按 回车按钮 也能触发搜索操作
  // keyup: 按键抬起时触发
  $('.header>.search>input').on('keyup', function (e) {
    // console.log('键盘事件:', e)
    // 按键编号 13 代表回车
    if (e.keyCode == 13) {
      //触发搜索按钮的点击事件
      $(this).next().click()
      // next: 下一个兄弟元素
    }
  })

  // 利用定时器为 logo 新增动画
  setInterval(() => {
    $('.header>img').addClass('animate__animated animate__rubberBand')
  }, 4000);

  $('.header>img').on('animationend', function () {
    $(this).removeClass('animate__rubberBand')
  })
})