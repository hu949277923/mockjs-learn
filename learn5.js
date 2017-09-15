/**
 *  属性值是数字 Number
 * 'name|min-max': number
 * 生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'number|1-100': 1
})
console.log(JSON.stringify(data)) // {"number": 45} 1-100 随机数
