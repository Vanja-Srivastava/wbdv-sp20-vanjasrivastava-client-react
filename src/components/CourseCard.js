import React, {Component} from 'react'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileAlt, faTrashAlt, faPencilAlt, faCheck} from '@fortawesome/free-solid-svg-icons'
import {Link,} from 'react-router-dom'
import {updateCourse} from "../services/CourseService";
library.add(faFileAlt, faTrashAlt, faPencilAlt, faCheck);

class CourseCard extends React.Component {
    state = {
        inputediting : false,
        course: this.props.course
    }

    componentDidMount = async () => {
        this.setState({
            editingCourse: this.props.course,
            newCourseTitle: this.props.course.title
        })
    }

    showInput = () =>
        this.setState({
            inputediting: true


        })
    render() {
        return (
            <div className="card">
                <Link to={`/course/${this.props.course.id}`} id={`${this.props.course.id}`} className="btn">
                    <img className="card-img-top"
                         src={require('../resources/file_image.jpeg')}/>
                </Link>

                <div className="card-body">
                    <div>

                        {!this.state.inputediting && <Link to={`/course/${this.props.course.id}`} id={`${this.props.course.id}`} className="btn">
                            <h5 className="card-title">{this.state.course.title}</h5>
                            <p className="card-text">{this.props.course.name}</p>
                        </Link>
                        }
                        {
                            this.state.inputediting &&
                                <input className="form-control transparent-input w-100 ml-4" type="text"
                                       value={this.state.course.title} onChange={(e) =>
                                    this.setState({
                                        course: {
                                            ...this.state.course,
                                            title: e.target.value
                                        }
                                    })}
                                >
                                </input>

                        }
                    </div>

                    { !this.state.inputediting && <button className="btn" onClick={() =>
                    {this.props.editCourse(this.props.course);this.showInput();}}><FontAwesomeIcon icon="pencil-alt" className="fas greyIcon"/>
                    </button>
                    }
                    {!this.state.inputediting &&
                    <button className="btn" onClick={() => this.props.deleteCourse(this.props.course)}>
                        <FontAwesomeIcon icon="trash-alt" className="fas greyIcon"/>
                    </button>
                    }
                    { this.state.inputediting && <button className="btn" onClick={(e) =>
                    {   updateCourse(this.state.course._id,this.state.course).then(status => {})
                        this.setState( {
                            course: this.state.course,
                            inputediting: false
                        })
                    }}>
                        <FontAwesomeIcon icon="check" className="fas greyIcon"/>
                    </button>
                    }
                </div>
            </div>

        )
    }
}

export default CourseCard;