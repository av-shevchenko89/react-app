import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from './modal-context';
import './modal.scss';

export const Modal = () => {
    const { isOpened, content, closeModal } = useContext(ModalContext);

    return isOpened ? ReactDOM.createPortal(
        <>
            <div className="overlay">
                <div className="modal">
                    <span className="close" onClick={() => closeModal()}>x</span>
                    {content}
                </div>
            </div>
        </>, document.body
    ) : null;
}
