/**
 * 属性值是数字 Number
 * 'name|+1': number
 * 属性值自动加 1，初始值为 number。
 * 备注：
 * 直接 {'num|+1': 0} 不起作用，具体原因不清楚
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'list|3':[
        {
            'num|+1': 0
        }
    ]
})
console.log(JSON.stringify(data)) // {"list":[{"num":0},{"num":1},{"num":2}]}
