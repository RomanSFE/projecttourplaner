import React, { Component } from 'react'

import Dashboard from '../dashboard/Dashboard'
import Sidebar from '../sidebar/Sidebar'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="project-main-home-page-all-component-section-box">

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="project-sidebar-mainnn-sectiobx">
                                <Sidebar/>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Dashboard/>
                        </div>
                    </div>
                </div>

            </div>
            </>
        )
    }
}
