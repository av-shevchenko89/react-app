import React from 'react';

import { ErrorBoundary, Header, Movies } from './Components';
import { Footer } from './Containers';
import { LogoLink } from './Shared';

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
