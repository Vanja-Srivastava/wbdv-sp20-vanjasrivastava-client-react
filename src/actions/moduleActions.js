export const CREATE_MODULE = "CREATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const FINDALL_MODULE = "FINDALL_MODULE"
export const FORMFIELD_CHANGED = "FORMFIELD_CHANGED"
export const CHOOSE_FOR_UPDATE = "CHOOSE_FOR_UPDATE"
export const HIDE_VISIBILITY = "HIDE_VISIBILITY"

export const createNewModule = (newModule) => ({
    type: CREATE_MODULE,
    modules:newModule,
    formField: "",
    module: {}

})
export const formFieldChanged = (module,formField) => ({
    type: FORMFIELD_CHANGED,
    formField: formField,
    module: module

})
export const chooseForUpdate = (module) => ({
    type: CHOOSE_FOR_UPDATE,
    formField: module.title,
    module: module,
    updateVisibility: '',
    toUpdateId: module._id

})
export const hideVisibility = () => ({
    type: HIDE_VISIBILITY,
    formField: '',
    updateVisibility: 'disabled'

})
export const updateThisModule = (modules) => ({
    type: UPDATE_MODULE,
    formField: '',
    updateVisibility: 'disabled',
    module: {},
    modules: modules
})
export const findModuleForThisCourse = (modules) => ({
    type: FINDALL_MODULE,
    modules: modules

})
export const deleteThisModule = (modules) => ({
    type: DELETE_MODULE,
    modules: modules

})
