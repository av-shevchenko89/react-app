import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Genres } from '../../constants';
import { changeGenre, selectFilters } from '../../store/filters-slice';

export function GenreToggle() {
    const dispatch = useDispatch();

    const filters = useSelector(selectFilters);
    const { genre: selected } = filters;

    const setGenre = (genre: string) => {
        dispatch(changeGenre(genre));
    }

    return (
        <ul className="genre-list">
            {Genres.map((genre, i) => (
                    <li key={i}
                        className={genre.value === selected ? 'selected' : ''}
                        onClick={() => setGenre(genre.value)}>
                        {genre.label}
                    </li>
                )
            )}
        </ul>
    )
}
