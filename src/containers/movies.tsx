import React from 'react';
import { MovieActions } from '../components';
import { Movie } from '../movie';
import { MovieList } from './movie-list';

import './movies.scss';

interface Props {
  movies: Movie[];
  totalAmount: number;
  onEdit: (movie: Movie) => void;
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
}

export function Movies(props: Props) {
  const { onEdit, onDelete, movies, totalAmount, onSelect } = props;

  return (
    <main>
      <MovieActions />

      <p className="movie-num">
        <b>{totalAmount}</b> movies found
      </p>

      <MovieList movies={movies} onEdit={onEdit} onDelete={onDelete} onSelect={onSelect} />
    </main>
  );
}
