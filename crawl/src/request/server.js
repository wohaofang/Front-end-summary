const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const multer = require('multer');

// 当服务器端收到请求体的时候是 formData类型，则会接收并解析内容
// 里面数据分为两种，一种是普通的文本，一种是文件
// 普通的文件数据放在req.body 文件数据则放在req.file里
const upload = multer({
    // 指定文件的临时存放目录
    dest: path.resolve(__dirname,'uploads')
})
const app = express();
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true}));

app.post('/signup',function(req,res){
    let user = req.body;
    res.json(user);
});
// single表示这个请求from中只有一个文件字段
app.post('/upload',upload.single('content'), function(req,res){
    let body = req.body
    let file = req.file
    console.log(body,file)
})

app.listen('8080')
