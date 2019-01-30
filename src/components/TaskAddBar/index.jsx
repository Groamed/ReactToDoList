import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, withStyles } from '@material-ui/core';

const style = theme => ({
    butGrad: {
        background: 'linear-gradient(45deg, rgba(234,18,18,1) 0%, rgba(212,232,0,1) 100%)',
        margin: '5px',
    }
})

class TaskAddBar extends Component {
    taskInput = null
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <TextField
                    variant="outlined"
                    label="Введите задание"
                    placeholder="Добавьте новое задание"
                    margin="dense"
                    inputRef={el => this.taskInput = el}
                    onKeyDown={this.pressEnter}
                    style={{ width: '50%' }}
                />
                <Button className={classes.butGrad} variant="contained" onClick={this.addTask}>Добавить</Button>
                <Button className={classes.butGrad} variant="contained" onClick={this.props.clearAll}>Удалить все</Button>
            </React.Fragment>
        )
    }

    pressEnter = event => event.key === 'Enter' ? this.addTask() : null

    addTask = () => {
        this.props.addTask({ id: Math.floor(Math.random() * 10000), task: this.taskInput.value })
        this.taskInput.value = ''
    }
}

TaskAddBar.propTypes = {
    addTask: PropTypes.func,
    clearAll: PropTypes.func
}

export default withStyles(style)(TaskAddBar)