## webpack4

    webpack4 不用与 webpack3 代码分割: 提取多个页面的功能代码，提取首屏不需要执行部分的代码让其异步加载。 自动发布

### 核心概念

- Entry: 入口，webpack执行构建的第一步将从Entry开始，可抽象成输入
- Module：模块，在webpack里一切皆模块，一个模块对应着一个文件。wenpack会从配置的Entry开始递归找出依赖的模块
- Chunk：代码块，一个chunk由多个模块组合而成，用于代码合并与分割
- Loader：模块转换器，用于把模块原内容按照需求转换成新的内容
- Plugin：扩展插件，在webpack构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想做的事情
- Output：输出结果，在webpack经过一系列处理并得出最终想要的代码输出结果

    webpack 启动后会从entry里配置的module开始递归解析entry依赖的所有module。每找到一个module，就会根据配置的loader去找出对应的转化规则，对module进行转换后，再解析出当前module依赖的module。这些模块会以entry为单位进行分组，一个entry和其所有依赖的module被分到一个组也就是一个chunk。最后webpack会把所有chunk转换成文件输出。在整个流程中webpack会在恰当的时机执行plugin里定义的逻辑