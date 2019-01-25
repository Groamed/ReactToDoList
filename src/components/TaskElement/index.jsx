import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskElementStyles from './TaskElement.module.scss'
import MainStyles from '../main.module.scss'
import { TasksContext } from '../storage';

class TaskElement extends Component {
    state = {
        isCompleted: false,
        isEdited: false
    }

    editInput = React.createRef()

    render() {
        const normalmode = (!this.state.isCompleted && !this.state.isEdited) ?
            <React.Fragment>
                <button className={MainStyles.btn} onClick={this.completeTask}>Завершить</button>
                <button className={MainStyles.btn} onClick={this.editTask}>Редактировать</button>
                <button className={MainStyles.btn} onClick={this.deleteTask}>Удалить</button>
            </React.Fragment>
            : null
        const editmode = this.state.isEdited ?
            <React.Fragment>
                <input type="text" className={`${MainStyles.textInput} ${TaskElementStyles.taskElement__editInput}`} ref={this.editInput} />
                <button className={MainStyles.btn} onClick={this.editTask}>Закончить</button>
            </React.Fragment> : null
        return (
            <div className={`${MainStyles.centerAlign} ${TaskElementStyles.taskElement}`}>
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
                this.context.funcs.editTask(this.props.id, this.editInput.current.value)
                this.editInput.current.value = ''
            }
            return { isEdited: !prevState.isEdited }
        })
    }

    deleteTask = () => { this.context.funcs.deleteTask(this.props.id) }
}

TaskElement.propTypes = {
    id: PropTypes.number,
    task: PropTypes.string,
    editTask: PropTypes.func,
    deleteTask: PropTypes.func
}

TaskElement.contextType = TasksContext

export default TaskElement