import React from 'react'
import CourseCard from './CourseCard'
import '../styles/course-list.style.client.css';
import {Link} from 'react-router-dom'

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTable,
    faCaretUp,
    faSort
} from '@fortawesome/free-solid-svg-icons';
import CourseRow from "./CourseRow";

library.add(faTable, faSort,faCaretUp);
class CourseGrid extends React.Component {

    render() {
        return (
            <div>

                <div className="container-fluid">
                    <div className="tableRow row">
                        <div id="wbdv-vanja-table_head_title" className="col-lg-6 wbdv-vanja-table_head_title_Width">
                        <span><a href="" className="text-muted"
                                 id="titleCol">Title</a></span>
                        </div>
                        <div id="wbdv-vanja-table_head_ownedBy" className="col-lg-2  d-md-block d-none wbdv-vanja-table_head_ownedBy_Width"><span><a
                            href=""
                            className="text-muted"
                            id="ownedByCol">Owned
                        by</a></span></div>
                        <div id="wbdv-vanja-table_head_lastModifiedTime" className="col-lg-2 d-lg-block d-none wbdv-vanja-table_head_lastModifiedTime_Width">
                        <span><a
                            href=""
                            className="text-muted"
                            id="lastModifiedCol">Last
                        modified by me</a></span></div>
                        <div id="wbdv-vanja-table-head-listToggle" className="col-lg-1 d-block text-right"><span> <Link onClick={this.props.togglelayout} to={"/courseList"} id="gridView"
                                                                                                      className="btn text-muted">
                        <FontAwesomeIcon icon="table"
                                         className="fa fa-table-2x"/></Link></span></div>

                        <div id="wbdv-vanja-table-head-sort" className="col-lg-1 text-center">
                        <span><a href=""
                                 className="text-muted">
                        <FontAwesomeIcon icon="sort" className="fas fa-1x"/>AZ
                        </a></span>

                        </div>
                    </div>
                </div>
                <div
                    className="table-responsive">
                    <table
                        className="table">
                        <thead>
                        <tr className="noBottomMargin d-none">
                            <th id="wbdv-vanja-table_head_title" className="wbdv-vanja-table_head_title_Width"><a href="" className="text-muted"
                                                                         id="titleCol">Title</a></th>
                            <th id="wbdv-vanja-table_head_ownedBy" className="wbdv-vanja-table_head_ownedBy_Width d-md-block d-none "><a href=""
                                                                                                className="text-muted"
                                                                                                id="ownedByCol">Owned
                                by</a></th>
                            <th id="wbdv-vanja-table_head_lastModifiedTime" className="wbdv-vanja-table_head_lastModifiedTime_Width d-lg-block d-none "><a href=""
                                                                                                              className="text-muted"
                                                                                                              id="lastModifiedCol">Last
                                modified by me</a></th>
                            <th id="wbdv-vanja-table-head-listToggle" className="text-right d-block"><a href="" id="gridView"
                                                                                      className="text-muted">
                                <FontAwesomeIcon icon="table"
                                                 className="fa fa-table-2x"/></a></th>

                            <th id="wbdv-vanja-table-head-sort" className="text-center">
                                <a href=""
                                   className="text-muted">
                                    <FontAwesomeIcon icon="sort" className="fas fa-1x"/>AZ
                                </a>
                            </th>
                        </tr>
                        </thead>
                    </table>
                    <div>
                        <div className="card-deck topPadding10 container-fluid">
                            {
                                this.props.courses.map(
                                    (course, index) => {
                                        return (
                                            <CourseCard
                                                key = {index}
                                                course={course}
                                                editCourse = {this.props.editCourse}
                                                updateCourse = {this.props.updateCourse}
                                                deleteCourse={this.props.deleteCourse}/>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default CourseGrid