import React, { Component } from 'react'
import routes from "./routerConfig"
import RouterView from "./routerView"
export default class index extends Component {
    render() {
        return (
            <div>
                <RouterView routes={routes}></RouterView>
            </div>
        )
    }
}
