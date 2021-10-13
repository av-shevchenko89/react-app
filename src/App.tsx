import React from 'react';
import { DeleteModal, ErrorBoundary, Header, MovieContainer, Movies, SuccessModal } from './Components';
import { Footer, PopUp } from './Containers';
import { LogoLink } from './Shared';
import { Movie, MovieItem } from './movie';
import { MOVIES } from './constants';

interface VisualState {
    showPopup: boolean;
    currentMovie: MovieItem | null;
    currentMovieId: string;
    deleteMovieId: string;
    isNew: boolean;
    isSuccess: boolean;
}

interface State extends VisualState {
    movies: MovieItem[];
}

const initial: VisualState = {
    showPopup: false,
    currentMovie: null,
    currentMovieId: '',
    deleteMovieId: '',
    isNew: false,
    isSuccess: false
}

export const CreateContext = React.createContext(() => {
});

class App extends React.Component<any, State> {
    state: State = { ...initial, movies: [] };

    constructor(props: any) {
        super(props);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.showDelete = this.showDelete.bind(this);
        this.showEdit = this.showEdit.bind(this);
        this.showNew = this.showNew.bind(this);
    }

    componentDidMount() {
        // pseudo-fetch data
        this.setState({ movies: MOVIES });
    }

    handleCreate(data: Movie) {
        const newMovie: MovieItem = {
            ...data,
            id: `${Math.round(Math.random() * 100)}`,
            imageUrl: 'https://media.istockphoto.com/vectors/cinema-and-movie-time-vector-id640312764'
        }
        this.setState({ movies: [ ...this.state.movies, newMovie ], isNew: false, isSuccess: true });
    }

    handleEdit(data: Movie) {
        const current = this.state.movies.find(m => m.id === this.state.currentMovieId);
        const ind = this.state.movies.indexOf(current);
        const updated = Object.assign({}, current, data);
        const movies = [ ...this.state.movies ];
        movies.splice(ind, 1, updated);

        this.setState({ ...initial, movies });
    }

    handleDelete() {
        const movies = this.state.movies.filter(m => m.id !== this.state.deleteMovieId);
        this.setState({ ...initial, movies });
    }

    handleClose() {
        this.setState(initial);
    }

    showDelete(id: string) {
        this.setState({ showPopup: true, deleteMovieId: id });
    }

    showEdit(id: string) {
        const currentMovie = this.state.movies.find(m => m.id === id);
        this.setState({ showPopup: true, currentMovie, currentMovieId: id });
    }

    showNew() {
        this.setState({ showPopup: true, isNew: true });
    }

    render() {
        const { movies, showPopup, currentMovie, deleteMovieId, isNew, isSuccess } = this.state;

        return (
            <>
                <CreateContext.Provider value={this.showNew}>
                    <Header />
                </CreateContext.Provider>

                <ErrorBoundary>
                    <Movies movies={movies} onEdit={this.showEdit} onDelete={this.showDelete} />
                </ErrorBoundary>

                <Footer>
                    <LogoLink />
                </Footer>

                <PopUp
                    isOpened={!!(showPopup && deleteMovieId)}
                    onClose={this.handleClose}
                >
                    <DeleteModal onDelete={this.handleDelete} />
                </PopUp>

                <PopUp
                    isOpened={!!(showPopup && currentMovie)}
                    onClose={this.handleClose}
                >
                    <MovieContainer movie={currentMovie} onSubmit={this.handleEdit} />
                </PopUp>

                <PopUp
                    isOpened={showPopup && isNew}
                    onClose={this.handleClose}
                >
                    <MovieContainer onSubmit={this.handleCreate} />
                </PopUp>

                <PopUp
                    isOpened={showPopup && isSuccess}
                    onClose={this.handleClose}
                >
                    <SuccessModal />
                </PopUp>
            </>
        )
    }
}

export default App;
