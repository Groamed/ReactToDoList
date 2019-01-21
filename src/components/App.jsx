import React, { Component } from 'react'
import TaskAddBar from './TaskAddBar/TaskAddBar'
import TaskList from './TaskList/TaskList'

class App extends Component {
    tasks = {}

    render() {
        return (
            <div>
                <TaskAddBar addTask={this.addTask.bind(this)} />
                <TaskList tasks={this.tasks} />
            </div>
        )
    }

    addTask(task) {
        this.tasks[task] = task
        console.log(this.tasks)
    }
}

export default App