import React from 'react';

import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies';
import Footer from './Containers/Footer';
import LogoLink from './Components/Shared/LogoLink';
import ErrorBoundary from './Components/Error-Boundary/ErrorBoundary';

export default function App() {
    return (
        <>
            <Header />
            <ErrorBoundary>
                <Movies />
            </ErrorBoundary>
            <Footer>
                <LogoLink />
            </Footer>
        </>
    )
}
