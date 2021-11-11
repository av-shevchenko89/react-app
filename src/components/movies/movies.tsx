import React from 'react';
import { MovieActions, MovieList } from '../../containers';
import { Movie } from '../../movie';
import './movies.scss';

interface Props {
    movies: Movie[];
    totalAmount: number;
    onEdit: (movie: Movie) => void;
    onDelete: (id: string) => void;
    onSelect: (movie: Movie) => void;
}

export function Movies(props: Props) {
    const { onEdit, onDelete, onSelect, movies, totalAmount } = props;

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
