import React from 'react';
import LogoLink from '../Shared/LogoLink';
import Btn from '../Shared/Btn';

export default function Nav() {
    return (
        <nav>
            <LogoLink />
            <Btn label="+ ADD MOVIE" />
        </nav>
    )
}
