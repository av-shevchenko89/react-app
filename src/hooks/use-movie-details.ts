import { useState } from 'react';
import { Movie } from '../movie';

export const useMovieDetails = () => {
    const [ details, setDetails ] = useState(null);

    const toggleDetails = (movie: Movie = null) => {
        setDetails(movie)
    }

    return { toggleDetails, details };
}
