/**
 * 属性值是数组 Array
 * 'name|+1': array
 * 从属性值 array 中顺序选取 1 个元素，作为最终值。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'number|+1': [1, 2, 3, 4, 5]
})
console.log(JSON.stringify(data)) // {"number":1}


