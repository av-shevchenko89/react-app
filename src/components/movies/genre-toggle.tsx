import _ from 'lodash';
import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Genres } from '../../constants';
import { FilterContext } from '../../pages/search-page';

export function GenreToggle() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {changeParams} = useContext(FilterContext);

  const selected = searchParams.get('genre') || 'all';

  const handleSelect = (genre: string) => {
    changeParams({genre});
  }

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
