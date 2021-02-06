import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'

export default class LocalFood extends Component {
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
                                    <h3>Local Food</h3>
                                </div>
                                <form action="">
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">ID</label>
                                        <input type="text" name="localfoodid" placeholder="Enter Id.."/>
                                    </div>
                                    {/* single input field end */}
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Food Name</label>
                                        <input type="text" name="localfoodname" placeholder="Enter food name.."/>
                                    </div>
                                    {/* single input field end */}
                                    {/* single input field start */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Created At</label>
                                        <input type="text" name="createdAtlocalfood" placeholder="Crteted at.."/>
                                    </div>
                                    {/* single input field end */}
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Updated At</label>
                                        <input type="text" name="updatedAtlocalfood" placeholder="Uptadet at.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Address</label>
                                        <input type="text" name="localfdaddrs" placeholder="Address.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">District</label>
                                        <input type="text" name="localfdadddistrct" placeholder="District.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Desctiption</label>
                                        <textarea name="localfddesc" placeholder="Description.." id="" cols="30" rows="10"></textarea>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Restaurent</label>
                                        <input type="text" name="localfdadresturnt" placeholder="Restaurent.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Restaurent Id</label>
                                        <input type="text" name="localfdadresturntid" placeholder="Restaurent Id.."/>
                                    </div>
                                    <div className="project-tour-planer-maon-section-form-content-single-input">
                                        <label htmlFor="">Price</label>
                                        <input type="text" name="localfdadresturntprice" placeholder="Restaurent price.."/>
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
