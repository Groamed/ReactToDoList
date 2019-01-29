import React, { Component } from 'react'
import ModalHOCStyles from './ModalHOC.module.scss'
import MainStyles from '../main.module.scss'

function ModalHOC(Element) {
    return class Modal extends Component {
        render() {
            const { isOpen, closeModal, ...rest } = this.props
            return (
                <div className={ModalHOCStyles.modal}>
                    <Element {...rest} />
                    <input type="button" value="Close" className={`${ModalHOCStyles.closeBtn} ${MainStyles.btn}`} onClick={closeModal} />
                </div>
            )
        }
    }
}

export default ModalHOC