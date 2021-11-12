import React, { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Movie, MoviesFilter, MoviesRes } from '../movie';
import { MovieContainer } from '../components';
import { DeleteModal, ModalContext, SuccessModal } from '../modal';
import _ from 'lodash';

const config = {
  baseURL: 'http://localhost:4000',
};

export const useMovies = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const [data, setData] = useState({ movies: [], totalAmount: 0 });
  const [params, setParams] = useState({});

  useEffect(() => {
    fetchMovies();
  }, [params]);

  const collectParams = () => {
    // @ts-ignore
    const {genre, sortBy, sortOrder} = params;

    return {
      limit: 12,
      filter: (genre && genre !== 'all') ? genre : undefined,
      sortBy: sortBy || 'release_date',
      sortOrder: sortOrder || 'desc',
    };
  };

  const fetchMovies = async () => {
    const res: { data: MoviesRes } = await axios.get('/movies', {
      ...config,
      params: collectParams(),
    });

    const { data: movies, totalAmount } = res.data;
    setData({ movies, totalAmount });
  };

  const handleCreate = () => {
    openModal(<MovieContainer onSubmit={handleCreateRes} />);
  };

  const handleCreateRes = (movie: Movie) => {
    axios.post('/movies', movie, config).then((res) => {
      fetchMovies();
      openModal(<SuccessModal />);
    });
  };

  const handleEdit = (movie: Movie) => {
    openModal(<MovieContainer movieItem={movie} onSubmit={handleEditRes} />);
  };

  const handleEditRes = (movie: Movie) => {
    axios.put('/movies', movie, config).then(() => {
      fetchMovies();
      closeModal();
    });
  };

  const handleDelete = (id: string) => {
    openModal(<DeleteModal id={id} onDelete={handleDeleteRes} />);
  };

  const handleDeleteRes = (id: string) => {
    axios.delete(`/movies/${id}`, config).then(() => {
      fetchMovies();
      closeModal();
    });
  };

  return { data, handleCreate, handleEdit, handleDelete, setParams };
};
