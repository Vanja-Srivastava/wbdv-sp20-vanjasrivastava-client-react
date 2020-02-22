import React from 'react';
import '../styles/Forms.css'

const Forms = () =>
    <div>

        <div className="row save-div">
            <div className="save-btn">
                <button className="btn btn-success">
                    Save
                </button>
            </div>


            <div className="row switchToggle">
                <label className="label label-default">Preview</label>
                <label className="switch">
                    <input type="checkbox" id="preview-toggle"></input>
                        <span className="slider round"></span>
                </label>
            </div>

        </div>
        <div className="heading-widget-div">
        <div className="row heading-widget-title">
                    <span className="heading-text">
                        <h3>Heading widget</h3>
                    </span>
            <div className="widget-div">
                <a href="#" className="arrow-icon"><span><em className="fa fa-arrow-down"></em></span></a>
                <a href="#" className="arrow-icon"><span><em className="fa fa-arrow-up"></em></span></a>
                <span><select className="widget-selector" id="role-select1">
                                    <option selected>Heading</option>
                                    <option>Paragraph</option>
                                    <option>List</option>
                                    <option>Image</option>
                            </select></span>
                <a href="#" className="cancel-icon"><span><em className="fa fa-times-circle"></em></span></a>
            </div>
        </div>

        <div className="input-field-section">
            <input className="form-control form-control-elements" id="heading" placeholder="Heading text"></input>
                <select className="form-control form-control-elements" id="role-select2">
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                </select>
                <input className="form-control form-control-elements" id="heading-widget" placeholder="Widget name"></input>
                    <h5 className="form-control-elements">Preview </h5>
                    <h2 className="form-control-elements">Heading text</h2>

        </div>
    </div>

    </div>

export default Forms;
