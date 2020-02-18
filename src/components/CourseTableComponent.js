import React from "react";
import CourseRow from "./CourseRow";
import {Link,} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faGripHorizontal,
    faCaretUp,
    faSort
} from '@fortawesome/free-solid-svg-icons';

library.add(faGripHorizontal, faSort,faCaretUp);

class CourseTableComponent extends React.Component{

    render() {
        return (
            <div>
                { <div>

                    <div className="noBottomMargin tableRow row">
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
                        <div id="wbdv-vanja-table-head-gridToggle" className="col-lg-1 d-block text-right"><span>
                                <Link onClick={this.props.togglelayout} to={"/courseGrid"} id="gridView"
                                      className="btn text-muted">
                        <FontAwesomeIcon icon="grip-horizontal"
                                         className="fas fa-2x"/></Link></span></div>

                        <div id="wbdv-vanja-table-head-sort" className="col-lg-1 text-center">
                        <span><a href=""
                                 className="text-muted">
                        <FontAwesomeIcon icon="sort" className="fas fa-1x"/>AZ
                        </a></span>

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
                                <th id="wbdv-vanja-table-head-gridToggle" className="text-right d-block">

                            <span> <Link onClick={this.props.togglelayout} to={"/courseGrid"} id="gridView"
                                         className="btn text-muted">
                            <FontAwesomeIcon icon="grip-horizontal"
                                             className="fas fa-2x"/></Link></span>
                                </th>

                                <th id="wbdv-vanja-table-head-sort" className="text-center">
                                    <a href=""
                                       className="text-muted">
                                        <FontAwesomeIcon icon="sort" className="fas fa-1x"/>AZ
                                    </a>
                                </th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                this.props.courses.map(
                                    (course, index) => {
                                        return (
                                            <CourseRow
                                                key = {index}
                                                course={course}
                                                courseIndex = {index}
                                                allcourses = {this.props.courses}
                                                editCourse = {this.props.editCourse}
                                                updateCourse = {this.props.updateCourse}
                                                deleteCourse={this.props.deleteCourse}/>
                                        )
                                    }
                                )

                            }
                            </tbody>
                        </table>
                    </div>
                </div>

                }
            </div>
        )
    }

}
export default CourseTableComponent



