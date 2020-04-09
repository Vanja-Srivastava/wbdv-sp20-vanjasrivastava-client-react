import React from 'react';
import CourseRowTitle from "./CoureRowTitle";
import CourseRowComponent from "./CourseRowComponent";

const CourseTable = ({courses,toggle, deleteCourse, updateCourse, layout}) =>
            <div>
            <div>
                <CourseRowTitle toggle={toggle} layout = {layout}/>
            </div>

    <div className="container">
            {
                courses.map(course =>
                    <CourseRowComponent
                        course={course}
                        key={course.id}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                    />
                )
            }
      </div>
            </div>
export default CourseTable;