export const CREATE_MODULE = "CREATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const FINDALL_MODULE = "FINDALL_MODULE"

export const createNewModule = (newModule) => ({
    type: CREATE_MODULE,
    newModule:newModule

})

