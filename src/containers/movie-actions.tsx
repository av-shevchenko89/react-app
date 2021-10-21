import React from 'react';
import { Filter, GenreToggle, Sorter } from '../components';

import './movie-actions.scss';

interface Props {
    genre: string;
    setGenre: (genre: string) => void;
    sortBy: string;
    sort: (sortBy: Filter) => void;
}

export const MovieActions = ({ genre, setGenre, sortBy, sort }: Props) => (
    <div className="actions">
        <GenreToggle selected={genre} setGenre={setGenre} />
        <Sorter sortBy={sortBy} sort={sort} />
    </div>
)
