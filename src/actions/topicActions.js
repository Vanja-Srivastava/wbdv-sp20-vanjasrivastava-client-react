export const CREATE_TOPIC = "CREATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"
export const UPDATE_TOPIC = "UPDATE_TOPIC"

export const createTopicAction = (newTopic) => ({
    type: CREATE_TOPIC,
    newTopic: newTopic
})

export const deleteTopicAction = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})

export const findAllTopicsForLessonAction = (topics) => ({
    type: FIND_TOPICS_FOR_LESSON,
    topics: topics
})


export const updateTopicAction = (topicId, topic) => ({
    type: UPDATE_TOPIC,
    newTopic: topic,
    newTopicId: topicId
})