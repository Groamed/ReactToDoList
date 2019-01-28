import React, { Component } from 'react'
import TaskAddBar from '../TaskAddBar'
import TaskList from '../TaskList'
import AppStyles from './App.module.scss'
import { TasksContext } from '../storage'
import '../grid.scss'

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
        if (props.match.params.day !== state.day) {
            props.updateDaysTasks(state.day, state.tasks)
            return { day: props.match.params.day, tasks: props.days[props.match.params.day] }
        }
        return null
    }

    state = {
        day: this.props.match.params.day,
        tasks: this.props.days[this.props.match.params.day],
        funcs: {
            addTask: this.addTask,
            editTask: this.editTask,
            deleteTask: this.deleteTask,
            clearAll: this.clearAll
        }
    }

    render() {
        return (
            <div className={`${AppStyles.mainBlock} grid-main`}>
                <TasksContext.Provider value={this.state}>
                    <TaskAddBar />
                    <TaskList />
                </TasksContext.Provider>
            </div >
        )
    }
}

export default App