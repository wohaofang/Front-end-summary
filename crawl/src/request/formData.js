let request = require('request'); 
const fs = require('fs')
const path = require('path')


let formData={
  name: 'dm', // 普通的文本字段
  age: 123,
    //文件   
  content: fs.createReadStream(path.resolve(__dirname , 'content.txt'))
}

request.post({
    url:'http://localhost:8080/upload',
    formData
},function(err,response,body){});
