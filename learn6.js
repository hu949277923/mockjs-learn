/**
 *  属性值是数字 Number
 * 'name|min-max.dmin-dmax': number
 * 生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'number|1-100.0-2': 1
})
console.log(JSON.stringify(data)) // {"number": 59.31} 1-100 随机的2为小数或者1位小数或者没有小数部分
