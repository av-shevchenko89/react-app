import { MovieItem } from './movie';

export const genres = [ 'all', 'fiction', 'comedy', 'action', 'horror' ];

// mock for data should be get from API
export const MOVIES: MovieItem[] = [
    {
        id: 'mov-1',
        title: 'Matrix',
        genre: 'fiction',
        imageUrl: 'https://s7.vcdn.biz/static/f/1829003011/image.jpg/pt/r300x423x4',
        year: '1999',
        desc: 'Overview',
        url: 'https://www.google.com.ua/',
        duration: 135,
        rating: 10
    },
    {
        id: 'mov-2',
        title: 'Fast & Furious 9',
        genre: 'action',
        year: '2020',
        imageUrl: 'https://s4.vcdn.biz/static/f/3515823751/image.jpg/pt/r193x272x4',
        desc: 'Overview',
        url: 'https://www.google.com.ua/',
        duration: 127,
        rating: 9
    },
    {
        id: 'mov-3',
        title: 'The Avengers',
        genre: 'fiction',
        year: '2012',
        imageUrl: 'https://s9.vcdn.biz/static/f/1101456531/image.jpg/pt/r193x272x4',
        desc: 'Overview',
        url: 'https://www.google.com.ua/',
        duration: 145,
        rating: 10
    },
    {
        id: 'mov-4',
        title: 'The Boss Baby',
        genre: 'comedy',
        year: '2017',
        imageUrl: 'https://s5.vcdn.biz/static/f/1347661391/image.jpg/pt/r300x423x4',
        desc: 'Overview',
        url: 'https://www.google.com.ua/',
        duration: 95,
        rating: 9
    },
    {
        id: 'mov-5',
        title: 'Hotel Transylvania',
        genre: 'comedy',
        year: '2018',
        imageUrl: 'https://s2.vcdn.biz/static/f/1410451571/image.jpg/pt/r300x423x4',
        desc: 'Overview',
        url: 'https://www.google.com.ua/',
        duration: 105,
        rating: 8
    }
]
