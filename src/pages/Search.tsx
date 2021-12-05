import React, { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import _ from 'lodash';
import { ErrorBoundary, Header } from '../components';
import { Footer, Movies } from '../containers';
import { LogoLink } from '../shared';
import { useMovieDetails, useMovies } from '../hooks';
import { MoviesFilter } from '../movie';

export const HeaderContext = React.createContext(null);
export const FilterContext = React.createContext(null);

export function SearchPage() {
  const { data, handleCreate, handleEdit, handleDelete, setParams } = useMovies();
  const { details, toggleDetails } = useMovieDetails();

  const navigate = useNavigate();
  const { searchQuery } = useParams<'searchQuery'>();

  useEffect(() => {
    setParams({ genre, sortBy, sortOrder, searchQuery });
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    navigate(`/search/${query}`);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const genre = searchParams.get('genre');
  const sortBy = searchParams.get('sortBy');
  const sortOrder = searchParams.get('sortOrder');
  const movieId = searchParams.get('movie');

  useEffect(() => {
    if (!_.isNull(sortBy) || !_.isNull(genre)) {
      setParams({ genre, sortBy, sortOrder, searchQuery });
    }
  }, [genre, sortBy]);

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
    setSearchParams({ movie: id });
  };

  return (
    <ErrorBoundary>
      <HeaderContext.Provider value={{ handleCreate, handleSearch }}>
        <Header details={details} searchQuery={searchQuery} toggleDetails={toggleDetails} />
      </HeaderContext.Provider>

      <FilterContext.Provider value={{ changeParams }}>
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
