import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import {Router,Route} from 'react-router-dom'

/** 
 * 
 * router 是路由容器
 * route 代表一条路由的规则
 * */

 let Home = ()=> <div>首页</div>
 let User = ()=> <div>用户管理</div>
 let Profile = ()=> <div>个人设置</div>



 ReactDom.render(
     <Router>
        <div>
            <route path="/home" component={Home}/>
            <route path="/user" component={User}/>
            <route path="/profile" component={Profile}/>
        </div>
     </Router>,
     document.querySelector('#root')
 )