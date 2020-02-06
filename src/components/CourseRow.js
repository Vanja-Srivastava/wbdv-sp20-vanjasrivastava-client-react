import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileAlt, faTrashAlt, faPencilAlt, faCheck} from '@fortawesome/free-solid-svg-icons'
import {Link,} from 'react-router-dom'
import {updateCourse} from "../services/CourseService";
library.add(faFileAlt, faTrashAlt, faPencilAlt, faCheck);
class CourseRow extends React.Component {
    state = {
        inputediting : false,
        showEditorOptions : false,
        course: this.props.course
    }

    componentDidMount = async () => {
        this.setState({
            editingCourse: this.props.course,
            newCourseTitle: this.props.course.title
        })
    }
    showEditingOptions = () =>
        this.setState({
            showEditorOptions: true
        })

    showInput = () =>
        this.setState({
            inputediting: true


        })

    render() {
        return (
            <tr className="courseRow " onClick={this.showEditingOptions}>
                <td className="wbdv-vanja-table_head_title_Width text-center">
                    <div>
                        <div>
                            <FontAwesomeIcon icon="file-alt" className="fas blueIcon"/> &nbsp; &nbsp; &nbsp;

                            {!this.state.inputediting && <Link to={`/course/${this.props.course.id}`} className="courseStyle" id={`${this.props.course.id}`}>
                                &nbsp;&nbsp;&nbsp;&nbsp;{this.state.course.title} {this.props.course.name}
                            </Link>
                            }
                            {
                                this.state.inputediting &&
                                <form className="form-inline wbdv-field wbdv-new-course">

                                    <input className="form-control transparent-input w-100 ml-4" type="text"
                                           value={this.state.course.title} onChange={(e) =>
                                        this.setState({
                                            course:{
                                                ...this.state.course,
                                                title: e.target.value}
                                        })}
                                    >
                                    </input>
                                </form>
                            }
                        </div>
                    </div>
                </td>
                <td className="wbdv-vanja-table_head_ownedBy_Width">me</td>
                <td className="wbdv-vanja-table_head_lastModifiedTime_Width">02/01/2020</td>
                {
                    <td className="actionCol text-center">
                        { !this.state.inputediting && this.state.showEditorOptions && <button className="btn" onClick={() =>
                            {this.props.editCourse(this.props.course);this.showInput();}}><FontAwesomeIcon icon="pencil-alt" className="fas greyIcon"/>
                        </button>
                        }
                        {!this.state.inputediting && this.state.showEditorOptions &&
                        <button className="btn" onClick={() => this.props.deleteCourse(this.state.course) }>
                            <FontAwesomeIcon icon="trash-alt" className="fas greyIcon"/>
                        </button>
                        }
                        { this.state.inputediting && this.state.showEditorOptions && <button className="btn"
                           onClick={(e) =>
                                  {   updateCourse(this.state.course._id,this.state.course).then(status => {
                                      this.setState( {
                                          course: this.state.course,
                                          inputediting: false
                                      })
                                  })

                            }}>
                            <FontAwesomeIcon icon="check" className="fas greyIcon"/>
                        </button>
                        }
                    </td>
                }

            </tr>

        )
    }

}

export default CourseRow
