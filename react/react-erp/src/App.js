import React from 'react';
import './App.css';
import { Button } from 'antd';


class App extends React.Component{
  render(){
    return(
      <div className="App">
        {/* <Button type="primary">Button</Button> */}
        {this.props.children}
      </div>
    )
  }
}

export default App;
