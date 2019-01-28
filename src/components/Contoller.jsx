import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import App from './App'
import MainStyles from './main.module.scss'
import DropDown from './DropDown'
import './grid.scss'

class Controller extends Component {
    updateDaysTasks = (day, tasks) => { this.setState(prevState => prevState.days[day] = tasks) }

    state = {
        days: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        },

    }

    renderHelper = props => <App {...props} days={this.state.days} updateDaysTasks={this.updateDaysTasks} />

    mainPage = () => <div className={`${MainStyles.text} ${MainStyles.centerAlign}`} style={{ width: '100%' }}>Main page: Select the day</div>

    render() {
        const dayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        return (
            <Router>
                <div className={'grid'}>
                    <div className={`${MainStyles.centerAlign} grid-head`}>
                        <Route exact path="/" component={this.mainPage} />
                        {dayArr.map(elem => <NavLink className={MainStyles.link} activeClassName={MainStyles.activeLink} key={elem.toLowerCase()} to={`/${elem.toLowerCase()}`}>{elem}</NavLink>)}
                    </div>
                    <Route path="/:day" component={this.renderHelper} />
                    <DropDown renderHead={() => <div>View DayTasks</div>} renderBody={() => <div>{dayArr.map(elem => <div>{elem}</div>)}</div>} />
                </div>
            </Router>
        )
    }
}

export default Controller