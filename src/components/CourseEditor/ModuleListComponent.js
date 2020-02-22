import React from 'react'
import ModuleListItem from "./ModuleListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes, faPencilAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {createModule, findModulesForCourse, updateModule,deleteModule} from "../../services/ModuleService";
import {
    chooseForUpdate,
    CREATE_MODULE,
    createNewModule,
    DELETE_MODULE, deleteThisModule, findModuleForThisCourse,
    formFieldChanged, hideVisibility, updateThisModule
} from "../../actions/moduleActions";
import {connect} from "react-redux";
library.add(faPlus, faTimes, faPencilAlt, faCheck);

class ModuleListComponent extends React.Component {
    componentDidMount(nextProps, nextState, nextContext) {
        this.props.findModuleForThisCourse(this.props.currentCourseId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Called")
    }

    chooseForUpdate = (module) => {
        this.props.chooseForUpdate(module);
    }
    createNewModule = () => {
        this.props.createNewModule(this.props.module,this.props.currentCourseId);



    }

    deleteThisModule = (module) => {
        this.props.deleteThisModule(module._id,this.props.currentCourseId);
    }

    updateThisModule = () => {
        if (this.props.module.title !== '') {
            this.props.updateThisModule(this.props.toUpdateId,this.props.module,this.props.currentCourseId)

        } else {
            this.props.hideVisibility()
        }

    }
    FormFieldChanged = (event) => {

        let module = {title: event.target.value};
        let formField = event.target.value;
        this.props.formFieldChanged(module,formField);

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-9 moduleList topPadding20">
                        <ul className="nav flex-column nav-pills">
                            {
                                this.props.modules.map(
                                    (module) => {
                                        return (
                                            <ModuleListItem
                                                selectModule={this.props.selectModule}
                                                deleteModule={this.deleteThisModule}
                                                chooseForUpdate={this.chooseForUpdate}
                                                key={module.id}
                                                module={module}/>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className="row addModuleDiv">
                    <div className="col-10 rightPadding5">
                        <input
                            onChange={this.FormFieldChanged} value={this.props.formField}
                            className="form-control" placeholder="New Module Name"/>
                    </div>
                    <div className="col-2 moduleActionDiv">
                        <button className="btn text-white actionButton" id="addModule"
                                onClick={this.createNewModule}>
                            <FontAwesomeIcon icon="plus" className="fas fa-1x"/>
                        </button>
                        &nbsp;
                        <button className="btn text-white actionButton" id="updateModule"
                                onClick={this.updateThisModule} disabled={`${this.props.updateVisibility}`}>
                            <FontAwesomeIcon icon="check" className="fas fa-1x"/>
                        </button>
                    </div>

                </div>

            </div>
        )
    }
}
const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules,
        module: state.modules.module,
        formField: state.modules.formField,
        updateVisibility: state.modules.updateVisibility,
        toUpdateId: state.modules.toUpdateId
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        formFieldChanged: (module, formField) =>
            dispatch(formFieldChanged(module,formField)),

        chooseForUpdate: (module) =>
            dispatch(chooseForUpdate(module)),

        hideVisibility: () =>
            dispatch(hideVisibility),

        updateThisModule: (moduleId, moduleToUpdate, courseId) =>
            updateModule(moduleId, moduleToUpdate)
                .then(() => findModulesForCourse(courseId))
                .then(modules =>
                    dispatch(updateThisModule(modules))),


        findModuleForThisCourse: (courseId) =>
            findModulesForCourse(courseId)
                .then(actualModules => dispatch(findModuleForThisCourse(actualModules))),

        deleteThisModule: (moduleId, courseId) =>
            deleteModule(moduleId)
                .then(() => findModulesForCourse(courseId))
                .then(modules =>
                    dispatch(deleteThisModule(modules))),

        createNewModule: (module, courseId) =>
            createModule(module, courseId)
                .then(() => findModulesForCourse(courseId))
                .then(modules =>
                    dispatch(createNewModule(modules)))
    }

}

export default connect( stateToPropertyMapper, dispatchToPropertyMapper) (ModuleListComponent)

