export const CREATE_LESSON = "CREATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const FIND_LESSON_FOR_MODULE = "FIND_LESSON_FOR_MODULE"
export const UPDATE_LESSON = "UPDATE_LESSON"

export const createLessonAction = (newLesson) => ({
    type: CREATE_LESSON,
    newLesson: newLesson
})

export const deleteLessonAction = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
})

export const findAllLessonsForModuleAction = (lessons) => ({
    type: FIND_LESSON_FOR_MODULE,
    lessons: lessons
})

export const updateLessonAction = (lessonId, lesson) => ({
    type: UPDATE_LESSON,
    newLesson: lesson,
    newLessonId: lessonId
})