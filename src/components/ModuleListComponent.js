import React from 'react'
import ModuleListItemComponent from "./ModuleListItemComponent";
import {updateModule, findModulesForCourse, createModule, deleteModule} from "../services/ModuleService";
import {connect} from "react-redux";
import {findAllModulesForCourseAction, createModuleAction, updateModuleAction,deleteModuleAction} from "../actions/moduleActions";


class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findAllModulesForCourse(this.props.courseId);
    }

    render() {
        return (
            <div className="col-3 bg-secondary">
                <ul className="nav flex-column nav-pills">
                    {
                        this.props.modules.map(
                            (module) => {
                                return (
                                    <ModuleListItemComponent
                                        key={module.i}
                                        module={module}
                                        history = {this.props.history}
                                        courseId={this.props.courseId}
                                        deleteModule = {this.props.deleteModule}
                                        updateModule = {this.props.updateModule}
                                      />
                                )
                            }
                        )
                    }
                    <a>
                        <div className="row">
                            <div className="col-md-10 col-10 wbdv-module-item-title">
                            </div>
                            <div className="col-md-2 col-2 cancel-icon-modules wbdv-module-item-delete-btn">
                        <span className="navbar-end-cancel-icon wbdv-module-item-add-btn">
                            <em className="fa fa-plus-square"
                            aria-hidden="true"
                            onClick={() => this.props.createModule(this.props.courseId)}></em></span>
                            </div>
                        </div>
                    </a>

                </ul>
            </div>

        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {

        findAllModulesForCourse: (courseId) =>
            findModulesForCourse(courseId).
            then(actualModules =>
                dispatch(findAllModulesForCourseAction(actualModules))),

        updateModule: (module) =>
            updateModule(module._id,module)
                .then(status =>
                    dispatch(updateModuleAction(module._id,module))),

        createModule: (courseId) =>{
            module = {title : "New Module"};
            createModule(module,courseId)
                .then(actualModule =>
                    dispatch(createModuleAction(actualModule)))
        },

        deleteModule: (moduleId) =>
            deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModuleAction(moduleId))),
    }
}

export default connect (
    stateToPropertyMapper,
    dispatchToPropertyMapper) (ModuleListComponent);