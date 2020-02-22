import React from 'react'
import {Link} from "react-router-dom";
import '../styles/moduleListItem.style.client.css'


export default class ModuleListItemComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        active: false,
        selectModule: false
    }

    selectModule = () =>{
        this.setState(prevState => ({
            selectModule: !prevState.selectModule
        }))
    }

    editModule = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }

    saveModule = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
        this.props.updateModule(this.props.module)

    }

    render() {
        return(
            <a className="nav-link leftsplit" data-toggle="pill"  role="tab"
               aria-controls="v-pills-home" aria-selected="true">
                <div className="row wbdv-module-item">
                    <div className="col-md-10 col-10 wbdv-module-item-title" onClick={()=> this.selectModule()}>
                        {
                            !this.state.active &&
                            <Link to={`/courseeditor/courses/${this.props.courseId}/modules/${this.props.module._id}`}>
                                <label className="text-dark">
                                    {this.props.module.title}
                                </label>
                            </Link>

                        }
                        {
                            !this.state.active &&
                            <button onClick={()=>this.editModule()}  className="fa fa-pencil m-1"></button>

                        }
                        {
                            this.state.active &&
                            <input
                                onChange={(e)=> this.props.module.title = e.target.value}
                                placeholder={this.props.module.title}/>
                        }
                        {

                            !this.state.active &&
                            <button onClick={()=>this.props.deleteModule(this.props.module._id)}  className="fa fa-trash m-1"></button>
                        }
                        {
                            this.state.active &&
                            <button onClick={()=>this.saveModule()}  className="fa fa-check m-1"></button>
                        }
                    </div>
                </div>
            </a>
        )
    }
}