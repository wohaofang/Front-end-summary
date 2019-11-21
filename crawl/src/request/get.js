let request = require('request'); 

request('https://juejin.im/timeline/frontend',function(error,response,body){
    console.log(body)
})