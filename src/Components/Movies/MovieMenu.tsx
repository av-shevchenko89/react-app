import React, { useState } from 'react';
import moreIcon from '../../assets/images/more.svg';

interface Props {
    onEdit: () => void;
    onDelete: () => void;
}

export function MovieMenu(props: Props) {
    const [ menu, setMenu ] = useState(false);
    const { onEdit, onDelete } = props;

    if (menu) {
        return (
            <div className="menu">
                <span onClick={() => setMenu(false)}>x</span>
                <ul>
                    <li onClick={() => {setMenu(false); onEdit()}}>Edit</li>
                    <li onClick={() => {setMenu(false); onDelete()}}>Delete</li>
                </ul>
            </div>
        )
    } else {
        return (
            <img src={moreIcon} alt="more" className="more" onClick={() => setMenu(true)} />
        )
    }
}
