import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskElement from '../TaskElement'
import { Grid } from '@material-ui/core';

class TaskList extends Component {
    render() {
        return (
            <Grid container justify="space-around" alignItems="center" wrap="wrap">
                {this.props.tasks.map(elem => <TaskElement key={elem.id} id={elem.id} task={elem.task} />)}
            </Grid>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default TaskList