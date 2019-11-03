// 订阅发布模式  核心   先有订阅 再有发布 [fn1,fn2,fn3] 实现这个模式


function Dep(){
    this.subs = [];
}

Dep.prototype.addSub = function (sub){ // 订阅 将fn放入subs数组中
    this.subs.push(sub)
}

// 规定 绑定的方法 默认都有update这个方法 // 需要依次的执行update方法 发布
Dep.prototype.notify = function(){
    this.subs.forEach(sub=>sub.update())
}

// Watcher
function Watcher(fn){   // Watch是一个类  通过这个类创建的实例都拥有update方法
    this.fn = fn; //传函数
}

Watcher.prototype.update = function(){
    this.fn()
}

let watch = new Watcher(function(){console.log(111)}) //传订阅的函数  监听函数


let dep = new Dep();
dep.addSub(watch); //将watch放到subs数组中


dep.notify() // 触发发布