import React from "react";
import '../styles/CourseManagerNavbarComponent.css';
import { Nav} from 'react-bootstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCircle,
    faPlus,
    faGripHorizontal,
    faSort
} from '@fortawesome/free-solid-svg-icons';
import {createCourse} from "../services/CourseService";

library.add( faCircle, faPlus, faGripHorizontal, faSort);
// then try using the same like this, just like how you used the <i> tag when writing in simple html.

class CourseManagerNavbarComponent extends React.Component {
    render() {
        return (<div>
            <Nav
                className="navbar navbar-dark bg-primary courselist justify-content-start">
                <div className="col-1">
                    <button className="navbar-toggler wbdv-field wbdv-hamburger "
                            type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="col-3 text-white h4 pt-1 d-none d-sm-none d-md-block ">
                    <label className="wbdv-label wbdv-course-manager">Course Manager</label>
                </div>
                <div className="col-7">
                    <form className="form-inline wbdv-field wbdv-new-course">
                        <input className="form-control transparent-input w-100 ml-4" type="text"
                               placeholder="New  Course Title"  onChange={(e) =>
                            this.props.enterCourseTitleForNewCourse({newCourseToBeAddedTitle: e.target.value})}
                               value={this.props.courseTitle}></input>
                    </form>
                </div>
                <div className="col-1 text-right">
                    <button className="btn addCourse" id="addCourse" onClick={this.props.createCourse}
                    > <span
                        className="fa-stack">
                        <FontAwesomeIcon icon="circle" className="fas fa-stack-2x text-danger"/>
                        <FontAwesomeIcon icon="plus" className="fas fa-stack-1x fa-inverse"/>
                        </span>

                    </button>

                </div>

            </Nav>
        </div>
        )
    }


}
export default CourseManagerNavbarComponent


