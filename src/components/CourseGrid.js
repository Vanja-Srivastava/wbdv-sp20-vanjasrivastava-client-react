import React from 'react'
import CourseCardComponent from './CourseCardComponent'
import GridTableSwitch from "./GridTableSwitch";

const CourseGrid = ({courses,toggle, deleteCourse,updateCourse,layout}) =>
    <div className="container-fluid">
        <div className="row">
            <div className="col float-right">
                <GridTableSwitch toggle={toggle} layout={layout}/>
            </div>
        </div>
        <div className="row container-fluid m-auto">
            <div className="card-deck card-group align-self-auto">
                {
                    courses.map(course =>
                        <CourseCardComponent deleteCourse={deleteCourse}
                                             updateCourse={updateCourse}
                                             course={course}
                                             key={course.id}
                        />
                    )
                }
            </div>
        </div>
    </div>;

export default CourseGrid;