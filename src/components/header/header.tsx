import React from 'react';
import { Nav } from './nav';
import { Search } from './search';
import { Title } from '../../shared';

import './header.scss';
import { MovieDetails } from './movie-details';
import { Movie } from '../../movie';

interface Props {
  details: Movie;
  searchQuery: string;
  toggleDetails: () => void;
}

export function Header({ details, toggleDetails, searchQuery }: Props) {
  if (details) {
    return (
      <header>
        <MovieDetails movie={details} />
      </header>
    );
  }

  return (
    <header>
      <Nav />
      <Title text="Find your movie" />
      <Search searchQuery={searchQuery} />
    </header>
  );
}
