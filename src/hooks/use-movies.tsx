import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Movie } from '../movie';
import { MovieContainer } from '../components';
import { DeleteModal, ModalContext, SuccessModal } from '../modal';
import { addMovie, editMovie, fetchMovies, removeMovie, selectNewMovie } from '../store/movies-slice';

export const useMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    const { openModal, closeModal } = useContext(ModalContext);
    const newMovie = useSelector(selectNewMovie);

    useEffect(() => {
        if (newMovie) openModal(<SuccessModal />);
    }, [ newMovie ])

    const handleCreate = () => {
        openModal(<MovieContainer onSubmit={handleCreateRes} />)
    }

    const handleCreateRes = (movie: Movie) => {
        dispatch(addMovie(movie));
    }

    const handleEdit = (movie: Movie) => {
        openModal(<MovieContainer movieItem={movie} onSubmit={handleEditRes} />)
    }

    const handleEditRes = (movie: Movie) => {
        dispatch(editMovie(movie));
        closeModal();
    }

    const handleDelete = (id: string) => {
        openModal(<DeleteModal id={id} onDelete={handleDeleteRes} />)
    };

    const handleDeleteRes = (id: string) => {
        dispatch(removeMovie(id));
        closeModal();
    }

    return { handleCreate, handleEdit, handleDelete }
}
