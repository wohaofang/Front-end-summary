 import React ,{Component} from 'react';

  class B extends Component{
  
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
    render(){
        return(
            <div>
                夫计数器:{
                    this.state.count
                }
                <button onClick={this.sumClick}>+1</button>
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

