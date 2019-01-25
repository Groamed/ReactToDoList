import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskElement from '../TaskElement'
import TaskListStyles from './TaskList.module.scss'
import { TasksContext } from '../storage';

class TaskList extends Component {
    render() {
        return (
            <div className={TaskListStyles.taskList}>
                {this.context.tasks.map(elem => <TaskElement key={elem.id} id={elem.id} task={elem.task} />)}
            </div>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    editTask: PropTypes.func,
    deleteTask: PropTypes.func
}

TaskList.contextType = TasksContext

export default TaskList