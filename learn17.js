/**
 * 数据占位符定义规范 DPD
 * 占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中。
 * 占位符 的格式为：
 * @占位符
 * @占位符(参数 [, 参数])
 * 注意：
 * 1.用 @ 来标识其后的字符串是 占位符。
 * 2.占位符 引用的是 Mock.Random 中的方法。
 * 3.通过 Mock.Random.extend() 来扩展自定义占位符。
 * 4.占位符 也可以引用 数据模板 中的属性。
 * 5.占位符 会优先引用 数据模板 中的属性。
 * 6.占位符 支持 相对路径 和 绝对路径。
 * 根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    name: {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last'
    }
})
console.log(JSON.stringify(data)) // {"name":{"first":"Brenda","middle":"Richard","last":"Gonzalez","full":"Brenda Richard Gonzalez"}}
