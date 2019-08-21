/**
 * 
 *  高阶组件 是一个函数  传入一个组件 返回一个新组件
 * 
 **/ 

import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'


import Ipt from './Ipt';


export default class Memo extends Component{

    render(){
        return(
            <form>
                <Ipt />
                留言  <textarea></textarea>
            </form>
        )
    }

}
