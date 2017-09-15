/**
 *  属性值是布尔型 Boolean
 * 'name|min-max': value
 * 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'number|1': true
})
console.log(JSON.stringify(data)) // {"number": true } true 或  false


