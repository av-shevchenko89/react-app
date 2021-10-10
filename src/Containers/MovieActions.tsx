import React from 'react';
import GenreToggle from '../Components/Movies/GenreToggle';
import Sorter from '../Components/Movies/Sorter';

import './MovieActions.scss';

export const MovieActions = () => (
    <div className="actions">
        <GenreToggle />
        <Sorter />
    </div>
)
