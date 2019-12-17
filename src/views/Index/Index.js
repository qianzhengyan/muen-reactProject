import React, { Component } from 'react'
import RouterView from "../../router/routerView"
import {NavLink} from "react-router-dom"
export default class index extends Component {
    state={
        arr:[
            {
                path:"/index/home",
                txt:"首页"
            },
            {
                path:"/index/dynamic",
                txt:"动态"
            },
            {
                path:"/index/write",
                txt:"留言板"
            },
            {
                path:"/index/my",
                txt:"我的"
            }
        ]
    }
    render() {
        let {arr} = this.state;
        let {children} = this.props;
        console.log(children)
        return (
            <div className="index">
                <RouterView routes={children}></RouterView>
                <footer>
                    {
                        arr.map((item,index)=>{
                        return <NavLink key={index} to={item.path}>{item.txt}</NavLink>
                        })
                    }
                </footer>
            </div>
        )
    }
}

