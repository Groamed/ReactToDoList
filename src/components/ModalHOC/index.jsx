import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { connect } from 'react-redux'
import { closeModal } from '../../redux/actions'

const mapStateToProps = state => ({
    ...state.modalRuler
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    closeModal: (day = ownProps.day) => dispatch(closeModal(day))
})

function ModalHOC(Element) {
    return connect(mapStateToProps, mapDispatchToProps)(({ day, opened, closeModal, ...rest }) => {
        return (
            <Dialog open={opened} onClose={() => closeModal(day)}>
                <DialogTitle>Просмотр заданий</DialogTitle>
                <DialogContent>
                    <Element day={day} {...rest} />
                </DialogContent>
            </Dialog>
        )
    })
}

export default ModalHOC