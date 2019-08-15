// 发布订阅
function Dep(){
    this.subs = []
}

// 默认绑定的每一个方法都有一个update 属性
Dep.prototype.addSub = function(sub){// 订阅
    this.subs.push(sub)
}
Dep.prototype.notify = function(){  
    this.subs.forEach(sub=>sub.update())
}

function Watcher(fn){ //watch是个类 通过这个类创建的实例都拥有update方法
    this.fn = fn
}
Watcher.prototype.update = function(){
    this.fn()
}

let watcher = new Watcher(function(){console.log(11)})

let dep = new Dep()
dep.addSub(watcher) // 将watcher放到了数组中

console.log(dep.subs)
dep.notify() 