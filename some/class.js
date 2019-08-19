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

 aa.hello()