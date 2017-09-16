/**
 * 属性值是正则表达式 RegExp
 * 'name': regexp
 * 根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
 */
var Mock = require('mockjs')
var data = Mock.mock({
    'regexp1': /[a-z][A-Z][0-9]/,
    'regexp2': /^[\u2E80-\u9FFF]+$/,
    'regexp3': /\d{3}-\d{8}|\d{4}-\d{7}/
})
console.log(JSON.stringify(data)) // {"regexp1":"gP5","regexp2":"诲艈㉥","regexp3":"1005-0488700"}
// mac test git
