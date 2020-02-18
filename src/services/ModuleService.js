import {MODULES_API_URL_CREATE, MODULES_API_URL_FINDMODULE, MODULES_API_URL} from "../constants";

export const createModule = (module,courseId) =>
    fetch(`${MODULES_API_URL_CREATE}/${courseId}/modules`, {
        method: 'POST',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());


export const findModulesForCourse = async (courseId) => {
    const response = await fetch(`${MODULES_API_URL_CREATE}/${courseId}/modules`)
    return await response.json()

}

export const updateModule = async (moduleId,moduleToUpdate) => {
    const response = await fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(moduleToUpdate),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteModule = async (deleteModuleId) =>
{
    const response = await fetch(`${MODULES_API_URL}/${deleteModuleId}`, {
        method: 'DELETE'
    }).then(response => response.json())

}

