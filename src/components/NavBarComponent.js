import React from 'react';

class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.courses = this.props.courses;
        this.createCourse = this.props.createCourse;
    }

    saveCourse = () => {
        const course = {
            "id": 1,
            "title": "Course"
        };
        this.createCourse(course)
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col-md-1 col-2 p-2 mt-2 bg-primary">
                        <i className="fa p-2 fa-bars float-left fa-lg"></i>
                    </div>
                    <div className="col-md-3 d-none d-sm-block p-2 mt-2 bg-primary">
                        <h4 className="text-white float-sm-left ml-2">Course Manager</h4>
                    </div>
                    <div className="col-md-8 col-10 pt-2  bg-primary">
                        <div className="form-group row">
                            <div className="col-10 col-sm-10">
                                <input type="text" className="form-control mt-2"
                                       placeholder="Course Title"/>
                            </div>
                            <div className="col-2 col-sm-2">
                                <button className="btn-sm btn btn-outline-dark" onClick={this.saveCourse}>
                                    <i className="fa fa-plus float-left fa-2x mt-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBarComponent;