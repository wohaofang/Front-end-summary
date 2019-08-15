//  promisify node 内置 promise 方法
var fs = require('fs')
var util = require('util')

let read = util.promisify(fs.readFile) // 把一个函数 promise化

read('./a.js','utf8').then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})