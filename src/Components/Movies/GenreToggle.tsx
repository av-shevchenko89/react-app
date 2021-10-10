import React, { useState } from 'react';

export default function GenreToggle() {
    const genres = [ 'all', 'documentary', 'comedy', 'horror', 'crime' ];
    const [ selected, setGenre ] = useState('all');

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
