import React, { Component } from 'react'
import './DropDown.scss'
import MainStyles from '../main.module.scss'
import '../grid.scss'

class DropDown extends Component {
    changeState = () => {
        this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
    }

    state = {
        isOpen: false
    }

    render() {
        return (
            <div className={'grid-nav'} style={{ display: 'inline-block' }}>
                <div className={`${MainStyles.centerAlign} header-style`} onClick={this.changeState}>
                    {this.props.renderHead()}
                    <div className={this.state.isOpen ? 'opened' : 'closed'}>
                        <span className={`left`} />
                        <span className={`right`} />
                    </div>
                </div>
                <div className={`${MainStyles.centerAlign} elem-styles`}>
                    {this.state.isOpen && this.props.renderBody()}
                </div>
            </div>
        )
    }
}

export default DropDown