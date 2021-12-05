import _ from 'lodash';
import React, { useEffect, useState } from 'react';

import './genre-toggle.css';

const Genres = [
  { value: 'all', label: 'All' },
  { value: 'Drama', label: 'Drama' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Action', label: 'Action' },
  { value: 'Horror', label: 'Horror' },
];

interface Props {
  genre: 'all' | 'Drama' | 'Comedy' | 'Action' | 'Horror';
}

export function GenreToggle({ genre }: Props) {
  const [selected, setSelected] = useState('all');

  useEffect(() => {
    setSelected(genre);
  }, [genre]);

  return (
    <ul className="genre-list">
      {Genres.map((genre, i) => (
        <li
          key={i}
          className={genre.value.toLowerCase() === selected.toLowerCase() ? 'selected' : ''}
          onClick={() => setSelected(genre.value)}
        >
          {genre.label}
        </li>
      ))}
    </ul>
  );
}
