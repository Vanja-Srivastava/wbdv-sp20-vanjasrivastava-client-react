import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/courseCardComponent.style.client.css'

class CourseCardComponent extends React.Component{

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
            <div className="card-deck">
                <div className="card" >
                    <img className="card card-img-top"></img>
                    <div className="card-body">
                        <Link to={"courseeditor/courses/" + this.state.course._id} className="card-title">{this.state.course.title}</Link>
                        <p className="card-text">Modified 4:30 PM</p>
                        {
                            !this.state.active &&
                            <button onClick={()=>this.editCourse()}  className="fa fa-pencil"></button>

                        }
                        {
                            this.state.active &&
                            <input
                                onChange={this.updateForm}
                                value={this.state.course.title}/>
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
            </div>)
    }
}

export default CourseCardComponent;