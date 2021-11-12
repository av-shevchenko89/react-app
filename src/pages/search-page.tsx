import React, { useCallback, useEffect, useState } from 'react';
import { ErrorBoundary, Header, Movies } from '../components';
import { Footer } from '../containers';
import { LogoLink } from '../shared';
import { useMovieDetails, useMovies } from '../hooks';
import { useSearchParams } from 'react-router-dom';
import _, { sortBy } from 'lodash';
import { MoviesFilter } from '../movie';

export const CreateContext = React.createContext(() => {});
export const FilterContext = React.createContext(null);

export function SearchPage() {
  const { data, handleCreate, handleEdit, handleDelete, setParams } = useMovies();
  const { details, toggleDetails } = useMovieDetails();

  const [searchParams, setSearchParams] = useSearchParams();

  const genre = searchParams.get('genre');
  const sortBy = searchParams.get('sortBy');
  const sortOrder = searchParams.get('sortOrder');
  const movieId = searchParams.get('movie');

  useEffect(() => {
    if (!_.isNull(genre)) {
      setParams({ genre, sortBy, sortOrder });
    }
  }, [genre]);

  useEffect(() => {
    if (!_.isNull(sortBy)) {
      setParams({ genre, sortBy, sortOrder });
    }
  }, [sortBy]);

  useEffect(() => {
    if (data.movies.length) {
      const movie = _.find(data.movies, (m) => m.id === parseInt(movieId));
      toggleDetails(movie);
    }
  }, [movieId, data.movies]);

  const changeParams = (params: Partial<MoviesFilter>) => {
    setSearchParams(params);
  };

  const handleSelect = (id: string) => {
    setSearchParams({movie: id});
  };

  return (
    <ErrorBoundary>
      <CreateContext.Provider value={handleCreate}>
        <Header details={details} toggleDetails={toggleDetails} />
      </CreateContext.Provider>

      <FilterContext.Provider value={{changeParams}}>
        <Movies
          movies={data.movies}
          totalAmount={data.totalAmount}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSelect={handleSelect}
        />
      </FilterContext.Provider>

      <Footer>
        <LogoLink />
      </Footer>
    </ErrorBoundary>
  );
}
