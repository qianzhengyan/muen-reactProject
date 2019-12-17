import React, { Component } from 'react'
import goToLogin from "@/utils/isLogin"
class Write extends Component {
    render() {
        return (
            <div>
                Write
            </div>
        )
    }
}

export default goToLogin(Write)
