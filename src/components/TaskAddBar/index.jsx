import React, { Component } from 'react'
import './TaskAddBar.scss'
import '../main.scss'

class TaskAddBar extends Component {
    state = {
        text: ''
    }

    render() {
        return (
            <div className="task-add-bar">
                <input type="text" className="text-input task-add-bar__input" placeholder="Добавьте новое задание" value={this.state.text} onChange={this.changeInput} onKeyDown={this.pressEnter} />
                <button className="btn" onClick={this.addTask}>Добавить</button>
                <button className="btn" onClick={this.props.clearAll}>Удалить все</button>
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

export default TaskAddBar