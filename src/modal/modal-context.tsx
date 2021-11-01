import React, { memo } from 'react';
import { Modal } from './modal';
import { useModal } from '../hooks';

export const ModalContext = React.createContext(null);

export const ModalProvider: React.FC<{}> = memo(({ children }) => {
    const { isOpened, content, openModal, closeModal } = useModal();

    return (
        <ModalContext.Provider value={{ isOpened, content, openModal, closeModal }}>
            <Modal />
            {children}
        </ModalContext.Provider>
    );
});
