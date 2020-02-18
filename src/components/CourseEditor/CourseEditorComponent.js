import React from "react";
import {Nav} from 'react-bootstrap';
import {Link,} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../styles/CourseEditorComponent.css';
import {
    faArrowUp,
    faArrowDown,
    faTimes,
    faCircle,
    faPlus,

} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowDown,faArrowUp, faTimes, faCircle, faPlus);

class CourseEditorComponent extends React.Component {
    constructor(props) {
        super(props)
        const courseId = (props.match.params.id);
        this.state = {
            firstLoad: false,
            courseId: courseId,
            course: {},
            module: {},
            modules: [],
            lesson: {},
            lessons: [],
            topic: [],
            topics: []
        }
    }



    render() {
        return (

            <div>
                <Nav
                    className="navbar navbar-dark bg-dark fixed-top justify-content-start">

                    <div className="col-1">
                        <Link to={`/courseList`}>
                            <button className="btn wbdv-course-editor wbdv-close module-color" id="closeCourse">
                                <FontAwesomeIcon icon="times" className="wbdv-vanja-cross-icon fas fa-2x"/></button>
                        </Link>

                    </div>

                    <div className="col-3 text-white h4 pt-1 d-none d-sm-none d-md-block ">
                        <label className="wbdv-label wbdv-course-manager">Course Manager </label>
                    </div>


                    <div className="col-6">
                        <ul className="nav nav-pills border-0 wbdv-vanja-lessons">
                            <li className="nav-item "><a
                                className="nav-link wbdv-vanja-tabs wbdv-build-tab" href="#">Build</a></li>
                            <li className="nav-item"><a
                                className="nav-link wbdv-vanja-tabs wbdv-page-tab active" href="#">Pages</a></li>
                            <li className="nav-item"><a
                                className="nav-link wbdv-theme-tab wbdv-vanja-tabs" href="#">Theme</a></li>
                            <li className="nav-item"><a
                                className="nav-link wbdv-store-tab wbdv-vanja-tabs" href="#">Store</a></li>
                            <li className="nav-item"><a
                                className="nav-link wbdv-app-tab wbdv-vanja-tabs" href="#">App</a></li>
                            <li className="nav-item"><a
                                className="nav-link wbdv-settings-tab wbdv-vanja-tabs" href="#">Settings</a></li>

                        </ul>
                    </div>

                    <div className="col-1 text-right">
                        <button className="btn wbdv-button wbdv-new-page-btn" id="nav-newpage" onClick={this.props.createCourse}
                        > <span
                            className="fa-stack">
                        <FontAwesomeIcon icon="plus" className="fas fa-stack-1x fa-inverse"/>
                        </span>

                        </button>

                    </div>

                </Nav>

                <div className="split left navPaddingTop">
                    <div className="wbdv-vanja-leftdiv ml-2 mr-2">
                        <div className="row">
                            <ul className="list-group wbdv-module-list">
                                <li
                                    className="list-group-item wbdv-module-item wbdv-module-item-title ml-5 my-2 w-100 mr-7 wbdv-vanja-module-color ">Module
                                    1 jQuery
                                    <button className="btn ml-5 wbdv-vanja-module-color wbdv-module-item-delete-btn"> <span
                                        className="fa-stack">
                        <FontAwesomeIcon icon="times" className="fas fa-times wbdv-vanja-cross-icon"/>
                        </span>

                                    </button>

                                </li>

                            </ul>
                            <div className="wbdv-vanja-module-list-add">
                                <button className="btn addModule" id="addModule"> <span
                                    className="fa-stack">
                        <FontAwesomeIcon icon="plus" className="fas fa-plus fa-stack-1x fa-inverse"/>
                        </span>

                                </button>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="split right navPaddingTop">
                    <div className="row">
                        <ul className="nav nav-pills wbdv-vanja-topics wbdv-topic-pill-list">


                            <li className="nav-item"><a
                                className="nav-link wbdv-topic-pill wbdv-vanja-my-custom-nav-pills-border ml-5 pl-4 pr-4"
                                href="#"> Topic 1 </a></li>
                            <li className="nav-item"><a
                                className="active wbdv-topic-pill nav-link ml-3 pl-4 pr-4" href="#">
                                Topic 2 </a></li>
                            <li className="nav-item"><a
                                className="nav-link wbdv-topic-pill wbdv-vanja-my-custom-nav-pills-border ml-3 pl-4 pr-4"
                                href="#"> Topic 3 </a></li>

                            <li className="nav-item"><a
                                className="nav-link wbdv-topic-pill wbdv-vanja-my-custom-nav-pills-border ml-3 pl-4 pr-4"
                                href="#"> Topic 4 </a></li>

                        </ul>
                        <div className="col-2">

                            <a href="#" id="addTopic">
                                <span
                                    className="fa-stack wbdv-topic-add-btn mt-1">
                        <FontAwesomeIcon icon="plus" className="fas fa-plus fa-stack-1x fa-inverse wbdv-vanja-my-custom-nav-pills-border"/>
                        </span>

                            </a>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <label></label>
                        </div>
                        <div className="col-sm-2 col-1">
                            <button className="btn btn-success btn-block text-center" id="save">Save
                            </button>
                        </div>
                        <div className="col-sm-4">
                            <div className="row">
                                <div className="col-4">
                                    <label className="font-weight-bold preview">Preview</label>
                                </div>
                                <div className="col-4 sliderPosition">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br /> <br />

                    <div className="wbdv-vanja-rightborder-div ml-5 mr-5  border border-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Heading widget</h2>
                                </div>
                                <div className="col-sm-6  ">
                                    <a href="#" id="addCourse">
                                        <span
                                            className="fa-stack wbdv-button wbdv-add-course ml-5 mt-1 col-1">
                        <FontAwesomeIcon icon="arrow-up" className="fas fa-arrow-up fa-stack-1x wbdv-vanja-my-headingwidget-Arrow"/>
                        </span>
                                    </a>
                                    <a href="#" id="addCourse">

                                        <span
                                            className="fa-stack wbdv-button wbdv-add-course ml-2 mt-1 col-1">
                        <FontAwesomeIcon icon="arrow-down" className="fas fa-arrow-down fa-stack-1x wbdv-vanja-my-headingwidget-Arrow"/>
                        </span>
                                    </a>
                                    <select className="col-7 ml-1" id="responsive-role">
                                        <option>Heading</option>
                                    </select> <a href="#" id="addCourse">

                                    <span
                                        className="fa-stack wbdv-button wbdv-add-course col-1">
                        <FontAwesomeIcon icon="times" className="fas fa-times fa-stack-1x wbdv-vanja-myheadingwidget-Cross"/>
                        </span>
                                </a>
                                </div>
                            </div>

                            <div className="form-group row">


                                <input type="text"
                                       className="form-control ml-3 mr-3 wbdv-field wbdv-password"
                                       id="heading text" placeholder="Heading text"/>

                            </div>

                            <div className="form-group row">

                                <select className="form-control ml-3 mr-3 wbdv-field wbdv-role" id="">
                                    <option>Heading 1</option>

                                </select>


                            </div>

                            <div className="form-group row">
                                <input type="text"
                                       className="form-control ml-3 mr-3 wbdv-field wbdv-password"
                                       id="widgetname" placeholder="Widget name"/>

                            </div>


                            <div className="row">
                                <h4 className="col-4">Preview</h4>
                            </div>

                            <div className="row">
                                <h1 className="col-4">Heading Text</h1>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        )
    }
}


export default CourseEditorComponent
