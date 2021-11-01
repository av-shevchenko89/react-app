import { PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviesRes } from '../movie';
import axios from 'axios';
import { AppState } from './reducer';

const config = {
    baseURL: 'http://localhost:4000',
}

export interface MoviesState {
    movies: Movie[];
    totalAmount: number;
    newMovie: Movie;
}

const initialState: MoviesState = {
    movies: [],
    totalAmount: 0,
    newMovie: null
};

export const setMovies = (data: MoviesRes) => ({
    type: 'movies/setMovies',
    payload: data
})

export const movieAdded = (movie: Movie) => ({
    type: 'movies/movieAdded',
    payload: movie
})

export const fetchMovies = () => async (dispatch: any, getState: any) => {
    const state: AppState = getState();
    const { genre, ...rest } = state.filters;
    const filter = genre;

    const res: { data: MoviesRes } = await axios.get('/movies', {
            ...config, params: { ...rest, filter }
        }
    );

    dispatch(setMovies(res.data));
}

export const addMovie = (movie: Movie) => async (dispatch: any) => {
    const res: { data: Movie } = await axios.post('/movies', movie, config);

    dispatch(movieAdded(res.data));
    dispatch(fetchMovies());
}

export const editMovie = (movie: Movie) => async (dispatch: any) => {
    await axios.put('/movies', movie, config);

    dispatch(fetchMovies());
}

export const removeMovie = (id: string) => async (dispatch: any) => {
    await axios.delete(`/movies/${id}`, config);

    dispatch(fetchMovies());
}

export function moviesReducer(state = initialState, action: PayloadAction<any>) {
    switch (action.type) {
        case 'movies/setMovies': {
            const { data, totalAmount } = action.payload;
            return { ...state, movies: data, totalAmount }
        }

        case 'movies/movieAdded': {
            return { ...state, newMovie: action.payload }
        }

        default:
            return state
    }
}

export const selectMovies = (state: AppState) => state.movies.movies;

export const selectTotal = (state: AppState) => state.movies.totalAmount;

export const selectNewMovie = (state: AppState) => state.movies.newMovie;
