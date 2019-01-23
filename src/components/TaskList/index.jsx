import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskElement from '../TaskElement'
import TaskListStyles from './TaskList.module.scss'

class TaskList extends Component {
    render() {
        return (
            <div className={TaskListStyles.taskList}>
                {this.props.tasks.map(elem => <TaskElement key={elem.id} id={elem.id} task={elem.task} editTask={this.props.editTask} deleteTask={this.props.deleteTask} />)}
            </div>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    editTask: PropTypes.func,
    deleteTask: PropTypes.func
}

export default TaskList