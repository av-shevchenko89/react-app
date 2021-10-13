import React from 'react';
import { Movie, MovieItem } from '../../movie';
import {MovieForm} from './MovieForm';

interface Props {
    movie?: MovieItem;
    onSubmit: (data: Movie) => void;
}

interface State {
    movie: Movie;
    isNew: boolean;
}

const emptyMovie: Movie = {
    title: '',
    year: '',
    genre: '',
    url: '',
    rating: 0,
    duration: 0,
    desc: '',
}

export class MovieContainer extends React.Component<Props> {
    state: State = {
        movie: emptyMovie,
        isNew: true
    };

    constructor(props: Props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        if (this.props.movie) {
            const { id, imageUrl, ...data } = this.props.movie;
            this.setState({ movie: data, isNew: false })
        }
    }

    handleChange(key: string, value: any) {
        const movie = { ...this.state.movie, [key]: value };
        this.setState({ movie });
    }

    handleReset() {
        this.setState({ movie: emptyMovie })
    }

    render() {
        return (
            <>
                <h1>{this.state.isNew ? 'Add movie' : 'Edit movie'}</h1>
                <MovieForm
                    movie={this.state.movie}
                    onChange={this.handleChange}
                    onSubmit={() => this.props.onSubmit(this.state.movie)}
                    onReset={this.handleReset}
                />
            </>
        )
    }
}
