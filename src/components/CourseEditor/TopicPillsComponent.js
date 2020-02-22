import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class TopicPillsComponent
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            topic: {title: ''},
            topics: this.props.lesson.topics,
            formField: '',
            updateVisibility: 'disabled',
            toUpdateId: ''
        };
    }

    titleChanged = (event) => {
        this.setState(
            {
                topic: {title: event.target.value},
                formField: event.target.value
            });
    }
    chooseForUpdate = (topic) => {
        this.setState({
            formField: topic.title,
            updateVisibility: '',
            toUpdateId: topic.id
        })
    }

    clearForm = () =>
        this.setState({
            formField: '',
            updateVisibility: 'disabled',
        })

    render() {
        let topics = "";
        if (this.props.topics) {
            topics =
                this.props.topics.map(topic =>

                    <li className="nav-item topic">
                        <button className="btn text-black nav-link" onClick={
                            () => {
                                this.props.selectTopic(topic)
                            }}
                                id={`topic${topic.id}`}>{topic.title} &nbsp;
                            <a onClick={
                                () => this.chooseForUpdate(topic)
                            }><FontAwesomeIcon icon="pencil-alt"
                                               className="fas"/></a>
                            <a onClick={
                                () => this.props.deleteTopic(topic)
                            }><FontAwesomeIcon icon="times" className="fas"/></a>
                        </button>
                    </li>
                )
        }
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-6">
                        <ul className="nav nav-pills"> {topics}
                        </ul>
                    </div>
                    <div className="col-lg-4 topPadding20"><input
                        onChange={this.titleChanged} value={this.state.formField}
                        className="form-control" placeholder="New Topic Name"/></div>
                    <div className="col-sm-2 text-left alignTopAction">
                        <button className="btn text-muted actionButton" id="addTopic" onClick={
                            () => {
                                let topic = this.state.topic
                                this.props.createTopic(topic)
                                this.clearForm()
                            }
                        }>
                            <FontAwesomeIcon icon="plus" className="fas fa-2x"/></button>
                        <button className="btn text-muted actionButton" id="updateTopic" onClick={
                            () => {
                                let topic = Object.assign({id: this.state.toUpdateId}, this.state.topic)
                                this.props.updateTopic(topic);
                                this.clearForm()
                            }}
                                disabled={`${this.state.updateVisibility}`}>
                            <FontAwesomeIcon icon="check" className="fas fa-2x"/></button>
                    </div>
                </div>
            </div>


        )
    }




}

export default TopicPillsComponent