let request = require('request'); 

let options={
    url:'http://localhost:8080/signup',
    method:'POST',
    json:true, // 参数为对象时 必须加此参数
    header:{
        'Content-Type': "application/json",
    },
    body: {
        "name" : "Dm", "age": "20"
    }
}
// 用户注册功能
request(options,function(err,response,body){
    if(!err){
        console.log(body)
    }
})
