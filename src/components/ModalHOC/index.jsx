import React, { Component } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

function ModalHOC(Element) {
    return class ModalHOC extends Component {
        render() {
            const { isOpen, closeModal, ...rest } = this.props
            return (
                <Dialog open={isOpen} onClose={closeModal}>
                    <DialogTitle>Просмотр заданий</DialogTitle>
                    <DialogContent>
                        <Element {...rest} />
                    </DialogContent>
                </Dialog>
            )
        }
    }
}

export default ModalHOC