import React, { Component } from 'react'
import TaskElement from '../TaskElement';
import './TaskList.scss'

class TaskList extends Component {
    render() {
        return (
            <div className="task-list">
                {this.props.tasks.map(elem => <TaskElement key={elem.id} id={elem.id} task={elem.task} editTask={this.props.editTask} deleteTask={this.props.deleteTask} />)}
            </div>
        )
    }
}

export default TaskList