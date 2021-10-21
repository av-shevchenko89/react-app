import { Movie } from './movie';

export const Genres = [ 'all', 'fiction', 'comedy', 'action', 'horror' ];

export const EmptyMovie: Movie = {
    title: '',
    poster_path: '',
    overview: '',
    runtime: 0,
    genres: []
}
