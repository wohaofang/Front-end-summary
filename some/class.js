// 定义一个类

/**
 * 
 * 累里可以定义一个够着函数
 * 当创建一个类的实例时，就会调用构造函数
 */

 class Parent{
    constructor(name){
        this.name = name
    }
    getName(){ // 属性实例的公有属性，也就是相当于原型上的属性
        console.log(this.name)
    }
    static hello() {
        console.log('hello world');
      }
 }

 class Child extends Parent{
     constructor(name,age){
        super(name)
        this.age = age
     }
     getAge(){
         console.log(this.age,this.name)
     }
 }

 let aa = new Child('dingming',19)

//  aa.hello()

class Ha{
    constructor(){
        this.aa 
    }
    aa(){
        console.log('aaa')
    }
}

var bb = new Ha()
// bb.aa()
var aa = () => {
    setTimeout(() => {
      console.log('任务队列函数1')
    }, 0)
    var cc = new Promise((resolve,reject)=>{
        console.log(1234)
        resolve(1)
    })
    cc.then(res=>{console.log('res',res)})
    for (let i = 0; i < 5000; i++) {
        console.log('a的for循环')
    }
    console.log('a事件执行完')
}

aa()

/**
 * 执行顺序
 * 
1234
5000 a的for循环
a事件执行完
res 1

任务队列函数1
 * */ 