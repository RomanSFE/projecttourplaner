import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'
import './tourplaner.css'

export default class TourPlaner extends Component {
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
                                    <h3>Tour Planner</h3>
                                </div>
                                <form action="">
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">ID</label>
                                        <input type="text" name="tourplanid" placeholder="Enter Id.."/>
                                    </div>
                                    {/* single input field end */}
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Created At</label>
                                        <input type="text" name="createdAt" placeholder="Crteted at.."/>
                                    </div>
                                    {/* single input field end */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Updated At</label>
                                        <input type="text" name="updatedAt" placeholder="Uptadet at.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Plan Id</label>
                                        <input type="text" name="planid" placeholder="Plan Id.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Plan</label>
                                        <input type="text" name="planx" placeholder="Plan.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Start Time</label>
                                        <input type="text" name="starttimeplan" placeholder="Start Time.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">End Time</label>
                                        <input type="text" name="endtimeplan" placeholder="End Time.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Title</label>
                                        <input type="text" name="plantitle" placeholder="Plan Title.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Desctiption</label>
                                        <textarea name="plandesc" placeholder="Description.." id="" cols="30" rows="10"></textarea>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Place ID</label>
                                        <input type="text" name="placeid" placeholder="Place Id.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Hotel ID</label>
                                        <input type="text" name="hotelid" placeholder="Hotel Id.."/>
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
