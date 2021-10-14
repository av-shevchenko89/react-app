import React, { useMemo } from 'react';
import { Movie } from '../../movie';
import { LogoLink } from '../../shared';
// @ts-ignore
import searchIcon from '../../assets/images/search.svg';
import './movie-details.scss';

interface Props {
    movie: Movie;
    goToSearch: () => void;
}

export function MovieDetails({ movie, goToSearch }: Props) {
    const { title, genre, year, imageUrl, rating, duration, desc } = movie;

    const normalizedDuration = useMemo(() => {
        const hours = Math.floor(duration / 60);
        const min = duration - hours * 60;

        return `${hours}h ${min}min`;
    }, [ duration ]);

    return (
        <>
            <nav>
                <LogoLink />
                <a className="search-icon" onClick={goToSearch}>
                    <img src={searchIcon} alt="" />
                </a>
            </nav>
            <div className="movie-details">
                <img src={imageUrl} alt="image" />
                <div>
                    <h1 className="title">
                        {title}
                        <span className="rating">{rating}</span>
                    </h1>
                    <p className="genre">{genre}</p>
                    <div className="info">
                        <span className="year">{year}</span>
                        <span>{normalizedDuration}</span>
                    </div>
                    <p className="description">{desc}</p>
                </div>
            </div>
        </>
    )
}
