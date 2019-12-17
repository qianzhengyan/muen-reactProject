import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class Header extends Component {
    static defaultProps={
        back:false,
        title:"沐恩menu"
    }
    render() {
        let {back,title,opt}=this.props;
        return (
            <div className="header">
                {
                    back?<span onClick={()=>{this.props.history.go(-1)}}>&lt;</span>:<span></span>
                }
                <span>{title}</span>
                <span>{opt}</span>
            </div>
        )
    }
}
export default  withRouter(Header)