import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskElementStyles from './TaskElement.module.scss'
import MainStyles from '../main.module.scss'

class TaskElement extends Component {
    state = {
        isCompleted: false,
        isEdited: false,
        text: ''
    }

    render() {
        const normalmode = (!this.state.isCompleted && !this.state.isEdited) ?
            <>
                <button className={MainStyles.btn} onClick={this.completeTask}>Завершить</button>
                <button className={MainStyles.btn} onClick={this.editTask}>Редактировать</button>
                <button className={MainStyles.btn} onClick={this.deleteTask}>Удалить</button>
            </> : null
        const editmode = this.state.isEdited ?
            <>
                <input type="text" className={MainStyles.textInput + ' ' + TaskElementStyles.taskElement__editInput} value={this.state.text} onChange={this.changeInput} />
                <button className={MainStyles.btn} onClick={this.editTask}>Закончить</button>
            </> : null
        return (
            <div className={MainStyles.centerAlign + ' ' + TaskElementStyles.taskElement}>
                <div className={this.state.isCompleted ? TaskElementStyles['taskElement__text--completed'] : TaskElementStyles.taskElement__text}>{this.props.task}</div>
                {normalmode}
                {editmode}
            </div >
        )
    }

    completeTask = () => { this.setState({ isCompleted: true }) }

    editTask = () => {
        this.setState(prevState => {
            if (prevState.isEdited) {
                this.props.editTask(this.props.id, this.state.text)
            }
            return { isEdited: !prevState.isEdited, text: '' }
        })
    }

    deleteTask = () => { this.props.deleteTask(this.props.id) }

    changeInput = event => this.setState({ text: event.target.value })
}

TaskElement.propTypes = {
    id: PropTypes.number,
    task: PropTypes.string,
    editTask: PropTypes.func,
    deleteTask: PropTypes.func
}

export default TaskElement