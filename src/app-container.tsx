import React from 'react';
import { ErrorBoundary, Header, Movies } from './components';
import { Footer } from './containers';
import { LogoLink } from './shared';
import { useMovieDetails, useMovies } from './hooks';

export const CreateContext = React.createContext(() => {
});

export function AppContainer() {
    const { handleCreate, handleEdit, handleDelete } = useMovies();
    const { details, toggleDetails } = useMovieDetails();

    return (
        <>
            <CreateContext.Provider value={handleCreate}>
                <Header details={details} toggleDetails={toggleDetails} />
            </CreateContext.Provider>

            <ErrorBoundary>
                <Movies
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