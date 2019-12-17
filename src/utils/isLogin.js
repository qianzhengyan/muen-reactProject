import React , {Component} from "react";
// 高阶组件
function goToLogin(Components){
    return class Login extends Component{
        state={
            isshow:false
        }
        render(){
            let {isshow} = this.state;
            return isshow ? <Components /> : null
        }
        componentDidMount(){
            if(window.localStorage.token){
                this.setState({isshow:true})
    
            }else{
                this.props.history.push('/login')
            }
        }
    }
}

export default goToLogin;