import React from 'react';
import {Link} from 'react-router-dom';

class CourseRowComponent extends React.Component{

    constructor(props) {
        super(props)
    }

    state = {
        active: false,
        course: this.props.course
    }
    editCourse = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }
    saveCourse = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
        this.props.updateCourse(this.state.course)

    }
    updateForm = (e) => {
        this.setState({
            course: {
                ...this.state.course, title: e.target.value
            }
        });
    }

    render(){
        return(
            <div className="row course-list">
                <div className="col-6 col-sm-6 col-md-6 course-name">
                {
                    !this.state.active &&
                    <Link to={"courseeditor/courses/" + this.state.course._id} className="card-title">{this.state.course.title}</Link>
                }
                {
                    this.state.active &&
                    <input
                        onChange={this.updateForm}
                        value={this.state.course.title}/>
                }
                </div>
                <div className="col-2 col-sm-2 course-name col-md-2">
                    me
                </div>
                <div className="col-2 col-sm-1 course-name col-md-3">
                    2020/1/1
                </div>

                <div className="col-1 col-sm-2 col-md-1 file-icon-view wbdv-row wbdv-button wbdv-delete">
                    {
                        !this.state.active &&
                        <button onClick={()=>this.editCourse()}  className="fa fa-pencil"></button>

                    }
                    {

                        !this.state.active &&
                        <button onClick={()=>this.props.deleteCourse(this.state.course)}  className="fa fa-trash"></button>
                    }
                    {
                        this.state.active &&
                        <button onClick={()=>this.saveCourse()}  className="fa fa-check"></button>
                    }
                </div>

            </div>
        )
    }
}



export default CourseRowComponent;