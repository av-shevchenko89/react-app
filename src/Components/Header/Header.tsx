import React from 'react';
import Title from '../Shared/Title';
import Nav from './Nav';
import Search from './Search';

import './Header.scss';

export default function Header() {
    return (
        <header>
            <Nav />
            <Title text="Find your movie" />
            <Search />
        </header>
    )
}
