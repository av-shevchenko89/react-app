import React from 'react';
import { Movie } from '../movie';
import { MovieCard } from './movie-card';

interface Props {
    movies: Movie[];
    onEdit: (movie: Movie) => void;
    onDelete: (id: string) => void;
    onSelect: (id: string) => void;
}

export function MovieList({ movies, onEdit, onDelete, onSelect }: Props) {
    return (
        <div className="movie-list">
            {movies.map(movie =>
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onEdit={() => onEdit(movie)}
                    onDelete={() => onDelete(movie.id)}
                    onSelect={() => onSelect(movie.id)}
                />
            )}
        </div>
    )
}
