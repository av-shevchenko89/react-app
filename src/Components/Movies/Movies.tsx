import React from 'react';
import MovieActions from '../../Containers/MovieActions';
import { Movie } from './movie';
import MovieList from './MovieList';

import'./Movies.scss';

// mock for data should be get from API
let movies: Movie[] = [
    {
        id: 'mov-1',
        title: 'Matrix',
        description: 'Action, Fiction',
        imageUrl: 'https://s7.vcdn.biz/static/f/1829003011/image.jpg/pt/r300x423x4',
        year: '1999'
    },
    {
        id: 'mov-2',
        title: 'Fast & Furious 9',
        description: 'Action',
        year: '2020',
        imageUrl: 'https://s4.vcdn.biz/static/f/3515823751/image.jpg/pt/r193x272x4'
    },
    {
        id: 'mov-3',
        title: 'The Avengers',
        description: 'Action',
        year: '2012',
        imageUrl: 'https://s9.vcdn.biz/static/f/1101456531/image.jpg/pt/r193x272x4'
    },
    {
        id: 'mov-4',
        title: 'The Boss Baby',
        description: 'Comedy, Family, Kids',
        year: '2017',
        imageUrl: 'https://s5.vcdn.biz/static/f/1347661391/image.jpg/pt/r300x423x4'
    },
    {
        id: 'mov-5',
        title: 'Hotel Transylvania',
        description: 'Comedy, Family, Kids',
        year: '2018',
        imageUrl: 'https://s2.vcdn.biz/static/f/1410451571/image.jpg/pt/r300x423x4'
    }
]

export default function Movies() {
    return (
        <main>
            <MovieActions />
            <p className="movie-num">
                <b>{movies.length}</b> movies found</p>
            <MovieList movies={movies} />
        </main>
    )
}
