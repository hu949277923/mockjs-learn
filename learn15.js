/**
 * 属性值是函数 Function
 * 'name': function
 * 执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'number': () => {
        return [1, 2, 3]
    }
})
console.log(JSON.stringify(data)) // {"number":[1,2,3]}


