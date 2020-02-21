import {
    LESSONS_API_URL,
    LESSONS_API_URL_CREATE,
    LESSONS_API_URL_FINDLESSONS, MODULES_API_URL_FINDMODULE,
} from "../constants";

export const createLesson = (lesson,moduleId) =>

    fetch(`${LESSONS_API_URL_CREATE}/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());



export const findLessonsForModule = async (moduleId) => {
    const response = await fetch(`${LESSONS_API_URL_FINDLESSONS}/${moduleId}/lessons`)
    return response.json()

}

export const updateLesson = async (lessonId,lessonToUpdate) => {
    debugger
    const response = await fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lessonToUpdate),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const deleteLesson = async (deleteLessonId) =>
{
    const response = await fetch(`${LESSONS_API_URL}/${deleteLessonId}`, {
        method: 'DELETE'
    }).then(response => response.json())

}

