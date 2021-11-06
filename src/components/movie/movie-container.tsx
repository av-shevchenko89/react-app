import React, { useEffect, useState } from 'react';
import { EmptyMovie } from '../../constants';
import { Movie } from '../../movie';
import { MovieForm } from './movie-form';

interface Props {
    movieItem?: Movie;
    onSubmit: (data: Movie) => void;
}

export function MovieContainer(props: Props) {
    const { movieItem, onSubmit } = props;
    const [isNew, setIsNew] = useState(true);
    const [data, setData] = useState(EmptyMovie);

    useEffect(() => {
        if (movieItem) {
            setData(movieItem);
            setIsNew(false);
        }
    }, []);

    return (
        <>
            <h1>{isNew ? 'Add movie' : 'Edit movie'}</h1>
            <MovieForm
                movie={data}
                onSubmit={(movie: Movie) => onSubmit(movie)}
                onReset={() => setData(EmptyMovie)}
            />
        </>
    )
}
