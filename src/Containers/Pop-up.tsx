import React from 'react';
import './Pop-up.scss';

interface PopupProps {
    onClose: () => void;
    children: any;
}

export const PopUp: React.FC<PopupProps> = props => (
    <div className="overlay">
        <div className="popup">
            <span className="close" onClick={props.onClose}>x</span>
            {props.children}
        </div>
    </div>
);
