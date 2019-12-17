import React, { Component } from 'react'
import Header from "../../../components/Header"
export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Header></Header>

                <button onClick={()=>{this.props.history.push("/vote")}}>投票</button>
            </div>
        )
    }
}
