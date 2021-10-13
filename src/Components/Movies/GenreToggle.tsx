import React from 'react';
import { genres } from '../../constants';

interface Props {
    selected: string;
    setGenre: (genre: string) => void
}

export default function GenreToggle({ selected, setGenre }: Props) {
    return (
        <ul className="genre-list">
            {genres.map((genre, i) => (
                    <li key={i} className={genre === selected ? 'selected' : ''} onClick={() => setGenre(genre)}>
                        {genre}
                    </li>
                )
            )}
        </ul>
    )
}
