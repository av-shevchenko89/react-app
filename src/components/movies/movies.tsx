import React from 'react';
import { useSelector } from 'react-redux';
import { MovieActions, MovieList } from '../../containers';
import { Movie } from '../../movie';
import './movies.scss';
import { selectMovies, selectTotal } from '../../store/movies-slice';

interface Props {
    onEdit: (movie: Movie) => void;
    onDelete: (id: string) => void;
    onSelect: (movie: Movie) => void;
}

export function Movies(props: Props) {
    const { onEdit, onDelete, onSelect } = props;

    const movies = useSelector(selectMovies);
    const totalAmount = useSelector(selectTotal);

    return (
        <main>
            <MovieActions />

            <p className="movie-num"><b>{totalAmount}</b> movies found</p>

            <MovieList
                movies={movies}
                onEdit={onEdit}
                onDelete={onDelete}
                onSelect={onSelect}
            />
        </main>
    )
}
