import React, { Component } from 'react'

class TaskAddBar extends Component {
    addTask = this.addTask.bind(this)

    render() {
        return (
            <div>
                <input type="text" className='task' />
                <button onClick={this.addTask}>Добавить</button>
            </div>
        )
    }

    addTask() {
        this.props.addTask(document.querySelector('.task').value)
    }
}

export default TaskAddBar