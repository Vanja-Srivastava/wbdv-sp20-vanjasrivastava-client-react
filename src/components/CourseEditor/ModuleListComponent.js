import React from 'react'
import ModuleListItem from "./ModuleListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes, faPencilAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {createModule, findModulesForCourse, updateModule,deleteModule} from "../../services/ModuleService";

library.add(faPlus, faTimes, faPencilAlt, faCheck);

class ModuleList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            module: {
                title: '',
                lessons: [{
                    title: '',
                    topics: [{
                        title: '',
                        widgets: []
                    }]
                }]
            },
            modules: [],
            formField: '',
            updateVisibility: 'disabled',
            toUpdateId: ''
        };
    }

    componentDidMount(nextProps, nextState, nextContext) {
        if (this.props.modules.length > 0) {
            this.setState({
                modules: this.props.modules
            })
        }
    }

    createNewModule = () => {
        let newModules;
        createModule(this.state.module,this.props.currentCourseId)
            .then(() => findModulesForCourse(this.props.currentCourseId))
            .then(modules => newModules = modules)
            .then(() =>
                this.setState({
                    module:{},
                    modules: newModules,
                    formField: ''
                })
            )


    }

    deleteThisModule = (module) => {
        let newModules;
        deleteModule(module._id)
            .then(() => findModulesForCourse(this.props.currentCourseId))
            .then(modules => newModules = modules)
            .then(() =>
                this.setState({
                    modules: newModules
                })
            )
    }

    titleChanged = (event) => {
        this.setState(
            {
                module: {title: event.target.value},
                formField: event.target.value
            });
    }

    chooseForUpdate = (module) => {
        this.setState({
            formField: module.title,
            updateVisibility: '',
            toUpdateId: module._id
        })
    }

    updateThisModule = () => {
        if (this.state.module.title !== '') {
            const moduleToUpdate = Object.assign({id: this.state.toUpdateId}, this.state.module);
            let updatedModules;
            updateModule(this.state.toUpdateId,moduleToUpdate)
                .then(() => findModulesForCourse(this.props.currentCourseId))
                .then(modules => updatedModules = modules)
                .then(() =>
                    this.setState({
                        module: {
                            title: '',
                            lessons: [{
                                title: '',
                                topics: [{
                                    title: '',
                                    widgets: []
                                }]
                            }]
                        },
                        modules: updatedModules,
                        formField: '',
                        updateVisibility: 'disabled'
                    })
                )
        } else {
            this.setState({
                    formField: '',
                    updateVisibility: 'disabled'
                }
            )
        }

    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-9 moduleList topPadding20">
                        <ul className="nav flex-column nav-pills">
                            {
                                this.state.modules.map(
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
                            onChange={this.titleChanged} value={this.state.formField}
                            className="form-control" placeholder="New Module Name"/>
                    </div>
                    <div className="col-2 moduleActionDiv">
                        <button className="btn text-white actionButton" id="addModule"
                                onClick={this.createNewModule}>
                            <FontAwesomeIcon icon="plus" className="fas fa-1x"/>
                        </button>
                        &nbsp;
                        <button className="btn text-white actionButton" id="updateModule"
                                onClick={this.updateThisModule} disabled={`${this.state.updateVisibility}`}>
                            <FontAwesomeIcon icon="check" className="fas fa-1x"/>
                        </button>
                    </div>

                </div>

            </div>
        )
    }
}

export default ModuleList;