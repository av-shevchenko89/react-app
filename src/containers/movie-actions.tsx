import React from 'react';
import { GenreToggle, Sorter } from '../components';

import './movie-actions.scss';

export const MovieActions = () => (
    <div className="actions">
        <GenreToggle />
        <Sorter />
    </div>
)
