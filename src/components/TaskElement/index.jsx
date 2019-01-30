import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FuncsContext } from '../storage'
import { TextField, Button, Typography, Grid, Card, CardActionArea, CardContent, CardActions } from '@material-ui/core'

class TaskElement extends Component {
    state = {
        isCompleted: false,
        isEdited: false
    }

    editInput = null

    render() {
        const normalmode = (!this.state.isCompleted && !this.state.isEdited) ?
            <React.Fragment>
                <Button onClick={this.completeTask}>Завершить</Button>
                <Button onClick={this.editTask}>Редактировать</Button>
                <Button onClick={this.deleteTask}>Удалить</Button>
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
                <Button onClick={this.editTask}>Закончить</Button>
            </React.Fragment> : null
        return (
            <Grid item>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="title">Задание на день</Typography>
                            <Typography variant="body1">{this.props.task}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {normalmode}
                        {editmode}
                    </CardActions>
                </Card>
            </Grid>
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