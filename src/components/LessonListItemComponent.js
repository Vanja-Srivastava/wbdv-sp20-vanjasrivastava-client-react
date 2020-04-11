import React from "react";
import {Link} from "react-router-dom";
import '../styles/lessonItem.style.client.css'

export default class LessonListItemComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        active: false,
        selectedLesson : false
    }

    selectLesson = () =>{
        this.setState((prevState) => {
            return {selectedLesson: !prevState.selectedLesson}
        })

    }
    chooseToEditLesson = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }

    updateLesson = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
        this.props.updateLesson(this.props.lesson)

    }


    render() {
        return(
            <li className="nav-item pl-1">
                <a className="nav-link lessonItem" >
                    <div className="row">
                        <div className="col-md-10 col-10">

                            {
                                !this.state.active && !this.state.selectedLesson &&
                                <Link to={`/courseeditor/courses/${this.props.courseId}/modules/${
                                    this.props.moduleId}/lesson/${this.props.lesson._id}`} onClick={()=>this.selectLesson()}>
                                    <label className="text-white">
                                        {this.props.lesson.title}
                                    </label>
                                </Link>

                            }
                            {
                                !this.state.active && this.state.selectedLesson &&
                                <Link to={`/courseeditor/courses/${this.props.courseId}/modules/${
                                    this.props.moduleId}/lesson/${this.props.lesson._id}`} onClick={()=>this.selectLesson()}>
                                    <label className="text-danger">
                                        {this.props.lesson.title}
                                    </label>
                                </Link>

                            }
                            {
                                !this.state.active &&
                                <button onClick={()=>this.chooseToEditLesson()} className="fa fa-pencil p-1 float-left"></button>

                            }
                            {
                                this.state.active &&
                                <input
                                    onChange={(e)=> this.props.lesson.title = e.target.value}
                                    placeholder={this.props.lesson.title}/>
                            }
                            {

                                !this.state.active &&
                                <button onClick={()=>this.props.deleteLesson(this.props.lesson._id)}  className="fa fa-trash p-1 float-right"></button>
                            }
                            {
                                this.state.active &&
                                <button onClick={()=>this.updateLesson()} className="fa fa-check p-1"></button>
                            }
                        </div>
                    </div>
                </a>
            </li>

        )
    }
}
