import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import AddTask from '../../redux/containers/AddTask';
import FilteredTaskList from '../../redux/containers/FilteredTaskList';

class App extends Component {
    render() {
        return (
            <Grid item xs container justify="center" alignItems="center" wrap="wrap">
                <AddTask day={this.props.day} />
                <FilteredTaskList day={this.props.day} />
            </Grid>
        )
    }
}

export default App