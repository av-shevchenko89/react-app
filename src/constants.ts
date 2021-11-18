import { Movie } from './movie';

export const Genres = [
    { value: 'all', label: 'All' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Action', label: 'Action' },
    { value: 'Horror', label: 'Horror' },
];

export const GenreOptions = [
    'Drama',
    'Comedy',
    'Action',
    'Horror',
    'Adventure',
    'Science Fiction',
    'Thriller',
    'TV Movie',
    'History',
    'Romance',
    'Fantasy',
    'Animation',
    'Family',
    'Mystery'
]

export const EmptyMovie: Movie = {
    title: '',
    poster_path: '',
    overview: '',
    runtime: undefined,
    genres: [],
    release_date: '',
    vote_average: undefined
}
