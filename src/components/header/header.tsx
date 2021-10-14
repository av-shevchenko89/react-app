import React from 'react';
import { Nav } from './nav';
import { Search } from './search';
import { Title } from '../../shared';

import './header.scss';

export function Header() {
    return (
        <header>
            <Nav />
            <Title text="Find your movie" />
            <Search />
        </header>
    )
}
