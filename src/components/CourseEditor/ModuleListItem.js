import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";

const ModuleListItem = ({module, selectModule, deleteModule, chooseForUpdate}) =>
    <li
        // onClick={() => selectModule(module)}
        className="nav-item module">
        <div>
            <div className="row">
                <div className="col-9"><a
                    className="nav-link text-left"
                    href="#" id="module1">{module.title}</a></div>
                <div className="col2 text-right">
                    <button className="btn text-white actionButton"
                            onClick={() => chooseForUpdate(module)} title="Edit"><FontAwesomeIcon
                        icon="pencil-alt" className="fas"/></button>
                    <button className="btn text-white actionButton"
                            onClick={() => deleteModule(module)} title="Delete"><FontAwesomeIcon
                        icon="times" className="fas"/></button>
                </div>
            </div>
        </div>


    </li>


export default ModuleListItem;