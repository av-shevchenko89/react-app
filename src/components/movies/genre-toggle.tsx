import React from 'react';
import { Genres } from '../../constants';

interface Props {
    selected: string;
    setGenre: (genre: string) => void
}

export function GenreToggle({ selected, setGenre }: Props) {
    return (
        <ul className="genre-list">
            {Genres.map((genre, i) => (
                    <li key={i} className={genre === selected ? 'selected' : ''} onClick={() => setGenre(genre)}>
                        {genre}
                    </li>
                )
            )}
        </ul>
    )
}
