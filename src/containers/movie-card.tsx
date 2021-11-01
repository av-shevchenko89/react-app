import React from 'react';
import { Movie } from '../movie';
import { MovieMenu } from '../components';

interface Props {
    movie: Movie;
    onEdit: () => void;
    onDelete: () => void;
    onSelect: () => void;
}

export function MovieCard(props: Props) {
    const { movie, onEdit, onDelete, onSelect } = props;
    const { title, genres, release_date, poster_path } = movie;

    return (
        <div className="movie" onClick={onSelect}>
            <MovieMenu onEdit={onEdit} onDelete={onDelete} />

            <img src={poster_path} alt="image" />

            <div>
                <h4 className="title">{title}</h4>
                <h5 className="year">{release_date}</h5>
            </div>
            <p className="genre">{genres.join(', ')}</p>
        </div>
    )
}
