import React, { Component } from 'react'
import './TaskElement.scss'
import '../main.scss'

class TaskElement extends Component {
    state = {
        isCompleted: false,
        isEdited: false,
        text: ''
    }

    render() {
        const normalmode = (!this.state.isCompleted && !this.state.isEdited) ?
            <React.Fragment>
                <button className="btn" onClick={this.completeTask}>Завершить</button>
                <button className="btn" onClick={this.editTask}>Редактировать</button>
                <button className="btn" onClick={this.deleteTask}>Удалить</button>
            </React.Fragment> : null
        const editmode = this.state.isEdited ?
            <React.Fragment>
                <input type="text" className="text-input task-element__edit-input" value={this.state.text} onChange={this.changeInput} />
                <button className="btn" onClick={this.editTask}>Закончить</button>
            </React.Fragment> : null
        return (
            <div className="center-align task-element">
                <div className={this.state.isCompleted ? "task-element__text task-element__text--completed" : "task-element__text"}>{this.props.task}</div>
                {normalmode}
                {editmode}
            </div>
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

export default TaskElement