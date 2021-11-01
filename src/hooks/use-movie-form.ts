import { Movie } from '../movie';
import { useEffect, useState } from 'react';
import { EmptyMovie } from '../constants';

export const useMovieForm = (movie: Movie) => {
    const [ data, setData ] = useState(EmptyMovie);

    useEffect(() => {
        if (movie) {
            setData(movie);
        }
    }, []);

    const handleChange = (key: string, value: any) => {
        setData({ ...data, [key]: value });
    };

    const handleReset = () => {
        setData(EmptyMovie);
    };

    return {
        handleChange,
        handleReset,
        data
    };
}
