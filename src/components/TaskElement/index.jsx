import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, Typography, Grid, Card, CardActionArea, CardContent, CardActions } from '@material-ui/core'

class TaskElement extends Component {
    editInput = null

    render() {
        const normalmode = (!this.props.completed && !this.props.edited) ?
            <CardActions>
                <Button onClick={this.completeTask}>Завершить</Button>
                <Button onClick={this.editTask}>Редактировать</Button>
                <Button onClick={this.deleteTask}>Удалить</Button>
            </CardActions> : null
        const editmode = this.props.edited ?
            <CardActions>
                <TextField variant="outlined"
                    label="Редактирование"
                    placeholder="Введите значение"
                    margin="dense"
                    inputRef={el => this.editInput = el}
                />
                <Button onClick={this.editTask}>Закончить</Button>
            </CardActions> : null
        return (
            <Grid item>
                <Card style={{ maxWidth: '400px' }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h6">Задание на день</Typography>
                            <Typography variant="body1" style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>{this.props.task}</Typography>
                        </CardContent>
                    </CardActionArea>
                    {normalmode}
                    {editmode}
                </Card>
            </Grid>
        )
    }

    completeTask = () => { this.props.completeTask() }

    editTask = () => {
        if (this.props.edited) {
            this.props.endEditTask(this.editInput.value)
            this.editInput.value = ''
        } else {
            this.props.startEditTask()
        }
    }

    deleteTask = () => { this.props.deleteTask() }
}

TaskElement.propTypes = {
    id: PropTypes.number,
    task: PropTypes.string
}

export default TaskElement