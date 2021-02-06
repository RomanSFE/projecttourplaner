import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'

export default class TourRoute extends Component {
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
                                    <h3>Route</h3>
                                </div>
                                <form action="">
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">ID</label>
                                        <input type="text" name="routeid" placeholder="Enter Id.."/>
                                    </div>
                                    {/* single input field end */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Route Type</label>
                                        <input type="text" name="routetype" placeholder="Enter route type.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">From</label>
                                        <input type="text" name="routefrom" placeholder="Enter route from.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">To</label>
                                        <input type="text" name="routeto" placeholder="Enter route to.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Price</label>
                                        <input type="text" name="routeprice" placeholder="Enter price.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Estinated Time</label>
                                        <input type="text" name="routeestimattime" placeholder="Enter estimated time.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Created At</label>
                                        <input type="text" name="routecreatedat" placeholder="Crteted at.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Updated At</label>
                                        <input type="text" name="routeupdatedat" placeholder="Uptadet at.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Bus</label>
                                        <input type="text" name="routebus" placeholder="Bus.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Bus Id</label>
                                        <input type="text" name="routebusid" placeholder="Bus id.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Launch</label>
                                        <input type="text" name="routelaunch" placeholder="Launch.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Launch Id</label>
                                        <input type="text" name="routelaunchid" placeholder="Launch id.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Train</label>
                                        <input type="text" name="routetrain" placeholder="Train.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Train Id</label>
                                        <input type="text" name="routetrainid" placeholder="Train id.."/>
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
