import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class GalleryModal extends Component {
    constructor() {
        // @ts-ignore
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount=()=> {
        document.body.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnMount=()=> {
        document.body.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e: { keyCode: number; }) {
        if (e.keyCode === 27)
            // @ts-ignore
            this.props.closeModal();
        // @ts-ignore
        if (e.keyCode === 37 && this.props.hasPrev)
            // @ts-ignore
            this.props.findPrev();
        // @ts-ignore
        if (e.keyCode === 39 && this.props.hasNext)
            // @ts-ignore
            this.props.findNext();
    }
    render () {
        // @ts-ignore
        const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
        if (!src) {
            return null;
        }
        // @ts-ignore
        return (
            <div>
                <Modal isOpen={!!src} toggle={closeModal} className="modalGallery">
                    <ModalBody>
                        <div className="d-flex justify-content-between align-items-center h-100 w-100">
                            <div className="">
                                {hasPrev && <a href="#" className='modal-prev p-1' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                            </div>
                            <div className="">
                                <img src={src} className="img-fluid" />
                            </div>
                            <div className="">
                                {hasNext && <a href="#" className='modal-next p-1' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default GalleryModal;