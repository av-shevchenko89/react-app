import React, { useEffect, useState } from 'react';
import { Movie, MovieItem } from '../../movie';
import { MovieForm } from './MovieForm';

interface Props {
    movieItem?: MovieItem;
    onSubmit: (data: Movie) => void;
}

const emptyMovie: Movie = {
    title: '',
    year: '',
    genre: '',
    url: '',
    rating: 0,
    duration: 0,
    desc: '',
}

export function MovieContainer(props: Props) {
    const [ movie, setMovie ] = useState(emptyMovie);
    const [ isNew, setIsNew ] = useState(true);
    const { movieItem, onSubmit } = props;

    useEffect(() => {
        if (movieItem) {
            const { id, imageUrl, ...data } = movieItem;
            setMovie(data);
            setIsNew(false);
        }
    }, []);

    const handleChange = (key: string, value: any) => {
        setMovie({ ...movie, [key]: value });
    };

    const handleReset = () => {
        setMovie(emptyMovie);
    };

    return (
        <>
            <h1>{isNew ? 'Add movie' : 'Edit movie'}</h1>
            <MovieForm
                movie={movie}
                onChange={handleChange}
                onSubmit={() => onSubmit(movie)}
                onReset={handleReset}
            />
        </>
    )
}
