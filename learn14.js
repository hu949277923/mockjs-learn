/**
 * 属性值是数组 Array
 * 'name|count': array
 * 通过重复属性值 array 生成一个新数组，重复次数为 count。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'number|3': [1, 2, 3]
})
console.log(JSON.stringify(data)) // {"number":[1,2,3,1,2,3,1,2,3]}


