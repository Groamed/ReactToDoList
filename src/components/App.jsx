import React, { Component } from 'react'
import TaskAddBar from './TaskAddBar/TaskAddBar'
import TaskList from './TaskList/TaskList'

class App extends Component {
    state = {
        tasks: []
    }
    addTask = this.addTask.bind(this)
    clearAll = this.clearAll.bind(this)
    updateTasks = this.updateTasks.bind(this)

    render() {
        return (
            <div>
                <TaskAddBar addTask={this.addTask} clearAll={this.clearAll} />
                <TaskList tasks={this.state.tasks} updateTasks={this.updateTasks} />
            </div>
        )
    }

    addTask(task) {
        this.setState(prevState => {
            return { tasks: prevState.tasks.concat(task) }
        })
    }

    updateTasks(tasks) {
        this.setState(prevState => {
            return { tasks: tasks }
        })
    }

    clearAll() {
        this.setState(prevState => {
            return { tasks: [] }
        })
    }
}

export default App