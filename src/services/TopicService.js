import {
    TOPICS_API_URL_CREATE,
    TOPICS_API_URL_FINDTOPICS,
    TOPICS_API_URL
} from "../constants";

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

export const updateTopic = async (topicId,topic) => {
    const response = await fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const deleteTopic = async (topicId) =>
{
    const response = await fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'DELETE'
    }).then(response => response.json())

}

