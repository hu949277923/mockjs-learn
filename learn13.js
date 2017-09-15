/**
 * 属性值是数组 Array
 * 'name|min-max': array
 * 通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'number|2-3': [1, 2, 3, 4, 5]
})
console.log(JSON.stringify(data)) // {"number":[1,2,3,4,5,1,2,3,4,5]}


