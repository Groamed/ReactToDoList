import React, { Component } from 'react'
import TaskAddBar from './TaskAddBar'
import TaskList from './TaskList'
import './App.scss'

class App extends Component {
    state = {
        tasks: []
    }

    render() {
        return (
            <div className="main-block">
                <TaskAddBar addTask={this.addTask} clearAll={this.clearAll} />
                <TaskList tasks={this.state.tasks} editTask={this.editTask} deleteTask={this.deleteTask} />
            </div>
        )
    }

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
}

export default App