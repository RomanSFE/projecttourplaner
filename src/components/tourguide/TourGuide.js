import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'

export default class TourGuide extends Component {
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
                                    <h3>Tour Guide</h3>
                                </div>
                                <form action="">
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">ID</label>
                                        <input type="text" name="tourguideid" placeholder="Enter Id.."/>
                                    </div>
                                    {/* single input field end */}
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">User ID</label>
                                        <input type="text" name="tourguideuserid" placeholder="Enter User Id.."/>
                                    </div>
                                    {/* single input field end */}
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Created At</label>
                                        <input type="text" name="createdAtguide" placeholder="Crteted at.."/>
                                    </div>
                                    {/* single input field end */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Updated At</label>
                                        <input type="text" name="updatedAtguide" placeholder="Uptadet at.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Status</label>
                                        <input type="text" name="tourguidestatus" placeholder="Status.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Place</label>
                                        <select name="placeselectid" id="placexx">
                                            <option value="1">Place 1</option>
                                            <option value="2">Place 2</option>
                                            <option value="3">Place 3</option>
                                            <option value="4">Place 4</option>
                                        </select>
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
