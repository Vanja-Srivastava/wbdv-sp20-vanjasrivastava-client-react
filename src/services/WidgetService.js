import {WIDGET_API_URL} from "../common/constants";

export const findAllWidgets = () =>
    fetch(`${WIDGET_API_URL}widgets`)
        .then(response => response.json());


export const findWidgetById = async (widgetId) => {
    const response = await fetch(`${WIDGET_API_URL}widgets/${widgetId}`, {
        method: 'GET'
    });
    return await response.json()
};


export const findWidgetsForTopic = async (topicId) => {
    const response = await fetch(`${WIDGET_API_URL}topics/${topicId}/widgets`, {
        method: 'GET'
    });
    return await response.json()
};


export const createWidget = async (tid,widget) => {
    let response = await fetch(`${WIDGET_API_URL}topics/${tid}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteWidget = async (widgetId) => {
    let response = await fetch(`${WIDGET_API_URL}widgets/${widgetId}`, {
        method: 'DELETE'
    });
    return await response.json()
}

export const updateWidget = async (widgetId,widget) => {
    let response = await fetch(`${WIDGET_API_URL}widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

