import { Movie } from './movie';

export const Genres = [
    { value: '', label: 'All' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Action', label: 'Action' },
    { value: 'Horror', label: 'Horror' },
];

export const EmptyMovie: Movie = {
    title: '',
    poster_path: '',
    overview: '',
    runtime: 0,
    genres: [],
    release_date: '',
    vote_average: 0
}
