import React from 'react';
import Nav from './Nav';
import Search from './Search';
import {Title} from '../../Shared';

import './Header.scss';

export function Header() {
    return (
        <header>
            <Nav />
            <Title text="Find your movie" />
            <Search />
        </header>
    )
}
