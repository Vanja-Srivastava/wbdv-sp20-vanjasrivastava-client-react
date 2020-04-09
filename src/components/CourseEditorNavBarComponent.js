import React from 'react';
import {Link} from 'react-router-dom';
import {findCourseById} from "../services/CourseService";


class CourseEditorNavBarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }

    componentDidMount() {
        this.getTitle(this.props.id)
    }

    getTitle = async (courseId) => {
        findCourseById(courseId)
            .then(course => {
                this.setState({
                    title : course.title
                })
            })
    }

     render() {
         return (
             <nav className="navbar fixed-top text-white navbar-expand-lg navbar-light bg-dark">
                 <Link to="/" className="btn btn-outline-primary text-black-50 btn-sm"><i className="fa fa-times"></i></Link>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <a className="navbar-brand nav-link text-primary" href="#">{this.state.title}</a>
                 <button className="navbar-toggler" type="button"
                         data-toggle="collapse" data-target="#navbarNavDropdown">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <div className="collapse navbar-collapse" id="navbarNavDropdown">
                     <ul className="navbar-nav">
                         <li className="nav-item active">
                             <a className="nav-link" href="#">Build </a></li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Pages</a></li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Theme</a></li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Store</a></li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Apps</a></li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Settings</a></li>
                         <li className="nav-item">
                             <button className="btn btn-outline-dark btn-sm p-2"><i className="fa fa-plus"></i></button>
                         </li>
                     </ul>
                 </div>
             </nav>
         )

 }
}

export default CourseEditorNavBarComponent;