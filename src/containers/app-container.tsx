import { ErrorBoundary, Header, Movies } from '../components';
import { Footer } from './footer';
import { LogoLink } from '../shared';
import React from 'react';
import { useMovieDetails, useMovies } from '../hooks';

export const CreateContext = React.createContext(() => {
});

export function AppContainer() {
    const { movies, handleCreate, handleEdit, handleDelete } = useMovies();
    const { details, toggleDetails } = useMovieDetails();

    return (
        <>
            <CreateContext.Provider value={handleCreate}>
                <Header details={details} toggleDetails={toggleDetails} />
            </CreateContext.Provider>

            <ErrorBoundary>
                <Movies
                    movies={movies}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onSelect={toggleDetails}
                />
            </ErrorBoundary>

            <Footer>
                <LogoLink />
            </Footer>
        </>
    )
}
