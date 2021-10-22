import React, { FormEvent } from 'react';
import { Movie } from '../../movie';
import './movie-form.scss';
import { Genres } from '../../constants';
import { Multiselect } from 'multiselect-react-dropdown';

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
        onChange(key, !toNumber ? e.target.value : e.target.valueAsNumber ? e.target.valueAsNumber : 0);
    }

    const onSelect = (options: { value: string; label: string }[]) => {
        onChange('genres', options.map(o => o.value))
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
                    <Multiselect
                        displayValue="label"
                        selectedValues={genres}
                        onSelect={onSelect}
                        options={Genres.slice(1)}
                        placeholder="Select Genre"
                        style={{
                            chips: {
                                background: '#555',
                                textTransform: 'capitalize'
                            },
                            multiselectContainer: {
                                color: '#424242',
                                textTransform: 'capitalize'
                            },
                            searchBox: {
                                height: '50px',
                                background: 'rgba(50, 50, 50, 0.8)',
                                border: 'none',
                                padding: '0 20px',
                                lineHeight: '50px',
                                verticalAlign: 'middle'
                            }
                        }}
                        showCheckbox
                    />
                </div>
                <div className="form-group">
                    <label>RUNTIME</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="minutes"
                        value={runtime}
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
