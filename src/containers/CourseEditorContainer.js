import React from 'react'
import CourseEditorNavBarComponent from "../components/CourseEditorNavBarComponent";

import ModuleList from "../components/ModuleListComponent"
import TopicPills from "../components/TopicPillsComponents"
import Forms from "../components/Forms";
import LessonTabs from "../components/LessonTabsComponent"
import {combineReducers, createStore} from "redux";
import moduleReducer from "../reducers/moduleReducer";
import lessonReducer from "../reducers/lessonReducer";
import topicReducer from "../reducers/topicReducer";
import {Provider} from "react-redux";
import WidgetListComponent from "./WidgetListContainer";
import widgetReducer from "../reducers/widgetReducer"
const rootReducer = combineReducers(
    {
        modules: moduleReducer,
        lessons: lessonReducer,
        topics: topicReducer,
        widgets: widgetReducer
    }
)

const store = createStore(rootReducer)

const CourseEditorContainer = ({
                                   key, history, props, courseId, moduleId, lessonId,topicId
                               }) =>
    <Provider store={store}>
        <div className="container-fluid pt-4 mt-4">
            {
                <div>
                    <CourseEditorNavBarComponent id={courseId}/>
                    <div>
                        <div className="row bg-dark p-3 text-white">
                            <ModuleList
                                moduleClass={"nav-link btn-outline-primary"}
                                courseId={courseId}
                                history={history}
                            />
                            <div className="col-9 bg-light text-dark">
                               <LessonTabs key={moduleId}
                                           courseId={courseId}
                                           moduleId={moduleId}
                                           history={history}/>

                                <TopicPills
                                                key={lessonId}
                                                courseId={courseId}
                                                moduleId={moduleId}
                                                lessonId={lessonId}
                                                history={history}
                                />
                                <WidgetListComponent
                                    key={topicId}
                                    courseId={courseId}
                                    moduleId={moduleId}
                                    lessonId={lessonId}
                                    history={history}
                                    topicId={topicId}
                                />
                                {/*<Forms/>*/}
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    </Provider>

export default CourseEditorContainer
