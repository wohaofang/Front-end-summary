var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);

// console.log(path.resolve(__dirname,'public'))
// app.use(express.static(path.resolve(__dirname,'public')))

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname, 'index.html'))
})


// 因为socket.io握手依赖http服务器
var io = require('socket.io')(server)

// 监听客户端传过来的链接
io.on('connection',function(socket){
    console.log('客户端已经连接')
    // 监听socket的message事件来监听客户端传来的消息
    socket.on('message',function(message){
        console.log(message)
        socket.send('server:'+ message)
    })
})


server.listen(8080)
