import { configureStore } from '@reduxjs/toolkit';

import moviesReducer, { MoviesState } from './store/movies-slice';
import filtersReducer, { FiltersState } from './store/filters-slice';

export interface AppState {
  movies: MoviesState;
  filters: FiltersState;
}

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filters: filtersReducer,
  },
});
