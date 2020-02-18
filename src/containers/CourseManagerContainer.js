import React from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse,findCourseById,updateCourse} from "../services/CourseService";
import CourseManagerNavbarComponent from "../components/CourseManagerNavbarComponent";

class CourseManagerContainer extends React.Component {
    state = {

        newCourseToBeAddedTitle: '',
        courseTobeEdited:'',
        courses: []
    }

    componentDidMount = async () => {
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    }


    togglelayout = () =>
        this.setState(prevState => {
            if(prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        })



    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(findAllCourses)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState.courses.filter(function (crs) {
                            return crs._id !== course._id
                        })
                    })
                })
            })
    }


    getCourseById = (editingcourse) =>
        findCourseById(editingcourse._id)
            .then(course => {
                this.setState({
                    courseTobeEdited: course
                })
            })



    addCourse = (newValue) =>
        createCourse({
            title: this.state.newCourseToBeAddedTitle
        }).then(actualCourse => this.setState(prevState => {
                return({
                    courses: [
                        ...prevState.courses,
                        actualCourse
                    ],
                    newCourseToBeAddedTitle: ""
                })
            })
        )

    updateCourse = (newTitle, newValue) =>
        updateCourse(newValue._id,{
            title: newTitle
        }).then(actualCourse => this.setState(prevState => {
                return({
                    courses: [
                        ...prevState.courses,
                        actualCourse
                    ]
                })
            })
        )

    updateForm = (newState) => {
        this.setState(newState)
    }

    render() {
        return(
            <div>
                <Router>
                    <Route path="/course/:id"
                           exact
                           component={(props) => <CourseEditorComponent
                               {...props}
                           />}/>


                    <div>
                        <CourseManagerNavbarComponent
                            courseTitle={this.state.newCourseToBeAddedTitle}
                            enterCourseTitleForNewCourse={this.updateForm}
                            createCourse={this.addCourse}/>


                        <Route path="/(courseList||)/" exact
                               render={() =>
                                   <CourseTableComponent
                                       editCourse = {this.getCourseById}
                                       deleteCourse={this.deleteCourse}
                                       updateCourse={this.updateCourse}
                                       courses={this.state.courses}
                                       togglelayout={this.togglelayout}/>}/>




                        <Route path='/courseGrid' exact
                               render={() =>
                                   <CourseGridComponent
                                       editCourse = {this.getCourseById}
                                       updateCourse={this.updateCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}
                                       togglelayout={this.togglelayout}
                                   />}/>


                    </div>

                </Router>



            </div>
        )
    }
}

export default CourseManagerContainer
