import {CREATE_MODULE, DELETE_MODULE,UPDATE_MODULE, FIND_MODULE_FOR_COURSE} from "../actions/moduleActions";

const initialState = {
    modules: []
}

const moduleReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_MODULE_FOR_COURSE:
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
        case UPDATE_MODULE:
            const updateModuleIndex = state.modules.findIndex(i => i._id === action.newModuleId)
            state.modules.splice(updateModuleIndex, 1, action.newModule)
            return {
                modules: state.modules
            }
        default:
            return state
    }
};

export default moduleReducer