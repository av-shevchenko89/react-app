import React from 'react';
import { Nav } from './nav';
import { Search } from './search';
import { Title } from '../../shared';

import './header.scss';
import { MovieDetails } from './movie-details';
import { Movie } from '../../movie';

interface Props {
  details: Movie;
  toggleDetails: () => void;
}

export function Header({ details, toggleDetails }: Props) {
  if (details) {
    return (
      <header>
        <MovieDetails movie={details} goToSearch={toggleDetails} />
      </header>
    );
  }

  return (
    <header>
      <Nav />
      <Title text="Find your movie" />
      <Search />
    </header>
  );
}
