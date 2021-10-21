import React from 'react';
import { MovieActions, MovieList } from '../../containers';
import { Movie } from '../../movie';
import './movies.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenre, selectMovies, selectSortBy, selectTotal } from '../../store/selectors';
import { fetchMovies } from '../../store/movies-slice';
import { Filter } from './sorter';

interface Props {
    onEdit: (movie: Movie) => void;
    onDelete: (id: string) => void;
    onSelect: (movie: Movie) => void;
}

export function Movies(props: Props) {
    const { onEdit, onDelete, onSelect } = props;

    const movies = useSelector(selectMovies);
    const totalAmount = useSelector(selectTotal);
    const genre = useSelector(selectGenre);
    const sortBy = useSelector(selectSortBy);

    const dispatch = useDispatch();

    const setGenre = (genre: string) => {
        dispatch({ type: 'filters/genreChanged', payload: genre });
        dispatch(fetchMovies);
    };

    const setSortBy = (sortBy: Filter) => {
        dispatch({ type: 'filters/sortingChanged', payload: sortBy });
        dispatch(fetchMovies);
    };

    return (
        <main>
            <MovieActions
                genre={genre}
                setGenre={setGenre}
                sortBy={sortBy}
                sort={setSortBy}
            />

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
