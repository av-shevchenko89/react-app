import React from 'react';
import { Movie } from './movie';

export default function MovieCard({ movie }: { movie: Movie }) {
    const { title, description, year, imageUrl } = movie;

    return (
        <div className="movie">
            <img src={imageUrl} alt="title" />
            <div>
                <h4 className="title">{title}</h4>
                <h5 className="year">{year}</h5>
            </div>
            <p className="description">{description}</p>
        </div>
    )
}
