import React from "react";
import {createWidget, deleteWidget, findWidgetsForTopic, updateWidget} from "../services/WidgetService";
import {connect} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {
    createWidgetAction,
    deleteWidgetAction,
    findWidgetsForTopicAction, moveDownAction, moveUpAction,
    updateWidgetAction
} from "../actions/widgetAction";
import WidgetItemComponent from "../components/WidgetItemComponent";

class WidgetListContainer extends React.Component {


    state = {
        preview: true
    }

    constructor(props) {
        super(props);
    }


    componentDidMount = async () => {
        this.props.findAllWidgetsForTopic(this.props.topicId);

    };

    togglePreview(e){
        this.setState((prevState => {
            return {preview: !prevState.preview}
        }))
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    {
                        this.props.topicId &&
                        <div>
                            <div className="row save-div">

                                <div className="save-btn" style={{display : this.props.widgets.length > 0 ? "inherit" : "none"}}>
                                    <button className="btn btn-success" onClick={()=>this.props.saveWidgetOrdering(this.props.widgets,this.props.topicId)}>
                                        Save
                                    </button>
                                </div>


                                <div className="row switchToggle" style={{display : this.props.widgets.length > 0 ? "inherit" : "none"}}>
                                    <label className="label label-default">Preview</label>
                                    <label className="switch">
                                        <input type="checkbox" id="preview-toggle"
                                               onChange={()=>this.togglePreview()}
                                        ></input>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                {
                                    this.props.widgets.map((widget,index) =>{
                                        return(
                                            <WidgetItemComponent
                                                key={widget.id}
                                                widget={widget}
                                                index = {index}
                                                widgetListSize = {this.props.widgets.length}
                                                deleteWidget = {this.props.deleteWidget}
                                                updateWidget = {this.props.updateWidget}
                                                moduleId = {this.props.moduleId}
                                                lessonId={this.props.lessonId}
                                                courseId={this.props.courseId}
                                                topicId={this.props.topicId}
                                                preview={this.state.preview}
                                                moveUp={this.props.moveWidgetUp}
                                                moveDown = {this.props.moveWidgetDown}


                                            />)
                                    })
                                }
                            </div>
                            <a className="icon-span floater"><span>
                    <em className="fa fa-plus-circle"
                        onClick={() => this.props.createWidget(this.props.topicId)}
                    /></span></a>
                        </div>
                    }

                </div>
            </React.Fragment>
        );
    }

}


const stateToPropertyMapper = (state) => {
    return {
        widgets: state.widgets.widgets
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {

        findAllWidgetsForTopic: (topicId) =>
            findWidgetsForTopic(topicId).then(actualWidgets =>
                dispatch(findWidgetsForTopicAction(actualWidgets))),

        updateWidget: (widget) =>
            updateWidget(widget.id, widget)
                .then(status =>
                    dispatch(updateWidgetAction(widget.id, widget))),

        createWidget: (topicId) => {
            let actualWidget = {
                id : uuidv4(),
                type: "Heading",
                name: "Widget Content",
                size: 1,
                text: "",

            };

            createWidget(topicId, actualWidget)
                .then(actualWidget =>
                    dispatch(createWidgetAction(actualWidget)))
        },

        deleteWidget: (widgetId) =>
            dispatch(deleteWidgetAction(widgetId)),

        moveWidgetUp:(index,widgetId)=>
            dispatch(moveUpAction(index,widgetId)),

        moveWidgetDown: (index,widgetId)=>
            dispatch(moveDownAction(index,widgetId)),

        saveWidgetOrdering : (currWidgetList,topicId)=>{
            findWidgetsForTopic(topicId).then(actualWidgets =>{
                let actualIds = actualWidgets.map((widget,index) =>{
                    return(widget.id)})

                let currIds = currWidgetList.map((widget,index) =>{
                    return(widget.id)})

                let difference = actualIds.filter(x => !currIds.includes(x));

                for (let [index, val] of difference.entries()) {
                    deleteWidget(val).then()
                }

                for (let [index, val] of currWidgetList.entries()) {
                    val.order = index
                    updateWidget(val.id, val)
                        .then(status =>
                            dispatch(updateWidgetAction(val.id, val)))
                }

            })
        }

    }
}


export default connect (
    stateToPropertyMapper,
    dispatchToPropertyMapper) (WidgetListContainer);
