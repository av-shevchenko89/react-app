import { combineReducers } from 'redux';

import { Movie } from '../movie';
import { moviesReducer, MoviesState } from './movies-slice';
import { filtersReducer, FiltersState } from './filters-slice';
import { movieReducer } from './movie-slice';

export interface AppState {
    movies: MoviesState;
    filters: FiltersState;
    movie: Movie;
}

export const appReducer = combineReducers({
    movies: moviesReducer,
    filters: filtersReducer,
    movie: movieReducer
})
