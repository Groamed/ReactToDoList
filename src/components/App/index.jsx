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

    state = {
        day: '',
        tasks: [],
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