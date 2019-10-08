// 找出数组重复次数最多的元素

/**
 * lines = ['192.168.1.1', '192.118.2.1', '192.168.1.1'];
 * return '192.168.1.1';
*/

const lines = ['192.168.1.1', '192.118.2.1', '192.168.1.1']

const maxQuery = function(arr){
    let [obj,max,name] = [{},1,'']

    arr.forEach(v=>{
        if(obj[v]){
            obj[v]+=1
            if(obj[v]>max){
                max =  obj[v]
                name = v
            }
        }else{
            obj[v] = 1
        }
    })
    return name
}

maxQuery(lines)

// 反转一个3位整数

const reverseNum = function(num){
    return +[...num.toString()].reverse().join('')
}


// 

