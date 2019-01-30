import React, { Component } from 'react'
import TaskAddBar from '../TaskAddBar'
import TaskList from '../TaskList'
import { FuncsContext } from '../storage'
import { Grid } from '@material-ui/core';

class App extends Component {
    addTask = (task) => {
        this.setState(prevState => ({ tasks: [...prevState.tasks, task] }))
    }

    editTask = (id, newTask) => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.map(elem => {
                    if (elem.id === id) {
                        elem.task = newTask
                    }
                    return elem
                })
            }
        })
    }

    deleteTask = (id) => {
        this.setState(prevState => { return { tasks: prevState.tasks.filter(elem => id !== elem.id) } })
    }

    clearAll = () => {
        this.setState({ tasks: [] })
    }

    static getDerivedStateFromProps(props, state) {
        if (props.day !== state.day) {
            props.updateDaysTasks(state.day, state.tasks)
            return {
                day: props.day,
                tasks: props.days[props.day]
            }
        }
        return null
    }

    componentDidMount() {
        this.setState({
            day: this.props.day,
            tasks: this.props.days[this.props.day]
        })
    }

    componentWillUnmount() {
        this.props.updateDaysTasks(this.state.day, this.state.tasks)
    }

    state = {
        day: '',
        tasks: []
    }

    funcs = {
        editTask: this.editTask,
        deleteTask: this.deleteTask
    }

    render() {
        return (
            <Grid item xs container justify="center" alignItems="center" wrap="wrap">
                <FuncsContext.Provider value={this.funcs}>
                    <TaskAddBar addTask={this.addTask} clearAll={this.clearAll} />
                    <TaskList tasks={this.state.tasks} />
                </FuncsContext.Provider>
            </Grid>
        )
    }
}

export default App