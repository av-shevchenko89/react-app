import React from 'react';
import _ from 'lodash';
import MovieList from '../../Containers/MovieList';
import { MovieActions } from '../../Containers';
import { MovieItem } from '../../movie';
import './Movies.scss';

interface Props {
    movies: MovieItem[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

interface State {
    genre: string;
    sortBy: string;
}

export class Movies extends React.Component<Props, State> {
    state: State = {
        genre: 'all',
        sortBy: 'year',
    };

    constructor(props: Props) {
        super(props);

        this.setGenre = this.setGenre.bind(this);
        this.sort = this.sort.bind(this);
    }

    setGenre(genre: string) {
        this.setState({ genre });
    }

    sort(sortBy: string) {
        this.setState({ sortBy });
    }

    collectMovies() {
        const { genre, sortBy } = this.state;
        const movies = this.props.movies.filter(movie => (genre !== 'all') ? movie.genre === genre : true);

        return _.orderBy(movies, sortBy, 'asc');
    }

    render() {
        const { genre, sortBy } = this.state;
        const { onEdit, onDelete } = this.props;
        const sorted = this.collectMovies();

        return (
            <main>
                <MovieActions genre={genre} setGenre={this.setGenre} sortBy={sortBy} sort={this.sort} />

                <p className="movie-num"><b>{sorted.length}</b> movies found</p>

                <MovieList movies={sorted} onEdit={onEdit} onDelete={onDelete} />
            </main>
        )
    }
}
