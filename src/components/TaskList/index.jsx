import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskElement from '../TaskElement'
import { Grid, Slide } from '@material-ui/core';
import { TransitionGroup } from 'react-transition-group';
import './cssTransition.scss'

class TaskList extends Component {
    render() {
        return (
            <Grid container justify="space-around" alignItems="center" wrap="wrap" spacing={8}>
                <TransitionGroup component={null}>
                    {this.props.tasks.map(elem =>
                        <Slide direction="right" key={elem.id} timeout={500}>
                            <TaskElement id={elem.id} task={elem.task} />
                        </Slide>)}
                </TransitionGroup>
            </Grid>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default TaskList