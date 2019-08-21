import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'


/** 
 *  context
 *  1. 在父组件里定义 childContextTypes 上下文类型
 *  2. 在父组件里定义 getChildContext 用来返回上下文对象向
 *  3. 在子组件里定义 contextTypes
*/

export default class homePage extends Component{
    static childContextTypes = {
        color: PropTypes.string,
        setColor: PropTypes.func
    }
    getChildContext(){
        return {
            color: this.state.color,
            setColor : this.setColor
        }
    }
    setColor = (color)=>{
        this.setState({color})
    }
    constructor(){
        super()
        this.state = {
            color : 'red'
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

class Header extends Component{
    render(){
        return(
            <div>
                <Title/>
            </div>
        )
    }
}

class Main extends Component{
    render(){
        return(
            <div>
                <Title/>
            </div>
        )
    }
}

class Title extends Component{
    static contextTypes = {
        color: PropTypes.string,
        setColor: PropTypes.func
    }
    render(){
        return(
            <div>
               <h1 style={{color:this.context.color}}>1234</h1>
               <button onClick={()=>this.context.setColor('green')}>变色1</button>
               <button onClick={()=>this.context.setColor('orange')}>变色2</button>
            </div>
        )
    }
}