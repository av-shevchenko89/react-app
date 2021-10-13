import React, { FormEvent } from 'react';
import { Movie } from '../../movie';
import { genres } from '../../constants';
import './MovieForm.scss';

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

    const handleChange = (e: any, key: string) => {
        onChange(key, e.target.value);
    }

    const { title, genre, url, duration, desc, year, rating } = movie;

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className="form-grid">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Title" value={title}
                           onChange={e => handleChange(e, 'title')} />
                </div>
                <div className="form-group">
                    <label>RELEASE DATE</label>
                    <input type="text" className="form-control" placeholder="Date" value={year}
                           onChange={e => handleChange(e, 'year')} />
                </div>
                <div className="form-group">
                    <label>movie url</label>
                    <input type="text" className="form-control" placeholder="http://" value={url}
                           onChange={e => handleChange(e, 'url')} />
                </div>
                <div className="form-group">
                    <label>RATING</label>
                    <input type="number" className="form-control" value={rating}
                           onChange={e => handleChange(e, 'rating')} />
                </div>
                <div className="form-group">
                    <label>genre</label>
                    <select value={genre} className="form-control" placeholder="Select Genre"
                            onChange={e => handleChange(e, 'genre')}>
                        {genres.filter(g => g != 'all').map(
                            (genre, i) => <option key={i} value={genre}>{genre}</option>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label>RUNTIME</label>
                    <input type="number" className="form-control" value={duration}
                           onChange={e => handleChange(e, 'duration')} />
                </div>
            </div>
            <div className="form-group">
                <label>Overview</label>
                <textarea className="form-control desc" placeholder="Movie description" value={desc}
                          onChange={e => handleChange(e, 'desc')} />
            </div>
            <div className="form-actions">
                <button type="reset" className="btn reset">Reset</button>
                <button type="submit" className="btn submit">Submit</button>
            </div>
        </form>
    )
}
