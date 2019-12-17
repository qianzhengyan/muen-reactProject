import React, { Component } from 'react'
import goToLogin from "../../../utils/isLogin"
class My extends Component {
    render() {
        return (
            <div>
                My
            </div>
        )
    }
}
export default goToLogin(My)