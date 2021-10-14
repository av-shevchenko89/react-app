import React from 'react';
import { Btn } from '../shared';


interface Props {
    onDelete: () => void;
}

export function DeleteModal({ onDelete }: Props) {
    return (
        <div className="delete">
            <h1>Delete movie</h1>
            <p>Are you sure you want to delete this movie?</p>
            <Btn label="Confirm" onClick={onDelete} />
        </div>
    )
}