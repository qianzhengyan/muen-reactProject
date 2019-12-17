import React, { Component } from 'react'
import {login} from "../../api/api"
export default class Login extends Component {
    state={
        userName:"",
        password:"",
        isshow:false
    }
    clickInput(e){
        let key=e.target.name;
        this.setState({[key]:e.target.value})
    }
    goToRegister(){
        this.setState({isshow:true})
        this.props.history.push('/register')
    }
   async clickBtn(){
    let {userName,password} = this.state;
        // console.log(this.state)//获取state里面的数据内容
        let res= await login({userName,password})
        console.log(res)
        if(res.data.code===1){//登录成功
            window.localStorage.token = res.data.token;
            window.localStorage.userId = res.data.userId;
            this.props.history.go(-1)
        }else{
            this.setState({isshow:true})
        }
    }
    render() {
        let {userName,password,isshow} = this.state;
        return (
            <div>
                <div className="login">
                    <h3>欢迎来到沐恩之家</h3>
                    <p><input type="text" placeholder="请输入您的用户名" value={userName} name="userName" onChange={this.clickInput.bind(this)}/></p>
                    <p><input type="text" placeholder="请输入您的密码" value={password} name="password" onChange={this.clickInput.bind(this)}/></p>
                    {isshow?<p><button onClick={this.goToRegister.bind(this)}>注册</button></p>:null}
                    <p><button onClick={this.clickBtn.bind(this)}>登录</button></p>
                </div>
            </div>
        )
    }
}
