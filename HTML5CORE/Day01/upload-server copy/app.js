const express = require('express');
const cors = require('cors'); // 跨域模块

// multer: 负责处理上传文件
const multer = require('multer');
// uuid : 用于生成不重复的 由英文组成的字符串, 适合做文件的唯一名称
const uuid = require('uuid');

const app = express()

app.use(cors())
app.use(express.static('public'))
// 允许 上传文件夹 中的内容, 被外部访问
app.use(express.static('upload'))

// multer 创建负责处理上传文件的对象
const upload = multer({
  // ctrl + i : 查看提示

  // dest -> destination 目标,目的地
  // 代表上传文件存储的位置 - 目录/文件夹
  // 此目录如果不存在,会自动创建
  // dest: 'upload', 

  // 默认的上传设定: 会把文件重用名, 但是没有后缀名, 导致文件无法查看

  // storage: 可以个性化对上传的文件 的保存方式进行定制
  storage: multer.diskStorage({
    destination: 'upload', //配置保存的目录
    // 用于接收上传的内容, 然后给出文件存储时的名称
    filename(req, file, cb) {
      console.log('文件信息:', file);
      // 读取上传的文件名
      const { originalname } = file
      // 从原名称中截取后缀名的部分
      const i = originalname.lastIndexOf('.')
      // 截取 . 开始的内容
      const ext = originalname.substring(i) // .jpg  .png ...这种

      // 生成唯一名称
      const unique_name = uuid.v4() + ext // v4 是最常用的方案
      console.log('唯一名称:', unique_name);

      // cb : callback缩写, 回调函数. 通过此函数设置文件的存储名称
      // cb(错误信息, 文件存储时的名称)
      cb(null, unique_name)
      // 参数1: null 代表没有错误

      // 直接采用原文件名存在两个BUG
      // 1. 中文文件名 会乱码
      // 2. 同名文件 会覆盖
    }
  })
})


app.listen(3000, () => {
  console.log('服务器已开启, 端口3000');
})

// 制作接口, 用与接收用户上传的头像图片
// 上传操作要求 必须为 POST 方案

// single: 单个,单独的;  代表要处理单文件上传
// 'avatar' : 代表通过post传递的数据中, 名字是avatar的是文件类型,需要处理
app.post('/avatar', upload.single('avatar'), (req, res) => {
  console.log(req.file)

  res.send(req.file)
})

// 多文件上传接口
// upload.array() : 用于操作多文件
app.post('/avatars', upload.array('avatars'), (req, res) => {
  // files : 存储多文件的信息
  res.send(req.files)
})

