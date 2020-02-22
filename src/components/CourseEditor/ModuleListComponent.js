import React from 'react'
import ModuleListItem from "./ModuleListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes, faPencilAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {createModule, findModulesForCourse, updateModule,deleteModule} from "../../services/ModuleService";
import {CREATE_MODULE, createNewModule, DELETE_MODULE} from "../../actions/moduleActions";
import {connect} from "react-redux";
library.add(faPlus, faTimes, faPencilAlt, faCheck);

class ModuleListComponent extends React.Component {
    componentDidMount(nextProps, nextState, nextContext) {
        this.props.findModuleForCourse(this.props.currentCourseId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Called")
    }
    constructor(props) {
        super(props)
        this.state = {
            module: {
                title: ''
            },
            formField: '',
            updateVisibility: 'disabled',
            toUpdateId: ''
        };
    }
    chooseForUpdate = (module) => {
        this.setState({
            formField: module.title,
            updateVisibility: '',
            toUpdateId: module._id
        })
        dispatchToPropertyMapper()
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
                            onChange={this.props.FormFieldChanged} value={this.props.formField}
                            className="form-control" placeholder="New Module Name"/>
                    </div>
                    <div className="col-2 moduleActionDiv">
                        <button className="btn text-white actionButton" id="addModule"
                                onClick={this.props.createNewModule}>
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
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        FormFieldChanged: (event) =>
            this.setState(
                {
                    module: {title: event.target.value},
                    formField: event.target.value
                }),

        findModuleForCourse: (courseId) =>
            findModulesForCourse(courseId)
                .then(actualModules => dispatch({
                    type: 'FIND_MODULES_FOR_COURSE',
                    modules: actualModules
                })),
        deleteModule: (moduleId) =>
            deleteModule()
                .then(status =>
                    dispatch(deleteModule(moduleId))),
        createNewModule: (courseId) => {
            fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${courseId}/modules`, {
                method: "POST",
                body: JSON.stringify({title: "New Module"}),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(actualModule =>
                    dispatch(createModule(actualModule)))
        }
    }
}

export default connect( stateToPropertyMapper, dispatchToPropertyMapper) (ModuleListComponent)

