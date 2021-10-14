import { ErrorBoundary, Header, Movies } from '../components';
import { Footer } from './footer';
import { LogoLink } from '../shared';
import React from 'react';
import { useMovies } from '../hooks';

export const CreateContext = React.createContext(() => {
});

export function AppContainer() {
    const { movies, handleCreate, handleEdit, handleDelete } = useMovies();

    return (
        <>
            <CreateContext.Provider value={handleCreate}>
                <Header />
            </CreateContext.Provider>

            <ErrorBoundary>
                <Movies movies={movies} onEdit={handleEdit} onDelete={handleDelete} />
            </ErrorBoundary>

            <Footer>
                <LogoLink />
            </Footer>
        </>
    )
}
