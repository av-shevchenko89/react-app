import React from 'react';
import { ModalProvider } from './modal';
import { AppContainer } from './app-container';

export function App() {
    return (
        <ModalProvider>
            <AppContainer />
        </ModalProvider>
    )
}
