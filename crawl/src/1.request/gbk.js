const request = require('request');
const iconvLit = require('iconv-lite');

// encoding=null 表示 告诉request模块 不要自作多情转成字符串，我要自己拿到buffer
request({
    url:'http://top.baidu.com/category?c=9&fr=topindex',
    encoding: null,
},function(err,res,body){
    let response = iconvLit.decode(body,'gbk');
    console.log(response)
})