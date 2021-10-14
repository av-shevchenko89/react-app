import React from 'react';
import { Movie } from '../movie';
import { MovieCard } from './movie-card';

interface Props {
    movies: Movie[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onSelect: (movie: Movie) => void;
}

export function MovieList({ movies, onEdit, onDelete, onSelect }: Props) {
    return (
        <div className="movie-list">
            {movies.map(movie =>
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onEdit={() => onEdit(movie.id)}
                    onDelete={() => onDelete(movie.id)}
                    onSelect={() => onSelect(movie)}
                />
            )}
        </div>
    )
}
