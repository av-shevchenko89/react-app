import React from 'react';

import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies';
import Footer from './Containers/Footer';
import LogoLink from './Components/Shared/LogoLink';

export default function App() {
    return (
        <>
            <Header />
            <Movies />
            <Footer>
                <LogoLink />
            </Footer>
        </>
    )
}
