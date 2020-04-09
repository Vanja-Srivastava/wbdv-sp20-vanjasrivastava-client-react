import React from 'react'
import LessonListItemComponent from "./LessonListItemComponent";
import {createLesson, deleteLesson, findLessonsForModule, updateLesson} from "../services/LessonService";
import {connect} from "react-redux";
import {findAllLessonsForModuleAction,updateLessonAction,createLessonAction,deleteLessonAction} from "../actions/lessonActions";

class LessonTabsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        this.props.findAllLessonsForModule(this.props.moduleId);
    };

    render() {
        return (
            <React.Fragment>
            <div>
                <div className="row p-3">
                    <div className="col-12">
                        <ul className="nav nav-tabs">
                            {
                                this.props.lessons.map((lesson, index) =>{
                                        return(
                                            <LessonListItemComponent
                                                            lesson={lesson}
                                                            deleteLesson = {this.props.deleteLesson}
                                                            updateLesson = {this.props.updateLesson}
                                                            moduleId={this.props.moduleId}
                                                            courseId={this.props.courseId}
                                            />)
                                    }
                                )
                            }
                            <li className="nav-item">

                                    {
                                        this.props.moduleId!=undefined &&
                                        <span className="nav-link btn-outline-primary" onClick={() =>
                                            this.props.createLesson(this.props.moduleId)}>
                                        <em className="fa fa-plus"
                                        ></em>
                                        </span>
                                    }

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }

}


const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {

        findAllLessonsForModule: (moduleId) =>
            findLessonsForModule(moduleId).
            then(actualLessons =>
                dispatch(findAllLessonsForModuleAction(actualLessons))),

        updateLesson: (lesson) =>
            updateLesson(lesson._id,lesson)
                .then(status =>
                    dispatch(updateLessonAction(lesson._id,lesson))),

        createLesson: (moduleId) =>{
            let actualLesson = {title : "New Lesson"};
            createLesson(actualLesson,moduleId)
                .then(actualLesson =>
                    dispatch(createLessonAction(actualLesson)))
        },

        deleteLesson: (lessonId) =>
            deleteLesson(lessonId)
                .then(status =>
                    dispatch(deleteLessonAction(lessonId))),
    }
}

export default connect (
    stateToPropertyMapper,
    dispatchToPropertyMapper) (LessonTabsComponent);