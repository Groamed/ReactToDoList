import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Menu, Grid } from '@material-ui/core';

class DropDown extends Component {
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    state = {
        anchorEl: null
    }

    render() {
        return (
            <Grid item xs={3}>
                <Button color="secondary" variant="contained" onClick={this.handleClick}>View DayTasks</Button>
                <Menu
                    color="secondary"
                    disableAutoFocus
                    getContentAnchorEl={null}
                    anchorEl={this.state.anchorEl}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}>
                    {this.props.elemList}
                </Menu>
            </Grid>
        )
    }
}

export default DropDown