import React, { useMemo } from 'react';
import { Movie } from '../../movie';
import { LogoLink } from '../../shared';
import searchIcon from '../../assets/images/search.svg';
import './movie-details.scss';
import { useSearchParams } from 'react-router-dom';

interface Props {
    movie: Movie;
    goToSearch: () => void;
}

export function MovieDetails({ movie, goToSearch }: Props) {
    const [searchParams, setSearchParams] = useSearchParams();

    const { title, genres, release_date, poster_path, vote_average, runtime, overview } = movie;

    const normalizedDuration = useMemo(() => {
        const hours = Math.floor(runtime / 60);
        const min = runtime - hours * 60;

        return `${hours}h ${min}min`;
    }, [ runtime ]);

    const handleClick =(e: any) => {
        e.preventDefault();
        setSearchParams({});
    }

    return (
        <>
            <nav>
                <LogoLink />
                <a className="search-icon" onClick={handleClick}>
                    <img src={searchIcon} alt="" />
                </a>
            </nav>
            <div className="movie-details">
                <img src={poster_path} alt="image" />
                <div>
                    <h1 className="title">
                        {title}
                        <span className="rating">{vote_average}</span>
                    </h1>
                    <p className="genre">{genres.join(', ')}</p>
                    <div className="info">
                        <span className="year">{release_date}</span>
                        <span>{normalizedDuration}</span>
                    </div>
                    <p className="description">{overview}</p>
                </div>
            </div>
        </>
    )
}
