import { Filter } from '../movie';
import { AppState } from './reducer';
import { fetchMovies } from './movies-slice';

export interface FiltersState {
    genre: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
    search: string;
    limit: number;
}

const initialState: FiltersState = {
    genre: '',
    sortBy: 'release_date',
    sortOrder: 'desc',
    search: '',
    limit: 12
}

export const changeGenre = (genre: string) => async (dispatch: any) => {
    dispatch(genreChanged(genre));
    dispatch(fetchMovies());
}

export const changeSortBy = (sortBy: Filter) => async (dispatch: any) => {
    dispatch(sortingChanged(sortBy));
    dispatch(fetchMovies());
}

export const changeSearch = (search: string) => async (dispatch: any) => {
    dispatch(searchChanged(search));
    dispatch(fetchMovies());
}

export const genreChanged = (genre: string) => ({
    type: 'filters/genreChanged',
    payload: genre
})

export const sortingChanged = ({ sortBy, sortOrder }: Filter) => ({
    type: 'filters/sortingChanged',
    payload: { sortBy, sortOrder }
})

export const searchChanged = (search: string) => ({
    type: 'filters/searchChanged',
    payload: search
})

export function filtersReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'filters/genreChanged': {
            return { ...state, genre: action.payload }
        }
        case 'filters/sortingChanged': {
            const { sortBy, sortOrder } = action.payload;
            return { ...state, sortBy, sortOrder }
        }
        case 'filters/searchChanged': {
            return { ...state, search: action.payload }
        }
        default:
            return state
    }
}

export const selectFilters = (state: AppState) => state.filters;
