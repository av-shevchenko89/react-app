import React from 'react';

import { Delete, ErrorBoundary, Header, MovieContainer, Movies, Success } from './Components';
import { Footer, PopUp } from './Containers';
import { LogoLink } from './Shared';
import { Movie, MovieItem } from './movie';
import { MOVIES } from './constants';

interface VisualState {
    showPopup: boolean;
    current: MovieItem | null;
    currentId: string;
    deleteId: string;
    isNew: boolean;
    isSuccess: boolean;
}

interface State extends VisualState {
    movies: MovieItem[];
}

const initial: VisualState = {
    showPopup: false,
    current: null,
    currentId: '',
    deleteId: '',
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
        const current = this.state.movies.find(m => m.id === this.state.currentId);
        const ind = this.state.movies.indexOf(current);
        const updated = Object.assign({}, current, data);
        const movies = [ ...this.state.movies ];
        movies.splice(ind, 1, updated);

        this.setState({ ...initial, movies });
    }

    handleDelete() {
        const movies = this.state.movies.filter(m => m.id !== this.state.deleteId);
        this.setState({ ...initial, movies });
    }

    handleClose() {
        this.setState(initial);
    }

    showDelete(id: string) {
        this.setState({ showPopup: true, deleteId: id });
    }

    showEdit(id: string) {
        const current = this.state.movies.find(m => m.id === id);
        this.setState({ showPopup: true, current, currentId: id });
    }

    showNew() {
        this.setState({ showPopup: true, isNew: true });
    }

    render() {
        const { movies, showPopup, current, deleteId, isNew, isSuccess } = this.state;

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

                {showPopup && (
                    <PopUp onClose={this.handleClose}>
                        {deleteId && <Delete onDelete={this.handleDelete} />}
                        {current && <MovieContainer movie={current} onSubmit={this.handleEdit} />}
                        {isNew && <MovieContainer onSubmit={this.handleCreate} />}
                        {isSuccess && <Success />}
                    </PopUp>
                )}
            </>
        )
    }
}

export default App;
