let http = require('http')
let port = 3000
let fs = require('fs')
let url = require('url') // 把一个路径解析成一个对象
let path = require('path')
let mime = require('mime')


http.createServer((req,res)=>{ 
    let {pathname,query} = url.parse(req.url,true)

    // /clock
    if(pathname === '/clock'){
        let date = new Date()
        res.end(date.toLocaleString())
        return
    }

    fs.stat('.'+pathname,function(err,data){
        if(err){
            res.statusCode = 404
            res.end(`${pathname} not found`)
        }else if(data.isFile()){ 
            res.setHeader('Content-type', mime.getType(pathname) +';charset=utf-8')
            fs.createReadStream('.'+pathname).pipe(res)
        }else if(data.isDirectory()){ 
            res.setHeader('Content-type','text/html;charset=utf-8')
            let p = path.join('.'+pathname,'index.html') 
            fs.createReadStream(p).pipe(res)
        }
    })
}).listen(port,()=>{
    console.log(`服务已启动在${port}端口上`)
})