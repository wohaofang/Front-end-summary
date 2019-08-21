// 高阶组件就是一个函数 用来封装重复的逻辑
// 传递一个 老组件 返回一个新组建
import React ,{Component} from 'react';

export default function(OldComponent,name,place){
    class NewCompomnet extends Component{
        constructor(){
            super()
            this.state = {
                data:''
            }
        }
        componentWillMount(){
            this.setState({data:localStorage.getItem(name)|| place})
        }
    
        save = (event)=>{
            localStorage.setItem(name,event.target.value)
        }
        render(){
            return <OldComponent data={this.state.data} save={this.save} />
        }
    }

    return NewCompomnet;
}