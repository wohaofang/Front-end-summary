### Vue的钩子函数

#### Vue-Router导航守卫

有的时候，我们需要通过路由来进行一些操作，比如最常见的登录权限

为此我们有很多种方法可以植入路由的导航过程：全局的、单个路由独享的、或者组件级的

#### 全局守卫

vue-router全局有三个守卫：

- router。beforeEach 全局前置守卫 进入路由之前
- router。beforeResolve 全局解析守卫 在beforeRouterEnter调用之后调用
- router。afterEach 全局后置钩子 进入路由之后

```
    // main.js 入口文件
    import router from './router'; // 引入路由
    router.beforeEach((to, from, next) => { 
        next();
    });
    router.beforeResolve((to, from, next) => {
        next();
    });
    router.afterEach((to, from) => {
        console.log('afterEach 全局后置钩子');
    });

    to,from,next 三个参数

    to和from是将要进入的和将要离开的路由对象，路由对象指的是this.$route 获取到的路由对象
    next：Function  必须调用，否则不能进图路由
```

#### 路由独享守卫

如果你不想全局配置守卫的话，你可以为某些路由单独配置守卫：
```
    const router = new VueRouter({
        router:[
            {
                path:''/foo',
                component:Foo,
                beforeEnter:(to,from,next)=>{
                    // 参数用法都一样，调用顺序在全局前置守卫后面，所以不会被全局守卫覆盖
                }
            }
        ]
    })

```

#### 路由组件内的守卫

- beforeRouterEnter 进入路由前
- beforeRouterUpdate 路由复用同一个组件时
- beforeRouterLeave 离开当前路由时

```
    beforeRouteEnter (to, from, next) {
        // 在路由独享守卫后调用 不！能！获取组件实例 `this`，组件实例还没被创建
    },
    beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用 可以访问组件实例 `this`
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用，可以访问组件实例 `this`
    }

```

### 完整的路由导航解析流程

- 触发进入其他路由。
- 调用要离开路由的组件守卫beforeRouteLeave
- 调用局前置守卫：beforeEach
- 在重用的组件里调用 beforeRouteUpdate
- 调用路由独享守卫 beforeEnter。
- 解析异步路由组件。
- 在将要进入的路由组件中调用beforeRouteEnter
- 调用全局解析守卫 beforeResolve
- 导航被确认。
- 调用全局后置钩子的 afterEach 钩子。
- 触发DOM更新(mounted)。
- 执行beforeRouteEnter 守卫中传给 next 的回调函数


### 你不知道的keep-alive

在vue项目开发的时候，大部分组件是没有必要多次渲染的，所以Vue 提供了一个内置组件 keep-alive来缓存组件内部状态，避免重新渲染

- 缓存动态组件
- 缓存路由组件

#### 生命周期钩子

- activated 在组件第一次渲染时会被调用，之后再每次缓存组件被激活时调用

> 调用时机 第一次计入缓存路由/组件， 在mounted后面，

- deactivated 组件被停用(离开路由)时调用

使用可keep-alive 就不会调用 beforeDestroy（组件销毁前钩子）和destroyed（组件销毁），因为组件没有被销毁，被缓存起来了

```
        组件内的离开当前路由钩子beforeRouteLeave =>  路由前置守卫 beforeEach =>
        全局后置钩子afterEach => deactivated 离开缓存组件 => activated 进入缓存组件(如果你进入的也是缓存路由)
        // 如果离开的组件没有缓存的话 beforeDestroy会替换deactivated 
        // 如果进入的路由也没有缓存的话  全局后置钩子afterEach=>销毁 destroyed=> beforeCreate等
```