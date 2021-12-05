import React from 'react';
import { Btn } from '../shared';


interface Props {
    id: string;
    onDelete: (id: string) => void;
}

export function DeleteModal({ id, onDelete }: Props) {
    return (
        <div className="delete">
            <h1>Delete movie</h1>
            <p>Are you sure you want to delete this movie?</p>
            <Btn label="Confirm" type="solid" onClick={() => onDelete(id)} />
        </div>
    )
}
