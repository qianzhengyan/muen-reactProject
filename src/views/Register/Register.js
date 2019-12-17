import React, { Component } from 'react'
import {register} from "../../api/api"
export default class Register extends Component {
    state={
        userName:"",
        password:"",
        realName:"",
        surepwd:""
    }
    changeInput(e){
        let key = e.target.name;
        this.setState({[key]:e.target.value})
    }
    async clickRegister(){
        // console.log(this.state)
        let {userName,password,realName,surepwd} = this.state;
        if(password === surepwd){//密码和确认密码一致
            try{
                let res = await register({userName,password,realName});
                if(res.data.code===1){
                    this.props.history.go(-1)
                }
            }
            catch(e){
                console.log(e.response)
            }
        }else{
            alert('密码和确认密码不一致')
        }
    }
    render() {
        let {userName,password,realName,surepwd}=this.state;
        return (
            <div>
                <div className="register">
                    <h3>沐恩之家欢迎你！</h3>
                    <p><input type="text" placeholder="请输入您的用户名" value={userName} name="userName" onChange={this.changeInput.bind(this)}/></p>
                    <p><input type="text" placeholder="请输入您的密码" value={password} name="password" onChange={this.changeInput.bind(this)}/></p>
                    <p><input type="text" placeholder="请输入您的真实姓名" value={realName} name="realName" onChange={this.changeInput.bind(this)}/></p>
                    <p><input type="text" placeholder="请确认你的密码" value={surepwd} name="surepwd" onChange={this.changeInput.bind(this)}/></p>
                    <p><button onClick={this.clickRegister.bind(this)}>注册</button></p>
                </div>
            </div>
        )
    }
}
