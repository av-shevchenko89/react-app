import { combineReducers } from 'redux';
import { moviesReducer, MoviesState } from './movies-slice';
import { filtersReducer, FiltersState } from './filters-slice';

export interface AppState {
    movies: MoviesState;
    filters: FiltersState;
}

export const appReducer = combineReducers({
    movies: moviesReducer,
    filters: filtersReducer,
})
