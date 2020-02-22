import React from 'react'
import TopicPillsItem from "./TabPillsItemComponent";
import {createTopic, deleteTopic, findTopicsForLesson, updateTopic} from "../services/TopicService";
import {
    createTopicAction,
    deleteTopicAction,
    findAllTopicsForLessonAction,
    updateTopicAction
} from "../actions/topicActions";
import {connect} from "react-redux";

class TopicPillsComponents extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        this.props.findAllTopicsForLesson(this.props.lessonId);
    };

    render() {
        return (
            <React.Fragment>
            <div>
                <div className="row p-3">
                    <div className="col-12">
                        <ul class="nav nav-pills">
                            {
                                this.props.topics.map((topic) =>{
                                    return(
                                    <TopicPillsItem key={topic.id}
                                                    topic={topic}
                                                    deleteTopic = {this.props.deleteTopic}
                                                    updateTopic = {this.props.updateTopic}
                                                    lessonId={this.props.lessonId}
                                                    courseId={this.props.courseId}
                                    />)
                                }
                                )
                        }
                            <li className="nav-item">
                                {
                                    this.props.lessonId!=undefined &&
                                        <span className="nav-link btn-outline-primary" onClick={() =>
                                            this.props.createTopic(this.props.lessonId)}>
                                        <em className="fa fa-plus"
                                        ></em>
                                        </span>
                                    }

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {

        findAllTopicsForLesson: (lessonId) =>
            findTopicsForLesson(lessonId).
            then(actualTopics =>
                dispatch(findAllTopicsForLessonAction(actualTopics))),

        updateTopic: (topic) =>
            updateTopic(topic._id,topic)
                .then(status =>
                    dispatch(updateTopicAction(topic._id,topic))),

        createTopic: (lessonId) =>{
            let actualTopic = {title : "New Topic"};
            createTopic(actualTopic,lessonId)
                .then(actualTopic =>
                    dispatch(createTopicAction(actualTopic)))
        },

        deleteTopic: (topicId) =>
            deleteTopic(topicId)
                .then(status =>
                    dispatch(deleteTopicAction(topicId))),
    }
}

export default connect (
    stateToPropertyMapper,
    dispatchToPropertyMapper) (TopicPillsComponents);