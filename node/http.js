let http = require('http')
let port = 3000
let fs = require('fs')
let url = require('url') // 把一个路径解析成一个对象
let path = require('path')
let mime = require('mime')


http.createServer((req,res)=>{ // 监听函数，当请求到来时会执行
    // console.log(req.url)
    let {pathname,query} = url.parse(req.url,true) // 根据不同的路径返回不同的结果
    // 如果访问的是/ 显示主页html  如果是文件夹 默认去找html
    // 如果访问的是文件 将文件读取返回
    // 文件不存在 返回404
    // console.log(pathname,query)

    // res.setHeader('Content-type','text/html;charset=utf-8')
    // fs.readFile('./index.html',(err,data)=>{
    //     if(err) return err
    //     res.end(data)
    // })
    

    fs.stat('.'+pathname,function(err,data){
        if(err){
            res.statusCode = 404
            res.end(`${pathname} not found`)
        }else if(data.isFile()){ // 是文件的情况
            // 没有写头 通过mine库来添加
            res.setHeader('Content-type', mime.getType(pathname) +';charset=utf-8')
            fs.createReadStream('.'+pathname).pipe(res)
        }else if(data.isDirectory()){ // 是文件 默认查找index.html
            // ./ 也是一个文件夹，获取到当前路径和index。html 进行拼接读取 这个文件也有可能不存在
            res.setHeader('Content-type','text/html;charset=utf-8')
            let p = path.join('.'+pathname,'index.html') // 拼出来要读取的路径
            fs.createReadStream(p).pipe(res)

        }

    })
}).listen(port,()=>{
    console.log(`服务已启动在${port}端口上`)
})