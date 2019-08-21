

import React ,{Component} from 'react';
import local from './local'


class Ipt extends Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
             <label>
                 用户名 <input defaultValue={this.props.data} onChange={this.props.save}/>
                 <br/>
             </label>
        )
    }

}


export default local(Ipt,'用户名','haha');