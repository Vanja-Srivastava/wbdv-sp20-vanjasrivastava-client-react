import {CREATE_MODULE,DELETE_MODULE,UPDATE_MODULE,FINDALL_MODULE} from "../actions/moduleActions";
const initialState = {
    modules: [],
    lessons: [],
    topics: [],
    selectedLessonId: "",
    selectedModuleId: "",
    selectedTopicId: ""

}
const moduleReducer = (state = initialState, action) => {
    switch(action.type) {
        // TODO: move all strings to constants
        case "FIND_MODULES_FOR_COURSE":
            return {
                modules: action.modules
            }

        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        default:
            return state
    }
}

export default moduleReducer




