import {CREATE_LESSON, DELETE_LESSON, FIND_LESSON_FOR_MODULE,UPDATE_LESSON} from "../actions/lessonActions";

const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_LESSON_FOR_MODULE:
            return {
                lessons: action.lessons
            }

        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        case UPDATE_LESSON:
            const updateLessonIndex = state.lessons.findIndex(i => i._id === action.newLessonId)
            state.lessons.splice(updateLessonIndex, 1, action.newLesson)
            return {
                lessons: state.lessons
            }
        default:
            return state
    }
};

export default lessonReducer