// 从内存分配空间作为缓冲区，存储一个值
// 单位是字节
var buf = Buffer.alloc(9,'abc新哥')
// <Buffer 61 62 63 64 65>
console.log(buf)
// 将一组buffer数据转为字符串
console.log( buf.toString() )