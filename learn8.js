/**
 *  属性值是布尔型 Boolean
 * 'name|min-max': value
 * 随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'number|3-6': true
})
console.log(JSON.stringify(data)) // {"number": true } true 或   false


