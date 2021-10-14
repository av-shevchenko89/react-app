import React, { useMemo, useState } from 'react';
import _ from 'lodash';
import { MovieActions, MovieList } from '../../containers';
import { Movie } from '../../movie';
import './movies.scss';

interface Props {
    movies: Movie[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export function Movies(props: Props) {
    const { movies, onEdit, onDelete } = props;

    const [ genre, setGenre ] = useState('all');
    const [ sortBy, setSortBy ] = useState('year');

    const collectMovies = (movies: Movie[]) => {
        const filteredMovies = movies.filter(movie => (genre !== 'all') ? movie.genre === genre : true);
        return _.sortBy(filteredMovies, sortBy);
    }

    const sortedMovies = useMemo(() => collectMovies(movies), [ movies, genre, sortBy ]);

    return (
        <main>
            <MovieActions genre={genre} setGenre={setGenre} sortBy={sortBy} sort={setSortBy} />

            <p className="movie-num"><b>{sortedMovies.length}</b> movies found</p>

            <MovieList movies={sortedMovies} onEdit={onEdit} onDelete={onDelete} />
        </main>
    )
}
