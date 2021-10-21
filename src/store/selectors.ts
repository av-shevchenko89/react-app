import { AppState } from './reducer';

export const selectMovies = (state: AppState) => state.movies.movies;

export const selectTotal = (state: AppState) => state.movies.totalAmount;

export const selectGenre = (state: AppState) => state.filters.genre;

export const selectSortBy = (state: AppState) => state.filters.sortBy;

