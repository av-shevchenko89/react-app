import { Movie } from '../movie';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: Movie = null;

export function movieReducer(state = initialState, action: PayloadAction<Movie>) {
    switch (action.type) {
        case 'movie/setMovie': {
            return {...action.payload}
        }

        default:
            return state
    }
}
