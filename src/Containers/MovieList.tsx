import React from 'react';
import { MovieItem } from '../movie';
import { MovieCard } from './MovieCard';

interface Props {
    movies: MovieItem[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export function MovieList({ movies, onEdit, onDelete }: Props) {
    return (
        <div className="movie-list">
            {movies.map(movie =>
                <MovieCard key={movie.id}
                           movie={movie}
                           onEdit={() => onEdit(movie.id)}
                           onDelete={() => onDelete(movie.id)} />
            )}
        </div>
    )
}
