import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import App from './App'
import DropDown from './DropDown'
import ModalHOC from './ModalHOC';
import DropDownElem from './DropDownElem';
import { Typography, Link, Grid } from '@material-ui/core';

const ModalApp = ModalHOC(App)
const MyLink = props => <NavLink {...props} />

class Controller extends Component {
    renderHelper = ({ match: { params: { day } } }) => <App day={day} />

    mainPage = () =>
        <Grid container justify="center">
            <Typography variant="h3">Select the day</Typography>
        </Grid>

    render() {
        const dayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        return (
            <Router>
                <React.Fragment>
                    <Grid container justify="center" alignItems="center" wrap="wrap">
                        <Route exact path="/" component={this.mainPage} />
                        <Grid item xs container justify="center" alignItems="center" spacing={8}>
                            {dayArr.map(elem =>
                                <Grid item key={elem.toLowerCase()}>
                                    <Link
                                        to={`/${elem.toLowerCase()}`}
                                        component={MyLink}
                                        variant="h4"
                                        color="primary">
                                        {elem}
                                    </Link>
                                </Grid>)}
                        </Grid>
                        <DropDown
                            elemList={dayArr.map(elem =>
                                <DropDownElem
                                    name={elem}
                                    key={elem.toLowerCase()}
                                    renderModal={() => <ModalApp day={elem.toLowerCase()} />}
                                />)}
                        />
                    </Grid>
                    <Grid container justify="space-around" alignItems="center" wrap="wrap">
                        <Route path="/:day" component={this.renderHelper} />
                    </Grid>
                </React.Fragment>
            </Router >
        )
    }
}

export default Controller