let express = require('express');
// express 是一个函数

let app = express() // express函数执行后，返回的是一个http监听函数，就是http.createServer中的函数

// 在此函数上扩展了一个listen可以监听端口
app.listen(8888,function(){
    console.log('start')
})

// app监听函数上 扩展了很多方法 包括get post delete

// app.方法名('路径'，callback)
app.get('/aaa',function(req,res){
    res.end('登录')
})

app.get('/bbb',function(req,res){
    res.end('注册')
})