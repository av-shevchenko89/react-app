import _ from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { Genres } from '../../constants';
import { FilterContext } from '../../pages/Search';

import './genre-toggle.scss';

interface Props {
  genre: string
}

export function GenreToggle({ genre }: Props) {
  const [selected, setSelected] = useState('all');
  const { changeParams } = useContext(FilterContext);

  useEffect(() => {
    setSelected(genre);
  }, [genre]);

  const handleSelect = (genre: string) => {
    changeParams({ genre });
  };

  return (
    <ul className="genre-list">
      {Genres.map((genre, i) => (
        <li
          key={i}
          className={genre.value.toLowerCase() === selected.toLowerCase() ? 'selected' : ''}
          onClick={() => handleSelect(genre.value)}
        >
          {genre.label}
        </li>
      ))}
    </ul>
  );
}
