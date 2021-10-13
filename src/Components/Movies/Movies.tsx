import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { MovieActions, MovieList } from '../../Containers';
import { MovieItem } from '../../movie';
import './Movies.scss';

interface Props {
    movies: MovieItem[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export function Movies(props: Props) {
    const [ genre, setGenre ] = useState('all');
    const [ sortBy, setSortBy ] = useState('year');
    const [ sortedMovies, setSorted ] = useState([]);

    const { onEdit, onDelete, movies } = props;

    const collectMovies = () => {
        const filteredMovies = movies.filter(movie => (genre !== 'all') ? movie.genre === genre : true);
        return _.sortBy(filteredMovies, sortBy);
    }

    useEffect(() => {
        setSorted(collectMovies());
    }, [ movies, genre, sortBy ]);

    return (
        <main>
            <MovieActions genre={genre} setGenre={setGenre} sortBy={sortBy} sort={setSortBy} />

            <p className="movie-num"><b>{sortedMovies.length}</b> movies found</p>

            <MovieList movies={sortedMovies} onEdit={onEdit} onDelete={onDelete} />
        </main>
    )
}
