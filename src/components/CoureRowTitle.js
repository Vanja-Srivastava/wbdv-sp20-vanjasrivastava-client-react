import React from 'react';
import GridTableSwitch from "./GridTableSwitch";
import '../styles/CourseTable.css'

const CourseRowTitle = ({toggle,layout}) =>

    <div className="border border-dark table-title-bar">
        <div className="container">
            <div className="row heading-bar">
                <div className="col-md-4 ">
                    <span className="owned-by-title wbdv-header wbdv-title">Title</span>
                </div>

                <div className="col-md-2 owned-by-text">

                    <select className="selectpicker owned-css float-right wbdv-header wbdv-owner" id="role-select">
                        <option>Owned</option>
                    </select>

                </div>

                <div className="col-md-3 wbdv-header wbdv-last-modified">
                    Last modified

                </div>
                <div className="col-md-2">

            <span className="grid-icon wbdv-button wbdv-grid-layout wbdv-button wbdv-list-layout">
                <GridTableSwitch toggle={toggle} layout={layout}/>
                    <i className="fa fa-sort-alpha-asc" aria-hidden="true">
                    </i></span>

                </div>


            </div>

        </div>
    </div>

export default CourseRowTitle;