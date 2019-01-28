import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TaskElement from '../TaskElement'
import TaskListStyles from './TaskList.module.scss'
import { TasksContext } from '../storage';

class TaskList extends Component {
    render() {
        return (
            <TransitionGroup className={`${TaskListStyles.taskList}`}>
                {this.context.tasks.map(elem =>
                    <CSSTransition key={elem.id} timeout={300} classNames={{ enter: `${TaskListStyles['listElem-enter']}`, enterActive: `${TaskListStyles['listElem-enter-active']}`, exit: `${TaskListStyles['listElem-exit']}`, exitActive: `${TaskListStyles['listElem-exit-active']}` }}>
                        <TaskElement key={elem.id} id={elem.id} task={elem.task} />
                    </CSSTransition>)}
            </TransitionGroup>
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