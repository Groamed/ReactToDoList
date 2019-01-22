import React, { Component } from 'react'
import TaskElement from '../TaskElement/TaskElement';

class TaskList extends Component {
    editTask = this.editTask.bind(this)
    deleteTask = this.deleteTask.bind(this)

    render() {
        console.log(this.props)
        const list = this.props.tasks.map(elem => { return <TaskElement key={elem.id} id={elem.id} task={elem.task} editTask={this.editTask} deleteTask={this.deleteTask} /> })
        return (
            <div>
                {list}
            </div>
        )
    }

    editTask(id, newTask) {
        this.props.updateTasks(this.props.tasks.map(elem => {
            if (elem.id === id) {
                elem.task = newTask
                return elem
            } else {
                return elem
            }
        }))
    }

    deleteTask(id) {
        this.props.updateTasks(this.props.tasks.filter(elem => id !== elem.id))
    }
}

export default TaskList