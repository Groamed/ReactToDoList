import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button } from '@material-ui/core';

class TaskAddBar extends Component {
    taskInput = null

    render() {
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
                <Button color="secondary" variant="contained" onClick={this.addTask}>Добавить</Button>
                <Button color="secondary" variant="contained" onClick={this.props.clearAll}>Удалить все</Button>
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

export default TaskAddBar