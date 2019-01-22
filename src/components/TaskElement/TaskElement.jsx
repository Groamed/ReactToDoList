import React, { Component } from 'react'

class TaskElement extends Component {
    state = {
        isCompleted: false,
        isEdited: false,
        text: ''
    }

    render() {
        const normalmode = (!this.state.isCompleted && !this.state.isEdited) &&
            <span><button onClick={this.completeTask}>Завершить</button><button onClick={this.editTask}>Редактировать</button><button onClick={this.deleteTask}>Удалить</button></span>
        const editmode = this.state.isEdited && <span><input type='text' value={this.state.text} onChange={this.changeInput} /><button onClick={this.editTask}>Закончить</button></span>
        const completed = this.state.isCompleted && <span>Завершено: </span>
        return (
            <div>
                {completed}
                {this.props.task}
                {normalmode}
                {editmode}
            </div>
        )
    }

    completeTask = () => {
        this.setState(prevState => { return { isCompleted: true } })
    }

    editTask = () => {
        this.setState(prevState => {
            if (prevState.isEdited) {
                this.props.editTask(this.props.id, this.state.text)
            }
            return { isEdited: !prevState.isEdited }
        })
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.id)
    }

    changeInput = event => this.setState({ text: event.target.value })
}

export default TaskElement