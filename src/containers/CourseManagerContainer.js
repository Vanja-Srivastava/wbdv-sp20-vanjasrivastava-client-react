import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseGrid from '../components/CourseGrid'
import {deleteCourse, findAllCourses, updateCourse, createCourse} from '../services/CourseService'
import CourseEditorContainer from './CourseEditorContainer'
import CourseTable from '../components/CourseTable'
import NavBarComponent from "../components/NavBarComponent";

class CourseManagerContainer extends Component {
    constructor() {
        super();

        this.state = {
            courses: [],
            layout: 'grid',
        }
    }

    componentDidMount = async () => {
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        })
    };

    updateCourse = async (course) => {
        await updateCourse(course)
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        });
    };

    createCourse = async (course) => {
        const courseIDs = this.state.courses.map(c => c.id);
        let newCourseId = Math.max.apply(null, courseIDs) + 1;
        if (newCourseId === -Infinity) {
            newCourseId = 1
        }
        course.id = newCourseId;
        course.title = "Course " + newCourseId;
        await createCourse(course);
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        });
    };

    deleteCourse = async (course) => {
        await deleteCourse(course._id);
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        })
    };

    toggle = () =>
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({layout: 'grid'})
            } else {
                return ({layout: 'table'})
            }

        });

    render() {
        return (
            <div>
                <Router>
                    <Route
                        path="/"
                        exact={true}
                        render={() =>
                            <div>
                                <NavBarComponent createCourse={this.createCourse}
                                                 courses={this.state.courses}/>
                                {<CourseTable courses={this.state.courses}
                                    toggle={this.toggle}
                                    deleteCourse={this.deleteCourse}
                                    updateCourse={this.updateCourse}
                                    layout={this.state.layout}
                                    />}
                            </div>
                        }/>
                    <Route
                        path="/table"
                        exact={true}
                        render={() =>
                            <div>
                                <NavBarComponent createCourse={this.createCourse}
                                                 courses={this.state.courses}/>
                                {<CourseTable courses={this.state.courses}
                                              toggle={this.toggle}
                                              deleteCourse={this.deleteCourse}
                                              updateCourse={this.updateCourse}
                                              layout={this.state.layout}
                                />}
                            </div>
                        }/>
                    <Route
                        path="/grid"
                        exact={true}
                        render={() =>
                            <div>
                                <NavBarComponent createCourse={this.createCourse}
                                                 courses={this.state.courses}/>
                                {<CourseGrid courses={this.state.courses}
                                             toggle={this.toggle}
                                             deleteCourse={this.deleteCourse}
                                             updateCourse={this.updateCourse}
                                             layout={this.state.layout}
                                />}
                            </div>
                        }/>

                    <Route path="/courseeditor/courses/:courseId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorContainer
                                   {...props}
                                   props={props}
                                   courseId={props.match.params.courseId}
                                   history={this.props.history}
                               />}>
                    </Route>

                    <Route path="/courseeditor/courses/:courseId/modules/:moduleId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorContainer
                                   {...props}
                                   props={props}
                                   key={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}
                                   moduleId={props.match.params.moduleId}
                               />}>
                    </Route>


                    <Route path="/courseeditor/courses/:courseId/modules/:moduleId/lesson/:lessonId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorContainer
                                   {...props}
                                   props={props}
                                   key={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}
                                   moduleId={props.match.params.moduleId}
                                   lessonId={props.match.params.lessonId}
                               />}>
                    </Route>

                </Router>
            </div>
        )
    }
}

export default CourseManagerContainer;