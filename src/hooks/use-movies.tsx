import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import { Movie, MoviesRes } from "../movie";
import { MovieContainer } from "../components";
import { DeleteModal, ModalContext, SuccessModal } from "../modal";

const config = {
  baseURL: "http://localhost:4000",
};

export const useMovies = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const [movies, setMovies] = useState([]);
  const [totalAmount, setTotal] = useState(12);

  useEffect(() => {
    fetchMovies();
  }, []);

  const collectParams = () => {
      return {
        genre: '',
        sortBy: 'release_date',
        sortOrder: 'desc',
        search: '',
        limit: 12
      };
    };

  const fetchMovies = async () => {
    const res: { data: MoviesRes } = await axios.get("/movies", {
      ...config,
      params: collectParams(),
    });
    const { data, totalAmount: total } = res.data;

    setMovies(data);
    setTotal(total);
  };

  const handleCreate = () => {
    openModal(<MovieContainer onSubmit={handleCreateRes} />);
  };

  const handleCreateRes = (movie: Movie) => {
    axios.post("/movies", movie, config).then((res) => {
      fetchMovies();
      openModal(<SuccessModal />);
    });
  };

  const handleEdit = (movie: Movie) => {
    openModal(<MovieContainer movieItem={movie} onSubmit={handleEditRes} />);
  };

  const handleEditRes = (movie: Movie) => {
    axios.put("/movies", movie, config).then(() => {
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

  return { handleCreate, handleEdit, handleDelete, movies, totalAmount };
};
