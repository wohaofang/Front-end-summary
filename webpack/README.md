## webpack4

    webpack4 不同与 webpack3 代码分割: 提取多个页面的功能代码，提取首屏不需要执行部分的代码让其异步加载。 自动发布

### 核心概念

- Entry: 入口，webpack执行构建的第一步将从Entry开始，可抽象成输入
- Module：模块，在webpack里一切皆模块，一个模块对应着一个文件。webpack会从配置的Entry开始递归找出依赖的模块
- Chunk：代码块，一个chunk由多个模块组合而成，用于代码合并与分割
- Loader：模块转换器，用于把模块原内容按照需求转换成新的内容
- Plugin：扩展插件，在webpack构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想做的事情
- Output：输出结果，在webpack经过一系列处理并得出最终想要的代码输出结果

    webpack 启动后会从entry里配置的module开始递归解析entry依赖的所有module。每找到一个module，就会根据配置的loader去找出对应的转化规则，对module进行转换后，再解析出当前module依赖的module。这些模块会以entry为单位进行分组，一个entry和其所有依赖的module被分到一个组也就是一个chunk。最后webpack会把所有chunk转换成文件输出。在整个流程中webpack会在恰当的时机执行plugin里定义的逻辑

vue.js是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter,getter,在数据变动的时候发布消息给订阅者，出发相应的监听回调。
第一步：需要observe的数据对象进行递归遍历，包括子属性的对象属性，都加上setter和getter。这样的话，给这个对象的某个值复制，就会触发setter，这样就能监听到数据变化；
第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有改变，收到通知，更新视图；
第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是：
1、在自身实例化是往属性订阅器(dep)里面添加自己
2、自身必须有一个update()方法
3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退
第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Complie来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化->师徒更新；视图交互变化(input)->数据model变更的双向绑定效果。








