import React from 'react'
import { MenuItem } from '@material-ui/core';
import { connect } from 'react-redux'
import { openModal } from '../../redux/actions'

const mapStateToProps = state => ({
    ...state.modalRuler
})

const mapDispatchToProps = dispatch => ({
    openModal: day => dispatch(openModal(day))
})

const DropDownElem = props => {
    return (
        <React.Fragment>
            <MenuItem onClick={props.opened ? null : () => props.openModal(props.name.toLowerCase())} color="secondary">
                {props.name}
                {props.opened && props.renderModal()}
            </MenuItem>
        </React.Fragment>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(DropDownElem)