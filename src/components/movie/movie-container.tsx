import React, { useEffect, useState } from 'react';
import { Movie } from '../../movie';
import { MovieForm } from './movie-form';
import { useMovieForm } from '../../hooks';

interface Props {
    movieItem?: Movie;
    onSubmit?: (data: Movie) => void;
}

export function MovieContainer(props: Props) {
    const [ isNew, setIsNew ] = useState(true);
    const { movieItem, onSubmit } = props;

    useEffect(() => {
        if (movieItem) setIsNew(false);
    }, []);

    const { data, handleChange, handleReset } = useMovieForm(movieItem);

    return (
        <>
            <h1>{isNew ? 'Add movie' : 'Edit movie'}</h1>
            <MovieForm
                movie={data}
                onChange={handleChange}
                onSubmit={() => onSubmit(data)}
                onReset={handleReset}
            />
        </>
    )
}
