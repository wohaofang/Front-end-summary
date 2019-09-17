


function zan(num,index=0){
    if(num<1000){
        var obj = {
            0:function(){
                console.log(num+'赞',index)
                return num+'赞'
            },
            1:function(){
                console.log(num+'万赞',index)
                return num+'万赞'
            },
            2:function(){
                console.log(num+'千万赞',index)
                return num+'千万赞'
            },
        }
        obj[index]()
        return 
    }

    // let next = Math.floor(num/1000)
    let a = num/1000
    let next = a.toFixed(2)
    let indexx = index+=1
    zan(next,indexx)
}
zan(1234)