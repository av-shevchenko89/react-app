import React from 'react';
import './Pop-up.scss';

interface PopupProps {
    onClose: () => void;
    children: any;
    isOpened: boolean;
}

export const PopUp: React.FC<PopupProps> = props => {
    if (props.isOpened) {
        return (
            <div className="overlay">
                <div className="popup">
                    <span className="close" onClick={props.onClose}>x</span>
                    {props.children}
                </div>
            </div>
        )
    }

    return <></>
};
