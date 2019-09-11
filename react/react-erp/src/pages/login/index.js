import React from 'react';

import { Typography } from 'antd';
const { Title } = Typography;


export default class Login extends React.Component{
    render(){
        return(
            <div className="login">
                <div className='login-content'>
                    <Title level={3}>登录</Title>
                    <LoginForm/>
                </div>
            </div>
        )
    }
}

class LoginForm extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}