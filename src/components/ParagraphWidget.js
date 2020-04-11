import React from "react";

export default class ParagraphWidget extends React.Component{

    state ={
        widget: this.props.widget
    }



    render(){
        return(
            <div className="input-field-section">
                    <textarea className="form-control form-control-elements" id="textarea" rows="3"
                              placeholder="Lorem ipsum" style={{display : this.props.preview ? "none": "inherit"}}

                              onChange={(e) => {
                                  const newText = e.target.value
                                  this.setState(prevState => ({
                                      widget: {
                                          ...prevState.widget,
                                          text: newText
                                      }
                                  }))
                                  this.props.changeChild(this.state.widget)
                              }} value={
                        this.state.widget &&
                        this.state.widget.text
                    }
                    />

                <input type="text-area" className="form-control form-control-elements" id="textarea-widget"
                       placeholder="Widget name" style={{display : this.props.preview ? "none": "inherit"}}

                       onChange={(e) => {
                           const newName = e.target.value
                           this.setState(prevState => ({
                               widget: {
                                   ...prevState.widget,
                                   name: newName
                               }
                           }))
                           this.props.changeChild(this.state.widget)
                       }} value={
                    this.state.widget &&
                    this.state.widget.name}
                ></input>

                <div style={{display : this.props.preview ? "inherit": "none"}}>
                    <h5 className="form-control-elements">Preview </h5>
                    <h6>
                        {
                            !this.state.widget &&
                            "Hi Paragraph"
                        }
                        {
                            this.state.widget &&
                            this.state.widget.text
                        }
                    </h6>
                </div>
            </div>
        );

    }
}
