// fs  fileSystem 文件系统  文件的读写

let fs = require('fs')
let util = require('util')

// fs 既有同步又有异步方法，异步有callback

// 同步的读取
// 1.读取文件 必须存在
// 2。读取的默认类型是buffer
let result = fs.readFileSync('./a.js','utf8')
console.log(result)


// promise 防止回调地狱  

// function read(url){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(url,'utf8',function(err,data){
//             if(err) return reject()
//             resolve(data)
//         })
//     })
// }

// read('./a.js').then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })

// util.promisify()

let read2 = util.promisify(fs.readFile)
read2('./a.js','utf8').then((data)=>{
    // console.log(data)
    return read2(data,'utf8') // 如果第一个promise中返回一个promise实例，会吧当前执行的结果传到下一个then中
}).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    // 处理错误
})

// async await  await 后面只能跟随promise  终极解决方案

async function read3(){
    let cont  = await read2('./a.js','utf8')
    console.log(cont)
}
read3()


// promise 解决了 毁掉地狱和合并同步异步返回结果  async await 简化promise