import React, { Component } from 'react'

function DropDownElem(Element) {
    return class DropDownElem extends Component {
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
            const { head, ...rest } = this.props
            return (
                <React.Fragment>
                    <div onClick={this.openModal}>
                        {head}
                    </div>
                    {this.state.isOpen && <Element isOpen={this.state.isOpen} closeModal={this.closeModal} {...rest} />}
                </React.Fragment>
            )
        }
    }
}


export default DropDownElem