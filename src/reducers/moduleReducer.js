import {CREATE_MODULE,DELETE_MODULE,UPDATE_MODULE,FINDALL_MODULE,HIDE_VISIBILITY,CHOOSE_FOR_UPDATE,FORMFIELD_CHANGED} from "../actions/moduleActions";
const initialState = {
    module: {},
    modules: [],
    lessons: [],
    topics: [],
    selectedLessonId: "",
    selectedModuleId: "",
    selectedTopicId: "",
    formField: '',
    updateVisibility: 'disabled',
    toUpdateId: ''

}
const moduleReducer = (state = initialState, action) => {
    switch(action.type) {
        case FORMFIELD_CHANGED :
            return{
                modules: state.modules,
                module: action.module,
                formField: action.formField,
                updateVisibility: state.updateVisibility,
                toUpdateId: state.toUpdateId
            }
        case UPDATE_MODULE:
            return {
                modules: action.modules,
                module: action.module,
                formField: action.formField,
                updateVisibility: action.updateVisibility,
                toUpdateId: state.toUpdateId
            }
        case HIDE_VISIBILITY:
            return{
                modules: state.modules,
                module: state.module,
                formField: action.formField,
                updateVisibility: action.updateVisibility,
                toUpdateId: state.toUpdateId

            }
        case CHOOSE_FOR_UPDATE:
            return {
                modules: state.modules,
                module: state.module,
                formField: action.formField,
                updateVisibility: action.updateVisibility,
                toUpdateId: action.toUpdateId
            }
        case FINDALL_MODULE:
            return {
                modules: action.modules,
                module: state.module,
                formField: state.formField,
                updateVisibility: state.updateVisibility,
                toUpdateId: state.toUpdateId
            }

        case CREATE_MODULE:
            return {
                modules: action.modules,
                module: action.module,
                formField: action.formField,
                updateVisibility: state.updateVisibility,
                toUpdateId: state.toUpdateId
            }
        case DELETE_MODULE:
            return {
                modules: action.modules,
                module: state.module,
                formField: state.formField,
                updateVisibility: state.updateVisibility,
                toUpdateId: state.toUpdateId
            }
        default:
            return state
    }
}

export default moduleReducer




