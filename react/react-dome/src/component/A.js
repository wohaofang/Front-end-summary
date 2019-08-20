 import React ,{Component} from 'react';
 import ReactDom from 'react-dom';


//  propTypes 属性校验
  class B extends Component{
      // 当子组件将要接收到父组件传给它的新属性时候
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
     render(){
         return(
            <div>
                子组件{this.props.count}
            </div>
         )
     }
 }

 export default class A extends Component{
     static defaultProps = {  // 默认属性对象
         count:0
     }
    constructor(props){
        super(props)
        this.state = {
            count:props.count
        }
    }
    componentWillMount(){
        console.log('1.组件将要加载')
    }

    sumClick = ()=>{
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }
    del=()=>{
        ReactDom.unmountComponentAtNode(document.querySelector('#root'))
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        return(
            <div>
                夫计数器:{
                    this.state.count
                }
                <button onClick={this.sumClick}>+1</button>
                <button onClick={this.del}>Kill</button>
                <B count = {this.state.count}/>
            </div>
        )
    }
    componentDidMount(){
        console.log('2.组件将挂载完成')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('询问组件是否要更新,')
        return true
    }
 }

