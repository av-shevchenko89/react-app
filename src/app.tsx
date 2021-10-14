import React from 'react';
import { ModalProvider } from './modal';
import { AppContainer } from './containers';

export function App() {
    return (
        <ModalProvider>
            <AppContainer />
        </ModalProvider>
    )
}
