import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import App from './App'
import MainStyles from './main.module.scss'

class Controller extends Component {
    state = {
        days: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        }
    }

    render() {
        const dayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        return (
            <Router>
                <>
                    <div className={MainStyles.centerAlign} style={{ width: '100%' }}>
                        <Route exact path="/" render={() => <div className={`${MainStyles.text} ${MainStyles.centerAlign}`} style={{ width: '100%' }}>Main page: Select the day</div>} />
                        {dayArr.map(elem => <NavLink className={MainStyles.link} activeClassName={MainStyles.activeLink} to={`/${elem.toLowerCase()}`}>{elem}</NavLink>)}
                    </div>
                    <Route path="/:day" render={props => <App {...props} dayTasks={this.state.days} updateDaysTasks={this.updateDaysTasks} />} />
                </>
            </Router>
        )
    }

    updateDaysTasks = (day, tasks) => { this.setState(prevState => prevState.days[day] = tasks) }
}

export default Controller