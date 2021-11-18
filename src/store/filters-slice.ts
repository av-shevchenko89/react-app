import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Filter } from '../movie';
import { AppState } from '../store';
import { fetchMovies } from './movies-slice';

export interface FiltersState {
  genre: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  search: string;
  searchBy: string;
  limit: number;
}

export const initialState: FiltersState = {
  genre: '',
  sortBy: 'release_date',
  sortOrder: 'desc',
  search: '',
  searchBy: 'title',
  limit: 12,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    genreChanged(state, action) {
      state.genre = action.payload;
    },
    sortingChanged(state, action) {
      const { sortBy, sortOrder } = action.payload;
      state.sortBy = sortBy;
      state.sortOrder = sortOrder;
    },
    searchChanged(state, action) {
      state.search = action.payload;
    },
  },
});

export const { genreChanged, sortingChanged, searchChanged } = filtersSlice.actions;

export default filtersSlice.reducer;

export const selectFilters = (state: AppState) => state.filters;

export const selectGenre = createSelector(selectFilters, (state: FiltersState) => state.genre);

export const selectSorting = createSelector(selectFilters, (state: FiltersState) => ({
  sortBy: state.sortBy,
  sortOrder: state.sortOrder,
}));

export const selectSearch = createSelector(selectFilters, (state: FiltersState) => state.search);

export const changeGenre = (genre: string) => async (dispatch: any) => {
  dispatch(genreChanged(genre));
  dispatch(fetchMovies());
};

export const changeSortBy = (sortBy: Filter) => async (dispatch: any) => {
  dispatch(sortingChanged(sortBy));
  dispatch(fetchMovies());
};

export const changeSearch = (search: string) => async (dispatch: any) => {
  dispatch(searchChanged(search));
  dispatch(fetchMovies());
};
