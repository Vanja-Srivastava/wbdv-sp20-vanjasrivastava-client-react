import React from "react";
import ParagraphWidget from "./ParagraphWidget";
import HeadingWidget from "./HeadingWidget";

export default class WidgetItemComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        widget: this.props.widget,
    }

    changeType = (e)=>{
        const newType = e.target.value
        this.setState((prevState) => {
            return {
                widget: {
                    ...prevState.widget,
                    type:newType
                }}
        })
    }
    changeName = (e)=>{
        const newText = e.target.value
        this.setState((prevState) => {
            return {
                widget: {
                    ...prevState.widget,
                    name:newText
                }}
        })
    }
    changeText= (e)=>{
        const newText = e.target.value
        this.setState((prevState) => {
            return {
                widget: {
                    ...prevState.widget,
                    text:newText
                }}
        })
    }

    changeSize= (e)=>{
        const newText = parseInt(e.target.value);
        this.setState((prevState) => {
            return {
                widget: {
                    ...prevState.widget,
                    size:newText
                }}
        })
    }


    changeChild = (w) => {
        this.setState((prevState) => {
            return{
                widget: w
            }
        })
    };

    render(){
        return (
            <div className="heading-widget-div">
                <div className="row heading-widget-title">
                    <span className="heading-text">

                        {
                            this.state.widget.type === "Heading" &&
                            <h3>Heading widget</h3>
                        }

                        {
                            this.state.widget.type === "Paragraph" &&
                            <h3>Paragraph widget</h3>
                        }

                    </span>
                    <div className="widget-content pull-right"
                         style={{display: this.props.preview ? "none" : "inherit"}}>

                        <button className="fa fa-arrow-up arrow-icon"
                                style={{display: this.props.index > 0 ? "inherit" : "none"}}
                                onClick={() => this.props.moveUp(this.props.index, this.state.widget.id)}>
                        </button>


                        <button className="fa fa-arrow-down arrow-icon"
                                style={{display: (this.props.index < this.props.widgetListSize - 1) ? "inherit" : "none"}}
                                onClick={() => this.props.moveDown(this.props.index, this.state.widget.id)}>
                        </button>

                        {
                            <span className="p-1"><select className="widget-selector" id="role-select1"
                                                          onChange={this.changeType}
                                                          value={this.state.widget.type}>
                                    <option value="Heading">Heading</option>
                                    <option value="Paragraph">Paragraph</option>
                            </select></span>
                        }

                        <button onClick={() => this.props.deleteWidget(this.state.widget.id)}
                                className="fa fa-trash p-1"/>


                        <button onClick={() => this.props.updateWidget(this.state.widget)}
                                className="fa fa-check p-1">
                        </button>
                    </div>
                </div>
                {
                    this.state.widget.type === "Paragraph" &&
                    <div className="input-field-section">
                    <textarea className="form-control form-control-elements" id="textarea" rows="3"
                              placeholder="Lorem ipsum" style={{display : this.props.preview ? "none": "inherit"}}
                              onChange={this.changeText}
                              value={this.state.widget.text}
                    />
                        <input type="text-area" className="form-control form-control-elements" id="textarea-widget"
                               placeholder="Widget name" style={{display : this.props.preview ? "none": "inherit"}}
                               onChange={this.changeName}
                               value={this.state.widget.name}
                        />

                        <div style={{display : this.props.preview ? "inherit": "none"}}>
                            <h5 className="form-control-elements">Preview </h5>
                            <h6>
                                {
                                    this.state.widget.text
                                }
                            </h6>
                        </div>
                    </div>

                }

                {
                    this.state.widget.type === "Heading" &&
                    <div className="input-field-section">
                        <input className="form-control form-control-elements" id="heading" placeholder="Heading text"
                               style={{display : this.props.preview ? "none": "inherit"}}
                               onChange={this.changeText}
                               value={
                                   this.state.widget.text
                               }

                        />
                        <select className="form-control form-control-elements" id="role-select2"
                                style={{display : this.props.preview ? "none": "inherit"}}
                                onChange={this.changeSize}
                                value={this.state.widget.size}>
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                        </select>
                        <input className="form-control form-control-elements" id="heading-widget" placeholder="Widget name"
                               style={{display: this.props.preview ? "none" : "inherit"}}
                               onChange={this.changeName}
                               value={this.state.widget.name}
                        />

                        <div style={{display : this.props.preview? "inherit":"none"}}>


                            <h5 className="form-control-elements">Preview </h5>
                            {

                                this.state.widget.size === 1 && <h1 className="form-control-elements">{this.state.widget.text}</h1>
                            }

                            {

                                this.state.widget.size === 2 && <h2 className="form-control-elements">{this.state.widget.text}</h2>
                            }

                            {

                                this.state.widget.size === 3 && <h3 className="form-control-elements">{this.state.widget.text}</h3>
                            }

                            {

                                this.state.widget.size === 4 && <h4 className="form-control-elements">{this.state.widget.text}</h4>
                            }

                            {

                                this.state.widget.size === 5 && <h5 className="form-control-elements">{this.state.widget.text}</h5>
                            }

                        </div>
                    </div>

                }

            </div>
        )
    }
}
