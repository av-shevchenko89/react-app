import { PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../movie';
import axios from 'axios';
import { AppState } from './reducer';

export interface MoviesState {
    movies: Movie[];
    totalAmount: number;
}

const initialState: MoviesState = {
    movies: [],
    totalAmount: 0
};

export function moviesReducer(state = initialState, action: PayloadAction<any>) {
    switch (action.type) {
        case 'movies/setMovies': {
            const { data, totalAmount } = action.payload;
            return { ...state, movies: data, totalAmount }
        }

        // case 'movies/addMovie': {
        //     return [ ...state, action.payload ]
        // }
        //
        // case 'movies/editMovie': {
        //     const { id, data } = action.payload;
        //     return state.map(movie => (movie.id === id) ? data : movie);
        // }
        //
        // case 'movies/deleteMovie': {
        //     return state.filter(m => m.id !== action.payload);
        // }

        default:
            return state
    }
}

export async function fetchMovies(dispatch: any, getState: any) {
    const state: AppState = getState();

    const { genre, ...rest } = state.filters;
    const params = { ...rest, filter: genre === 'all' ? [] : [ genre ] }

    const res = await axios.get('http://localhost:4000/movies', {params});

    dispatch({ type: 'movies/setMovies', payload: res.data })
}
