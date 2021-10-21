import { Movie } from './movie';

export const Genres = [ 'all', 'drama', 'comedy', 'fantasy', 'horror' ];

export const EmptyMovie: Movie = {
    title: '',
    poster_path: '',
    overview: '',
    runtime: 0,
    genres: [],
    release_date: '',
    vote_average: 0
}
