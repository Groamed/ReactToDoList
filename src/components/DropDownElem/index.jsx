import React, { Component } from 'react'
import { MenuItem } from '@material-ui/core';

class DropDownElem extends Component {
    closeModal = () => {
        this.setState({ isOpen: false })
    }

    openModal = () => {
        this.setState({ isOpen: true })
    }

    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <MenuItem onClick={this.state.isOpen ? null : this.openModal} color="secondary">
                    {this.props.name}
                    {this.state.isOpen && this.props.renderModal(this.state.isOpen, this.closeModal)}
                </MenuItem>
            </React.Fragment>
        )
    }
}


export default DropDownElem