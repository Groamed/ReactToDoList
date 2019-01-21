import React, { Component } from 'react'

class TaskElement extends Component {
    state = {
        isCompleted: false,
        isEdited: false
    }
    completeTask = this.completeTask.bind(this)
    editTask = this.editTask.bind(this)
    deleteTask = this.deleteTask.bind(this)

    render() {
        const complete = (!this.state.isCompleted && !this.state.isEdited) &&
            <button onClick={this.completeTask} value='Завершить' /> && <button onClick={this.editTask} value='Редактировать' />
        const editmode = this.state.isEdited && <input type='text' /> && <button onClick={this.editTask} value='Закончить' />
        const completed = this.state.isCompleted && <p>Завершено</p>
        return (
            <div>
                {this.props.task}
                {editmode}
                {completed}
            </div>
        )
    }

    completeTask() {
        this.setState(prevState => { isCompleted: !prevState })
    }

    editTask() {

    }

    deleteTask() {

    }
}

export default TaskElement