export const DELETE_MODULE = "DELETE_MODULE"
export const CREATE_MODULE = "CREATE_MODULE"
export const FIND_MODULE_FOR_COURSE = "FIND_MODULE_FOR_COURSE"
export const UPDATE_MODULE = "UPDATE_MODULE"

export const deleteModuleAction = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})


export const createModuleAction = (newModule) => ({
    type: CREATE_MODULE,
    newModule: newModule
})


export const findAllModulesForCourseAction = (modules) => ({
    type: FIND_MODULE_FOR_COURSE,
    modules: modules
})

export const updateModuleAction = (moduleId, module) => ({
    type: UPDATE_MODULE,
    newModule: module,
    newModuleId: moduleId
})