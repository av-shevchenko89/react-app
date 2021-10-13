import React from 'react';
import GenreToggle from '../Components/Movies/GenreToggle';
import Sorter from '../Components/Movies/Sorter';

import './MovieActions.scss';

interface Props {
    genre: string;
    setGenre: (genre: string) => void;
    sortBy: string;
    sort: (sortBy: string) => void;
}

export const MovieActions = ({ genre, setGenre, sortBy, sort }: Props) => (
    <div className="actions">
        <GenreToggle selected={genre} setGenre={setGenre} />
        <Sorter sortBy={sortBy} sort={sort} />
    </div>
)
