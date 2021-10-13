import React from 'react';
import { MovieItem } from '../movie';
import MovieMenu from '../Components/Movies/MovieMenu';

interface Props {
    movie: MovieItem;
    onEdit: () => void;
    onDelete: () => void;
}

export default function MovieCard(props: Props) {
    const { movie, onEdit, onDelete } = props;
    const { title, genre, year, imageUrl } = movie;

    return (
        <div className="movie">
            <MovieMenu onEdit={onEdit} onDelete={onDelete} />

            <img src={imageUrl} alt="title" />

            <div>
                <h4 className="title">{title}</h4>
                <h5 className="year">{year}</h5>
            </div>
            <p className="genre">{genre}</p>
        </div>
    )
}
