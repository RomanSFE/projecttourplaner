import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'

export default class ByLaunch extends Component {
    render() {
        return (
            <>
            <div className="project-tour-planer-maon-section-form-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="project-sidebar-mainnn-sectiobx">
                                <Sidebar/>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="project-tour-planer-maon-section-form-content-input-box">
                                <div className="project-tour-planer-maon-section-form-content-hedd">
                                    <h3>Tour By - Launch</h3>
                                </div>
                                <form action="">
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">ID</label>
                                        <input type="text" name="tourplaunchid" placeholder="Enter Id.."/>
                                    </div>
                                    {/* single input field end */}
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Launch Name</label>
                                        <input type="text" name="launchname" placeholder="Enter launch name.."/>
                                    </div>
                                    {/* single input field end */}
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Created At</label>
                                        <input type="text" name="createdAtlaunch" placeholder="Crteted at.."/>
                                    </div>
                                    {/* single input field end */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Updated At</label>
                                        <input type="text" name="updatedAtlaunch" placeholder="Uptadet at.."/>
                                    </div>
                                    

                                    <div className="project-tour-planer-maon-section-form-content-sumnt-btn">
                                        <button type="submit">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
