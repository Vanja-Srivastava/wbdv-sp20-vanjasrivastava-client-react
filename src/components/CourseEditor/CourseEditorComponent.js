import React from "react";
import {Nav} from 'react-bootstrap';
import {Link,} from 'react-router-dom';
import LessonTabComponent from "./LessonTabComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../styles/CourseEditorComponent.style.client.css';
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

                    <div className="col-lg-2 col-md-3 text-white h4 pt-1 d-none d-sm-none d-md-block courseNameDiv">
                        <label htmlFor="courseTitle"
                               id="courseName"> {this.state.course.title} {this.state.course.name} </label>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-4 lessonDiv">
                        <LessonTabComponent
                        />
                    </div>



                </Nav>

                <div className="split left navPaddingTop">
                    {this.state.firstLoad &&
                    <ModuleListComponent
                        selectModule={this.selectModule}
                        // modules={this.state.course.modules}/>
                        // setCurrentLessonsAndTopics={this.setCurrentLessonsAndTopics}
                        modules={this.state.modules}/>}
                    {/*modules={this.state.coursemodules}/>}*/}

                </div>
                <div className="split right navPaddingTop">
                    <div className="row  text-center topicDiv">
                        <TopicPillsComponent
                            topics={this.state.topics}
                            lesson={this.state.lesson}
                            selectTopic={this.selectTopic}
                            createTopic={this.createNewTopic}
                            deleteTopic={this.deleteThisTopic}
                            updateTopic={this.updateThisTopic}
                        />
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
