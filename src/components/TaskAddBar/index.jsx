import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskAddBarStyles from './TaskAddBar.module.scss'
import MainStyles from '../main.module.scss'

class TaskAddBar extends Component {
    state = {
        text: ''
    }

    render() {
        return (
            <div className={MainStyles.centerAlign + ' ' + TaskAddBarStyles.taskAddBar}>
                <input type="text" className={MainStyles.textInput + ' ' + TaskAddBarStyles.taskAddBar__input} placeholder="Добавьте новое задание" value={this.state.text} onChange={this.changeInput} onKeyDown={this.pressEnter} />
                <button className={MainStyles.btn} onClick={this.addTask}>Добавить</button>
                <button className={MainStyles.btn} onClick={this.props.clearAll}>Удалить все</button>
            </div>
        )
    }

    changeInput = event => this.setState({ text: event.target.value })

    pressEnter = event => event.key === 'Enter' ? this.addTask() : null

    addTask = () => {
        this.props.addTask({ id: Math.floor(Math.random() * 10000), task: this.state.text })
        this.setState({ text: '' })
    }


}

TaskAddBar.propTypes = {
    addTask: PropTypes.func,
    clearAll: PropTypes.func
}

export default TaskAddBar