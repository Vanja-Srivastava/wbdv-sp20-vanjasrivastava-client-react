import {CREATE_TOPIC, DELETE_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC} from "../actions/topicActions";
import {UPDATE_LESSON} from "../actions/lessonActions";
const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics
            }

        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        case UPDATE_TOPIC:
            const updateTopicIndex = state.topics.findIndex(i => i._id === action.newTopicId)
            state.topics.splice(updateTopicIndex, 1, action.newTopic)
            return {
                topics: state.topics
            }
        default:
            return state
    }
};

export default topicReducer