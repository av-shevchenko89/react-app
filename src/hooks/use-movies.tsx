import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Movie } from '../movie';
import { MovieContainer } from '../components';
import { DeleteModal, ModalContext, SuccessModal } from '../modal';
import { fetchMovies } from '../store/movies-slice';

export const useMovies = () => {
    let movieId = '';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies);
    }, []);

    const { openModal, closeModal } = useContext(ModalContext);

    const handleCreate = () => {
        openModal(<MovieContainer onSubmit={handleCreateRes} />)
    }

    const handleCreateRes = (data: Movie) => {
        const newMovie: Movie = {
            ...data,
            id: `${Math.round(Math.random() * 100)}`,
            poster_path: 'https://media.istockphoto.com/vectors/cinema-and-movie-time-vector-id640312764'
        }

        dispatch({ type: 'movies/addMovie', payload: newMovie });
        openModal(<SuccessModal />);
    }

    const handleEdit = (movie: Movie) => {
        movieId = movie.id;
        openModal(<MovieContainer movieItem={movie} onSubmit={handleEditRes} />)
    }

    const handleEditRes = (data: Movie) => {
        dispatch({ type: 'movies/editMovie', payload: { id: movieId, data } });
        closeModal();
    }

    const handleDelete = (id: string) => {
        movieId = id;
        openModal(<DeleteModal onDelete={handleDeleteRes} />)
    };

    const handleDeleteRes = () => {
        dispatch({ type: 'movies/deleteMovie', payload: movieId });
        closeModal();
    }

    return { handleCreate, handleEdit, handleDelete }
}
