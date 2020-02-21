import React from 'react';
import '../../styles/CourseEditorComponent.style.client.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class LessonTabComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lesson: {title: ''},
            lessons: this.props.lessons,
            formField: '',
            updateVisibility: 'disabled',
            toUpdateId: ''
        };
    }
    titleChanged = (event) => {
        this.setState(
            {
                lesson: {title: event.target.value},
                formField: event.target.value
            });
    }

    chooseForUpdate = (lesson) => {
        this.setState({
            formField: lesson.title,
            updateVisibility: '',
            toUpdateId: lesson.id
        })
    }

    clearForm = () =>
        this.setState({
            formField: '',
            updateVisibility: 'disabled',
        })
    render() {
        let lessons = "";
        if (this.props.lessons) {
            lessons = this.props.lessons.map(lesson =>
                <li key={lesson.id} className="nav-item">
                    <button className="btn nav-link active courseAction"
                            onClick={() => this.props.selectLesson(lesson)} >{lesson.title}&nbsp;

                        <a onClick={() => this.chooseForUpdate(lesson)}>
                            <FontAwesomeIcon icon="pencil-alt" className="fas"/>
                        </a>
                        <a onClick={() => this.props.deleteLesson(lesson)}>
                            <FontAwesomeIcon icon="times" className="fas"/>
                        </a>
                    </button>
                </li>
            )
        }

        return (
            <div className="row">
                <div className="col-lg-6 topPadding5">
                    <ul className="nav nav-pills text-white">
                        {lessons}
                    </ul>
                </div>


                <div className="col-4 topPadding10"><input
                    onChange={this.titleChanged} value={this.state.formField}
                    className="form-control" placeholder="New Lesson Name"/></div>
                <div className="col-sm-2 topPadding8 actionButtonDiv">
                    <button className="btn text-white actionButton" id="addLesson" onClick={() => {
                        let lesson = this.state.lesson
                        this.props.createLesson(lesson)
                        this.clearForm()
                    }}>
                        <FontAwesomeIcon icon="plus" className="fas fa-2x"/></button>
                    <button className="btn text-white actionButton" id="updateLesson"
                            disabled={`${this.state.updateVisibility}`}
                            onClick={() => {
                                let lesson = Object.assign({id: this.state.toUpdateId}, this.state.lesson)
                                this.props.updateLesson(lesson);
                                this.clearForm()
                            }}>
                        <FontAwesomeIcon icon="check" className="fas fa-2x"/></button>
                </div>
            </div>
        )
    }
}


export default LessonTabComponent;






