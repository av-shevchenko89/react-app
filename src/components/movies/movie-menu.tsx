import React, { useState } from 'react';
import moreIcon from '../../assets/images/more.svg';

interface Props {
    onEdit: () => void;
    onDelete: () => void;
}

export function MovieMenu(props: Props) {
    const [ menu, setMenu ] = useState(false);
    const { onEdit, onDelete } = props;

    const toggle = (e: any, open: boolean) => {
        e.stopPropagation();
        setMenu(open);
    }

    if (menu) {
        return (
            <div className="menu">
                <span onClick={e => toggle(e, false)}>x</span>
                <ul>
                    <li onClick={e => {toggle(e, false); onEdit()}}>Edit</li>
                    <li onClick={e => {toggle(e, false); onDelete()}}>Delete</li>
                </ul>
            </div>
        )
    } else {
        return (
            <img src={moreIcon} alt="more" className="more" onClick={e => toggle(e, true)} />
        )
    }
}
