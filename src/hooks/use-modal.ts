import { useState } from 'react';

export const useModal = () => {
    const [ isOpened, setIsOpened ] = useState(false);
    const [ content, setContent ] = useState(null);

    const openModal = (content: any = null) => {
        setIsOpened(true);
        if (content) setContent(content);
    };

    const closeModal = () => {
        setIsOpened(false);
    }

    return { isOpened, content, openModal, closeModal };
};
