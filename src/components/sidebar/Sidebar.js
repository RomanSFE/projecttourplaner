import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <>
            <div className="project-report-sidebar-main-seceion-box">
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/tour-planer">Tour Planer</Link></li>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/tour-plan-note">Tour Plan Note</Link></li>
                    <li><Link to="/tour-guide">Tour Guide</Link></li>
                    <li><Link to="/by-bus">By Bus</Link></li>
                    <li><Link to="/by-train">By Train</Link></li>
                    <li><Link to="/by-launch">By Launch</Link></li>
                    <li><Link to="/local-food">Local Food</Link></li>
                    <li><Link to="/restaurant">Restaurant</Link></li>
                    <li><Link to="/hotel">Hotel</Link></li>
                    <li><Link to="/media">Media</Link></li>
                    <li><Link to="/tour-route">Route</Link></li>
                    <li><Link to="/journey">Journey</Link></li>
                </ul>
            </div>
            </>
        )
    }
}
