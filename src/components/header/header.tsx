import React from 'react';
import { Nav } from './nav';
import { Search } from './search';
import { Title } from '../../shared';

import './header.scss';
import { MovieDetails } from './movie-details';
import { Movie } from '../../movie';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearch, selectFilters } from '../../store/filters-slice';

interface Props {
  details: Movie;
  toggleDetails: () => void;
}

export function Header({ details, toggleDetails }: Props) {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const { search } = filters;

  const searchMovie = (value: string) => {
    dispatch(changeSearch(value));
  };

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
      <Search searchVal={search} searchMovie={searchMovie}/>
    </header>
  );
}
