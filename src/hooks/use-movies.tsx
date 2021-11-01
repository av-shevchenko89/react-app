import { Movie } from '../movie';
import React, { useContext, useEffect, useState } from 'react';
import { MovieContainer } from '../components';
import { DeleteModal, ModalContext, SuccessModal } from '../modal';
import { MockMovies } from '../constants';

export const useMovies = () => {
    let movieId = '';
    let [ movies, setMovies ] = useState([]);
    const { openModal, closeModal } = useContext(ModalContext);

    useEffect(() => {
        setMovies(MockMovies);
    }, []);

    const handleCreate = () => {
        openModal(<MovieContainer onSubmit={handleCreateRes} />)
    }

    const handleCreateRes = (data: Movie) => {
        const newMovie: Movie = {
            ...data,
            id: `${Math.round(Math.random() * 100)}`,
            imageUrl: 'https://media.istockphoto.com/vectors/cinema-and-movie-time-vector-id640312764'
        }
        setMovies([ ...movies, newMovie ]);
        openModal(<SuccessModal />);
    }

    const handleEdit = (id: string) => {
        const currentMovie = movies.find(m => m.id === id);
        movieId = id;
        openModal(<MovieContainer movieItem={currentMovie} onSubmit={handleEditRes} />)
    }

    const handleEditRes = (data: Movie) => {
        movies = movies.map(movie => (movie.id === movieId) ? data : movie);
        setMovies(movies);

        closeModal();
    }

    const handleDelete = (id: string) => {
        movieId = id;
        openModal(<DeleteModal onDelete={handleDeleteRes} />)
    };

    const handleDeleteRes = () => {
        movies = movies.filter(m => m.id !== movieId);
        setMovies(movies);

        closeModal();
    }

    return { movies, handleCreate, handleEdit, handleDelete }
}
