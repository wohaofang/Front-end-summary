const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


// webpack 内部有一个事件流，tapable
module.exports = {
    // entry: {
    //     index: './src/index.js',
    //     base : './src/base.js',
    //     common: './comm.js',
    //     // vendor: 'jquery', // 引入第三方库
    // }, // 入口

    entry: './src/main.js',
    output:{
        path:path.join(__dirname,'dist'),//输出的文件夹，只能是绝对路径
        // name 是entry名字main(默认)，hash根据
        filename: '[name].[hash:8].js',// 打包后的文件名
    },
    module:{ 
        rules:[
            {
                test:/\.css$/, //转换文件的匹配正则
                // css-loader 用来解析处理css文件中的url路径
                // style-loader 可以把css文件变成style标签插入head中
                // 多个laoder 有顺序要求 是从右往左写
                loader:['style-loader','css-loader'],
            },
            {
                //file-loader 解析图片地址
                test: /\.(png|jpg|gif|svg)/,
                use:{
                    loader : ['file-loader','url-loader'],
                    options:{
                        limit:10*1024,
                        outputPath:'img/',
                    }
                }
            },
            {
                test:/\.(html|htm)/,
                loader:'html-withimg-loader',
            }
        ]
    },
    plugins:[
        // 用来自动向模块内注入变量
        new webpack.ProvidePlugin({
            // $: 'jquery'
        }),
        new CleanWebpackPlugin(),
        // 插件可以自动产出html文件
        new HtmlWebpackPlugin({
            template: './src/index.html', // 指定产出的模板
            filename: 'index.html', // 产出的html文件名
            title:'index',
            // chunks:['index','common'], // 产出的html文件中引入代码快
            hash:true,
            minify:{
                removeAttributeQuotes: true
            }
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/index.html', // 指定产出的模板
        //     filename: 'base.html', // 产出的html文件名
        //     title:'base',
        //     chunks:['base','common'],
        // }),
    ],
    // 配置此静态文件服务器，可以用来预览打包后的项目
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port: 8080,
        compress: true,//服务器返回给浏览器的时候是否启动gzip压缩
    }
} 