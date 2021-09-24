import React from 'react';
import { Movie } from './movie';
import MovieCard from './MovieCard';

interface Props {
    movies: Movie[];
}

export default function MovieList({ movies }: Props) {
    return (
        <div className="movie-list">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    )
}
