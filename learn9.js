/**
 * 属性值是对象 Object
 * 'name|count': object
 * 从属性值 object 中随机选取 count 个属性。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'number|3': [
        {'num|+1': 1}
    ]
})
console.log(JSON.stringify(data)) // {"number":[{"num":1},{"num":2},{"num":3}]}


