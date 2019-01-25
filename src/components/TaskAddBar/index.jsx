import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskAddBarStyles from './TaskAddBar.module.scss'
import MainStyles from '../main.module.scss'
import { TasksContext } from '../storage';

class TaskAddBar extends Component {
    taskInput = React.createRef()

    render() {
        return (
            <div className={`${MainStyles.centerAlign} ${TaskAddBarStyles.taskAddBar}`}>
                <input type="text" className={`${MainStyles.textInput} ${TaskAddBarStyles.taskAddBar__input}`} placeholder="Добавьте новое задание" ref={this.taskInput} onKeyDown={this.pressEnter} />
                <button className={MainStyles.btn} onClick={this.addTask}>Добавить</button>
                <button className={MainStyles.btn} onClick={this.context.funcs.clearAll}>Удалить все</button>
            </div>
        )
    }

    pressEnter = event => event.key === 'Enter' ? this.addTask() : null

    addTask = () => {
        this.context.funcs.addTask({ id: Math.floor(Math.random() * 10000), task: this.taskInput.current.value })
        this.taskInput.current.value = ''
    }


}

TaskAddBar.propTypes = {
    addTask: PropTypes.func,
    clearAll: PropTypes.func
}

TaskAddBar.contextType = TasksContext

export default TaskAddBar