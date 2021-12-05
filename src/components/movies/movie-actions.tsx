import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { GenreToggle } from './genre-toggle';
import { Sorter } from './sorter';

import './movie-actions.scss';

export const MovieActions = () => {
  const [searchParams] = useSearchParams();

  const genre = searchParams.get('genre') ? searchParams.get('genre') : 'all';
  const sortBy = searchParams.get('sortBy') ? searchParams.get('sortBy') : 'release_date';

  return (
    <div className="actions">
      <GenreToggle genre={genre} />
      <Sorter sortBy={sortBy} />
    </div>
  );
};
