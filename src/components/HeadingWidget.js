import React from "react";

export default class HeadingWidget extends React.Component{

    constructor(props) {
        super(props);
    }

    state ={
        widget: this.props.widget
    }

    render(){
        return(
            <div className="input-field-section">
                <input className="form-control form-control-elements" id="heading" placeholder="Heading text"
                       style={{display : this.props.preview ? "none": "inherit"}}
                       onChange={(e) => {
                           const newText = e.target.value

                           this.setState(prevState => ({
                               widget: {
                                   ...prevState.widget,
                                   text: newText
                               }
                           }))
                           this.props.changeChild(this.state.widget)
                       }}
                       value={
                           this.state.widget.text
                       }

                />
                <select className="form-control form-control-elements" id="role-select2"
                        style={{display : this.props.preview ? "none": "inherit"}}
                        onChange={(e) => {
                            const s = parseInt(e.target.value);
                            this.setState((prevState) => {
                                return{
                                    widget: {
                                        ...prevState.widget,
                                        size: s
                                    }}
                            });
                            this.props.changeChild(this.state.widget)
                        }}
                        value={this.state.widget.size}>
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                </select>
                <input className="form-control form-control-elements" id="heading-widget" placeholder="Widget name"
                       style={{display: this.props.preview ? "none" : "inherit"}}
                       onChange={(e) => {
                           this.setState((prevState) => {
                               return{
                                   widget: {
                                       ...prevState.widget,
                                       name: e.target.value
                                   }}
                           });
                           this.props.changeChild(this.state.widget)
                       }} value={
                    this.state.widget.name}
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
        );

    }
}
