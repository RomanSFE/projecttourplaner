import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'

export default class Hotel extends Component {
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
                                    <h3>Hotel</h3>
                                </div>
                                <form action="">
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">ID</label>
                                        <input type="text" name="hotelid" placeholder="Enter Id.."/>
                                    </div>
                                    {/* single input field end */}
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Hotel Name</label>
                                        <input type="text" name="hotelname" placeholder="Enter hotel name.."/>
                                    </div>
                                    {/* single input field end */}
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Created At</label>
                                        <input type="text" name="hotelcreatedat" placeholder="Crteted at.."/>
                                    </div>
                                    {/* single input field end */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Updated At</label>
                                        <input type="text" name="hotelupdateat" placeholder="Uptadet at.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Address</label>
                                        <input type="text" name="hoteladdrs" placeholder="Address.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">District</label>
                                        <input type="text" name="hoteldistrct" placeholder="District.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Desctiption</label>
                                        <textarea name="hoteldescptn" placeholder="Description.." id="" cols="30" rows="10"></textarea>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Price</label>
                                        <input type="text" name="hotelprice" placeholder="Hotel price.."/>
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
