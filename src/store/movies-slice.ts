import { createSlice } from '@reduxjs/toolkit';
import { Movie, MoviesRes } from '../movie';
import axios from 'axios';
import { AppState } from '../store';

const config = {
  baseURL: 'http://localhost:4000',
};

export interface MoviesState {
  movies: Movie[];
  totalAmount: number;
  newMovie: Movie;
}

const initialState: MoviesState = {
  movies: [],
  totalAmount: 0,
  newMovie: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action) {
      const { data, totalAmount } = action.payload;
      state.movies = data;
      state.totalAmount = totalAmount;
    },
    movieAdded(state, action) {
      state.newMovie = action.payload;
    },
  },
});

export const { setMovies, movieAdded } = moviesSlice.actions;

export default moviesSlice.reducer;

export const fetchMovies = () => async (dispatch: any, getState: any) => {
  const state: AppState = getState();
  const { genre, ...rest } = state.filters;
  const filter = genre;

  const res: { data: MoviesRes } = await axios.get('/movies', {
    ...config,
    params: { ...rest, filter },
  });

  dispatch(setMovies(res.data));
};

export const addMovie = (movie: Movie) => async (dispatch: any) => {
  const res: { data: Movie } = await axios.post('/movies', movie, config);

  dispatch(movieAdded(res.data));
  dispatch(fetchMovies());
};

export const editMovie = (movie: Movie) => async (dispatch: any) => {
  await axios.put('/movies', movie, config);

  dispatch(fetchMovies());
};

export const removeMovie = (id: string) => async (dispatch: any) => {
  await axios.delete(`/movies/${id}`, config);

  dispatch(fetchMovies());
};

export const selectMovies = (state: AppState) => state.movies.movies;

export const selectTotal = (state: AppState) => state.movies.totalAmount;

export const selectNewMovie = (state: AppState) => state.movies.newMovie;
