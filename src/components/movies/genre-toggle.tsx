import React, { useEffect, useState } from 'react';
import { Genres } from '../../constants';

export function GenreToggle() {
const [selected, setGenre] = useState('');

useEffect(() => {

}, [selected]);

    return (
        <ul className="genre-list">
            {Genres.map((genre, i) => (
                    <li key={i}
                        className={genre.value === selected ? 'selected' : ''}
                        onClick={() => setGenre(genre.value)}>
                        {genre.label}
                    </li>
                )
            )}
        </ul>
    )
}
