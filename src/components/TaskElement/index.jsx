import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FuncsContext } from '../storage';
import { TextField, Button, Typography } from '@material-ui/core';

class TaskElement extends Component {
    state = {
        isCompleted: false,
        isEdited: false
    }

    editInput = null

    render() {
        const normalmode = (!this.state.isCompleted && !this.state.isEdited) ?
            <React.Fragment>
                <Button color="secondary" onClick={this.completeTask}>Завершить</Button>
                <Button color="secondary" onClick={this.editTask}>Редактировать</Button>
                <Button color="secondary" onClick={this.deleteTask}>Удалить</Button>
            </React.Fragment>
            : null
        const editmode = this.state.isEdited ?
            <React.Fragment>
                <TextField variant="outlined"
                    label="Редактирование"
                    placeholder="Введите значение"
                    margin="dense"
                    inputRef={el => this.editInput = el}
                />
                <Button color="secondary" onClick={this.editTask}>Закончить</Button>
            </React.Fragment> : null
        return (
            <div>
                <Typography variant="h5">{this.props.task}</Typography>
                {normalmode}
                {editmode}
            </div>
        )
    }

    completeTask = () => { this.setState({ isCompleted: true }) }

    editTask = () => {
        this.setState(prevState => {
            if (prevState.isEdited) {
                this.context.editTask(this.props.id, this.editInput.value)
                this.editInput.value = ''
            }
            return { isEdited: !prevState.isEdited }
        })
    }

    deleteTask = () => { this.context.deleteTask(this.props.id) }
}

TaskElement.propTypes = {
    id: PropTypes.number,
    task: PropTypes.string
}

TaskElement.contextType = FuncsContext

export default TaskElement