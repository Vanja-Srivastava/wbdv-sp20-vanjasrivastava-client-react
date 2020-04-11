import {
    TOPICS_API_URL,
    TOPICS_API_URL_CREATE,
    TOPICS_API_URL_FINDTOPICS
} from "../common/constants";

export const createTopic = (topic,lessonId) =>

    fetch(`${TOPICS_API_URL_CREATE}/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());



export const findTopicsForLesson = async (lessonId) => {
    const response = await fetch(`${TOPICS_API_URL_FINDTOPICS}/${lessonId}/topics`)
    return response.json()

}

export const updateTopic = async (topicId,topicToUpdate) => {
    debugger
    const response = await fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topicToUpdate),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const deleteTopic = async (deletetopicId) =>
{
    const response = await fetch(`${TOPICS_API_URL}/${deletetopicId}`, {
        method: 'DELETE'
    }).then(response => response.json())

}

