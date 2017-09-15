/**
 * 属性值是字符串 String
 * 'name|min-max': string
 * 通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'str|1-15': 'bill'
})
console.log(JSON.stringify(data)) // {"str":"billbillbillbill"}