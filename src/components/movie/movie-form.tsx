import React, { FormEvent } from 'react';
import { Movie } from '../../movie';
import { GenreSelect } from './genre-select';
import './movie-form.scss';

interface Props {
    movie: Movie;
    onChange: (key: string, value: any) => void;
    onSubmit: () => void;
    onReset: () => void;
}

export function MovieForm(props: Props) {
    const { movie, onSubmit, onReset, onChange } = props;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit();
    }

    const handleReset = (e: FormEvent) => {
        e.preventDefault();
        onReset();
    }

    const handleChange = (e: any, key: string, toNumber = false) => {
        const value = !toNumber
            ? e.target.value
            : e.target.valueAsNumber || 0;

        onChange(key, value);
    }

    const onSelect = (options: string[]) => {
        onChange('genres', options);
    }

    const { title, genres, poster_path, runtime, overview, release_date, vote_average } = movie;

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className="form-grid">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title" value={title}
                        onChange={e => handleChange(e, 'title')}
                    />
                </div>
                <div className="form-group">
                    <label>RELEASE DATE</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Select date"
                        value={release_date}
                        onChange={e => handleChange(e, 'release_date')}
                    />
                </div>
                <div className="form-group">
                    <label>movie url</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="http://"
                        value={poster_path}
                        onChange={e => handleChange(e, 'poster_path')}
                    />
                </div>
                <div className="form-group">
                    <label>RATING</label>
                    <input
                        type="number"
                        className="form-control"
                        value={vote_average}
                        onChange={e => handleChange(e, 'vote_average', true)}
                    />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <GenreSelect genres={genres} onSelect={onSelect} />
                </div>
                <div className="form-group">
                    <label>RUNTIME</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="minutes"
                        value={runtime || 0}
                        onChange={e => handleChange(e, 'runtime', true)}
                    />
                </div>
            </div>
            <div className="form-group">
                <label>Overview</label>
                <textarea
                    className="form-control desc"
                    placeholder="Movie description"
                    value={overview}
                    onChange={e => handleChange(e, 'overview')}
                />
            </div>
            <div className="form-actions">
                <button type="reset" className="btn reset">Reset</button>
                <button type="submit" className="btn submit">Submit</button>
            </div>
        </form>
    )
}
