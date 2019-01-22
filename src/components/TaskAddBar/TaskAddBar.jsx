import React, { Component } from 'react'

class TaskAddBar extends Component {
    state = {
        text: ''
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.changeInput} />
                <button onClick={this.addTask}>Добавить</button>
                <button onClick={this.props.clearAll}>Удалить все</button>
            </div>
        )
    }

    changeInput = event => this.setState({ text: event.target.value })

    addTask = () => this.props.addTask({ id: Math.floor(Math.random() * 10000), task: this.state.text })
}

export default TaskAddBar