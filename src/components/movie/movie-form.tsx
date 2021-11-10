import React from 'react';
import { Form, Field } from 'react-final-form';
import { Movie } from '../../movie';
import { GenreSelect } from './genre-select';
import { composeValidators, maxValue, minValue, mustBeNumber, notEmpty, required } from './validators';
import './movie-form.scss';

interface Props {
    movie: Movie;
    onSubmit: (movie: Movie) => void;
    onReset: () => void;
}

const toNumber =  (value: string) => {
     return value ? parseInt(value) : value;
};

export function MovieForm(props: Props) {
    const { movie, onSubmit, onReset } = props;

    const handleReset = (form: any) => {
        onReset();
        form.restart();
    }

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={movie}
            subscription={{ submitting: true, pristine: true }}
            render={({ handleSubmit, form, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <Field name="title" validate={required}>
                            {({ input, meta }) => (
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        {...input}
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field name="release_date">
                            {({ input }) => (
                                <div className="form-group">
                                    <label>RELEASE DATE</label>
                                    <input
                                        {...input}
                                        type="text"
                                        className="form-control"
                                        placeholder="Select date"
                                    />
                                </div>
                            )}
                        </Field>

                        <Field name="poster_path" validate={required}>
                            {({ input, meta }) => (
                                <div className="form-group">
                                    <label>movie url</label>
                                    <input
                                        {...input}
                                        type="text"
                                        className="form-control"
                                        placeholder="http://"
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field
                            name="vote_average"
                            validate={composeValidators(mustBeNumber, minValue(0), maxValue(10))}
                            parse={toNumber}
                        >
                            {({ input, meta }) => (
                                <div className="form-group">
                                    <label>RATING</label>
                                    <input
                                        {...input}
                                        type="text"
                                        className="form-control"
                                        placeholder="7.8"
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field name="genres" validate={notEmpty} multiple={true}>
                            {({ input, meta }) => (
                                <div className="form-group">
                                    <label>Genre</label>
                                    <GenreSelect
                                        genres={input.value}
                                        onChange={input.onChange}
                                    />
                                    {meta.error && (meta.touched || meta.modified) && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field
                            name="runtime"
                            validate={composeValidators(required, mustBeNumber, minValue(0), maxValue(128))}
                            parse={toNumber}
                        >
                            {({ input, meta }) => (
                                <div className="form-group">
                                    <label>RUNTIME</label>
                                    <input
                                        {...input}
                                        type="text"
                                        className="form-control"
                                        placeholder="Minutes"
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>

                    <Field name="overview" validate={required}>
                        {({ input, meta }) => (
                            <div className="form-group">
                                <label>Overview</label>
                                <textarea
                                    {...input}
                                    className="form-control desc"
                                    placeholder="Movie description"
                                />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <div className="form-actions">
                        <button
                            type="button"
                            className="btn reset"
                            onClick={() => handleReset(form)}
                            disabled={submitting}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="btn submit"
                            disabled={submitting}
                        >
                            Submit
                        </button>
                    </div>
                </form>

            )}
        />
    )
}
